const input = document.getElementById("inputField")
const output = document.getElementById("outputField")
const convert = document.getElementById("convertBtn")
input.value = ""

convert.addEventListener('click',
    function () {

        const inputValue = input.value
        let outputArray = []

        //alert(outputValue)
        for (var i = 0; i < inputValue.length; i++) {
            outputArray.push(inputValue.charCodeAt(i))
        }
        const outputString = outputArray.join(' ')
        output.value = outputString
    })