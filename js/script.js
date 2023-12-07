function toggleKeliling() {
    const luas = document.querySelector('#luas-section');
    luas.style.display = 'none';

    const keliling = document.querySelector('#keliling-section');
    keliling.style.display = 'flex';
}

function toggleLuas() {
    const keliling = document.querySelector('#keliling-section');
    keliling.style.display = 'none';

    const luas = document.querySelector('.input-section');
    luas.style.display = 'flex';
}

function hitungLuasSegitiga() {
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;

    if (alas === "" || tinggi === "") {
        alert("alas atau tinggi tidak boleh kosong");
        return;
    }

    var luas = 0.5 * alas * tinggi;

    document.getElementById("hasil-luas").innerHTML = "Luas segitiga adalah: " + luas;
}

function hitungKelilingSegitiga() {
    var sisiA = parseFloat(document.getElementById('sisi-a').value);
    var sisiB = parseFloat(document.getElementById('sisi-b').value);
    var sisiC = parseFloat(document.getElementById('sisi-c').value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
        alert("Sisi segitiga harus memiliki panjang yang positif dan valid.");
        return;
    }

    var keliling = sisiA + sisiB + sisiC;

    document.getElementById("hasil-keliling").innerHTML = "Keliling segitiga adalah: " + keliling;
}

function reloadPage() {
    location.reload();
}