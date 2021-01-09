

let myMap = ""

initMap()
// setUpMap()

fetch("https://firzaelbuho.github.io/api/gisdas.json")
    .then(response => response.json())
    .then(data =>

        setUpMap(data)
    )




function initMap() {
    myMap = L.map(
        "map",
        {
            center: [-6.89507920179603, 109.446951876763],
            crs: L.CRS.EPSG3857,
            zoom: 12,
            zoomControl: true,
            preferCanvas: false,
        }
    );
    var tile_layer_6b5a2bb7cf3c4cd8982ebc20bff6254c = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { "attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false }
    ).addTo(myMap);

}

function setUpMap(data) {
    for (var i = 0; i < data.length; i++) {

        var myData = data[i]



        var marker = L.marker(
            [myData.latitude, myData.longitude],
            {}
        ).addTo(myMap);

        let imgIcon = "img/s.png"
        let iconSize = 40

        if (myData.banjir == "ya" && myData.longsor == "ya") {

            imgIcon = "img/sbl.png"
            iconSize = 120

        } else if (myData.banjir == "ya") {

            imgIcon = "img/sb.png"
            iconSize = 80

        } else if (myData.longsor == "ya") {

            imgIcon = "img/sl.png"
            iconSize = 80

        }


        var custom_icon = L.icon({ "iconSize": iconSize, "iconUrl": imgIcon });
        marker.setIcon(custom_icon);

        // add icon status sungai




        var popup = L.popup({ "maxWidth": "100%" });

        var popupHtml = `<div id="html_077d38fa84594d43bafb4e032b5c88df" 
                            style="width: 400px; height: 100.0%;">
                    
                            <h4><b>${myData.nama}</b></h4>
                            <div class="my-3">
                    <img 
                                    width = "250px" height = "auto"
                                    src="${myData.urlgambar}" alt="gambar"/>
                    </div>
                    <br><br>
                            <table cellpadding="20" width="400px" id="popupTable">
                                <tr>
                                   <td>Panjang</td>
                                   <td> : </td>
                                   <td>${myData.panjang} km</td>
                                </tr>
                                <tr>
                                   <td>Luas</td>
                                   <td> : </td>
                                   <td>${myData.luaskm2} km2</td>
                                </tr>
                                <tr>
                                    <td>Debit</td>
                                    <td> : </td>
                                    <td>${myData.debitHilirM3s} m3/s</td>
                                </tr>
                                <tr>
                                    <td>Kemiringan</td>
                                    <td> : </td>
                                    <td>${myData.kemiringan}</td>
                                </tr>
                                <tr>
                                    <td>kota/kab</td>
                                    <td> : </td>
                                    <td>${myData.kota}</td>
                                </tr>
                                <tr>
                                    <td>Kecamatan</td>
                                    <td> : </td>
                                    <td>${myData.kecamatan}</td>
                                </tr>
                            </table>
                        </div>`
        var html = $(popupHtml)[0];
        popup.setContent(html);


        marker.bindPopup(popup);
    }
}