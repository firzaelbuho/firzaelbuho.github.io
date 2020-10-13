let keyNode = document.getElementById("key")
let plainNode = document.getElementById("plain")
let cipherNode = document.getElementById("cipher")
let btnNode = document.getElementById("encryptBtn")
let modeNode = document.getElementById("mode")
let mode = modeNode.value

let arrayOfAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', ' ']



// reset plain text


plainNode.value = ""

// on changing mode

modeNode.addEventListener('change', function () {

    plainNode.value = ""
    cipherNode.value = ""

    mode = modeNode.value
    if (mode === "enkripsi") {
        plainNode.placeholder = "masukkan plaintext .."
    } else {
        plainNode.placeholder = "masukkan ciphertext .."
    }
    btnNode.innerHTML = "Mulai Dekripsi"
})

// on btn submit

btnNode.addEventListener('click',

    function () {

        let rawText = plainNode.value.toLowerCase()
        plainNode.value = rawText

        let key = keyNode.value.toLowerCase()











        // get arays of cipher
        let arrayOfCipher = getArrayOfCipher(key)

        // add space to arrayOfCipher
        arrayOfCipher.push(' ')




        // check mode
        if (mode === "enkripsi") {


            // get result string if encrypt
            let result = getResult(rawText, arrayOfAlphabets, arrayOfCipher)
            cipherNode.value = result
        } else {

            // get result string if decrypt
            let result = getResult(rawText, arrayOfCipher, arrayOfAlphabets)
            cipherNode.value = result
        }



    }
)


// encryption proccess

function getArrayOfCipher(key) {

    // make new list Alphabet after encrypted

    let arrayOfCipher = []
    for (var i = 0; i < key.length; i++) {

        let value = key[i]
        // check if char exist or not
        if (!arrayOfCipher.includes(value)) {
            arrayOfCipher.push(value)
        }

    }
    for (var i = 0; i < 26; i++) {


        let value = arrayOfAlphabets[i]

        // check if char exist or not
        if (!arrayOfCipher.includes(value)) {
            arrayOfCipher.push(value)
        }

    }
    return arrayOfCipher

}

// decryption proccess



function getResult(rawText, arrayOfRaw, arrayOfResult) {

    // make array of result index each characters

    let arrayOfIndex = []

    for (var i = 0; i < rawText.length; i++) {



        // get value each index of string
        let charValue = rawText.charAt(i)

        // get the index of value in arrayOfAlphabet
        let index = -1

        // check the char is space or not 
        if (charValue === ' ') {
            index = 26

        } else {
            index = arrayOfRaw.indexOf(charValue)
        }

        arrayOfIndex.push(index)



    }

    let preResultText = []

    // convert the array of index of rawtext into result text
    for (var i = 0; i < arrayOfIndex.length; i++) {
        let index = arrayOfIndex[i]
        let value = arrayOfResult[index]
        preResultText.push(value)


    }

    // join the array into string

    let resultText = preResultText.join("")

    return resultText



}