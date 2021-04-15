const decrypt = ({crypto, algo, password, iv}) => {
    return function decrypt_f (encryptedData) {
        try {
            let decipheredStr = null
            if (encryptedData) {
                const decipher = crypto.createDecipheriv(algo, password, iv)
                const decipher_ = decipher.update(encryptedData, 'hex', 'utf8')

                decipheredStr = decipher_
            }

            if (!decipheredStr) return encryptedData
            return decipheredStr
        }

        catch(e) {
            return encryptedData
        }
    }
}

module.exports = decrypt