---
# 草稿
draft: false
category: database
tags:
  - Introduction
date: 2020-02-20
title: mysql
# 固定标题
vssue-title: mysql
---
## 创建数据库
```sql
-- {必填} [可选]
CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name [DEFAULT] CHARACTER SET [=] charset_name;

-- 查看创建的数据库
SHOW CREATE DATABASE t1;
```

## 查看当前服务器下数据库列表
```sql
SHOW {DATABASE | SCHEMA} [LIKE 'pattern' | WHERE expr];
```

## 查看错误信息
```sql
SHOW WARNINGS;
```

## 修改数据库
```sql
ALTER {DATABASE | SCHEMA} [db_name] [DEFAULT] CHARACTER SET [=] charset_name;
```

## 删除数据库
```sql
DROP {DATABASE | SCHEMA} [IF EXISTS] db_name;
```

# 数据类型

## 整型
- TINYINT
- SMALLINT
- MEDIUMINT
- INT
- BIGINT

## 浮点型
- FLOAT
- DOUBLE

# 日期时间型
- YEAR
- TIME
- DATE
- DATETIME
- TIMESTAMP

## 字符型
- CHAR
- VARCHAR
- TINYTEXT
- TEXT
- MEDIUMTEXT
- LONGTEXT
- ENUM
- SET

# 使用数据库
## 打开数据库
```sql
USE database_name;
```

## 创建数据表
```sql
CREATE TABLE [IF NOT EXISTS] table_name (
  column_name data_type,...
);
```

## 查看数据表
```sql
SHOW TABLES [FROM db_name] [LIKE `pattern` | WHERE expr];

-- 查看 mysql 下所有的表
SHOW TABLES FROM mysql;
```

## 查看数据表结构
```sql
SHOW COLUMNS FROM table_name;
```

## 插入记录 INSERT
```sql
-- 如果不使用列名称去插入数据,使用 VALUES 就需要提供所有字段数据
INSERT [INTO] table_name [(col_name,...)] VALUES(val,...);

INSERT tb1 (col_name1, col_name2) VALUES(`11`, 123);
```

## 查看记录 SELECT
```sql
SELECT expr,... FROM table_name;
```

## 数据表字段属性
```sql
CREATE TABLE tb (
  id INT(20) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE KEY,
  age TINYINT UNSIGNED,
  sex ENUM('1', '2', '2') DEFAULT '3',
  province_id SMALLINT(5),
  FOREIGN KEY (province_id) REFERENCES provinces (id)
);
```

### 空值
- `NULL`,字段值可以为空
### 非空
- `NOT NULL`,字段值禁止为空

### 自动编号
- 自动编号,且必须与主键组合使用
- 默认情况下,起始值为1,每次的增量为1

## 主键
- 主键约束
- 每张数据表只能存在一个主键
- 主键保证记录的唯一性
- 主键自动为 `NOT NULL`
- 自增需要和主键配合使用,但主键并不必须自增

## 约束
1. 约束保证数据的完整性和一致性
2. 约束分为表级约束和列级约束
3. 约束类型包括:
   1. NOT NULL (非空约束)
   2. PRIMARY KEY (主键约束)
   3. UNIQUE KEY (唯一约束)
   4. DEFAULT (默认约束)
   5. FOREIGN KEY (外键约束)


### UNIQUE KEY
- 唯一约束
- 唯一约束可以保证记录的唯一性
- 唯一约束的字段可以为空值(NULL)
- 没长数据表可以存在多个唯一约束

### 默认约束 DEFAULT
- 默认值
- 当插入记录时,如果没有明确为字段赋值,则自动赋予默认值.

### 外键约束 FOREIGN KEY
- 保持数据一致性,完整性
- 实现一对一或一对多关系

要求:
1. 父表和字表必须使用相同的存储引擎,并且禁止使用临时表
2. 数据表的存储引擎只能为 InnoDB
3. 外键列和参照列必须具有相似的数据类型.其中数字的长度或是否有符号位必须相同;而字符的长度则可以不同
4. 外键列和参照列必须创建索引.如果外键列不存在索引的话, mysql 将自动创建索引

参照操作
1. CASCADE: 从父表删除或更新且自动删除或更新字表中匹配的行
2. SET NULL: 从父表删除或更新行,并设置字表中的外键列
3. RESTRICT: 拒绝对父表的删除或更新操作
4. NO ACTION: 标准 SQL 的关键字,在 mysql 中与 RESTRICT 相同

### 表级约束与列级约束
- 对一个数据列建立的约束,称为列级约束
- 对多个数据列建立的约束,称为表级约束
- 列级约束既可以在列定义时声明,也可以在列定义后声明
- 表级约束只能在列定义后声明

## 修改数据表
### 添加单列
```sql
ALTER TABLE table_name ADD [COLUMN] col_name column_definition [FITST|AFTER col_name];
```

### 删除列
```sql
ALTER TABLE table_name DROP [COLUMN] col_name;
```

