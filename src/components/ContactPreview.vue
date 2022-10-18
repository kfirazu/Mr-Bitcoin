<template>
  <section class="contact-preview">
    <h2 class="name">{{ contact.name }}</h2>
    <img :src="`https://robohash.org/${contact.name}?set=set3`" />
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
  background-color: #79c2d0;
  border-radius: 7px;
  padding: 15px;
  max-width: 250px;

  .name {
    text-align: center;
  }

  img {
    width: 100%;
  }
}
</style>