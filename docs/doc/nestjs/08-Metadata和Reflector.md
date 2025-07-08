## Metadata（元数据）
1. 什么是元数据？
- 元数据是在nestjs中是附加在类、方法或属性上的额外信息，通常由装饰器（如 @Roles()、@Public()）存储，供后续逻辑（如 Guards、Interceptors）读取。
- 通俗点理解：元数据就是一种思想，本质就是用来描述数据，或者说是解释数据。
  
2. 元数据的作用：
- 元数据可以用来描述类、方法或属性的一些额外信息，这些信息可以供后续的逻辑（如 Guards、Interceptors）读取，用来做一些判断或者处理。

## Reflector
- Reflector是nestjs中的一个类，它用来读取元数据。
- 我们可以在Guards、Interceptors中使用Reflector来读取元数据，从而做一些判断或者处理。
- 比如：我们可以在Guards中使用Reflector来读取@Roles()装饰器存储的角色信息，从而做权限校验。
- 我们也可以在Interceptors中使用Reflector来读取@Public()装饰器存储的公开信息，从而做公开接口的限制。

## 实际使用
