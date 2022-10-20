<template>
    <section class="home-page">
        <main class="home-page-content">
        <h1 v-if="user" class="greet-user">Hello {{ user.name }},</h1>
        <div v-else>Loading...</div>
                <h3 class="user-balance">Your balance is: ₿{{ user.balance }}</h3>
                <h3 class="usd">USD: $ {{getUserBalance}}</h3>
        </main>


    </section>

</template>

<script>
import { bitcoinService } from '../services/bitcoinService'
import { userService } from '../services/userService'
export default {
    data() {
        return {
            user: userService.getUser(),
            rate: null
        }
    },
    methods: {
    },
    async created() {
        this.rate = await bitcoinService.getRate()
       
    },
    computed: {
        getUserBalance(){
            console.log('this.rate:', this.rate)
            console.log('this.user.balance:', this.user.balance)
            return this.user.balance * this.rate
        }
    }

}
</script>

<style lang="scss">


</style>