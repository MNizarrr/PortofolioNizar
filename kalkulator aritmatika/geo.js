function hitungSukuKeN() {
    // Ambil nilai dari input
    const sukuPertama = parseFloat(document.getElementById('suku-pertama').value);
    const rasio = parseFloat(document.getElementById('rasio').value);
    const sukuKe = parseInt(document.getElementById('suku-ke').value);

    // Validasi input
    if (isNaN(sukuPertama)) {
        alert("Mohon isi suku pertama dengan angka yang valid!");
        return;
    }
    if (isNaN(rasio)) {
        alert("Mohon isi rasio dengan angka yang valid!");
        return;
    }
    if (isNaN(sukuKe) || sukuKe < 1) {
        alert("Mohon isi suku ke-n dengan angka yang valid (n >= 1)!");
        return;
    }

    // Hitung suku ke-n
    const sukuN = sukuPertama * Math.pow(rasio, sukuKe - 1);

    // Tampilkan hasil
    document.getElementById('hasil').innerText = `Suku ke-${sukuKe} adalah ${sukuN}`;
}