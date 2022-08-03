class Storage {

    static setToken(token) {
        localStorage.setItem('token', token)
    }

    static getToken(token) {
        return localStorage.getItem(token)
    }
}

export default Storage;