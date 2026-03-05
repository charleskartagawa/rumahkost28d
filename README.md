# 🏠 Rumah Kost 28D - Premium Boarding House Landing Page

Landing page modern, responsif, dan elegan yang dirancang khusus untuk mempromosikan **Rumah Kost 28D** di Jakarta Barat. *Website* ini dibuat untuk memberikan informasi lengkap mengenai fasilitas, tipe kamar, galeri hunian, dan mengotomatisasi proses *booking* melalui integrasi WhatsApp yang dinamis.

🌍 **Live Preview:** [https://kost28d.vercel.app](https://kost28d.vercel.app)

## ✨ Fitur Utama (Key Features)

- 📱 **Dynamic WhatsApp Booking:** Setiap tipe kamar (Standard, Deluxe, Premium) memiliki tombol *booking* yang akan men-*generate* draf pesan WhatsApp secara otomatis sesuai dengan nama kamar yang dipilih oleh calon penghuni.
- 🖼️ **Interactive Image Gallery:** Dilengkapi dengan fitur *Lightroom/Modal pop-up* kustom. Pengunjung dapat mengklik foto di bagian galeri untuk melihat versi ukuran penuh beserta *caption*-nya tanpa harus berpindah halaman.
- ❓ **FAQ Accordion:** Daftar pertanyaan umum (FAQ) yang dibuat dengan gaya *accordion* responsif, menghemat ruang visual sekaligus menyajikan informasi dengan rapi.
- 🗺️ **Integrated Maps:** Menampilkan detail alamat lengkap jam operasional survei, serta integrasi langsung dengan Google Maps *iframe* agar calon penghuni mudah menemukan lokasi kost.
- 💫 **Smooth Animations:** Menggunakan *Intersection Observer API* untuk memberikan efek *fade-in* yang sangat halus (*smooth*) pada elemen-elemen *website* saat di-*scroll*, memberikan kesan premium.
- 🎨 **Modern UI/UX:** Tata letak *mobile-first* yang bersih, tipografi yang nyaman dibaca (menggunakan *font* Poppins), dan palet warna yang profesional (Biru, Emas, dan Putih bersih).

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Proyek ini murni menggunakan teknologi *frontend* standar tanpa ketergantungan *framework* atau *library* berat untuk memastikan *loading* super cepat:

- **HTML5:** Struktur semantik.
- **CSS3:** Custom Variables, Flexbox, CSS Grid, efek *glassmorphism* pada navigasi, dan transisi kurva *bezier*.
- **Vanilla JavaScript (ES6+):** Logika *smooth scrolling*, *active state* pada navigasi, *modal image*, *accordion* FAQ, dan *WhatsApp link generator*.
- **FontAwesome 6:** Untuk ikon vektor.

## 📂 Struktur Proyek (Project Structure)

\`\`\`text
rumahkost28d/
├── index.html               # Struktur utama landing page
├── style.css                # Styling antarmuka (UI/UX)
├── script.js                # Interaktivitas UI & generator link WhatsApp
└── README.md                # Dokumentasi proyek
\`\`\`

## 🚀 Cara Menjalankan (How to Run Locally)

1. *Clone repository* ini ke komputer lokal Anda:
   \`git clone https://github.com/charleskartagawa/rumahkost28d.git\`
2. Buka folder proyek di Code Editor Anda (VS Code, Cursor, dll).
3. Buka file `index.html` langsung di *browser*, atau gunakan ekstensi **Live Server** untuk *hot-reload*.

## ⚙️ Konfigurasi Nomor WhatsApp

Untuk menerima pesan *booking* dari *website* ini, Anda perlu mengatur nomor WhatsApp tujuan di dalam file `script.js`. Cari bagian komentar `// --- Integrasi WhatsApp Dinamis untuk Tipe Kamar ---` dan ubah variabel `nomorWA`:
