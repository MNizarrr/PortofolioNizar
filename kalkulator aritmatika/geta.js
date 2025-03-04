function hitungJumlahTakHingga() {

    const sukuPertama = parseFloat(document.getElementById('suku-pertama').value);
    const rasio = parseFloat(document.getElementById('rasio').value);

    if (isNaN(sukuPertama)) {
        alert("Mohon isi suku pertama dengan angka yang valid!");
        return;
    }
    if (isNaN(rasio)) {
        alert("Mohon isi rasio dengan angka yang valid!");
        return;
    }

    if (Math.abs(rasio) >= 1) {
        alert("Deret tidak konvergen! Rasio (r) harus memenuhi |r| < 1.");
        return;
    }

    const jumlahTakHingga = sukuPertama / (1 - rasio);

    document.getElementById('hasil').innerText = `Jumlah deret tak hingga adalah ${jumlahTakHingga.toFixed(2)}`;
}