# nestjs 中装饰器

## 装饰器实现基于 reflect-metadata 库

- Reflect Metadata 是 ES7 的一个提案，它主要用来在声明的时候添加和读取元数据。
- 实际 es 规范中并没有操作元数据的 Api，reflect-metadata 库对 Reflect 对象进行了 api 扩展,使其拥有操作元数据的能力

## reflect-metadata 扩展的 api

```TypeScript
    // 定义元数据
    Reflect.defineMetadata(metadataKey, metadataValue, target)
    // 获取元数据
    Reflect.getMetadata(metadataKey, target)
    // 获取所有元数据
    Reflect.getMetadataKeys(target)
    // 检查元数据是否存在
    Reflect.hasMetadata(metadataKey, target)
    // 删除元数据
    Reflect.deleteMetadata(metadataKey, target)
```
