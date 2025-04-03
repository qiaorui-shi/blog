<template>
  <div class="page-home">
    <div class="bg1"></div>
    <div class="bg2"></div>
    <div class="bear"></div>

    <!-- 添加流星雨容器 -->
    <div class="meteor-shower">
      <div class="meteor" v-for="(meteor, index) in meteors" :key="index" :style="meteor.style"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
// 生成流星数据
const meteors = ref<any[]>([]);

function createMeteor() {
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 3 + 1;
  const delay = Math.random() * 5;
  const left = Math.random() * 110;
  const top = Math.random() * 30;

  return {
    style: {
      width: `${size}px`,
      height: `${size * 20}px`,
      left: `${left}%`,
      top: `${top}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`
    }
  };
}

onMounted(() => {
  // 生成20颗流星
  meteors.value = Array.from({ length: 10 }, createMeteor);
});
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
  height: calc(100vh - 64px);
  /* 将容器外多余部分隐藏 */
  overflow: hidden;
}

.bg1 {
  z-index: 99;
  position: absolute;
  bottom: 0;
  width: calc(3840px + 100%);
  height: 336px;
  background: url("/image/bg1.png") repeat-x;
  animation: bg-move 30s linear 0s infinite normal none;
}

.bg2 {
  z-index: 98;
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

.meteor-shower {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.meteor {
  position: absolute;
  background: linear-gradient(to bottom left, transparent, white);
  transform: rotate(45deg);
  animation: meteor-fall linear infinite;
  opacity: 0;
}

@keyframes meteor-fall {
  0% {
    opacity: 1;
    transform: rotate(45deg) translateX(200) translateY(0);
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translateX(0px) translateY(200px);
  }
}
</style>
