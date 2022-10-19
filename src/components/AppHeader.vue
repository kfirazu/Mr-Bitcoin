<template>
  <header class="app-header full">
    <h1 class="logo">Mr-Bitcoin</h1>
    <nav class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/stats">Charts</RouterLink>
    </nav>
    <h3 v-if="user" class="user-name">{{ user.name }}</h3>
    <div v-else>Loading...</div>
    <h3 class="rate">BTC Current rate: {{ currRate }} USD</h3>
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
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  height: 8vh;
  background-color: #bbe4e9;

  .user-name {
    font-size: 20px;
    // line-height: 28px;
    color: #2c3d4f;

  }

  a {
    margin-inline-start: 10px;
    font-size: 20px;
    // line-height: 28px;
    color: #2c3d4f;
  }

}
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