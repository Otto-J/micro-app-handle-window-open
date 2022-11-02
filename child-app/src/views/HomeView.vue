<template>
  <div class="home">
    <div>这是子应用的 home 页面，点击下面的按钮会 window.open 打开 about 页面</div>
    <button @click="goAbout">点击 window.open</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';


const router=  useRouter()
const goAbout = () => {
  const url = router.resolve({
    path: '/about',
    query: {
      test:1
    }
  })
  // /about?test=1
  console.log('url',url)
  window.open(url.href)
}
</script>
