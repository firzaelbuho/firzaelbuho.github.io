let keyNode = document.getElementById("key")
let plainNode = document.getElementById("plain")
let cipherNode = document.getElementById("cipher")
let btnNode = document.getElementById("encryptBtn")

let arrayOfAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

plainNode.value = "masukkan plain text"

btnNode.addEventListener('click',
    function () {
        let plainText = plainNode.value
        let arrayOfCipher = []
        let key = parseInt(keyNode.value) % 26
        for (var i = 0; i < 26; i++) {

            let index = key + i

            if ((index) > 25) {
                index = index % 26
            }
            arrayOfCipher.push(arrayOfAlphabets[index])

        }
        encryptonProcces(plainText, arrayOfCipher)

    }
)



function encryptonProcces(plainText, arrayOfCipher) {

    let arrayOfIndex = []

    for (var i = 0; i < plainText.length; i++) {
        let charValue = plainText.charAt(i)
        let index = arrayOfAlphabets.indexOf(charValue)
        arrayOfIndex.push(index)


    }

    let preCipherText = []

    for (var i = 0; i < arrayOfIndex.length; i++) {
        let index = arrayOfIndex[i]
        let value = arrayOfCipher[index]
        preCipherText.push(value)


    }

    let cipherText = preCipherText.toString("")

    cipherNode.value = cipherText



}