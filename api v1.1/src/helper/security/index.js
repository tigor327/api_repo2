const dotenv = require('dotenv')
dotenv.config()

const crypto = require('crypto')
const algo = process.env.ENCRYPT_ALGO
const password = process.env.ENCRYPT_PASS
const iv = process.env.ENCRYPT_IV

const toEncrypt = require('./encrypt')
const toDecrypt = require('./decrypt')

const encrypt = toEncrypt({crypto, algo, password, iv})
const decrpyt = toDecrypt({crypto, algo, password, iv})

const services = Object.freeze({
    encrypt,
    decrpyt
})

module.exports = services
module.exports = {
    encrypt,
    decrpyt
}