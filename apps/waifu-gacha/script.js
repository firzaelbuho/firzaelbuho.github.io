const img = document.getElementById('myImg')
const btn = document.getElementById('btn')
const detail = document.getElementById('detail')
const tittle = document.getElementsByTagName('h2')[0]
const loader = document.getElementById("load")
let isClicked = false




img.style.height = "1px"


btn.addEventListener('click', function () {

    // set timeout for loading bar


    setTimeout(function () {

        // hide button
        btn.style.visibility = 'hidden'
        // only work if not clicked yet

        if (!isClicked) {
            loader.style.visibility = "hidden"
            loader.classList.add("my-3")
            img.style.visibility = "visible"
            img.src = waifus[x][3]

            // makes height of image keeps the aspect ratio, this line miust be placed after load src of image
            img.style.width = "100%"
            img.style.height = 'auto'

            // set detail

            detail.innerHTML =
                ` 
            <p>  ${waifus[x][0]} </p>
            <p> ( ${waifus[x][1]} ) </p> 
            <p>Rate :  ${waifus[x][2]} </p>
            `
            tittle.innerHTML = "Your Waifu is"
            isClicked = true

        }


    }, 2000)

    const x = getRandom() - 1
    loader.style.visibility = "visible"
    loader.classList.add("my-3")



})

// Array of Database

