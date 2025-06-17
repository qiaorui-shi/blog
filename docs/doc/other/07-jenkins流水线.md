# 一、Jenkins 流水线（自定义流水线配置 & Publish Over SSH 插件发送文件到目标服务器）

## 1. Publish Over SSH 配置

1. 在 **系统管理** -> **Manage Jenkins** -> **系统配置** 中找到 `Publish over SSH` 的配置项。
2. 设置 **HostName** 为目标服务器的域名，**用户名** 为 `root`，并设置 **目标目录** 为 `/`。

## 2. 自定义流水线配置

1. 自定义流水线配置：

   - 获取代码：从 **Git 仓库地址** 拉取代码。
   - 配置 **Node.js** 环境。
   - 构建完成后，通过 **Publish Over SSH** 插件将构建好的包发送到目标服务器。

2. 构建完成后配置（通过Pbulish Over SSH将打好的包发送到目标服务器）：
![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/jenkins/jenkins-ssh发送文件.png)