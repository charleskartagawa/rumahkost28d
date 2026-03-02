const header = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Memilih semua tautan yang berawalan '#' (termasuk di Hero dan Footer)
const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

allAnchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Abaikan jika href hanya "#" saja
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Kompensasi navbar
                behavior: 'smooth'
            });
            // Tutup menu mobile jika tautan diklik dari dalam nav-menu
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        // Menggunakan window.scrollY yang lebih modern
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close-modal');
const galeriItems = document.querySelectorAll('.galeri-item');

if (galeriItems && modal && modalImg && modalCaption && closeModal) {
    galeriItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-src');
            const captionText = item.querySelector('.galeri-overlay span').innerText;

            modalImg.src = imgSrc;
            modalCaption.innerText = captionText;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

const elementsToFade = document.querySelectorAll('.fasilitas-card, .kamar-card, .testimoni-card, .tentang-text, .tentang-image, .lokasi-info, .galeri-item');

elementsToFade.forEach(el => {
    el.classList.add('fade-in');
});

const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// --- Integrasi WhatsApp Dinamis untuk Tipe Kamar ---
const btnKamar = document.querySelectorAll('.kamar-card button');

btnKamar.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // Mengambil nama kamar dari elemen h3 di dalam kartu yang sama
        const namaKamar = this.parentElement.querySelector('h3').innerText;

        // Membuat draf pesan
        const pesan = `Halo Admin Kost 28D, saya melihat website Anda dan tertarik menanyakan ketersediaan untuk tipe kamar: *${namaKamar}*. Boleh minta info lebih lanjut?`;

        // Nomor WA tujuan (Ganti dengan nomor asli nanti)
        const nomorWA = "6289629857172";

        // Mengarahkan ke tab WhatsApp baru
        const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    });
});