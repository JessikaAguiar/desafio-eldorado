class User {
    constructor (username, password) {
        this._name = username
        this._password = password
    }

    valid() {
        return (this._name && this._password)
    }
}

module.exports = User
