class Storage {

    static setToken(token) {
        localStorage.setItem('token', token)
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static setUser(user) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default Storage;