### 添加主键约束
```sql
ALTER TABLE table_name ADD [CONSTRAINT [symbol]] PRIMARY KEY [index_type] (index_col_name,...);
```

### 添加唯一约束
```sql
ALTER TABLE table_name ADD [CONSTRAINT [symbol]] UNIQUE [index_type] (index_col_name,...);
```

### 添加外检约束
```sql
ALTER TABLE table_name ADD [CONSTRAINT [symbol]] FOREIGN KEY [index_name](index_col_name) reference_definition;
```

### 添加/删除默认约束
```sql
ALTER TABLE table_name ALTER [COLUMN] column_name {SET DEFAULT literal | DROP DEFAULT};
```

### 删除主键约束
```sql
ALTER TABLE table_name DROP PRIMARY KEY;
```

### 删除唯一约束
```sql
ALTER TABLE table_name DROP {INDEX | KEY} index_name;
```

### 删除外检约束
```sql
ALTER TABLE table_name DROP FOREIGN KEY fk_symbol;
```

### 修改列定义
```sql
ALTER TABLE table_name MODIFY [COLUMN] column_name column_definition [FIRST | AFTER colum_name];
```

### 修改列名称
```sql
ALTER TABLE table_name CHANGE [COLUMN] old_col_name new_col_name column_definition [FIRST | AFTER col_name];
```

### 数据表更名
```sql
-- 方法1
ALTER TABLE table_name RENAME [TO | AS] new_table_name;
-- 方法2
RENAME TABLE table_name TO new_table_name [, table_name2 TO new_table_name2]...;
```

### INSERT
为默认的自增`key`赋值可以使用`null,default`;

可以给有默认值的列使用`default`
```sql
-- 可以同时插入多条数据,用逗号隔开
INSERT [INTO] table_name [(col_name,...)] {VALUES | VALUE} ({expr | DEFAULT},...),(...),...;

-- 与上一种方式的区别在于,此方法可以使用子查询(subQuery)
-- 只能插入一条记录
INSERT [INTO] table_name SET col_name={expr | DEFUALT},...;

-- 把查询的结果插入到指定数据表
INSERT [INTO] table_name [(col_name,...)] SELECT ...;
```

### UPDATE

```sql
UPDATE [LOW_PRIORIRY] [IGNORE] table_reference SET col_name1={expr1 | DEFAULT} [, col_name2={expr2 | DEFAULT}] ... [WHERE where_condition];
```

### DELETE
```sql
DELETE FROM table_name [WHERE where_condition];
```

### SELECT
1. 每一个表达式表示想要的一列,必须有至少一个
2. 多个列之间用英文逗号分隔
3. 星号(*)表示所有列. table_name.* 可以表示命名表的所有列
4. 查询表达式可以使用 [AS] alias_name 为其赋予别名
5. 别用可用于 GROUP BY, ORDER BY 或 HAVING 子句

```sql
SELECT select_expr [, select_expr ...]
[
  FROM table_references
  [WHERER where_condition]
  [GROUP BY {col_name | position} [ASC | DESC], ...]
  [HAVING where_condition]
  [ORDER BY {col_name | expr | position} [ASC | DESC], ...]
  [LIMIT {[offset,] row_count | row_count OFFSET offset}]
];
```

### WHERE
条件表达式
- 对记录进行过滤,如果没有指定 WHERE 子句,则显示所有记录.
- 在 WHERE 表达式中,可以使用 mysql 支持的函数或运算符

### GROUP BY
查询结果分组
```sql
[GROUP BY {col_name | position} [ASC | DESC],...]
```

### ORDER BY
对返回的结果进行排序
```sql
[ORDER BY {col_name | expr | position} [ASC | DESC], ...]
```

### LIMIT
限制查询结果返回的数据
```sql
[LIMIT {[offset,] row_count | row_count OFFSET offset}]
```

## 子查询 连接

### 子查询
- 子查询指嵌套在查询内部,且必须始终出现在圆括号内
- 子查询可以包含多个关键字或条件,
  - 如 DISTINCT, GROUP BY, ORDER BY, LIMIT,函数等
- 子查询的外层查询可以是: SELECT, INSERT, UPDATE, SET 或 DO

#### 使用比较运算符的子查询
##### 使用比较运算符的子查询

=、>、<、>=、<=、<>、!=、<=>

语法结构

operand comparision_operator [ANY| SOME | ALL] subquery

##### 用 ANY、SOME 或 ALL 修饰的比较运算符

##### 使用 [NOT] IN 的子查询
##### 使用 [NOT] EXISTS 的子查询

### 多表更新
```sql
UPDATE table_reforences SET col_name1 = {expr1 | DEFAULT} [, col_name2={expr2 | DEFAULT}] ... [WHERE wherr_condition];
```

### 连接
```sql
table_reference
{[INNER | CROSS] JOIN | {LEFT | RIGHT} [OUTER] JOIN}
table_reference
ON conditional_expr;
```

