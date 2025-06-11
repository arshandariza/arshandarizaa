// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
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

if (copyEmailButton && emailTextElement) {
    copyEmailButton.addEventListener('click', function() {
        const emailText = emailTextElement.textContent;

        navigator.clipboard.writeText(emailText)
            .then(() => {
                // --- JIKA BERHASIL ---
                // Tampilkan alert sukses yang sederhana
                alert('Email berhasil disalin ke clipboard!');
            })
            .catch(err => {
                // --- JIKA GAGAL ---
                console.error('Gagal menyalin email: ', err);
                // Tampilkan alert gagal yang sederhana
                alert('Gagal menyalin email. Silakan coba salin secara manual.');
            });
    });
} else {
    // Bagian ini untuk membantu debugging jika ada elemen yang tidak ditemukan
    if (!emailTextElement) console.error('ID "emailToCopy" tidak ditemukan.');
    if (!copyEmailButton) console.error('ID "copyEmailButton" tidak ditemukan.');
}

    const achievementSwiper = new Swiper('.achievement-slider', {
        // Opsi default (untuk mobile)
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        
        // Titik navigasi (pagination)
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // Breakpoints untuk mengubah tampilan di layar yang lebih besar
        breakpoints: {
            // Jika lebar layar 768px atau lebih besar (tampilan tablet/desktop)
            768: {
              slidesPerView: 3,    // Tampilkan 3 slide sekaligus
              spaceBetween: 20,    // Jarak antar slide sedikit lebih besar
              centeredSlides: false, // Tidak perlu center jika semua terlihat
              loop: false,           // Loop tidak perlu jika semua slide sudah terlihat
            }
        }
    });

});