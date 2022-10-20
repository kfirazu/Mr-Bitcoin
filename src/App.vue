<template>
  <AppHeader />
  <div class="main-layout main-container">
    <RouterView />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter,

  }
}
</script>

<style lang="scss">
.main-container {
  background-color: #430f58
}
</style>

<!-- .first-color { 
	background: #d5def5; 
}
	
.second-color { 
	background: #8594e4; 
}

.third-color { 
	background: #6643b5; 
}

.fourth-color { 
	background: #430f58; 
} -->