#### 连接类型
```sql
-- 内连接
INNER JOIN
-- 在 mysql 中, JOIN, CROSS JOIN 和 INNER JOIN 是等价的
-- 左外连接
LEFT [OUTER] JOIN
-- 右外连接
RIGHT [OUTER] JOIN
```

##### 内连接
显示左表及右表符合连接条件的记录

##### 左外连接
显示左表的全部记录及右表符合连接条件的记录

##### 右外连接
显示右表的全部记录及左表符合连接条件的记录

##### 自身连接
同一个数据表对其自身进行连接

## 运算符及函数

### 字符函数
| 函数名称 | 描述|
|-------|:-----|
|CONCAT()|字符连接|
|CONCAT_WS()|使用指定的分隔符进行字符连接|
|FORMAT()|数字格式化|
|LOWER()|转换成小写字母|
|UPPER()|转换成大写字符|
|LEFT()|获取左侧字符|
|RIGHT()|获取右侧字符|
|LENGTH()|获取字符串长度|
|LTRIM()|删除前导空格|
|RTRIM()|删除后续空格|
|TRIM()|删除前后空格/字符|
|SUBSTRING()|字符串截取|
|[NOT] LIKE|匹配模式|
|REPLACE()|字符串替换|

### 数值运算符与函数
|名称|描述|
|----|:----|
|CEIL()|进一取整|
|DIV|整数除法|
|FLOOR()|舍一取整|
|MOD|取余数(取模)|
|POWER()|幂运算|
|ROUND()|四舍五入|
|TRUNCATE()|数字截取|

### 比较运算符与函数
|名称|描述|
|-----|:----|
|[NOT] BETWEEN...AND...|[不]在范围之内|
|[NOT] IN()|[不]在列出值范围内|
|IS [NOT] NULL|[不]为空|

### 日期时间函数
|名称|描述|
|----|:----|
|NOW()|当前日期和时间|
|CURDATE()|当前日期|
|CURTIME()|当前时间|
|DATE_ADD()|日期变化|
|DATEDIFF()|日期差值|
|DATE_FORMAT()|日期格式化|

### 信息函数
|名称|描述|
|-----|:----|
|CONNECTION_ID()|连接ID|
|DATEBASE()|当前数据库|
|LAST_INSERT_ID()|最后插入记录的ID号|
|USER()|当前用户|
|VERSION()|版本信息|

### 聚合函数
|名称|描述|
|----|:----|
|AVG()|平均值|
|COUNT()|计数|
|MAX()|最大值|
|MIN()|最小值|
|SUM()|求和|

### 加密函数
|名称|描述|
|----|:----|
|MD5()|信息摘要算法|
|PASSWORD()|密码算法|

## 自定义函数
- 用户自定义函数(user-defined function,UDF)是一种对 mysql 扩展的途径,其用法与内置函数相同
- 自定义函数的两个必要条件
  - 参数
  - 返回值
- 函数可以返回任意类型的值,同样可以接收这些类型的参数

创建自定义函数
```sql
CREATE FUNCTION function_name RETURNS {STRING | INTERGER | REAL | DECIMAL} routine_body;
```
函数体
1. 函数体由合法的 sql语句构成
2. 函数体可以是简单的 SELECT 或 INSERT 语句
3. 函数体如果为符合结构贼使用 BEGIN...END 语句
4. 符合结构可以包含声明,循环,控制结构

## 存储过程
优点
1. 增强 sql 语句的功能和灵活性
2. 实现加快的执行速度
3. 减少网络流量

## 存储引擎
1. MyISAM
2. InnoDB
3. Memory
4. CSV
5. Archive

- 并发控制
  - 当多个连接对记录进行修改时保证数据的一致性和完整性
- 锁
  - 共享锁(读锁): 在同一时间段内,多个用户可以读取同一个资源,读取过程中数据不会发生任何变化
  - 排它锁(写锁): 在任何时候只能有一个用户写入资源,当进行写锁时会阻塞其他的读锁或者写锁操作
- 锁颗粒
  - 表锁,是一种开销最小的锁策略
  - 行锁,是一种开销最大的锁策略

- 事务
  - 事务用于保证数据库的完整性
- 事务的特性
  - 原子性(Atomicity)
  - 一致性(Consistency)
  - 隔离性(Isolation)
  - 持久性(Durability)

- 外键
  - 是保证数据一致性的策略

- 索引
  - 是对数据表中一列或多列的值进行排序的一种结构

各种存储引擎的特点
|特点|MyISAM|InnoDB|Memory|Archive|
|----|----|----|----|----|
|存储限制|256TB|64TB|有|无|
|事务安全|-|支持|-|-|
|支持索引|支持|支持|支持|-|
|锁颗粒|表锁|行锁|表锁|行锁|
|数据压缩|支持|-|-|支持|
|支持外键|-|支持|-|-|
