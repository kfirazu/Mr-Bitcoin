<template>
    <section v-if="contact" class="contact-edit">
      <input v-model="contact.name" type="text">
      <input v-model="contact.email" type="text">
      <input v-model="contact.phone" type="text">
      <button @click="onSave" class="btn-save-contact">Save</button>

    </section>
    <div v-else>Loading....</div>
</template>

<script>
import { contactService } from '@/services/contactService.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async onSave() {
            this.$store.dispatch({ type: 'saveContact', contact: this.contact })
            this.$router.back()
        }
    },
    async created(){
        const _id = this.$route.params._id
        if(_id) {
            this.contact = await contactService.getContactById(_id)
        } else {
            this.contact = await contactService.getEmptyContact()
        }
    }

}
</script>

<style>

</style>