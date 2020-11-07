let statistik = document.querySelectorAll(".statistik")
console.log(penduduk)


statistik[0].addEventListener('click', function (e) {
    //e.preventDefault()
    sessionStorage.setItem("key", "penduduk")
    alert("penduduk")
})
statistik[1].addEventListener('click', function (e) {

    sessionStorage.setItem("key", "pertanian")
    alert("pertanian")
})
statistik[2].addEventListener('click', function (e) {
    sessionStorage.setItem("key", "anggaran")
    alert("anggaran")
})
