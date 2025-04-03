# nest常用指令
## nest new 创建项目
1. 全局下载@nestjs/cli

    ```javascript
    npm install -g @nestjs/cli
    ```

2. 全局更新@nestjs/cli
    ```javascript
    npm update -g @nestjs/cli
    ```

## nest generate 创建模板文件
1. 生成模板代码：
    ```javascript
    nest generate module user  // 会在src/user目录下生成user.module.ts
    nest generate controller user   // 会在src/user目录下生成user.controller.ts 并更新module
    nest generate service user     // 会在src/user目录下生成user.service.ts 并更新module
    nest generate resource module/user --flat //会在src/module/demo下生成文件而不会创建新目录
    ```
    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/01-1.png)

2. 生成完整的模块代码：
    ```javascript
    // 步骤1：nest支持http、websocket、graphql、tpc等,这里直接选择http的rest风格Api
    // 步骤2：会让你选择是否生成CRUD代码
    // 生成的spec文件是测试文件 可以通过nets generate resource xxx -no-spec 来禁止生成测试文件
    nest generate resource user2
    ```
    步骤1:

    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/01-2.png)
    
    步骤2:

    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/01-3.png)

    <p>上述生成的模块会自动在AppModule中引入</p>

    <p>详细模板生成原理可查看/node_modules/@nestjs/schematics</p> 

## nest build 构建项目
1. nest build方式两种方式：
    ```javascript
    nest build --tsc
    // 编译后目录: 只是将nestjs代码转换为javascript代码,并且保留目录结构
    // dist/
    //     ├── main.js
    //     ├── app.module.js
    //     ├── app.controller.js
    //     ├── app.service.js
    //     ├── ...
    nest build --webpack
    // 编译后目录: 使用 Webpack 将项目打包为单个（或少量）JavaScript 文件，进行优化
    // dist/
    //     ├── main.bundle.js  # 只有一个打包后的文件

    ```

## nest-cli.json配置文件
   上述配置都可以在nest-cli.json中配置，具体可查看[nest-cli.json配置](https://json.schemastore.org/nest-cli)

## nest info查看项目信息
    包含项目信息、node版本、npm版本和依赖版本