export const userService = {
    getUser,
}


function getUser() {
    const user = {
        name: 'Puki Ben David',
        balance: 100,
        transaction: []
    }
    return user
}

