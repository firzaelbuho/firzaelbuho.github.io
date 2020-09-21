const loader = document.getElementById("loader")
const btnStart = document.getElementById("btnStart")
const start = document.getElementById("start")
const end = document.getElementById("end")


btnStart.addEventListener('click',
    function () {

        const startValue = start.value
        const endValue = end.value

        if (startValue <= endValue) {

            const myArray = makeArray(startValue, endValue)

            alert(myArray)
            const randomIndex = getRandom(makeArray.length)

            const output = myArray[randomIndex]


            loader.innerHTML = `
        
                <p style="font-size: x-large;">
                    ${output}
                </p>
        `
        } else {

            alert("End Number must be higher than Start Number")

        }





    })



function makeArray(start, end) {

    let myArray = []

    for (var i = start; i <= end; i++) {
        myArray.push(i)
    }

    return myArray

}

function getRandom(length) {

    return Math.round(Math.random() * length)

}