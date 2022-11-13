export const localStorageService = {
    load: loadFromStorage,
    save: saveToStorage,
}

export const sessionStorageService = {
    saveToSessionStorage,
    loadFromSessionStorage
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

// Session Storage:

function saveToSessionStorage(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
}


function loadFromSessionStorage(key) {
    var val = sessionStorage.getItem(key)
    return JSON.parse(val)
}