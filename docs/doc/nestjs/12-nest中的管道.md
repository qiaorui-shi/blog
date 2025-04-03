# nest 管道

nest 中自定义了九个开箱即用的管道：

- ValidationPipe
- ParseIntPipe
- ParseFloatPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- ParseEnumPipe
- DefaultValuePipe
- ParseFilePipe
  他们从 @nestjs/common 包中导出。

常用的是第一个参数验证管道：`ValidationPipe`，一般用来配合`class-validator`和 `class-transformer`进行数据校验

`class-transformer`是一个用来转换类的库，一般用于将类 class 和普通对象之间进行转换，并且可以自动序列化/反序列化数据。通常用于 Nest DTO 来帮助前端数据和后端实体类进行匹配。
`class-validator`则是一个用来验证类的库，用于 DTO 中的数据规则校验。

可以来实现一下 ValidationPipe 的简单版本：

```typescript
import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class ValidationPipe implements PipeTransform {
  // 要实现PipeTransform接口，必须实现transform方法
  // 1、可以看到transform是异步的，nest支持同步和异步管道，这样做的原因是有些class-validator的校验是可以异步的
  // 2、value是当前处理的方法参数，metadata是当前处理的方法参数的元数据
  async transform(value: any, metadata: ArgumentMetadata) {
    // 3、如果当前参数为原生javascript类型，则绕过直接return，因为它们不能附加验证装饰器
    if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
      return value;
    }

    // 4、通过plainToInstance将普通的javascript参数转换为可验证的类型对象
    const object = plainToInstance(metadata.metatype, value);
    // 5、通过validate方法对转换后的对象进行验证
    const errors = await validate(object);
    if (errors.length > 0) {
      // 6、如果验证失败，则抛出异常
      throw new HttpException("Validation failed", 400);
    }
    return value;
  }

  // toValidate是用来判断当前处理的方法参数的类型是否是dto类
  toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
```

## 自定义管道

## 提供默认值

通常我们会使用 query 传参，并且我们允许该参数不传递，这时候就需要使用`DefaultValuePipe`给一个默认参数，如下代码，通过`DefaultValuePipe`给 flag 一个默认值为 false，并通过 ParseBoolPipe 对参数进行转换：

```typescript
  @Get('find')
  async find(@Query('flag', new DefaultValuePipe(false)) flag: boolean) {
    console.log("🚀 ~ BookController ~ findBookById ~ flag:", flag)
    return this.bookService.findBookById(id);
  }

  @Get('find/:id')
  async find(@Param('flag', new DefaultValuePipe(false)) flag: boolean) {
    console.log("🚀 ~ BookController ~ findBookById ~ flag:", flag)
    return this.bookService.findBookById(id);
  }
```
