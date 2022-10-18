<template>
    <ContactList v-bind:contacts="contacts" v-on:contact-removed="onRemoveContact" />

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
    methods: {
        onRemoveContact(contactId){
            console.log('contactId:', contactId)
            contactService.deleteContact(contactId)

            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            this.contacts.splice(idx, 1)
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: { 
        ContactList,
        ContactFilter
     }
}
</script>

<style>

</style>