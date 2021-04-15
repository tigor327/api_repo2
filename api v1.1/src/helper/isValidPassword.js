'use strict'
//6 char min/ 15 char long
// let uNameRegex = /^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
// let uNameRegex = /^[a-zA-Z0-9]+$/

//6-15 chars long, only underscore, first must be a letter
let pWordRegex = /^[a-zA-Z]\w{6,15}$/


// const isValidUsername = (username) => {

//     let uName = username.trim().length
//     let uNameResult = uNameRegex.test(uName)
//     if (!uNameResult || !uNameResult || uNameResult === false || (username === null || undefined) || uName === 0) {
//         return false
//     }
//     else {
//         return true
//     }
// }

const isValidPassword = (password) => {

    return pWordRegex.test(password)

}

module.exports = {
    isValidPassword
}