# RuangTaruna — Frontend Prototype

Frontend prototype untuk **Sistem Informasi Pengelolaan Data Anggota dan Kegiatan Karang Taruna Berbasis Web**.

## Preview isi dokumen

- `src/App.jsx` — seluruh halaman UI: dashboard, data anggota, kegiatan, jadwal, dokumentasi, pengumuman, laporan, profil organisasi, halaman publik, dan modal form.
- `src/data/mockData.js` — data dummy anggota, kegiatan, pengumuman, dan galeri.
- `src/index.css` — Tailwind directives, font, reset, dan gaya global.
- `tailwind.config.js` — token warna brand cokelat, cream, hijau army, shadow, dan font.
- `AGENTS.md` — kontrak kerja awal untuk AI/developer.
- `PROMPT_EXECUTION.md` — prompt siap pakai untuk memulai dan melanjutkan eksekusi.
- `index.html`, `src/main.jsx`, `vite.config.js`, `postcss.config.js`, `package.json` — entry point dan konfigurasi toolchain.

## Teknologi

- React 18
- Vite 6
- Tailwind CSS 3
- lucide-react

## Menjalankan proyek

Pastikan Node.js versi LTS sudah terpasang.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite, biasanya `http://localhost:5173`.

Untuk memeriksa build:

```bash
npm run build
npm run preview
```

## Fitur prototype

- Navigasi dashboard admin dan halaman publik.
- CRUD frontend untuk data anggota, kegiatan, dan pengumuman.
- Pencarian anggota, kegiatan, pengumuman, dan dokumentasi serta filter status.
- Edit profil organisasi dan isi pengumuman pada state sesi.
- Halaman publik menampilkan agenda dari data kegiatan dan hanya pengumuman berstatus terbit; tabel anggota tetap berada di bagian admin.
- Kalender jadwal berdasarkan bulan.
- Galeri dokumentasi dengan pencarian.
- Ringkasan laporan dan cetak melalui dialog print browser.
- Responsif untuk desktop, tablet, dan ponsel.

## Batasan yang diketahui

- Belum ada backend, database, autentikasi nyata, upload file nyata, atau API.
- State CRUD tidak bertahan setelah browser dimuat ulang.
- Perubahan profil organisasi dan pengumuman juga hanya berlaku selama sesi browser berjalan.
- Login/logout belum berupa autentikasi; tombol hanya simulasi.
- Data kontak, organisasi, dan anggota adalah contoh dan perlu diganti sebelum penggunaan nyata.
- Foto galeri mengambil gambar demo dari Unsplash dan memerlukan internet.
- Halaman publik dibuat sebagai preview interaktif di dalam aplikasi; untuk produksi, perlu aturan akses yang membatasi data pribadi.

## Palet desain

- Cokelat: `#49362B`
- Cokelat gelap: `#34261F`
- Cream: `#F7F1E7`
- Paper: `#FFFCF7`
- Hijau army: `#65704D`
- Sage: `#E7EBDD`

## Struktur folder

```text
karang-taruna-web/
├── public/
├── src/
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── AGENTS.md
├── PROMPT_EXECUTION.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
