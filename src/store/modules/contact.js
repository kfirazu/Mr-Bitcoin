import { contactService } from '@/services/contactService'
export default {
    state: {
        contacts: [],
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        saveContact(state, { contact }) {
            const contactId = contact._id
            console.log('contacts:', state.contacts)
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            console.log('idx:', idx)
            state.contacts.splice(idx, 1, contact)
            console.log('contacts:', state.contacts)
        }

    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.getContacts()
            console.log('contacts from actions:', contacts)
            commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: 'removeContact', contactId })
        },
        async saveContact({ commit }, { contact }) {
            await contactService.saveContact(contact)
            commit({ type: 'saveContact', contact })


        }

    },
    getters: {
        contacts(state) { return state.contacts }
    }
}