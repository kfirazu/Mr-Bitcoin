<template>
    <section v-if="contact" class="contact-edit">
        <input v-model="contact.name" placeholder="Contact name" type="text">
        <input v-model="contact.email" placeholder="Contact email" type="text">
        <input v-model="contact.phone" placeholder="Contact phone" type="text">
        <div class="actions-container">
            <button @click="onSave" class="btn-save-contact">Save</button>
            <button @click="onGoBack">Cancel</button>
        </div>
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
        },
        onGoBack() {
            this.$router.back()
        }
    },
    async created() {
        const _id = this.$route.params._id
        if (_id) {
            this.contact = await contactService.getContactById(_id)
        } else {
            this.contact = await contactService.getEmptyContact()
        }
    }

}
</script>

<style>

</style>

