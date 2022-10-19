import { createStore } from "vuex";
import contact from './modules/contact.js'

const storeOptions = {
    strict: true,
    state() {
        return {

        }
    },
    modules: {
        contact,
    }
}

const store = createStore(storeOptions)
export default store