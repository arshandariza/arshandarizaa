// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a, #desktop-menu a'); // Ambil semua link di kedua menu

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Tutup menu mobile (jika terbuka) dan smooth scroll setelah link di-klik
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
            }
            // Untuk smooth scroll jika menggunakan link anchor #
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                // e.preventDefault(); // Hapus default jika html class="scroll-smooth" sudah cukup
                // const targetId = href.substring(1);
                // const targetElement = document.getElementById(targetId);
                // if (targetElement) {
                //     targetElement.scrollIntoView({ behavior: 'smooth' });
                // }
            }
        });
    });


    // --- Update Tahun di Footer ---
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- Fungsi untuk Tombol Copy Email (akan Anda tambahkan di section Contact) ---
    // (Sama seperti kode contoh sebelumnya)
});