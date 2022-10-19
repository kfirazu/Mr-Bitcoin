<template>
    <ContactFilter @filter="onFilter" />
    <ContactList v-bind:contacts="contactsToShow" v-on:remove-contact="onRemoveContact" />
</template>

<script>
import ContactList from '../components/ContactList.vue';
import ContactFilter from '../components/ContactFilter.vue';
import { contactService } from '../services/contactService.js'
export default {
    data() {
        return {
            // contacts: [],
            filterBy: {},
        }
    },
    methods: {
        onRemoveContact(contactId) {
            // console.log('contactId:', contactId)
            // contactService.deleteContact(contactId)

            // const idx = this.contacts.findIndex(contact => contact._id === contactId)
            // this.contacts.splice(idx, 1)
            this.$store.dispatch({ type: 'removeContact', contactId })
        },
        onFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        contactsToShow() {
            const regex = new RegExp(this.filterBy.name, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        contacts() { return this.$store.getters.contacts }
    },
    async created() {
        // this.contacts = await contactService.getContacts()
        this.$store.dispatch({ type: 'loadContacts' })
    },
    components: {
        ContactList,
        ContactFilter
    }
}
</script>

<style>

</style>