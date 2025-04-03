# 自定义装饰器
## 参数装饰器

```TypeScript
    import { createParamDecorator, ExecutionContext } from '@nestjs/common';
    export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
        // data: 用户自定义数据
        // ctx：上下文，可以用来获取请求里面的数据
    })
```