# 一、Jenkins 修改源 & 权限账号管理

## 1. 安装 Jenkins 更换源

1. 安装完成 Jenkins（**注意不要安装插件，先进入 "Available" 中**）。
2. 进入 `/var/jenkins_home/updates` 目录，执行以下指令将 `default.json` 中的地址替换为国内镜像源：

   ```bash
   sed -i 's/http:\/\/updates.jenkins-ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' default.json
   sed -i 's/http:\/\/www.google.com/https:\/\/www.baidu.com/g' default.json
   ```

3. 在 Jenkins **高级设置**中，修改地址为清华的镜像源：[https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json](https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json)。

## 2. 安装汉化插件（Chinese）

1. 在插件库中搜索并安装 `locale` 插件。
2. 安装后，**重启 Jenkins**。

## 3. 安装权限插件（Role-based Authorization Strategy）

1. 进入 **全局安全配置**，修改授权策略为安装的 `Role-Based Strategy`。
2. 在 **Manage and Assign Roles** 中，添加 `developerRole`，并设置该角色只允许读取权限。
![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/jenkins/jenkins-权限配置.png)
1. 在 **Assign Roles** 中，给用户分配对应的角色。
![alt text](https://sqr-blog.oss-cn-hangzhou.aliyuncs.com/blogImg/jenkins/jenkins-权限配置2.png)

## 4. Jenkins 凭证管理（credentials Binding 插件）

1. 在 **凭据提供者配置** 中添加账号密码或 SSH 类型凭证。
2. 在 **凭据管理** -> **系统** -> **全局凭据** 中，添加账号密码或 SSH 凭证。

---
