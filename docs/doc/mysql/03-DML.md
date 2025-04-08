
# SQL语句操作分类DML
## 操作表数据
1. 插入表数据
```sql
-- 向表中插入数据
INSERT INTO 表名(字段1,字段2,字段3,...) VALUES(值1,值2,值3,...);
-- 如果要插入所有列，可以省略别名，不插入的可以使用NULL来占位
-- 第一个为自增主键，传入NULL会自增，如果是非自增主键会报错
INSERT INTO 表名 VALUES(NULL，值1,值2,值3,...);
```
2. 删除表数据
```sql
DELETE FROM 表名
[WHERE 条件];
```
3. 更新表数据
```sql
-- 修改表中数据
UPDATE 表名 SET 字段值1=新值1, 字段值2=新值2,... 
[WHERE 条件];
```
4. 查询表数据
```sql
-- ORDER BY 用于指定查询结果的排序方式 ASC升序 DESC降序
-- LIMIT 用于限制查询结果的数量
SELECT 字段1,字段2,字段3,... 
FROM 表名 
[WHERE 条件];
[ORDER BY 排序字段 [ASC | DESC]];
[LIMIT number]
```

## LIKE子句
```sql
-- LIKE 用于模糊查询，%表示任意多个字符，_表示任意单个字符，
-- 例如：'%a'表示以字母a开头
-- 例如：'_a%'匹配第二个字母为a的任何字符串
SELECT 字段1,字段2,字段3,...
FORM 表名
WHERE 字段名 LIKE pattern;
```

## UNION操作符
描述：用于合并两个或多个SELECT语句的结果集，合并后的结果集不包含重复的数据。UNION操作符必须由两个或多个SELECT语句组成。
语法：
```sql
SELECT 字段1,字段2,... FROM 表1
UNION
SELECT 字段1,字段2,... FROM 表2;
```