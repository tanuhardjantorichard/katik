document.getElementById("hitung-luas").
addEventListener("click", hitung_luas);

function hitung_luas() {
    let sisi_luas = document.getElementById("sisi-luas").value;
    let hitung_luas = sisi_luas * sisi_luas;
    document.getElementById("tampil-rumusLuas").innerHTML="L = S x S";
    document.getElementById("tampil-sisiLuas").innerHTML="L = " + sisi_luas + " x " + sisi_luas;
    document.getElementById("output_luas").innerHTML="L = " + hitung_luas + " m^2"; 
}

function hapus_semuaLuas() {
    document.getElementById("tampil-rumusLuas").innerHTML="";
    document.getElementById("tampil-sisiLuas").innerHTML="";
    document.getElementById("output_luas").innerHTML="";
}


document.getElementById("hitung-keliling").
addEventListener("click", hitung_keliling);

function hitung_keliling() {
    let sisi_keliling = document.getElementById("sisi-keliling").value;
    let hitung_keliling = sisi_keliling * 4;
    document.getElementById("tampil-rumusKeliling").innerHTML="K = 4 x S";
    document.getElementById("tampil-sisiKeliling").innerHTML="K = 4 x " + sisi_keliling;
    document.getElementById("output_keliling").innerHTML="K = " + hitung_keliling + " m";
}

function hapus_semuaKeliling() {
    document.getElementById("tampil-rumusKeliling").innerHTML="";
    document.getElementById("tampil-sisiKeliling").innerHTML="";
    document.getElementById("output_keliling").innerHTML="";
}
