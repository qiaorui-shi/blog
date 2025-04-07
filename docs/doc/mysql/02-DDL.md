# SQL语句操作分类DDL
## 操作数据库
1. 查询所有数据库
```sql
SHOW DATABASE;
``` 
2. 查询当前数据库
```sql
SELECT DATABASE();
```
3. 创建数据库
```sql
-- IF NOT EXISTS 表示如果数据库不存在则创建
CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];
```
NAVICAT操作中对应：
![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/mysql/01-1.png)
4. 删除数据库
```sql
-- IF EXISTS 表示如果数据库存在则删除
DOROP DATABASE [IF EXISTS] 数据库名;
```
5. 切换数据库
```sql
USE 数据库名;
```

## 操作表结构
1. 查询当前数据库中的所有表
```sql
SHOW TABLES;
```
2. 查询表结构
```sql
DESC 表名;
```
3. 查询指定表的建表语句
```sql
SHOW CREATE TABLE 表名;
```
4. 创建表
```sql
CREATE TABLE 表名(
    字段名1 字段类型1[COMMENT 字段1注释],
    字段名2 字段类型2[COMMENT 字段2注释],
    字段名3 字段类型3[COMMENT 字段3注释]
)[COMMENT 表注释];
```
5. 修改表
```sql
-- 添加列（添加字段）
ALTER TABLE 表名 ADD COLUMN 字段名 [COMMENT 字段注释];
-- 修改列（修改字段）
ALTER TABLE 表明 CHANGE COLUMN 旧字段名 新字段名 [COMMENT 字段注释];
-- 修改字段类型
ALTER TABLE 表名 MODIFY COLUMN 字段名 新字段类型 [COMMENT 字段注释];
```
6. 删除表
```sql
-- 删除表,如果表不存在会报错
DROP TABLE 表名;
-- 删除表,如果表不存在不会报错
DROP TABLE [IF EXISTS] 表名;
```
7. 清空表
```sql
TRUNCATE TABLE 表名;
```
