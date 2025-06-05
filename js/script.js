// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a, #desktop-menu a');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
            }
            // Hapus preventDefault jika menggunakan scroll-smooth di HTML
            // const href = link.getAttribute('href');
            // if (href && href.startsWith('#')) {
            //     const targetId = href.substring(1);
            //     const targetElement = document.getElementById(targetId);
            //     if (targetElement) {
            //         targetElement.scrollIntoView({ behavior: 'smooth' });
            //     }
            // }
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
            const emailText = emailTextElement.textContent;
            navigator.clipboard.writeText(emailText)
                .then(() => {
                    copyFeedbackElement.textContent = 'Email tersalin!'; // Pastikan pesan benar
                    copyFeedbackElement.style.display = 'inline';
                    setTimeout(() => {
                        copyFeedbackElement.style.display = 'none';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Gagal menyalin email: ', err);
                    copyFeedbackElement.textContent = 'Gagal menyalin!';
                    copyFeedbackElement.style.color = 'red'; // Kasih tahu user kalau gagal
                    copyFeedbackElement.style.display = 'inline';
                     setTimeout(() => {
                        copyFeedbackElement.style.display = 'none';
                        copyFeedbackElement.style.color = ''; // Reset warna
                    }, 2000);
                });
        });
    }
});