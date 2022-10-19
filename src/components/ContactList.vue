<template>
  <ul class="contact-list">
    <TransitionGroup name="list">
    <li v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
      <section class="card-actions">
        <button>
          <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        </button>
        <button>
          <RouterLink :to="`/contact/edit/${contact._id}`">edit</RouterLink>
        </button>
        <button @click="onRemoveContact(contact._id)">X</button>
      </section>
    </li>
  </TransitionGroup>
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
      this.$emit('remove-contact', contactId)
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

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>