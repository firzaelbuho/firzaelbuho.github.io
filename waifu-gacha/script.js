const img = document.getElementById('myImg')
const btn = document.getElementById('btn')
const detail = document.getElementById('detail')
const tittle = document.getElementsByTagName('h2')[0]
const loader = document.getElementById("load")
let isClicked = false




img.style.height = "1px"


btn.addEventListener('click', function () {

    setTimeout(function () {

        if (!isClicked) {
            loader.style.visibility = "hidden"
            img.style.visibility = "visible"
            img.style.height = "600px"
            img.src = waifus[x][2]
            detail.innerHTML = "<p>" + waifus[x][0] + "</p> <p>Rate : " + waifus[x][1] + "</p>"
            tittle.innerHTML = "Your Waifu is"
            btn.innerHTML = "your waifu"
            btn.classList.remove("btn-primary")
            btn.classList.add("btn-secondary")
            isClicked = true

        }


    }, 1000)

    const x = getRandom() - 1
    loader.style.visibility = "visible"



})


const waifus = [
    ['Miyazono Kaori', 'SSR', 'https://intipanime.com/wp-content/uploads/2018/05/Before-1-1.png'],
    ['Mikasa Ackerman', 'SSR', 'https://1.bp.blogspot.com/-r6OwY4VoZ8U/XWtFcDnjfsI/AAAAAAAACxI/uc7YAfVHJX0HTslbzuM_WxCcWPQ5KiA8gCLcBGAs/s1600/Attack%2Bon%2BTitan%2BS2%2B-%2B02.jpg'],
    ['Meiko "Menma" Honma', 'SR', 'https://i.ytimg.com/vi/DiElnzXFqLc/maxresdefault.jpg'],
    ['Zero Two', 'S', 'https://c4.wallpaperflare.com/wallpaper/566/52/952/anime-anime-girls-darling-in-the-franxx-zero-two-darling-in-the-franxx-wallpaper-preview.jpg'],
    ['Hyuuga Hinata', 'SR', 'https://lh3.googleusercontent.com/proxy/nNUcoDAYxP_miOJi8dNwgk8MvkcQLZoa8fUVbgSlxKUv1iCJ313qRO-fDAB8rjpTYsVdg0p98zWaTZ0kpXAMtdiNIL6sZQAqZqYqucHiSUnhyxzp8FKOcelpX4B14CyKWaq3kM49uEMeswxzWCKVLGDbW30SLcR3yA'],
    ['Haruno Sakura', 'B', 'https://cdn.idntimes.com/content-images/post/20200417/2-52f72ba097bed7a8356bb2aa02221d80_600x400.jpg'],
    ['Aqua', 'SSR', 'https://i.ytimg.com/vi/ZZ060Fv74sY/maxresdefault.jpg']
]

function getRandom() {

    return Math.round(Math.random() * waifus.length)

}

