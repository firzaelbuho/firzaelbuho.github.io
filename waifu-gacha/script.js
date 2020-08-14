const img = document.getElementById('myImg')
const btn = document.getElementById('btn')
const detail = document.getElementById('detail')
const tittlw = document.getElementById('tittlw')

alert('hehe')
img.style.visibility = 'hidden'
img.style.height = "1px"


btn.addEventListener('click', function () {

    img.style.visibility = "visible"
    img.style.height = "600px"
    img.src = waifus[0][2]
    detail.innerHTML = "<p>" + waifus[0][0] + "</p> <p>Rate : " + waifus[0][1] + "</p>"
    tittlw.innerHTML = "Your Waifu is"


})


const waifus = [
    ['Miyazono Kaori', 'SSR', 'https://intipanime.com/wp-content/uploads/2018/05/Before-1-1.png'],
]