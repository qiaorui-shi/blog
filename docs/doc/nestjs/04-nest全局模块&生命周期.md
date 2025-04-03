# nest全局模块&生命周期
## nest全局模块

1. 假如有模块A、模块B和模块C，且都依赖模块C，那么模块C就成为全局模块
   - 正常情况下我们在模块C的module中先exports
   - 然后通过模块A和B分别在各自module中进行imports引入
   - 然后再A和B的service中进行注入C，这样的话就太麻烦了，每次要使用都要注入

2. 因此可以通过@Global()修饰符，将模块C变成全局模块
   - 直接在模块C的module中添加@Global()修饰符

    ```typescript
    // c.module.ts
    @Global()
    @Module({
        controllers: [CController],
        providers: [CService],
        exports: [CService],
    })

    // a.service.ts
    @Injectable()
    class AService {
        //直接注入而不需要在在A.module中注入了
        custructor(private readonly cService: CService) {}
    }
    ```
    - 上述就是全局模块，不过全局模块尽量少用，不然注入过多的provider都不知道来源，会降低代码可维护性

## nest生命周期
    nest在启动后会递归的解析Module依赖，扫描其中的provider，controller，并注入它的依赖。在全部解析后会监听端口，处理请求。
    
上述过程中nest会暴漏一些生命周期方法，完整生命周期如下：
1. Nest加载根模块
2. 调用所有的模块的onModuleInit()
3. 初始化完成后，会调用onApplicationBootstrap()
4. 应用运行
5. 调用所有模块的onModuleDestroy()
6. 关闭应用：调用beforeApplicationShutdown()
7. 彻底关闭：调用onApplicationShutdown()

模块内部生命周期触发过程：
1. 先实例化模块中的provider
2. 再实例化模块中的controller
3. 整个模块加载完成
4. 遍历controllers执行controller中的onModuleInit()
5. 再遍历providers执行service中的onModuleInit()

上述生命周期可以做一些初始化的操作和销毁后的操作：例如，销毁后进行内存清理

