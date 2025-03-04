function hitungSukuKeN() {

    const sukuPertama = parseFloat(document.getElementById('suku-pertama').value);
    const beda = parseFloat(document.getElementById('beda').value);
    const sukuKe = parseInt(document.getElementById('suku-ke').value);

    if (isNaN(sukuPertama) || isNaN(beda) || isNaN(sukuKe)) {
        alert("Mohon isi semua field dengan angka yang valid!");
        return;
    }

    const sukuN = sukuPertama + (sukuKe - 1) * beda;

    document.getElementById('hasil').innerText = `Suku ke-${sukuKe} adalah ${sukuN}`;
}