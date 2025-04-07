
```sql
-- 向表中插入数据
INSERT INTO 表名(字段1,字段2,字段3,...) VALUES(值1,值2,值3,...);
-- 如果要插入所有列，可以省略别名，不插入的可以使用NULL来占位
INSERT INTO 表名 VALUES(NULL，值1,值2,值3,...);
-- 修改表中数据
UPDATE 表名 SET 字段值1=新值1, 字段值2=新值2,... WHERE 条件;
```