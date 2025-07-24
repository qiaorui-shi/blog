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
    search: {
      provider: "local"
    },
    nav: [
      { text: "笔记&文档", href: "/favicon.ico", link: "/doc" },
      { text: "工具", link: "/resume" }
      // {
      //   text: "链接",
      //   items: [{ text: "gitee地址", link: "https://gitee.com/obsessed-with-summer" }]
      // }
    ],
    sidebar: {
      "/doc/docker": { base: "/doc/docker", items: sidebar("Docker", "docker") },
      "/doc/mysql": { base: "/doc/mysql", items: sidebar("Mysql", "mysql") },
      "/doc/nestjs": { base: "/doc/nestjs", items: sidebar("Nestjs", "nestjs") },
      "/doc/other": { base: "/doc/other", items: sidebar("其它", "other") },
      "/doc/python": { base: "/doc/python", items: sidebar("Python", "python") },
      "/doc/typeScrupt": { base: "/doc/typeScrupt", items: sidebar("TypeScript", "typeScript") },
      "/doc/vue": { base: "/doc/vue", items: sidebar("Vue", "vue") },
      "/doc/design-mode": { base: "/doc/design-mode", items: sidebar("设计模式", "design-mode") },
      "/doc/DSA": { base: "/doc/DSA", items: sidebar("数据结构与算法", "DSA") }
    },
    footer: {
      message: "大荞的个人博客",
      copyright: "Copyright © 2025"
    }
  }
};
