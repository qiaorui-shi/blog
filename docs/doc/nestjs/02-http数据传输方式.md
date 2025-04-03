# http传输数据

  - url param
  - query param
  - form-urlencoded
  - form-data
  - json

## 地址传参url param

## 查询传参query param

## 表单传参form-urlencoded

## 表单传参form-data

## json传参json

## 静态资源访问
1. main.ts是负责启动Nest的ioc容器的，调用useStaticAssets来支持静态资源访问

    步骤1：
   
    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/02-1.png)

    步骤2：
    根目录创建public，创建index.html重启后可以通过下面地址访问
    ```
    http://localhost:3000/static/index.html
    ```