const waifus = [
    ['Miyazono Kaori', 'Your Lie in April', 'SSR', 'https://intipanime.com/wp-content/uploads/2018/05/Before-1-1.png'],
    ['Sawabe Tsubaki', 'Your Lie in April', 'B', 'https://i.pinimg.com/originals/ed/b0/9f/edb09fcfc07308bbb266af130c381520.jpg'],

    ['Amane Misa', 'Death Note', 'A', 'https://assets-jpcust.jwpsrv.com/thumbnails/sj6851hv-720.jpg'],

    ['Android 18', 'Dragon Ball', 'SS', 'https://ggwp.id/media/wp-content/uploads/2020/05/sekuat-apa-android-18.jpg'],
    ['Chichi', 'Dragon Ball', 'A', 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/08/chi-chi.png'],
    ['Bulma', 'Dragon Ball', 'S', 'https://pbs.twimg.com/profile_images/934223298879254528/1-vwDV4N_400x400.jpg'],
    ['Videl', 'Dragon Ball', 'A', 'https://cdn1.dotesports.com/wp-content/uploads/2019/01/27174148/image19.png'],

    ['Mikasa Ackerman', 'Attack on Titan', 'SSR', 'https://1.bp.blogspot.com/-r6OwY4VoZ8U/XWtFcDnjfsI/AAAAAAAACxI/uc7YAfVHJX0HTslbzuM_WxCcWPQ5KiA8gCLcBGAs/s1600/Attack%2Bon%2BTitan%2BS2%2B-%2B02.jpg'],
    ['Historia Reiss', 'Attack on Titan', 'S', 'https://i.pinimg.com/564x/62/f3/61/62f361929db689ace963831cf922a036.jpg'],
    ['Shasha Braus', 'Attack on Titan', 'SS', 'https://i.pinimg.com/564x/57/88/da/5788da1a3657a8fcfe2273eb3b71b77c.jpg'],
    ['Annie Leonhard', 'Attack on Titan', 'S', 'https://medias.spotern.com/spots/w640/188/188764-1553277202.jpg'],
    ['Petra Ral', 'Attack on Titan', 'A', 'https://i.pinimg.com/originals/d8/8e/04/d88e0469dd52be6a9b33d770f149c198.jpg'],

    ['Tsurumi Chiriko', 'Anohana', 'A', 'https://4.bp.blogspot.com/-dmdA6WZB_UI/UM3uklSKhJI/AAAAAAAAAMU/vHE0o0ik1us/s1600/tsu.jpg'],
    ['Anjou Naruko', 'Anohana', 'B', 'https://i.pinimg.com/originals/ec/80/d3/ec80d3713ec42c75729951a1cf0edbc2.png'],
    ['Meiko "Menma" Honma', 'Anohana', 'SR', 'https://i.ytimg.com/vi/DiElnzXFqLc/maxresdefault.jpg'],

    ['Zero Two', 'Darling in Franxx', 'A', 'https://pbs.twimg.com/media/Dp2llRmX0AAwx4z.jpg'],
    ['Ichigo', 'Darling in Franxx', 'B', 'https://i.pinimg.com/originals/ce/12/3d/ce123d79f44fd1e8101f9bc284928cb5.jpg'],

    ['Hyuuga Hinata', 'Naruto', 'SR', 'https://vignette.wikia.nocookie.net/naruto-bleach-and-sonic/images/7/79/Hinata_Part_II.png/revision/latest?cb=20140824004533'],
    ['Haruno Sakura', 'Naruto', 'B', 'https://cdn.idntimes.com/content-images/post/20200417/2-52f72ba097bed7a8356bb2aa02221d80_600x400.jpg'],
    ['Yamanaka Ino', 'Naruto', 'S', 'https://i.ytimg.com/vi/ET6cyMECENc/maxresdefault.jpg'],
    ['Tenten', 'Naruto', 'B', 'https://cdn.idntimes.com/content-images/duniaku/post/20191031/fakta-kekuatan-tenten-3ce03b57b33c1476ea99a1b0758a118d_600x400.jpg'],
    ['Temari', 'Naruto', 'A', 'https://cdn.idntimes.com/content-images/duniaku/post/20200128/naruto-shippuden-temari-45244a8eafc7ac6687367bcad20e1454_600x400.jpg'],
    ['Kushina', 'Naruto', 'SS', 'https://i.pinimg.com/originals/42/93/9d/42939db59eb759d94545cb432c97f206.jpg'],
    ['Kagura', 'Gintama', 'A', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14c52462-45c8-411a-b184-b1d0c0a4e99e/d8pnk45-76fcb6e5-41a5-424f-b8f4-9878fda9dd14.jpg/v1/fill/w_1024,h_576,q_75,strp/_tracing__kagura___gintama_by_ryanmuhammad_d8pnk45-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTRjNTI0NjItNDVjOC00MTFhLWIxODQtYjFkMGMwYTRlOTllXC9kOHBuazQ1LTc2ZmNiNmU1LTQxYTUtNDI0Zi1iOGY0LTk4NzhmZGE5ZGQxNC5qcGciLCJoZWlnaHQiOiI8PTU3NiIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzE0YzUyNDYyLTQ1YzgtNDExYS1iMTg0LWIxZDBjMGE0ZTk5ZVwvcnlhbm11aGFtbWFkLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.HWD5Z6ShFLOB0XGdm1pOZlO3gj8uXjkKkdl_PSu1SBg'],
    ['Imai Nobume', 'Gintama', 'S', 'https://vignette.wikia.nocookie.net/gintama/images/a/a2/Nobume%27s_New_Oufit_Full.jpg/revision/latest?cb=20170112040014'],
    ['Sarutobi Ayame', 'Gintama', 'A', 'https://vignette.wikia.nocookie.net/gintama/images/8/8d/Sarutobi_Episode_28.jpeg/revision/latest?cb=20170204124153'],
    ['Shimura Tae', 'Gintama', 'B', 'https://ginnodangan.files.wordpress.com/2011/06/gintama213-19.jpg'],
    ['Otose', 'Gintama', 'E', 'https://pbs.twimg.com/media/EcT1DjVU8AA0bLw.jpg']
    ['Tsukuyo', 'Gintama', 'S', 'https://vignette.wikia.nocookie.net/gintama/images/5/52/PhotoGrid_1538852634166.jpg/revision/latest?cb=20181006190638'],

    ['Megumin', 'Konosuba', 'S', 'https://repository-images.githubusercontent.com/56785718/dae38380-9d87-11e9-855f-02f50aa93278'],
    ['Darkness', 'Konosuba', 'SS', 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Inner-Darkness.jpg?q=50&fit=crop&w=740&h=370'],
    ['Aqua', 'Konosuba', 'SSR', 'https://i.ytimg.com/vi/ZZ060Fv74sY/maxresdefault.jpg'],
    ['Wiz', 'Konosuba', 'SSR', 'https://i.ytimg.com/vi/0ApLK-Q6Fyc/maxresdefault.jpg'],

    ['Kosaki Onodera', 'Nisekoi', 'S', 'https://4.bp.blogspot.com/-avb_L5iSGoA/VgVb8M27SCI/AAAAAAAABUk/qX994cDJ62Q/s1600/onodera.jpg'],
    ['Kirisaki Chitoge', 'Nisekoi', 'A', 'https://infotekmedia.files.wordpress.com/2017/03/joi-waifu-wednesday-chitoge-kirisaki-1.jpg'],

    ['Hishiro Chizuru', 'ReLife', 'SSR', 'https://vignette.wikia.nocookie.net/relife/images/a/a4/Post-ReLIFE_Hishiro.jpg/revision/latest?cb=20180223153542'],
    ['Kariu Rena', 'ReLife', 'A', 'https://vignette.wikia.nocookie.net/relife/images/9/94/Kariu_Rena_Anime.jpg/revision/latest?cb=20171113211449'],
    ['Onoya Ann', 'ReLife', 'S', 'https://vignette.wikia.nocookie.net/relife/images/7/75/Onoya_An_Anime.jpg/revision/latest?cb=20171114205240'],

    ['Mayuri Shiina', 'Steins Gate', 'A', 'https://i.pinimg.com/originals/fa/99/3a/fa993aec4484f72e28512800689ad39c.jpg'],
    ['Makise Kurisu', 'Steins Gate', 'S', 'https://i2.wp.com/wibumesta.com/wp-content/uploads/2020/03/kurisu.jpg?fit=1920%2C1080&ssl=1'],

    ['Rem', 'Re Zero', 'S', 'https://vignette.wikia.nocookie.net/rezero/images/0/02/Rem_Anime.png/revision/latest?cb=20160730213532'],
    ['Ram', 'Re Zero', 'A', 'https://media.comicbook.com/2020/07/rezero-season-2--1227639.jpeg?auto=webp&width=1200&height=644&crop=1200:644,smart'],
    ['Emilia', 'Re Zero', 'A', 'https://vignette.wikia.nocookie.net/rezero/images/c/c0/Emilia_Anime_2.png/revision/latest?cb=20160408203829'],

    ['Teruhashi Kokomi', 'Saiki Kusuo no Psi Nan', 'S', 'https://vignette.wikia.nocookie.net/saikikusounosainan/images/d/d5/Teruhashi_anime_1.png/revision/latest?cb=20191026234135'],

    ['Kanae Kochou', 'Demon Slayer', 'B', 'https://www.anime-planet.com/images/characters/kanae-kochou-149237.jpg'],
    ['Kanao Tsuyuri', 'Demon Slayer', 'A', 'https://pm1.narvii.com/7271/5e782fbff7f6df6d2d2a73ac7f9dd6c2323a7339r1-1121-853v2_uhq.jpg'],
    ['Shinobu Kochou', 'Demon Slayer', 'S', 'https://i.pinimg.com/originals/b8/b7/5c/b8b75c61ca3b6e606fc5983256a8d1e8.jpg'],
    ['Mitsuru Kanroji', 'Demon Slayer', 'A', 'https://asapland.com/wp-content/uploads/2020/07/demon-slayer-sexy-mitsuri-kanroji-cosplay-kinpatsu-v3-455827-990x557.jpg'],
    ['Kamado Nezuko', 'Demon Slayer', 'S', 'https://pm1.narvii.com/7282/c4b02611acb5dde99c3f0d55cd6436c32845f5f7r1-1920-1080v2_uhq.jpg'],

    ['Kohaku', 'Dr. Stone', 'A', 'https://i.pinimg.com/736x/c3/ee/fc/c3eefc09c7c873c9dbcb073308f3dc9e.jpg'],
    ['Ruri', 'Dr. Stone', 'A', 'https://vignette.wikia.nocookie.net/dr-stone/images/d/d2/Ruri.png/revision/latest?cb=20200318125649'],
    ['Yuzuriha', 'Dr. Stone', 'B', 'https://vignette.wikia.nocookie.net/dr-stone/images/8/88/452c8ee0d25f0d479f5384e00e3b6615.jpg/revision/latest?cb=20200624113318'],

    ['Shiro', 'No Game No Life', 'A', 'https://i.pinimg.com/originals/f9/fc/2e/f9fc2e9828f9be624e92bf3e38dd36b1.jpg'],

    ['Stephanie Dolla', 'No Game No Life', 'A', 'https://i.pinimg.com/originals/2b/7f/db/2b7fdb950e838a816ec9636d541206bf.jpg'],
    ['Jibril', 'No Game No Life', 'B', 'https://i.ytimg.com/vi/qu4F3LI7nuc/maxresdefault.jpg'],

    ['Izumi Sagiri', 'Eromanga Sensei', 'D', 'https://lh3.googleusercontent.com/proxy/qOoyc5NK0tr6CA9LEiJqWTjFWkvD6jV-g5wPiCpgxi2K1EilqNUnD9lAL24nbNyqd-JqzPWT0IBq_IcUbt1Ko-F_m-iiM8ysZNoxtopDEhOMBniLsQ4TVzWQfp-NOkkn'],

    ['Yuzuriha Inori', 'Guilty Crown', 'S', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d6d9835-0dd9-4464-b642-3a95f2403afe/dbubrfi-ed76d97f-da42-486b-8361-f73fe7de780f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWQ2ZDk4MzUtMGRkOS00NDY0LWI2NDItM2E5NWYyNDAzYWZlXC9kYnVicmZpLWVkNzZkOTdmLWRhNDItNDg2Yi04MzYxLWY3M2ZlN2RlNzgwZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dKDnB8Hgls3L-SDZjuQVJA-6bPqpLiu1OwyuzI_y0FM'],

    ['Elizabeth Liones', 'Seven Deadly Sins', 'S', 'https://data.whicdn.com/images/331458971/original.png'],
    ['Merlin', 'Seven Deadly Sins', 'A', 'https://i.pinimg.com/originals/cc/ac/48/ccac4838aaaf7f8e2363d102a439adec.jpg'],
    ['Jericho', 'Seven Deadly Sins', 'A', 'https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/a/ae/Jericho.png/revision/latest?cb=20180127170750&path-prefix=es'],

    ['CC', 'Code Geass', 'S', 'https://azumi.moe/wp-content/uploads/2019/03/cc-code-geass-lelouch-of-the-rebellion-609.jpg'],
    ['Euphemia li Britannia', 'Code Geass', 'S', 'https://sites.google.com/site/codegeasstypemoon2000/_/rsrc/1477546614616/home/characters/subcategories/britannian-imperial-family/euphemia-li-britannia/Euphemia%20li%20Britannia.JPG'],
    ['Cornelia li Britannia', 'Code Geass', 'SSR', 'https://static.zerochan.net/Cornelia.li.Britannia.full.1258585.jpg'],
    ['Nunally vi Britannia', 'Code Geass', 'SS', 'https://pm1.narvii.com/6386/c0390445997b873ccc66bfb219b740d96dceebe3_00.jpg']
]

function getRandom() {

    return Math.round(Math.random() * waifus.length)

}

