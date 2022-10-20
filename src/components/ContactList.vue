<template>
  <section class="contact-list-container">
    <ul class="contact-list">
      <TransitionGroup name="list">
        <li v-for="contact in contacts" :key="contact._id">
          <ContactPreview :contact="contact"  v-on:remove-contact="onRemoveContact" />
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>

<script>
import ContactPreview from '../components/ContactPreview.vue'
export default {
  data() {
    return {}
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    }
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove-contact', contactId)
    }
  },
  components: {
    ContactPreview,
  }

}
</script>

<style lang="scss">

</style>