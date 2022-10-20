<template>
  <section class="contact-preview">
    <RouterLink :to="`/contact/${contact._id}`">
      <img :src="`https://joeschmoe.io/api/v1/${this.contact.name}@ashallendesign.co.uk`" />
      <div class="content-info">
      <h2 class="info">{{ contact.name }}</h2>
      <h2 class="info">{{ contact.phone }}</h2>
    </div>
    </RouterLink>
    <div class="card-actions">
      <button class="btn-primary">
        <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
      </button>
      <button  class="btn-primary"> 
        <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
      </button>
      <button  class="btn-primary" @click="onRemoveContact(contact._id)">X</button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove-contact', contactId)
    }
  }

}
</script>

<style lang="scss">

</style>