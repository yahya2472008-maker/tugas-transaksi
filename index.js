const modeToggleBtn = document.getElementById('modeToggleBtn');
const bodyElement = document.body;
const closeBtn = document.getElementById('closeBtn');
const transactionList = document.getElementById('transactionList');

// Data Simulasi
const transactions = [
    { id: "SI/00077", tanggal: "21/7/2026", pelanggan: "POS Customer", total: "Rp15.000" },
    { id: "SI/00076", tanggal: "19/7/2026", pelanggan: "POS Customer", total: "Rp45.000" }
];

// Render Data
function renderTransactions() {
    transactionList.innerHTML = transactions.map(t => `
        <div class="card">
            <h3>No. Invoice: ${t.id}</h3>
            <p><strong>Tanggal:</strong> ${t.tanggal}</p>
            <p><strong>Pelanggan:</strong> ${t.pelanggan}</p>
            <p><strong>Total:</strong> ${t.total}</p>
        </div>
    `).join('');
}

// Toggle Dark Mode
modeToggleBtn.addEventListener('click', () => {
    const isDark = bodyElement.getAttribute('data-theme') === 'dark';
    bodyElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    modeToggleBtn.innerHTML = isDark ? '🌙 Mode Dark' : '☀️ Mode Light';
});

closeBtn.addEventListener('click', () => alert('Riwayat Transaksi ditutup.'));

renderTransactions();