<!-- <template>
  <section class="login">
    <form @submit.stop.prevent="signup">
      <input type="text" name="fullname" placeholder="Full name" required v-model="user.fullname">
      <input type="text" name="username" placeholder="Username" required v-model="user.username">
      <input type="email" name="email" placeholder="Your best email" required v-model="user.email">
      <button>Sign up</button>
    </form>
  </section>
</template>

<script>
import { userService } from '../services/userService'
export default {
  data() {
    return {
      user: {
        fullname: '',
        username: '',
        email: ''

      }
    }
  },
  methods: {
    signup() {
      if (!this.user.username || !this.user.email) return
      this.store.dispatch({ type: 'setLoggedInUser', loggedInUser })
      this.$router.push('/home')

    }

  },
  computed: {
    user() { return this.$store.getters.loggedInUser }
  },
  created() {

  }

}
</script>

<style>

</style> -->