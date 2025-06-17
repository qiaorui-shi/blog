import fs from "fs";
import path from "path";

// 获取目录下所有.md文件
function getMarkdownFiles(dir) {
  const dirPath = path.resolve(__dirname, "../doc", dir); // 使用 path.resolve 来确保路径正确
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md")) // 获取所有.md文件
    .map((file) => ({
      text: file.split("-")[1]?.replace(".md", "") || file.replace(".md", ""),
      link: `/${file}`
    }));
}

export const sidebar = (text, dir) => [
  {
    text: text,
    items: [...getMarkdownFiles(dir)]
  }
];
