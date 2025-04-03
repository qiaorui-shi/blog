// doc sideBar
import { sidebar } from "./sideBar";
export default {
  // 站点级选项
  title: "4Zero4 Not Found",
  description: "SQR 文档",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // 基路径
  base: "/",
  themeConfig: {
    // 主题级选项
    socialLinks: [{ icon: "github", link: "https://github.com/qiaorui-shi" }],
    nav: [
      { text: "笔记&文档", href: "/favicon.ico", link: "/doc" },
      { text: "工具", link: "/resume" },
      // {
      //   text: "链接",
      //   items: [{ text: "gitee地址", link: "https://gitee.com/obsessed-with-summer" }]
      // }
    ],
    sidebar: {
      "/doc/docker": { base: "/doc/docker", items: sidebar("Docker", "docker") },
      "/doc/electron": { base: "/doc/electron", items: sidebar("Electron", "electron") },
      "/doc/hybird": { base: "/doc/hybird", items: sidebar("Hybird", "hybird") },
      "/doc/jenkins": { base: "/doc/jenkins", items: sidebar("Jenkins", "jenkins") },
      "/doc/nestjs": { base: "/doc/nestjs", items: sidebar("Nestjs", "nestjs") },
      "/doc/nginx": { base: "/doc/nginx", items: sidebar("Nginx", "nginx") },
      "/doc/other": { base: "/doc/other", items: sidebar("其它", "other") },
      "/doc/vue": { base: "/doc/vue", items: sidebar("Vue", "vue") }
    },
    footer: {
      message: "大荞的个人博客",
      copyright: "Copyright © 2025"
    }
  }
};
