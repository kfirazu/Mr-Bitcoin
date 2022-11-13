import { userService } from "../../services/userService"

export default {
    state: {
        loggedInUser: null
    },
    mutations: {
        setLoggedInUser(state, { loggedInUser }) {
            state.loggedInUser = loggedInUser
        }
    },
    actions: {
        async setLoggedInUser({ commit }, { loggedInUser }) {
            console.log('loggedInUser parameter in action', loggedInUser)
            loggedInUser = await userService.signUp(loggedInUser)
            console.log('loggedInUser after service', loggedInUser)
            commit({ type: 'setLoggedInUser', loggedInUser })

        }

    },
    getters: {
        loggedInUser(state) { return state.loggedInUser }
    }
}