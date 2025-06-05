// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    // Ambil semua link di kedua menu untuk menutup menu mobile saat link di-klik
    const allNavLinks = document.querySelectorAll('.c-navbar__link, .c-navbar__mobile-link');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('is-open'); // Kelas CSS .is-open akan mengatur display: block;
        });
    }

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Hanya tutup jika menu mobile sedang terbuka
            if (mobileMenu && mobileMenu.classList.contains('is-open')) {
                 mobileMenu.classList.remove('is-open');
                 // Update juga atribut aria-expanded pada tombol
                 if (mobileMenuButton) {
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                 }
            }
            // Untuk smooth scroll, class="scroll-smooth" di <html> sudah cukup untuk link anchor #
        });
    });

    // --- Skills Accordion ---
    const accordionButtons = document.querySelectorAll('.c-accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const icon = button.querySelector('.c-accordion-icon');
            const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;

            button.setAttribute('aria-expanded', !isExpanded);

            if (content) {
                content.classList.toggle('is-open'); // Kelas .is-open akan mengatur display: block;
            }

            if (icon) {
                icon.textContent = isExpanded ? '+' : '–'; // Ganti teks ikon
            }
        });
    });


    // --- Update Tahun di Footer ---
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- Fungsi untuk Tombol Copy Email ---
    const emailTextElement = document.getElementById('emailToCopy');
    const copyEmailButton = document.getElementById('copyEmailButton');
    const copyFeedbackElement = document.getElementById('copyFeedback');

    if (copyEmailButton && emailTextElement && copyFeedbackElement) {
        copyEmailButton.addEventListener('click', function() {
            const emailText = emailTextElement.textContent; // Ambil teks dari span

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(emailText)
                    .then(() => {
                        // Berhasil menyalin
                        copyFeedbackElement.textContent = 'Email tersalin!';
                        copyFeedbackElement.style.color = '#F472B6'; // brand-pink-dark (atau warna sukses lainnya)
                        copyFeedbackElement.style.display = 'inline-block';
                        setTimeout(() => {
                            copyFeedbackElement.style.display = 'none';
                        }, 2000); // Sembunyikan pesan feedback setelah 2 detik
                    })
                    .catch(err => {
                        // Gagal menyalin
                        console.error('Gagal menyalin email: ', err);
                        copyFeedbackElement.textContent = 'Gagal menyalin! Coba manual.';
                        copyFeedbackElement.style.color = 'red'; // Warna error
                        copyFeedbackElement.style.display = 'inline-block';
                         setTimeout(() => {
                            copyFeedbackElement.style.display = 'none';
                            copyFeedbackElement.style.color = ''; // Reset warna jika perlu
                        }, 3000); // Tampilkan pesan error sedikit lebih lama
                    });
            } else {
                // Fallback atau pesan jika navigator.clipboard tidak didukung (sangat jarang untuk browser modern)
                console.warn('navigator.clipboard API tidak tersedia.');
                copyFeedbackElement.textContent = 'Fitur copy tidak didukung browser ini.';
                copyFeedbackElement.style.color = 'orange'; // Warna warning
                copyFeedbackElement.style.display = 'inline-block';
                setTimeout(() => {
                    copyFeedbackElement.style.display = 'none';
                    copyFeedbackElement.style.color = '';
                }, 3000);
            }
        });
    } else {
        // Log jika elemen-elemen untuk copy email tidak ditemukan, membantu debugging
        if (!emailTextElement) console.error('ID "emailToCopy" tidak ditemukan.');
        if (!copyEmailButton) console.error('ID "copyEmailButton" tidak ditemukan.');
        if (!copyFeedbackElement) console.error('ID "copyFeedback" tidak ditemukan.');
    }
});