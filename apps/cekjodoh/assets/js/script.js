const aName = document.getElementById("aName")
const aAge = document.getElementById("aAge")
const aGender = document.getElementById("aGender")
const bName = document.getElementById("bName")
const bAge = document.getElementById("bAge")
const bGender = document.getElementById("bGender")
const count = document.getElementById("count")

count.addEventListener("click", function () {



    let older = aAge.value
    let younger = bAge.value

    if (aAge.value < bAge.value) {
        older = bAge.value
        younger = aAge.value

    }
    var agePoint = 0
    if (aAge.value === bAge.value) {
        agePoint = 20
    } else if (aAge.value > bAge.value && aGender.value == "L") {
        agePoint = 25
    } else {
        agePoint = 15
    }

    const value1 = Math.round((Math.random() * 35))
    const value2 = Math.round((younger / older) * (40))
    const value3 = agePoint

    const valueTotal = value3 + value2 + value1
    let color = ""
    if (valueTotal > 75) {
        color = "primary"
    } else if (valueTotal > 50) {
        color = "success"
    }
    else if (valueTotal > 25) {
        color = "warning"
    } else {
        color = "danger"
    }

    count.innerHTML = `
    <!-- loading bar -->
    <div>
        <div class="spinner-border text-light"> </div>
        <!-- loading text -->
        <p class="mt-3">Menghtitung Skor ........</p>

    </div>  
    `

    setTimeout(function () {
        count.innerHTML =
            `
            <p class="text-center mb-3 ">Tingkat Kecocokan kamu dengan Pasanganmu adalah ......</p>

            <p style="font-size: xx-large;" class="text-center text-${color}">${valueTotal}%</p>
    
        `
    }, 1000)
})
