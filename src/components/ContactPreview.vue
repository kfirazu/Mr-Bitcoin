<template>
  <section class="contact-preview">
    <h2 class="name">{{ contact.name }}</h2>
    <!-- <h3 class="email">{{ contact.email }}</h3> -->
    <h3 class="email">{{ contact.phone }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="scss">
.contact-preview {
  
}

</style>