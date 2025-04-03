---
layout: page
# title: 大荞
# titleTemplate: 大荞的个人空间

# features:
#   - icon: 📝
#     title: 技术文档
#     details: 笔记&技术文档
#     link: /doc
#   - icon: 🎓
#     title: 个人简历
#     details: web-3年
#     link: /resume
#   - icon: 📷
#     title: 相册
#     details: 大荞的个人相册
#     link: /resume
#   - icon: 🔧
#     title: 工具
#     details: 一些工具
#     link: /resume
---

<Home/>

<script setup lang="ts">
import Home from './components/Home.vue'

</script>

<style>
.title {
  font-size: 18px!important;
  font-family: "Comic Sans MS";
}

html {
  overflow-y: scroll; /* 始终显示滚动条 */
  scrollbar-gutter: stable; /* 保持滚动条占位 */
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

/* :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
  .VPNavBar {
    border-bottom: 1px solid var(--vp-c-divider);
  }
  .VPFeatures {
    margin-top: 40px;
  }
} */
</style>
