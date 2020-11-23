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

    // UMUM

    ["Siapakah nama preisden ke-7 Indonesia ?", "Jokowi", "SBY", "Soeharto", "Habibie", "Megawati", "a", "umum"],
    ["Dimana Ibukota negara Tiongkok? ?", "Shanghai", "Beijing", "Seoul", "Wuhan", "Toyo", "b", "umum"],
    ["Lumpia merupakan makanan khas kota ?", "Makassar", "Solo", "Semarang", "Jakarta", "Bandung", "c", "umum"],
    ["Hewan terbesar di yang pernaah hidup di bumi adalah ?", "Brachiosaurus", "Paus biru", "Hiu paus", "T-Rex", "Mamooth", "b", "umum"],
    ["Ilmu yang mempelajari tentang manusia disebut ?", "Psikologi", "Homologi", "Sosiologi", "Geologi", "Anthropologi", "e", "umum"],
    ["Benua terbesar di dunia adalah ?", "Afrika", "Australia", "Amerika", "Asia", "Antartika", "d", "umum"],
    ["Pada tahun berapa kapal titanic tenggelam ?", "1902", "1912", "1905", "1915", "1820", "b", "umum"],
    ["Oracle merupakan perusahan yang bergerak pada bidang ?", "Otomotif", "Fashion", "Teknologi", "Militer", "Industri", "c", "umum"],
    ["Warna kulit beruang kutub adalah ?", "Cokelat", "Putih", "Hitam", "Transparan", "Pelangi", "d", "umum"],
    ["Candi Borobudur terletak di kota ?", "Yogyakarta", "Surakarta", "Semarang", "Bantul", "Magelang", "e", "umum"],

    ["Penemu sistem opeasi android adalah ?", "Andy Rubin", "Lary Page", "Mark Zuckerberg", "Linus Torvalds", "Bill Gates", "a", "umum"],
    ["Burj Khalifah merupakan bangunan tertinggi yang memiliki ketinggian ?", "621 meter", "828 meter", "932 meter", "1012 meter", "901 meter", "b", "umum"],
    [" Primata tercerdas setelah manusia adalah", "Simpanse", "Orangutan", "Kera", "Monyet", "Gorila", "a", "umum"],
    ["Provinsi terluas di Indonesia adalah ?", "Kalimantan Barat", "Kalomantan Timur", "Sumatera Barat", "Papua", "Papua Barat", "d", "umum"],
    ["Gunung tertinggi di dunia adalah ?", "Trivor", "Makalu", "Krakatau", "Fuji", "Everest", "e", "umum"],
    ["Selain di pulau komodo, hewan komodo juga dapat dijumpaai di ?", "Pulau Rinca", "Sumba", "Pulau Seribu", "Flores ", "Maluku", "a", "umum"],
    ["Berikut yang bukan merupakan tahun kabisat adalah ?", "2000", "2002", "2004", "2016", "2028", "b", "umum"],
    ["Papan catur memiliki kotak-kotak tempat bidak sebanyak ?", "16", "36", "64", "82", "94", "c", "umum"],
    ["Anjing pitbull berasal dari negara?", "Swedia", "Jerman", "Denmark", "Inggris", "Amerika", "d", "umum"],
    ["Jenis batuan terkeras adalah ?", "Platinum", "Emas", "Berlian", "Tembaga", "Uranium", "c", "umum"],

    ["Negara terkaya di dunia adalah ?", "Amerika Serikat", "Saudi Arabia", "Qatar", "China", "Jerman", "c", "umum"],
    ["Mohammed salah adalah pesepakbola asal ?", "Turki", "Mesir", "Iran", "Maroko", "Arab Qatar", "b", "umum"],
    ["Negeri Gajah putih merupakan julukan dari negara ?", "Thailand", "Vietnam", "Malaysia", "Sri Lanka", "India", "a", "umum"],
    ["Ilmuwan yang menemukan teori relativitas adalah ?", "Stephen Hawking", "Darwin", "Albert Einstein", "Nikola Tesla", "Thomas Alfa Edison", "c", "umum"],
    ["Pencipta lukisan monalisa adalah ?", "Rembrandt", "Masaccio", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "e", "umum"],
    ["Ilmuwan yang menemukan lampu pijar adalah ?", "Stephen Hawking", "Darwin", "Albert Einstein", "Nikola Tesla", "Thomas Alfa Edison", "e", "umum"],
    ["Coloseum di Italia terletak di kota ?", "Milan", "Turin", "Roma", "Venesia", "Pisa", "c", "umum"],
    ["Sungai terpanjan di dunia adalah ?", "Amazon", "Mekong", "Nil", "Parana", "Musi", "c", "umum"],
    ["Samudera terluas adalah ?", "Pasifik", "Atlantik", "Hindia", "Arktik", "Antartika", "a", "umum"],
    ["Negara terkecil di dunia adalah ?", "Singapura", "Brunei Darussalam", "Timor Leste", "Vatikan", "Kepulauan Faroe", "d", "umum"],


    // SAINS

    ["Kelelawar dapat bergerak di tempat gelap karena memiliki ?", "Sayap", "Sonar", "Insting", "Naluri", "Mata", "b", "sains"],
    ["Benda terjatuh terjadi karena adanya gaya?", "Gesek", "Pegas", "Gravitasi", "Dorong", "Tarik", "c", "sains"],
    ["Getaran yang merambat disebut dengan ?", "Amplitudo", "Frekuensi", "Periode", "Gelombang", "Bunyi", "d", "sains"],
    ["Miopi merupakan nama lain dari ?", "Rabun jauh", "Rabun dekat", "Rabun Senja", "Kebutaan", "Katarak", "a", "sains"],
    ["Percepatan benda berbanding lurus dengan gaya dan berbanding terbalik dengan massa , adalah bunyi hukum newton ke- ?", "1", "2", "3", "4", "5", "b", "sains"],
    ["Nama unsur pertama dalam tabel periodik adalah ?", "Li", "Ca", "H", "He", "Na", "c", "sains"],
    ["Pasang surut air laut disebabkan oleh adanya ?", "Rotasi bumi", "Gravitasi bulan", "Revolusi bumi", "Revolusi bulan", "Rotasi bulan", "b", "sains"],
    ["Ilmu yang mempelajari tentang pengelompokkan makhluk hidup disebut ?", "Biologi", "Ekologi", "Taksologi", "Psikologi", "Astronomi", "c", "sains"],
    ["Perubahan zat gas menjadi zat cair disebut ?", "Mengembun", "Menyublim", "Menguap", "Mencair", "Mengkristal", "a", "sains"],
    ["Organ yang berfungsi menjaga keseimbangan tubuh adalah ?", "Jantung", "Telinga", "Hati", "Mata", "Sumsum tulang belangan", "b", "sains"],

    ["Kacamata berlensa cekung digunakan untuk membantu penglihatan penderita ?", "Rabun jauh", "Rabun dekat", "Hipermetropi", "Presbiopi", "Rabun senja", "a", "sains"],
    ["Titik terjauh pada getaran disebut ?", "Frekuensi", "Periode", "Gelombang", "Panjang gelombang", "Amplitudo", "e", "sains"],
    ["Tempat terjadinya pertukaran oksigen dan karbondioksida adalah ?", "Diafragma", "Pleura", "Alveolus", "Trakrea", "Ginjal", "c", "sains"],
    ["Hewan yang aktif pada malam hari disebut ?", "Mamalia", "Krepuskular", "Diurnal", "Abnormsl", "Nokturnal", "e", "sains"],
    ["Bintang fajar merupakan julukan untuk planet ?", "Merkurius", "Venus", "Mars", "Uranus", "Neptunus", "b", "sains"],
    ["Yang bukan merupakan jenis jamur adalah ?", "Basidiomycota", "Ascomycota", "Zygomycota", "Fungimycota", "Deuteromycota", "d", "sains"],
    ["Unsur terbesar yang menyusun makhluk hidup adalah ?", "Hidrogen", "Oksigen", "Nitrogen", "Besi", "Karbon", "e", "sains"],
    ["Karat pada besi terjadi karena adanya ?", "Pelapukan", "Nitrifikasi", "Reduksi", "Oksidasi", "Respirasi", "d", "sains"],
    ["Yang merupakan besaran vektor adalah ?", "Massa", "Percepatan", "Tekanan", "Kuat arus", "Volume", "b", "sains"],
    ["Yang bukan termasuk besaran pokok adalah ?", "Intensitas cahaya", "Jumlah zat", "Panjang", "Gaya", "Massa", "d", "sains"],

    ["Unsur kimia yang termasuk non logam adalah ?", "Au", "Zn", "Cu", "He", "Fe", "d", "sains"],
    ["Platypus berkembang biak dengan cara ?", "Membelah diri", "Ovovivipar", "Ovipar", "Vivipar", "Fragmentasi", "b", "sains"],
    ["Amoeba berkembang biak dengan cara ?", "Membelah diri", "Ovovivipar", "Ovipar", "Vivipar", "Fragmentasi", "a", "sains"],
    ["Fase lepasnya sel telur dari ovum disebut dengan ?", "Menstruasi", "Fertilisasi", "Ejakulasi", "Ovulasi", "Menopause", "d", "sains"],
    ["Fase peleburan sel telur dengan sperma disebut dengan ?", "Menstruasi", "Fertilisasi", "Ejakulasi", "Ovulasi", "Menopause", "b", "sains"],
    ["Lapisan terluar dari kulit adalah ?", "Epidermis", "Endodermis", "Hipodermis", "Kelenjar Keringat ", "Dermis", "a", "sains"],
    ["Bagian mata yang berfungsi untuk memfokuskan cahaya adalah ?", "Retina", "Lensa", "Kornea", "Iris", "Pupil", "b", "sains"],
    ["Sendi pada leher termasuk sendi ?", "Putar", "Geser", "Engsel", "Pelana", "Peluru", "a", "sains"],
    ["Yang termasuk tumbuhan monokotil adalah ?", "Mangga", "Jambu biji", "Jagung", "Singkong", "Karet", "c", "sains"],
    ["Partikel yang membentuk cahaya disebut ?", "Photon", "Plasma", "Proton", "Radiasi", "LED", "a", "sains"],

    // TEKNO

    ["Perangkat dalam komputer yang berfungsi untuk menyimpan data sementara adalah ?", "ROM", "RAM", "Floppy", "CD", "Hard Drive", "b", "tekno"],
    ["Teknologi Rontgen pada rumah sakit menggunakan bantuan ?", "Sinar Gama", "Sinar Alpha", "Sinar X", "Sinar Beta", "Sinar UV", "c", "tekno"],
    ["Proses pencampuran bahan bakar dengan udara sebelum pembakaran pada mesin disebut ? ?", "Injeksi", "Tuning", "Akselerasi", "Deselerasi", "Turbulensi", "a", "tekno"],
    ["Komponen pada mobil yang berfungsi untuk membangkitkan listrik pada mobil adalah ?", "Aki", "Radiator", "Suspensi", "PCM", "Alternator", "e", "tekno"],
    ["Yang bukan merupakan perangkat penyimpanan dalam komputer adalah ?", "VGA", "RAM", "ROM", "Disket", "SSD", "a", "tekno"],
    ["Berikut yang bukan merupakan komponen utama dalam sistem jaringan adalah ?", "Router", "Switch", "Repeater", "Mouse", "UTP", "d", "tekno"],
    ["Satuan yang digunakan untuk mengukur kecepatan rotasi mesin adalah ?", "MPH", "RPM", "Horse Power", "KBps", "Hz", "b", "tekno"],
    ["Perangkat yang berfungsi sebagai otak dari sebuah komputer adalah ?", "Memory", "Proccesor", "Mouse", "Keyboard", "Power Supply", "b", "tekno"],
    ["Komponen dalam mobil yang berfungsi mendinginkan mesin adalah ?", "Radiator", "Cooler", "Alternator", "Suspensi", "Motor", "a", "tekno"],
    ["Bahan bakar yang biasa digunakan pada mesin diesel adalah ?", "Bensin", "Minyak Tanah", "Solar", "Aftur", "Gas", "c", "tekno"],

    ["Yang merupakan perangkat masukkan pada komputer adalah ?", "Keyboard", "Speaker", "Monitor", "VGA", "Harddisk", "a", "tekno"],
    ["Teknologi yang digunakan untuk menentukan lokasi dengan bantuan satelit adalah ?", "4G", "5G", "GPS", "Internet", "kompas", "c", "tekno"],
    ["Yang bukan merupakan perusahaan di bidang otomotif adalah ?", "Ford", "Proton", "Ferrari", "Tesla", "Cisco", "e", "tekno"],
    ["Yang merupakan perangkat penyimpanan pada komputer adalah ?", "Keyboard", "Speaker", "Monitor", "VGA", "Harddisk", "e", "tekno"],
    ["Perangkat yang berfungsi mengubah sinyal analog menjadi digital dan sebaliknya adalah ?", "VGA", "Modem", "Proccesor", "ROM", "RAM", "b", "tekno"],
    ["Perusahaan otomotif yang terkenal dengan teknologi mobil listriknya adalah  ?", "Hyundai", "Ferrari", "Honda", "Tesla", "Mitsubishi", "d", "tekno"],
    ["IOT nerupakan kependekan dari ?", "Integrated of Things", "Integrated Online Things", "Internet of Things", "Internet Over Things", "Integrated Over Things", "c", "tekno"],
    ["Pada komputer, monitor termasuk dalam perangkat ?", "Keluaran", "Masukan", "Penyimpanan", "Pemrosesan", "Jaringan", "a", "tekno"],
    ["Bahasa mesin dikenal juga dengan istilah bahasa ?", "Pascal", "ASCII", "Biner", "C", "Java", "c", "tekno"],
    ["Pada komputer, harddisk termasuk dalam perangkat ?", "Keluaran", "Masukan", "Penyimpanan", "Pemrosesan", "Jaringan", "c", "tekno"],

    ["Teknologi yang biasa digunakan pada uang elektronik adalah ?", "NFC", "Wifi", "Bluetooth", "GPS", "Infrared", "a", "tekno"],
    ["Teknologi wireless yang biasa digunakan pada remote klasik adalah ?", "NFC", "Wifi", "Bluetooth", "GPS", "Infrared", "e", "tekno"],
    ["Yang bukan merupakan teknologi wireless adalah ?", "LAN", "Wifi", "NFC", "Bluetooth", "Infrared", "a", "tekno"],
    ["Teknologi yang menggabungkan dunia nyata dengan objek maya  [virtual] adalah ?", "Virtual Reality", "Augmented Reality", "3D", "Hologram", "AI", "b", "tekno"],
    ["Nama lain dari kecerdesan buatan adalah ?", "AR", "VR", "AI", "NFC", "Hologram", "c", "tekno"],
    ["Bagian dari mobil yang berfungsi menerima tekanan dari pembakaran adalah ?", "Radiator", "Alternator", "Akselerator", "Piston", "Motor", "d", "tekno"],
    ["Bagian pada handphone yang berfungsi untuk menangkap suara adalah ?", "Mikrofon", "Speaker", "Headphone", "Earphone", "Bluetooth", "a", "tekno"],
    ["Pada saat terjadi komunikasi, data ditransmisikan dalam satuan ?", "bit", "BYTE", "hz", "KBps", "ms", "a", "tekno"],
    ["Komponen pada listrik yang berfungsi memberi hambatan pada listrik adalah ?", "Trafo", "Resistor", "Dioda", "Kapasitor", "Baterai", "b", "tekno"],
    ["Komponen pada listrik yang berfungsi merubah tegangan listrik adalah ?", "Trafo", "Resistor", "Dioda", "Kapasitor", "Baterai", "a", "tekno"],




    ["Film Jurassic Park disutradai oleh ?", "James Wann", "Todd Phillips", "Steven Spielberg", "James Cameron", "Christoper Nolan", "c", "hiburan"],
    ["Kreator serial Naruto adalah ?", "Akira Toriyama", "Masashi Kishimoto", "Eichiro Oda", "Tite Kubo", "Naoshi Arakawa", "b", "hiburan"],
    ["Justin Bieber adalah seorang penyanyi berkebangsaan ?", "Kanada", "Inggris", "Amerika", "Australia", "Skotlandia", "a", "hiburan"],
    ["Queen adalah band legendaris asal inggris yang dibentuk pada tahun ?", "1972", "1970", "1975", "1973", "1971", "b", "hiburan"],
    ["Berikut yang merupakan karya dari Akira Toriyama adalah ?", "Bleach", "Death Note", "Dragon Ball", "Naruto", "One Piece", "c", "hiburan"],
    ["Aktor yang berperan sebagai Thor dalam film The Avenger adalah ?", "Chriss Evans", "Chriss Pratt", "Chriss Hemsworth", "Robert Downey", "Tom Holland", "c", "hiburan"],
    ["Komik yang berasal dari Korea disebut ?", "Manga", "Manhwa", "Manhua", "Cartoon", "Visual Novel", "b", "hiburan"],
    ["Ubisoft merupakan perusahaan video game yang membuat game ?", "Resident Evil", "Grand Theft Auto", "FIFA", "Pro Evolution Soccer", "Far Cry", "e", "hiburan"],
    ["Berikut yang merupakan film karya sutradara Christoper Nolan adalah ?", "Jurassic Park", "Intersetellar", "Spider-Man", "Shawsank Redemption", "Jaws", "b", "hiburan"],
    ["One Piece merupakan serial komik tekenal yang dibuat oleh ?", "Eichiro Oda", "Masashi Kishimoto", "Akira Toriyama", "Tite Kubo", "Hideaki Sorachi", "a", "hiburan"],

    ["Pemeran Peter Parker dalam film Spider-Man karya Sam Raimi adalah ?", "Andrew Garfield", "Tom Holland", "Tom Hardy", "Chriss Evans", "Tobey Maguire", "e", "hiburan"],
    ["Hogwarts School adalah salah satu tempat ikonik  yang terdapat dalam film ?", "Game of Thrones", "Harry Potter", "Titanic", "Jurassic Park", "The Avenger", "b", "hiburan"],
    ["Robert Downey Jr dalam film Avenger berperan sebagai ?", "Steve Roger", "Tony Stark", "Peter Parker", "Bucky Barnes", "Nick Fury", "b", "hiburan"],
    ["Berikut film yang bercerita tentang detektif adalah ?", "Interstellar", "The Shawsank Redemption", "Harry Potter", "Sherlock Holmes", "Inception", "d", "hiburan"],
    ["Pemeran utama dalam serial manga Dragon Ball adalah ?", "Gohan", "Trunks", "Goku", "Vegeta", "Bulma", "c", "hiburan"],
    ["Love me Like You Do merupakan lagu yang dipopulerkan oleh ?", "Taylor Swift", "Rihanna", "Ellie Goulding", "Bruno Mars", "Justin Bieber", "c", "hiburan"],
    ["Studio yang memproduksi video game Grand Theft Auto adalah ?", "Rockstar", "EA Games", "Ubisoft", "Capcom", "Nintendo", "a", "hiburan"],
    ["Berikut yang bukan merupakan perusahaan konsol video game adalah ?", "Nintendo", "Sony", "Sega", "Microsoft", "EA Games", "e", "hiburan"],
    ["Umbrella merupakan lagu yang dipopulerkan oleh ?", "Taylor Swift", "Rihanna", "Ellie Goulding", "Bruno Mars", "Justin Bieber", "b", "hiburan"],
    ["Komik yang berasal dari China disebut ?", "Manga", "Manhwa", "Manhua", "Cartoon", "Visual Novel", "c", "hiburan"],

    ["Pemeran Jack dalam film Titanic adalah ?", "Leonardo di Caprio", "Tom Cruise", "Bradd Pitt", "Gary Oldman", "Antonio Banderas", "a", "hiburan"],
    ["Thanos merupakan tokoh antagonis pada film ?", "Spider Man", "Avenger", "Batman", "Superman", "Titanic", "b", "hiburan"],
    ["Joker merupakan tokoh antagonis pada film ?", "Spider Man", "Avenger", "Batman", "Superman", "Titanic", "c", "hiburan"],
    ["Gotham merupakan kota fiktif yang terdapat pada film ?", "Spider Man", "Avenger", "Batman", "Superman", "Titanic", "c", "hiburan"],
    ["Video game bertemakan Zombie buatan CAPCOM adalah ?", "The Last of Us", "Days Gone", "The Walking Dead", "DreadOut", "Resident Evil", "e", "hiburan"],
    ["Video game bertemakan horror buatan studio asal Indonesia, Digital Happiness adalah ?", "The Last of Us", "Days Gone", "The Walking Dead", "DreadOut", "Resident Evil", "d", "hiburan"],
    ["The Beatless merupakan band legendaris asal ?", "Amerika Serikat", "Inggris", "Kanada", "Australia", "Irlandia", "b", "hiburan"],
    ["Westlife merupakan boyband legendaris yang berasal dari ?", "Amerika Serikat", "Inggris", "Kanada", "Australia", "Irlandia", "e", "hiburan"],
    ["Film Parasite yang berhasil memenangi piala oscar berasal dari negara ?", "Amerika Serikat", "Inggris", "Jepang", "Korea Selatan", "Kanada", "d", "hiburan"],
    ["Berikut yang bukan merupakan film dari marvel studio adalah ?", "Spider Man", "Iron Man", "Superman", "Captain America", "Thor", "c", "hiburan"]


]

let soal1 = []
for (var i = 0; i < soal.length; i++) {
    const obj = {
        id: 1,
        question: soal[i][0],
        optA: soal[i][1],
        optB: soal[i][2],
        optC: soal[i][3],
        optD: soal[i][4],
        optE: soal[i][5],
        key: soal[i][6],
        cat: soal[i][7],

    }
    soal1.push(obj)
}
body.innerHTML = JSON.stringify(soal1)