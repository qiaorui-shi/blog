# nestjs 全局异常过滤器

## 创建一个全局异常过滤器

在项目中新建一个 `common/filters` 目录，在该目录下新建一个 `http-exception.filter.ts` 文件，代码如下：

```ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // 假如该异常处理在全局和模块中都注册了,那么处理异常是在全局还是模块中处理?
  // 这里registryType 是用来区分是哪个模块的异常
  // 通过构造函数注入参数registryType调试发现是模块中处理
  public registryType: any = undefined;
  constructor(type?: string) {
    console.log("type:", type);
    this.registryType = type;
  }
  // ArgumentsHost 是一个功能强大的使用程序对象 在这里用来获取request和response对象
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log("🚀 ~ this.registryType:", this.registryType);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const validatorMessage = exception.message;

    // 如果捕获到了多个错误，抛出第一个就行 可以用来处理class-validator校验全部字段的问题
    const execptionResponse: any = exception.getResponse();
    let { message, error, statusCode } = execptionResponse;
    if (typeof message === "object") {
      message = message[0];
    }
    response.status(status).json({
      statusCode: statusCode || status,
      message: message || validatorMessage
    });
  }
}
```

我们创建了一个 `HttpExceptionFilter` 类过滤器，并实现了 `ExceptionFilter` 接口，其中使用`@catch` 用来捕获异常.
另外，Nest 还提供了一些继承自核心异常 `HttpException` 的可用异常。

- BadRequestException
- UnauthorizedException
- NotFoundException
- ForbiddenException
- NotAcceptableException
- RequestTimeoutException
- ConflictException
- GoneException
- PayloadTooLargeException
- UnsupportedMediaTypeException
- UnprocessableException
- InternalServerErrorException
- NotImplementedException
- BadGatewayException
- ServiceUnavailableException
- GatewayTimeoutException

## 通过 useGlobalFilters 全局进行异常捕获

`useGlobalFilters` 方法是 nest 提供的一个全局异常过滤器的方法，可以通过它来对全局异常进行捕获，我们在 main.ts 中注册刚刚写的全局异常过滤器，代码如下：

```ts
// http异常过滤器
import { HttpExceptionFilter } from "./common/filter/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter("global"));
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
```

## 通过@UseFilters 处理局部异常

`@UseFilters()` 是 NestJS 提供的 异常过滤器装饰器，用于 局部（单个控制器或方法） 处理异常。它允许你在特定的控制器或方法上使用异常过滤器，而不是进行全局注册。
假设我们创建了一个 user 模块，在对应的 user.controller.ts 中添加如下代码：

```ts
import { Controller, Post, Body, UseFilters } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/filter/http-exception.filter";
import { UserService } from "./user.service";
import { RegisterUserDto } from "./dto/registry-user.dto";

// 通过@controller装饰器，创建一个控制器，路由前缀设置为user
@Controller("user")
// 模块异常过滤器
@UseFilters(new HttpExceptionFilter("user"))
export class UserController {
  constructor(private readonly userService: UserService) {}
}
```

这样，我们在请求 user 模块时就能捕获到异常了。

## Q：全局异常过滤器和局部过滤器谁会捕获到？还是都捕获到？

通过上述代码可以发现，我在 HttpExceptionFilter 类的构造器中添加了一个`registryType`参数,然后在全局注入和局部注入时分别传入了不同的值，并在`catch`方法中打印了该值，运行代码，可以发现是局部过滤器捕获到了异常。

![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/11-1.png)