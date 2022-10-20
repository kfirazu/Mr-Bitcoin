<template>
  <AppHeader />
  <div class="main-layout main-container">
    <RouterView />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  components: {
    AppHeader,

  }
}
</script>

<style lang="scss">
.main-container {
  background-color: #393e46;
  height: 100vh;
}
</style>
