# Module和Provider互相依赖造成循环依赖
## Module
- 创建模块Aaa和模块Bbb，然后互相imports

    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/09-1.png)

    其中第一个报错是undefined，第二个则是依赖循环问题，nest在创建module时候会递归创建依赖，而它的依赖又依赖于它，因此就出现了依赖循环的问题

- 通过forwardRef的方式解决

    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/09-2.png)


## Provider
- 创建两个Service，互相注入

    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/09-3.png)

- 同样通过forwardRef解决

    ![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/nestjs/09-4.png)