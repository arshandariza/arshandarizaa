// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Fungsi untuk Tombol Copy Email ---
    const emailTextElement = document.getElementById('emailToCopy');
    const copyEmailButton = document.getElementById('copyEmailButton');
    const copyFeedbackElement = document.getElementById('copyFeedback');

    if (copyEmailButton && emailTextElement && copyFeedbackElement) {
        copyEmailButton.addEventListener('click', function() {
            const emailText = emailTextElement.textContent; // Ambil teks email
            navigator.clipboard.writeText(emailText)
                .then(() => {
                    // Berhasil menyalin
                    copyFeedbackElement.style.display = 'inline'; // Tampilkan pesan "Tersalin!"
                    setTimeout(() => {
                        copyFeedbackElement.style.display = 'none'; // Sembunyikan setelah 2 detik
                    }, 2000);
                })
                .catch(err => {
                    // Gagal menyalin
                    console.error('Gagal menyalin email: ', err);
                    // Anda bisa menambahkan alert atau pesan error lain untuk pengguna jika diperlukan
                    // alert('Oops, gagal menyalin email.');
                });
        });
    }

    // --- Fungsi untuk Skill yang Bisa Di-expand/Collapse (Contoh Konseptual) ---
    // CATATAN: Untuk membuat ini berfungsi, Anda PERLU MENGUBAH STRUKTUR HTML
    // di bagian "MY SKILLS". Setiap skill item (judul, ikon +/-, dan deskripsi)
    // perlu dikelompokkan dengan benar. Kode di bawah ini adalah contoh
    // dan MUNGKIN TIDAK LANGSUNG BERFUNGSI dengan HTML Anda saat ini.

    /*
    const skillHeaders = document.querySelectorAll('.skill-toggle-header'); // Anda perlu menambahkan kelas ini ke header skill di HTML

    skillHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const skillContent = this.nextElementSibling; // Asumsi konten ada setelah header
            const iconElement = this.querySelector('.skill-toggle-icon'); // Anda perlu menambahkan kelas ini ke ikon +/-

            if (skillContent) {
                skillContent.classList.toggle('hidden'); // Menggunakan kelas 'hidden' dari Tailwind

                if (iconElement) {
                    if (skillContent.classList.contains('hidden')) {
                        iconElement.textContent = '+';
                    } else {
                        iconElement.textContent = '-';
                    }
                }
            }
        });
    });
    */

    // Anda bisa menambahkan fungsi JavaScript lain di sini
    // Misalnya untuk smooth scrolling ketika menu navigasi di klik

});