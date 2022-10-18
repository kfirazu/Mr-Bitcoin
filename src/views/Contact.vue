<template>
    <ContactList v-bind:contacts="contacts" />

</template>

<script>
import ContactList from '../components/ContactList.vue';
import { contactService } from '../services/contactService.js'
export default {
    data() {
        return {
            contacts: []
        }
    },

    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: { ContactList }
}
</script>

<style>

</style>