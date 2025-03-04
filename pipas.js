// Data konsumsi daya per jam (dalam kWh) untuk setiap perangkat
const powerConsumption = {
    komputer: 0.2,    // 200 Watt = 0.2 kWh
    kulkas: 0.1,      // 100 Watt = 0.1 kWh
    mesin_cuci: 0.5,  // 500 Watt = 0.5 kWh
    kipas_angin: 0.05,// 50 Watt = 0.05 kWh
    televisi: 0.1,    // 100 Watt = 0.1 kWh
    rice_cooker: 0.8  // 800 Watt = 0.8 kWh
};

// Faktor emisi karbon (kg CO2 per kWh)
const carbonEmissionFactor = 0.5; // 0.5 kg CO2 per kWh

// Pohon yang dibutuhkan untuk menyerap 1 kg CO2 per tahun
const treesPerKgCO2 = 0.02; // 1 pohon menyerap 50 kg CO2 per tahun

// Riwayat perhitungan
let history = [];

// Inisialisasi grafik
const ctx = document.getElementById('carbonChart').getContext('2d');
let carbonChart;

function calculateCarbon() {
    const device = document.getElementById('device').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const hours = parseInt(document.getElementById('hours').value);
    const days = parseInt(document.getElementById('days').value);

    if (!device || isNaN(quantity) || isNaN(hours) || isNaN(days)) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    // Hitung total konsumsi energi dalam kWh
    const energyConsumption = powerConsumption[device] * quantity * hours * days;

    // Hitung jejak karbon dalam kg CO2
    const carbonFootprint = energyConsumption * carbonEmissionFactor;

    // Hitung jumlah pohon yang dibutuhkan
    const treesRequired = carbonFootprint * treesPerKgCO2;

    // Tampilkan hasil
    document.getElementById('carbonFootprint').textContent = carbonFootprint.toFixed(2);
    document.getElementById('treesRequired').textContent = treesRequired.toFixed(2);

    // Tampilkan grafik
    updateChart(carbonFootprint, treesRequired);

    // Tambahkan ke riwayat
    addToHistory(device, quantity, hours, days, carbonFootprint, treesRequired);

    // Tampilkan hasil
    document.getElementById('result').classList.add('visible');
}

function updateChart(carbonFootprint, treesRequired) {
    if (carbonChart) {
        carbonChart.destroy();
    }

    carbonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jejak Karbon (kg CO2)', 'Pohon yang Dibutuhkan'],
            datasets: [{
                label: 'Hasil Perhitungan',
                data: [carbonFootprint, treesRequired],
                backgroundColor: ['#ff6384', '#36a2eb'],
                borderColor: ['#ff6384', '#36a2eb'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function addToHistory(device, quantity, hours, days, carbonFootprint, treesRequired) {
    const historyItem = {
        device,
        quantity,
        hours,
        days,
        carbonFootprint,
        treesRequired
    };

    history.push(historyItem);
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Perangkat:</strong> ${item.device} |
            <strong>Jejak Karbon:</strong> ${item.carbonFootprint.toFixed(2)} kg CO2 |
            <strong>Pohon:</strong> ${item.treesRequired.toFixed(2)}
        `;
        historyList.appendChild(li);
    });
}