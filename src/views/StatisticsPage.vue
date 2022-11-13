<template>
  <section class="chart-container">
    <market-price-history v-if="bitcoinPrices" :data="priceData" :labels="priceLabels" />
  </section>
</template>

<script>
import MarketPriceHistory from '../components/chart.vue';
import { bitcoinService } from '../services/bitcoinService.js'
export default {
  data() {
    return {
      bitcoinPrices: null
    }
  },
  async created() {
    await this.getMarketHistory()
  },
  methods:{
    async getMarketHistory(){
      const { values } = await bitcoinService.getMarketPriceHistory()
      this.bitcoinPrices = values
    }
  },
  computed: {
    priceLabels(){
      return this.bitcoinPrices.map((value) => new Date(value.x * 1000).toLocaleDateString());
    },
    priceData(){
      return this.bitcoinPrices.map(value => value.y)
    }
  },
  components: { MarketPriceHistory }
}
</script>

<style lang="scss">


</style>