<template>
    <section class="contact main-layout" ></section>
    <ContactFilter @filter="onFilter" />
    <ContactList v-bind:contacts="contactsToShow" v-on:remove-contact="onRemoveContact"/>
</template>

<script>
import ContactList from '../components/ContactList.vue';
import ContactFilter from '../components/ContactFilter.vue';
import { contactService } from '../services/contactService.js'
export default {
    data() {
        return {
            filterBy: {},
        }
    },
    methods: {
        onRemoveContact(contactId) {
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