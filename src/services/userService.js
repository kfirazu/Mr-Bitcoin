import { contactService } from './contactService.js';
import { httpService } from './http.service.js';
import { localStorageService, sessionStorageService } from './storage.service.js';
import { utilService } from './util.service';
import { storageService } from '@/services/storage.service.js';
import { socketService } from './socket.service.js';
export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getLoggedinUser,
    getById,
    removeUser,
    updateUser
}

// const gUsers = []

// const gDefaultUsers = {
//     username: 'Puki Ben David',
//     balance: 100,
//     transaction: []
// }

//Prod:
const USER_BASE_URL = 'user/'
const AUTH_BASE_URL = 'auth/'

const STORAGE_KEY_LOGGED_IN_USER = 'loggedInUser'

// function getUser() {
//     const users = sessionStorageService.loadFromSessionStorage(USER_KEY)
//     if(users) {
//         return users[0]
//     } else return null
//     // return gDefaultUsers
// }

// async function signUp(username) {
//     const users = storageService.load(USER_KEY) || gDefaultUsers
//     const isUserExist = users?.find(user => user?.username === user?.username)
//     const contacts = await contactService.getContacts()

//     if (!isUserExist) {
//         const _id = utilService.makeId()
//         const newUser = {
//             name: username,
//             balance: 100,
//             transactions: [],
//             _id: _id
//         }
//         users.push(newUser)
//         storageService.save(USER_KEY, newUser)

//         const contact = {
//             id: _id,
//             name: username,
//             email: `${username}@gmail.com`,
//         }
//         contacts.push(contact)
//     }
// }

// function logout(){
//     localStorageService.save(USER_KEY, null)
// }

async function login(credentials) {
    try {
        const user = await httpService.post(`${AUTH_BASE_URL}login`, credentials)
        if (user) {
            socketService.login(user._id)
            return saveLocalUser(user)
        } else return Promise.reject('Invalid username or password')
    } catch (err) {
        console.log('Login has failed in user service:', err)
    }
}

async function logout() {
    try {
        await httpService.post(`${AUTH_BASE_URL}logout`)
        sessionStorage.removeItem(STORAGE_KEY_LOGGED_IN_USER)
        socketService.logout()
    } catch (err) {
        console.log('err:', err)
    }

}

async function signup(credentials) {
    try {
        const user = await httpService.post(`${AUTH_BASE_URL}signup`, credentials)
        // socketService.login(user._id) 
        return saveLocalUser(user)

    } catch (err) {
        console.log('Signup ha failed in user service:', err)

    }

}

async function getUsers() {
    try {
        const users = await httpService.get(URL_USER)
        return users
    } catch (err) {
        console.log('Failed to get users in user service', err)
    }
}

async function getById(userId) {
    try {
        const user = await httpService.get(USER_BASE_URL + userId)
        return user
    } catch (err) {
        console.log('Get by id has failed in user service:', err)
    }
}

async function verifyUserName(username) {

}

async function updateUser(user) {
    try {
        await httpService.put(USER_BASE_URL + user._id, user)
        return user
    } catch (err) {
        console.log('Update has failed in user service', err)
    }

}

async function removeUser(userId) {
    try {
        const userToRemove = await httpService.delete(USER_BASE_URL + userId)
        return userToRemove
    } catch (err) {
        console.log('Remove user has failed in user service')
    }

}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGED_IN_USER))
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user))
    return user
}