const encrypt = ({crypto, algo, password, iv}) => {
    return function encrypt_(text, isLower){
        let encryptedStr = null

        if (text) {
            text = text.toString()
            if (isLower) text = text.toLowerCase()
            const cipher = crypto.createCipheriv(algo, password, iv)
            let encrypted = cipher.update(text, 'utf8', 'hex')
            encryptedStr = encrypted
        }

        return encryptedStr
    }
}

module.exports = encrypt