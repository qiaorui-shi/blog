# SQL语句操作分类DQL
1. 基本查询
```sql
SELECT 字段1,字段2,字段3,... 
FROM 表名 
```

2. 条件查询
```sql
SELECT 字段1,字段2,字段3,...
FROM 表名
WHERE 条件;
```

3. 排序查询
```sql
SELECT 字段1,字段2,字段3,...
FROM 表名
ORDER BY 字段1,字段2,... ASC|DESC;
```

4. 分组查询
```sql
SELECT 字段1,字段2,字段3,...
FROM 表名
GROUP BY 字段1,字段2,...
```

5. 过滤分组
```sql
-- 使用 HAVING 子句
SELECT 列名, 聚合函数(列名) FROM 表名 GROUP BY 列名 HAVING 条件;
-- 示例：统计用户数量大于 100 的城市
-- 按照city对users表数据分组，COUNT(*)统计每组数量既用户数，最后使用HAVING子句过滤用户数大于100的城市
-- 注意：HAVING子句只能用于分组查询，不能用于普通查询
SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 100;
```

6. 分页
```sql
SELECT * FORM 表名 LIMIT 数量 OFFSET 偏移量;
-- 示例：查询第2页的数据，每页显示10条
SELECT * FORM 表名 LIMIT 10 OFFSET 10
```

7. 连接查询
- 内连接
    ```sql
    SELECT 字段1,字段2,字段3,...
    ```

- 左连接
    ```sql

    ```
    
- 右连接
    ```sql

    ```

1. 子查询

2.  联合查询

3.  去重

4.  聚合查询

5.  模糊查询

<!-- SELECT既属于DML又属于DQL，因为它既涉及数据库操作，又涉及数据查询 -->
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