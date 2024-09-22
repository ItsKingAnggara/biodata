// Cek status CSS dari localStorage
let cssVisible = localStorage.getItem('cssVisible') === 'true';

// Set CSS berdasarkan status saat ini
document.getElementById('cssLink').disabled = !cssVisible;

document.addEventListener('keydown', function(event) {
    // Periksa apakah F7 ditekan
    if (event.key === 'F7') {
        cssVisible = !cssVisible; // Toggle status
        document.getElementById('cssLink').disabled = !cssVisible; // Set CSS sesuai status

        // Simpan status di localStorage
        localStorage.setItem('cssVisible', cssVisible);
    }
});