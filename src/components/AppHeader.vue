<template>
  <header class="app-header full">
    <div class="main-layout header-content">
      <h1 class="logo">Mr-Bitcoin</h1>
      <nav class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/stats">Charts</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { bitcoinService } from '@/services/bitcoinService.js';
import { userService } from '../services/userService.js'
export default {
  data() {
    return {
      user: null,
      currRate: null
    }
  },
  methods: {
  },
  async created() {
    this.currRate = await bitcoinService.getRate()
    this.user = userService.getUser()
    const price = bitcoinService.getMarketPriceHistory()
  }

}
</script>

<style lang="scss">

</style>
<!-- .first-color { 
	background: #5585b5; 
}
	
.second-color { 
	background: #53a8b6; 
}

.third-color { 
	background: #79c2d0; 
}

.fourth-color { 
	background: #bbe4e9; 
} -->