<template>
  <ul class="contact-list">
    <li v-for="contact in contacts" v-bind:key="contact._id">
      <ContactPreview v-bind:contact="contact" />
    </li>
  </ul>
  <div>hello from contact list</div>
</template>

<script>
import ContactPreview from '../components/ContactPreview.vue'
export default {
  data() {
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    }
  },
  components: {
    ContactPreview,
  }

}
</script>

<style lang="scss">
.contact-list {
  
}
</style>