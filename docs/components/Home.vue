<template>
  <div class="page-home">
    <div class="bg1"></div>
    <div class="bg2"></div>
    <div class="bear"></div>
  </div>
</template>
<script setup lang="ts">
// import { useRouter } from "vitepress";

// const router = useRouter();
// const goToPage = (page: string) => {
//   router.go(page);
// };
</script>
<style scoped>
@keyframes bear-run {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -1600px 0;
  }
}

@keyframes bear-box-run {
  from {
    left: -200px;
  }

  to {
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes bg-move {
  from {
    left: 0;
  }
  to {
    left: -3840px;
  }
}

.page-home {
  position: relative;
  width: 100%;
  height: calc(100vh - 177px);
  /* 将容器外多余部分隐藏 */
  overflow: hidden;
}

.bg1 {
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: calc(3840px + 100%);
  height: 336px;
  background: url("/image/bg1.png") repeat-x;
  animation: bg-move 30s linear 0s infinite normal none;
}

.bg2 {
  position: absolute;
  bottom: 0;
  width: calc(3840px + 100%);
  height: 569px;
  background: url("/image/bg2.png") repeat-x;
  animation: bg-move 40s linear 0s infinite normal none;
}

.bear {
  position: absolute;
  z-index: 999;
  bottom: 80px;
  width: 200px;
  height: 100px;
  background: url("/image/bear.png") no-repeat;
  animation: bear-run 1s steps(8) 0s infinite normal none, bear-box-run 3s linear 0s 1 normal forwards;
}
</style>
