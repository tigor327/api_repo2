let regex = /^[a-z0-9_-]{5,15}$/

function isValidUsername(username) {
    return regex.test(username)
}

module.exports = {isValidUsername}