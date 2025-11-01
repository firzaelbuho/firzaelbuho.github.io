const body = document.getElementById("body")

// given url string
let url_str = 'http://demo.com?id=100&cat=js';

let url = new URL(url_str);
let search_params = url.searchParams;

// get value of "id" parameter
// "100"

let json = {
    nama: "firza",
    id: 1
}



var myJSON = JSON.stringify(json);
console.log(json)

console.log(search_params.get('cat'));

body.innerHTML = myJSON


let soal = [
    ["Miyazono Kaori", "Yoiur Lie in April", "greenmapple17"],
    ["Arima Kousei", "Your Lie in April", "NN"],
    ["Hishiro Chizuru", "ReLife", "MaltyCrab"],
    ["Kaizaki Arata", "ReLife", "AlfredoRM"],
    ["Light Yagami", "Death Note", "Reverendtundra"],
    ["L", "Death Note", "lucidixp"],
    ["Okabe Rintarou", "Steins Gate", "SykotixUK"],
    ["Makise Kurisu", "Steins Gate", "chrisfch"],
    ["Edward Elric", "Fullmetal Alchemist", "ExLu"],
    ["Alphonse Elric", "Fullmetal Alchemist", "tonyp2121"],
    ["Roy Mustang", "Fullmetal Alchemist", "Hailstone294"],
    ["King Bradley", "Fullmetal Alchemist", "greenmaple17"],
    ["Levi Ackerman", "Attsck on Titan", "slezzy7"],
    ["Mikasa Ackerman", "Attsck on Titan", "NN"],
    ["Armin Arlelt", "Attsck on Titan", "greenmaple17"],
    ["Shimura Shinpachi", "Gintama", "genmapple17"],
    ["Sakata Gintoki", "Gintama", "goodfon"],
    ["Kagura", "Gintama", "greenmapple17"],
    ["Kirisaki Chitoge", "Nisekoi", "NN"],
    ["Kosaki Onodera", "Nisekoi", "greenmapple17"],
    ["Meliodas", "Seven Deadly Sins", "BellaAderton"],
    ["Elizabeth", "Seven Deadly Sins", ""],
    ["Meiko Honma", "Anohana", "greenmapple17"],
    ["Erwin Smith", "Attack on Titan", "greenmapple17"],
    ["Eren Yeager", "Attack on Titan", "NN"],
    ["Todoroki Shoto", "My Hero Academia", "uhdpaper"],
    ["Allmight", "My Hero Academia", "uhdpixel"],
    ["Midoriya Izuku", "My Hero Academia", "Chrisfch"],
    ["Katsuki Bakugo", "My Hero Academia", "NN"],
    ["Uchiha Madara", "Naruto", "NN"],
    ["Uzumaki Naruto", "Naruto", "wallpaperflre"],
    ["Hatake Kakashi", "Naruto", "ncoll36"],
    ["Hyuuga Neji", "Naruto", "FikriMochizou"],
    ["Nara Shikamaru", "Naruto", "NN"],
    ["Namikaze Minato", "Naruto", "dSolitude"],
    ["Killer Bee", "Naruto", "wallpaperflare"],
    ["Haruno Sakura", "Naruto", "FikriMochizou"],
    ["Uchiha Sasuke", "Naruto", "greenmapple17"],
    ["Hyuuga Hinata", "Naruto", "NN"],
    ["Gaara", "Naruto", "douglaaz"],
    ["Sato Kazuma", "Konosuba", "NN"],
    ["Aqua", "Konosuba", "wallhere"],
    ["Darkness", "Konosuba", "greenmapple17"],
    ["Uchiha Itachi", "Naruto", "slezzy7"],
    ["Kusakabe Shinra", "Fire Force", "Zunnno"],
    ["Trunks", "Dragon Ball", "NN"],
    ["Portgas D Ace", "One Piece", "MrRobotboy"],
    ["Seijuro Akashi", "Kuroko no Basket", "Klikster"],
    ["Asta", "Black Clover", "NN"],
    ["Ban", "Seven Deadly Sins", "wallpapersafari"],
    ["Boa Hancook", "One Piece", "Aho1225"],
    ["Uzumaki Boruto", "Naruto", "NN"],
    ["Chihiro Ogino", "Spirited Away", "NifgtInDarkness29"],
    ["Envy", "Fullmetal Alchemist", "greenmapple17"],
    ["Erza Scarlet", "Fairy Tail", "NN"],
    ["Chitanda Eru", "Hyouka", "sybercyber"],
    ["Gon Freecss", "Hunter X Hunter", "greenmapple17"],
    ["Shinichi Kudo", "Detective Conan", "siawsharingan"],
    ["Ishigami Senku", "Dr. Stone", "Ryuzaky-kun"],
    ["Saitama", "One Punch Man", "NN"],
    ["Ryuk", "Death Note", "wallpaperflare"],
    ["Saiki Kusuo", "Saiki Kusuo no Psi Nan", "agenFneptunus"],
    ["Senju Tsunade", "Naruto", "raketa3"],
    ["Vegeta", "Dragon Ball", "wallpaperaccess"],
    ["Yui Yuigahama", "Oregairu", "greenmapple17"],
    ["Violet Evergarden", "Violet Evergarden", "wallpaperflame"],
    ["Yuu Otosaka", "Charlotte", "NN"],
    ["Kotaro Katsura", "Gintama", "Awesomeness333"],
    ["Yuuki Asuna", "Sword Art Online", "matsumayu"],
    ["Tachibana Kanade", "Angel Beats", "NN"],
    ["Kirigaya Kazuto", "Sword Art Online", "alphacoders"],
    ["Shinichi Izumi", "Parasyte", "Martianz-Art"],
    ["Shiro", "No Game No Life", "wallhere"],
    ["Kirishima Touka", "Tokyo Ghoul", "Darkfate17"],
    ["Ken Kaneki", "Tokyo Ghoul", "NN"],
    ["Kamado Tanjirou", "Demon Slayer", "wallpapercave"],
    ["Kamado Nezuko", "Demon Slayer", "uhdpaper"],
    ["Mash Kyrelight", "Fate", "SteveCharge"],
    ["Arima Kishou", "Tokyo Ghoul", "JUEGZI"],
    ["Korosensei", "Assasination Classroom", "Nur Alif SiDoel"],
    ["Isla", "Plastic Memories", "Lucifer012"],
    ["Ikoma", "Kabaneri of The Iron Fortress", "Lucifer012"],
    ["Van Hohenheim", "Fullmetal Alchemist", "Abesario25"],
    ["Handa Seishu", "Barakamon", "NN"],
    ["Son Goku", "Dragon Ball", "UzumakiAsh"],
    ["Gluttony", "Fullmetal Alchemist", "greenmapple17"],
    ["Genos", "One Punch Man", "Abesario25"],
    ["Shoyo Hinata", "Haikyuu", "?"],
    ["Killua Zoldyck", "Hunter X Hunter", "greenmapple17"],
    ["Lelouch", "Code Geass", "Lucifer012"],
    ["Lucy Heartfilia", "Fairy Tail", "greenmapple17"],
    ["Monkey D Luffy", "One Piece", "Lucifer012"],
    ["Lust", "Fullmetal Alchemist", "NN"],
    ["Miyamizu Mitsuha", "Your Name", "natsuaisyah"],
    ["Natsu Dragneel", "Fairy Tail", "THEsenpaiRYAN"],
    ["Ozora Tsubasa", "Captain Tsubasa", "akubelumganteng"],
    ["Ran Mouri", "Detective Conan", "hanasaki-ran"],
    ["Rem", "Re:Zero", "NN"],
    ["Escanor", "Seven Deadly Sins", "alphacoders"],
    ["Togata Mirio", "My Hero Academia", "scoolharis"],
    ["Asada Sinon", "Sword Art Online", "greenmapple17"],
    ["Reiner Braun", "Attack on Titan", "julz214"],
    ["Rias Gtremory", "Highschool DXD", "Lucifer012"],
    ["Yuzuriha Inori", "Guilty Crown", "dnerox"],
    ["Diane", "Seven Deadly Sins", "thecursedchuro"],
    ["Tohsaka Rin", "Fate", "Krukmeister"],
    ["Emilia", "Re:Zero", "MrTapoz-kun"],
    ["Tokisaki Kurumi", "Date A Life", "max028"],
    ["Izumi Sagiri", "Eromanga Sensei", "RizalExe"],
    ["Nishikino Maki", "Love Live", "Fransiskus Febryan"],
    ["Nao Tomori", "Charlotte", "FakhriNH"],
    ["Yukino Yukinoshita", "Oregairu", "ExLu"],
    ["Raku Ichijou", "Nisekoi", "Abesario25"],
    ["Jintan Yadomi", "Anohana", "darkprinceah"],
    ["Kariu Rena", "ReLife", "Rendracula"],
    ["Kibutsuji Muzan", "Demon Slayer", "kurijezatives"],
    ["Sanji Vinsmoke", "One Piece", "wallpsprtaccess"],
    ["Orochimaru", "Naruto", "zaneibrahime"],
    ["Takasugi Shinsuke", "Gintama", "wallpaperbetter"],
    ["Pain", "Naruto", "Darkfate17"]
]

let soal1 = []
for (var i = 0; i < soal.length; i++) {
    const x = i + 1
    const pict = `p${x}`
    const obj = {
        id: x,
        name: soal[i][0],
        series: soal[i][1],
        pict: pict,
        artist: soal[i][2]


    }
    soal1.push(obj)
}
body.innerHTML = JSON.stringify(soal1)