/* === css/styles.css (Lengkap dan Terbaru) === */

/* --- Global & Reset Dasar --- */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #FEF6F6; /* brand-pink-light */
  color: #4B5563; /* brand-gray-med */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

/* --- Helper Classes (jika diperlukan, Tailwind sudah banyak) --- */
.container { /* Anda bisa menggunakan ini atau .container dari Tailwind di HTML */
  width: 100%;
  max-width: 1200px; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

/* --- Komponen Tombol --- */
.c-button {
  display: inline-block;
  font-weight: 600; 
  padding: 12px 30px;
  border-radius: 8px; 
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  border: 1px solid transparent; 
}
.c-button:hover {
    transform: translateY(-2px); 
}
.c-button--primary {
  background-color: #2D3748; /* brand-button-bg */
  color: #FFFFFF;
  font-size: 1.125rem; 
}
.c-button--primary:hover {
  background-color: #1A202C; /* brand-button-hover */
}
.c-button--copy { 
  background-color: #FFFFFF;
  color: #1F2937;
  font-size: 0.875rem; 
  padding: 8px 16px;
  text-transform: uppercase;
  border: 1px solid #D1D5DB;
}
.c-button--copy:hover {
  background-color: #F3F4F6; 
}


/* --- Navbar --- */
.c-navbar {
  background-color: #FFFFFF; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); 
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
}
.c-navbar__container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c-navbar__logo {
  font-size: 1.25rem; 
  font-weight: 700; 
  color: #1F2937; 
  text-decoration: none;
}
.c-navbar__mobile-toggle {
  display: none; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #1F2937;
}
.c-navbar__desktop-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.c-navbar__desktop-menu li + li {
  margin-left: 2rem;
}
.c-navbar__link {
  font-size: 0.95rem; 
  color: #4B5563;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}
.c-navbar__link:hover {
  color: #F472B6;
}
.c-navbar__mobile-menu {
  display: none; 
  background-color: #FFFFFF;
  position: absolute;
  top: 100%; 
  left: 0;
  right: 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-top: 1px solid #E5E7EB; 
}
.c-navbar__mobile-menu.is-open { /* Ditambah/dihapus oleh JS */
  display: block;
}
.c-navbar__mobile-list {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0; 
}
.c-navbar__mobile-link {
  display: block;
  padding: 0.75rem 1rem; 
  text-align: center;
  text-decoration: none;
  color: #4B5563;
  transition: background-color 0.3s ease;
}
.c-navbar__mobile-link:hover {
  background-color: #FFF1F2; /* pink-50 dari Tailwind */
}


/* --- Hero Section --- */
.c-hero {
  position: relative;
  min-height: calc(100vh - 70px); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 1.25rem;
  overflow: hidden; 
  background-color: #FEF6F6; 
}
.c-hero__bg-image-container {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; 
}
.c-hero__bg-image {
  width: 100%;
  max-width: 1000px; 
  transform: scale(1.15); /* Sedikit diperbesar sesuai permintaan */
  height: auto;
  object-fit: contain; 
  opacity: 0.6; 
}
.c-hero__content {
  position: relative;
  z-index: 1;
}
.c-hero__supertitle {
  font-size: 2rem; /* Lebih kecil dari sebelumnya, sesuai permintaan */
  font-weight: 700; 
  color: #A0AEC0; 
  margin-bottom: 0.1rem; 
}
.c-hero__title {
  font-size: 3.5rem; 
  font-weight: 800; 
  color: #1F2937; 
  margin-top: 0;
  line-height: 1.1;
}
.c-hero__subtitle {
  margin-top: 1.5rem;
  max-width: 42rem; 
  margin-left: auto;
  margin-right: auto;
  font-size: 1.125rem; 
  line-height: 1.75;
  color: #4B5563; 
}
.c-hero__cta {
  margin-top: 2.5rem;
}


/* --- Section Styling Global --- */
.c-section {
  padding: 4rem 0;
}
@media (min-width: 768px) {
  .c-section { padding: 5rem 0; }
}
.c-section__container {
  width: 100%;
  max-width: 1100px; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem; 
  padding-right: 1.25rem;
}
.c-section__title {
  font-size: 2.25rem; 
  font-weight: 700; 
  text-align: center;
  color: #1F2937; 
  margin-bottom: 3rem; 
}
@media (min-width: 640px) {
  .c-section__title { font-size: 2.5rem; } 
}
.c-section__title--left-align {
  text-align: left;
  margin-bottom: 0.5rem; 
}
.c-section__cta {
  text-align: center;
  margin-top: 2.5rem; 
}

/* --- Experience Section (Timeline) --- */
.c-timeline {
  position: relative;
  max-width: 900px; 
  margin: 2rem auto;
  padding: 2rem 0;
}
.c-timeline::before { /* Garis tengah utama */
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px; 
  background-color: #FBCFE8; /* brand-pink-med */
  transform: translateX(-50%);
  z-index: 0;
}
.c-timeline__item {
  padding: 10px 0; 
  position: relative;
  width: calc(50% - 40px); /* Ruang untuk konten dan jarak dari garis */
  margin-bottom: 50px; 
  z-index: 1;
}
.c-timeline__item:nth-child(odd) {
  float: left;
  clear: right; 
  margin-right: 40px; 
  text-align: right;
}
.c-timeline__item:nth-child(even) {
  float: right;
  clear: left; 
  margin-left: 40px; 
  text-align: left;
}
/* Clear floats */
.c-timeline::after {
  content: "";
  display: table;
  clear: both;
}
.c-timeline__dot { 
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #F472B6; /* brand-pink-dark */
  border: 4px solid #FEF6F6; /* Warna background section */
  border-radius: 50%;
  top: 15px; 
  z-index: 2;
}
.c-timeline__item:nth-child(odd) .c-timeline__dot {
  right: -50px; /* (jarak margin - setengah lebar dot) */
  transform: translateX(50%); /* Pusatkan dot relatif terhadap posisi right */
}
.c-timeline__item:nth-child(even) .c-timeline__dot {
  left: -50px;
  transform: translateX(-50%); /* Pusatkan dot relatif terhadap posisi left */
}
.c-timeline__content {
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #E5E7EB; 
}
.c-timeline__item-title {
  font-size: 1.25rem; 
  font-weight: 700; 
  color: #1F2937; 
  margin-bottom: 0.25rem;
}
.c-timeline__item-date {
  font-size: 0.875rem; 
  color: #F472B6; 
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.c-timeline__item-description {
  font-size: 0.95rem;
  line-height: 1.6;
}


/* --- My Skills Section --- */
.c-skills__container {
  display: grid;
  gap: 2rem;
}
@media (min-width: 768px) { 
  .c-skills__container {
    grid-template-columns: auto 1fr; 
    gap: 3rem;
    align-items: flex-start; 
  }
  .c-skills__title-column .c-section__title--left-align {
    white-space: nowrap; 
    margin-bottom: 0.5rem;
  }
}
.c-skills__subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: #4B5563;
  text-align: left;
  margin-bottom: 0;
}
.c-skills__accordion-column {
  width: 100%;
}
.c-accordion-item {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.c-accordion-button {
  background: none;
  border: none;
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1F2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.c-accordion-button:hover {
  background-color: #F9FAFB;
}
.c-accordion-icon {
  font-size: 1.25rem;
  color: #4B5563;
  transition: transform 0.3s ease;
  font-weight: bold; 
}
.c-accordion-button[aria-expanded="true"] .c-accordion-icon {
  transform: rotate(45deg); /* Ubah + jadi x */
}
.c-accordion-content {
  padding: 0 1.5rem 1.5rem 1.5rem;
  font-size: 0.95rem; 
  line-height: 1.7;
  color: #4B5563; 
  display: none; 
  border-top: 1px solid #E5E7EB;
  margin-top: -1px; 
}
.c-accordion-content.is-open { /* Ditambah/dihapus oleh JS */
  display: block;
}


/* --- Project & Achievement Cards --- */
.c-card {
  background-color: #FFFFFF;
  border-radius: 12px; 
  box-shadow: 0 4px 12px rgba(0,0,0,0.08); 
  overflow: hidden;
  border: 1px solid #F3F4F6; 
  margin-bottom: 2rem; 
}
.c-project-card { 
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) { 
  .c-project-card {
    flex-direction: row;
    align-items: center; 
  }
}
.c-project-card__image-area {
  flex-shrink: 0;
  background-color: #F9FAFB; 
  padding: 2rem; 
}
@media (min-width: 768px) { 
  .c-project-card__image-area {
    width: 45%; 
    padding: 3rem;
  }
}
.c-project-card__image {
  display: block;
  width: 100%;
  height: auto;
  max-height: 400px; 
  object-fit: contain;
}
.c-project-card__content-area {
  padding: 1.5rem;
}
@media (min-width: 768px) { 
  .c-project-card__content-area {
    padding: 2.5rem; 
    flex-grow: 1;
  }
}
.c-project-card__title {
  font-size: 1.5rem; 
  font-weight: 700; 
  color: #1F2937; 
  margin-bottom: 0.75rem; 
}
.c-project-card__description {
  font-size: 1rem; 
  line-height: 1.75; 
}

.c-achievement-card { 
  padding: 1.5rem;
  text-align: center;
}
@media (min-width: 768px) { 
  .c-achievement-card { padding: 2rem; }
}
.c-achievement-card__images-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; 
  margin-bottom: 1.5rem; 
  flex-wrap: wrap; 
}
.c-achievement-card__image {
  max-width: 200px; 
  height: auto;
  border-radius: 8px; 
  object-fit: contain;
  background-color: #F9FAFB; 
  padding: 0.5rem; 
  border: 1px solid #E5E7EB;
}
.c-achievement-card__content {}
.c-achievement-card__title {
  font-size: 1.5rem; 
  font-weight: 700; 
  color: #1F2937; 
  margin-bottom: 0.5rem; 
}
.c-achievement-card__credential {
  font-size: 0.875rem; 
  color: #6B7280; 
  margin-bottom: 1rem; 
}
.c-achievement-card__description {
  font-size: 1rem; 
  line-height: 1.75;
  max-width: 48rem; 
  margin: 0 auto; 
}

/* --- Contact CTA Section --- */
.c-contact-cta {
  background-color: #111827; /* gray-900 */
  color: #FFFFFF;
  padding: 3rem 1.25rem;
}
.c-contact-cta__container {
  max-width: 700px; 
  margin: 0 auto;
  background-color: #1F2937; /* brand-gray-dark */
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
}
.c-contact-cta__header {
  margin-bottom: 2rem;
}
.c-contact-cta__title {
  font-size: 1.875rem; 
  font-weight: 700; 
  line-height: 1.2;
}
.c-contact-cta__subtitle {
  font-size: 1.25rem; 
  color: #9CA3AF; 
  font-weight: 500; 
  margin-top: 0.25rem;
}
.c-contact-cta__email-group {
  background-color: #111827; 
  padding: 1rem;
  border-radius: 8px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem; 
}
@media (min-width: 500px) { 
  .c-contact-cta__email-group {
    flex-direction: row;
    justify-content: space-between;
  }
}
.c-contact-cta__email-link {
  display: inline-flex;
  align-items: center;
  color: #FFFFFF; 
  font-weight: 500; 
  text-decoration: underline;
  font-size: 1rem;
}
.c-contact-cta__email-icon {
  width: 1.25rem; 
  height: 1.25rem; 
  margin-right: 0.5rem; 
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(130deg) brightness(105%) contrast(101%); /* Membuat SVG putih */
}
.c-contact-cta__feedback {
  font-size: 0.875rem; 
  color: #F472B6; 
  min-height: 1.25rem; 
  margin-top: 0.5rem;
}
.c-contact-cta__footer-info {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #374151; 
}
.c-contact-cta__footer-name {
  font-size: 1.125rem; 
  font-weight: 700; 
  margin-bottom: 0.5rem;
}
.c-contact-cta__footer-desc {
  font-size: 0.875rem; 
  color: #D1D5DB; 
  max-width: 36rem; 
  margin: 0 auto 1rem auto;
  line-height: 1.6;
}

/* --- Footer --- */
.c-footer {
  background-color: #FFFFFF; 
  padding: 2.5rem 0; 
  color: #4B5563; 
}
.c-footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
}
.c-footer__grid {
  display: grid;
  gap: 2rem; 
  text-align: center;
}
@media (min-width: 768px) { 
  .c-footer__grid {
    grid-template-columns: repeat(3, 1fr); 
    text-align: left;
  }
}
.c-footer__column {}
.c-footer__title {
  font-size: 1rem; 
  font-weight: 700; 
  color: #1F2937; 
  margin-bottom: 1rem; 
}
.c-footer__description {
  font-size: 0.875rem; 
  line-height: 1.6;
}
.c-footer__links, .c-footer__contact-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.c-footer__links li + li, .c-footer__contact-links li + li {
  margin-top: 0.5rem; 
}
.c-footer__link, .c-footer__contact-link {
  font-size: 0.875rem; 
  text-decoration: none;
  color: #4B5563; 
  transition: color 0.3s ease;
}
.c-footer__link:hover, .c-footer__contact-link:hover {
  color: #F472B6; 
  text-decoration: underline;
}
.c-footer__contact-link {
  display: inline-flex;
  align-items: center;
}
.c-footer__contact-icon {
  width: 1rem; 
  height: 1rem; 
  margin-right: 0.5rem; 
}
.c-footer__copyright {
  text-align: center;
  font-size: 0.875rem; 
  margin-top: 2rem; 
  padding-top: 1.5rem; 
  border-top: 1px solid #E5E7EB; 
}

/* --- Mobile Responsiveness (Tambahan untuk Navbar dan Timeline) --- */
@media (max-width: 767px) { /* Target mobile screens (di bawah md breakpoint Tailwind) */
    .c-navbar__desktop-menu {
        display: none;
    }
    .c-navbar__mobile-toggle {
        display: block;
    }

    .c-hero__supertitle { font-size: 1.5rem; }
    .c-hero__title { font-size: 2.5rem; }
    .c-hero__subtitle { font-size: 1rem; }
    .c-hero__cta { font-size: 1rem; padding: 10px 20px; }


    .c-timeline {
        padding: 1rem 0;
    }
    .c-timeline::before { 
        left: 20px; 
        transform: translateX(0);
    }
    .c-timeline__item,
    .c-timeline__item--right {
        width: 100%; 
        float: none;
        clear: both;
        padding-left: 50px; 
        padding-right: 10px;
        margin-left: 0;
        margin-right: 0;
        text-align: left !important; 
        margin-bottom: 30px; /* Jarak antar item di mobile */
    }
    .c-timeline__dot {
        left: 10px; 
        right: auto;
        transform: none;
        top: 0px; /* Posisikan dot di awal konten item */
    }
    .c-timeline__content {
      margin-left: 0; 
      padding: 15px; /* Padding lebih kecil di mobile */
    }
    .c-timeline__item-title { font-size: 1.125rem; }


    .c-skills__container {
        grid-template-columns: 1fr; 
    }
    .c-section__title--left-align {
        text-align: center; 
        margin-bottom: 2rem;
    }

    .c-project-card {
        flex-direction: column; /* Stack project card di mobile */
    }
    .c-project-card__image-area {
        width: 100%; /* Gambar full width di mobile */
        padding: 1rem;
    }
    .c-project-card__content-area {
        padding: 1rem;
    }

    .c-achievement-card__images-container {
        flex-direction: column; /* Stack gambar achievement di mobile */
        gap: 0.5rem;
    }
    .c-achievement-card__image {
        max-width: 180px; /* Sedikit lebih kecil di mobile jika perlu */
    }

    .c-contact-cta__container { padding: 1.5rem; }
    .c-contact-cta__title { font-size: 1.5rem; }
    .c-contact-cta__subtitle { font-size: 1rem; }
    .c-contact-cta__email-group { flex-direction: column; }


    .c-footer__grid {
        grid-template-columns: 1fr; 
        text-align: center;
    }
    .c-footer__title {
        margin-top: 1rem; 
    }
    .c-footer__column:first-child .c-footer__title {
        margin-top: 0;
    }
}