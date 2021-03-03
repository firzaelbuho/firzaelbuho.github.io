const inputLink = document.getElementById("inputLink")
const outputLink = document.getElementById("outputLink")
const outputIdLink = document.getElementById("outputIdLink")
const inputtype = document.getElementById("inputType")
const btnConvert = document.getElementById("btnConvert")

const generateLink = function(){
const inputValue = inputLink.value 
const typeValue = inputType.value
const linkId = inputValue.substring( inputValue.indexOf("file/d/")+"file/d/".length , inputValue.indexOf("/view") )
let outputValue = ""




if(typeValue === "image"){
    outputValue = `https://drive.google.com/uc?export=view&id=${linkId}`
} else {
    outputValue = `https://drive.google.com/file/d/${linkId}/preview`
}
outputIdLink.value = linkId
outputLink.value = outputValue
}

btnConvert.addEventListener('click', generateLink)
