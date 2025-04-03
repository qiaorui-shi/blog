# Nginx 安装与配置指南

## 一、下载安装包

打开 Nginx 官网：[http://nginx.org/en/download.html](http://nginx.org/en/download.html)

- 可以通过本地下载，然后通过 `xftp` 传到远程服务器，一般放在 `/usr/local` 下。
- 或者直接通过 `wget` 下载到服务器中，版本自己选择：

```bash
# 下载安装包 nginx-1.18.0
wget -c http://nginx.org/download/nginx-1.18.0.tar.gz
```

## 二、解压安装包

```bash
# 解压
tar -zxvf nginx-1.18.0.tar.gz
```

## 三、安装依赖

```bash
yum install -y gcc-c++ zlib zlib-devel openssl openssl-devel pcre pcre-devel
```

## 四、进入 Nginx 目录并执行配置脚本

```bash
cd /usr/local/nginx-1.18.0
./configure
```

## 五、编译安装

```bash
make && make install
```

## 六、启动 Nginx

### 1. 检查端口是否放行

```bash
firewall-cmd --list-all
```

### 2. 放行端口 80 并重载防火墙

```bash
firewall-cmd --add-port=80/tcp --permanent
firewall-cmd --reload
```

### 3. 设置 Nginx 开机自启动

```bash
vim /etc/rc.local
```

在文本底部添加：

```bash
/usr/local/nginx/sbin/nginx
```

### 4. 启动 Nginx

```bash
/usr/local/nginx/sbin/nginx
```

### 5. 重载、停止或退出 Nginx

```bash
# 重载
/usr/local/nginx/sbin/nginx -s reload

# 停止
/usr/local/nginx/sbin/nginx -s stop

# 退出
/usr/local/nginx/sbin/nginx -s quit
```

## 七、配置

相关配置可以在以下路径修改：

```bash
/usr/local/nginx/conf/nginx.conf
```