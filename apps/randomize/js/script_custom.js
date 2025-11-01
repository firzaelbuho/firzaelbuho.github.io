const loader = document.getElementById("loader")
const btnStart = document.getElementById("btnStart")
const btnReset = document.getElementById("btnReset")
const btnAdd = document.getElementById("add")
const item = document.getElementById("item")
const itemList = document.getElementById("itemList")


let itemArray = []

btnAdd.addEventListener('click', function () {
    const newItem = item.value
    itemArray.push(newItem)
    const node = document.createElement("LI");                 // Create a <li> node
    const textnode = document.createTextNode(`${newItem}`);
    node.appendChild(textnode);
    itemList.appendChild(node)
})

btnReset.addEventListener('click', function () {
    itemArray = []
    itemList.innerHTML = ""
})

btnStart.addEventListener('click',
    function () {

        loader.innerHTML = `

        <div div class="spinner-border text-primary " > </div >
            <p class="m-2"> Randomizing ..... </p>`

        setTimeout(function () {


            // alert(myArray)
            const length = itemArray.length - 1
            const randomIndex = getRandom(length)

            const output = itemArray[randomIndex]


            loader.innerHTML = `

                <p style = "font-size: x-large;" >
                    ${output}
                </p> `
        }, 5000)





    })





function getRandom(length) {

    return Math.round((Math.random() * (length)))

}