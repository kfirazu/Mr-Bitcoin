<template>
  <ul class="contact-list">
    <li v-for="contact in contacts" v-bind:key="contact._id">
      <ContactPreview v-bind:contact="contact" />
      <section class="card-actions">
        <button>
          <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        </button>
        <!-- <button>
          <RouterLink :to="`/contact/edit/${contact._id}`">edit</RouterLink>
        </button> -->
        <button @click="onRemoveContact(contact._id)">X</button>
      </section>
    </li>
  </ul>
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
    onRemoveContact(contactId){
      this.$emit('contact-removed', contactId)
    }
  },
  components: {
    ContactPreview,
  }

}
</script>

<style lang="scss">
.contact-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  background-color: #53a8b6;
  padding: 15px;
  height: 80vh;

  .card-actions {
    margin-block-start: 10px;
    display: flex;
    margin-inline-end: 10px;
    justify-content: space-around;
  }
}
</style>