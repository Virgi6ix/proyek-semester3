# Prompt Execution — Eksekusi Proyek Awal

Salin prompt ini ke coding agent yang dapat membaca folder proyek.

---

Kamu bertindak sebagai **senior frontend engineer dan UI/UX engineer**. Bangun dan rapikan frontend untuk aplikasi **Sistem Informasi Pengelolaan Data Anggota dan Kegiatan Karang Taruna Berbasis Web**, dengan nama UI sementara RuangTaruna.

Sebelum mengerjakan:
1. Baca `AGENTS.md`, `README.md`, `src/App.jsx`, dan `src/data/mockData.js`.
2. Anggap `AGENTS.md` sebagai kontrak kerja dan `src/data/mockData.js` sebagai sumber data dummy utama.
3. Jangan memperluas ruang lingkup atau menambahkan backend/database.

## Target eksekusi awal
- Pastikan proyek berjalan dengan React + Vite + Tailwind CSS.
- Pastikan dashboard, data anggota, kegiatan, jadwal, dokumentasi, pengumuman, laporan, profil organisasi, dan halaman publik bisa dibuka melalui navigasi.
- Pastikan CRUD frontend untuk anggota/kegiatan/pengumuman berfungsi pada state lokal.
- Pastikan pencarian/filter, kalender bulanan, dan tampilan responsif berfungsi.
- Rapikan aksesibilitas dasar: label form, focus state, tombol yang memiliki nama jelas, dan struktur heading.
- Pertahankan palet cokelat `#49362B`, cream `#F7F1E7`, dan hijau army `#65704D`.
- Beri label yang jujur untuk fitur simulasi; jangan menyebutnya autentikasi atau penyimpanan permanen.

## Batasan
- Jangan membuat backend, database, API, autentikasi sungguhan, fitur keuangan, absensi, atau pendaftaran online pada tahap ini.
- Jangan menambah dependensi tanpa alasan teknis yang jelas.
- Jangan menulis ulang seluruh aplikasi jika perbaikan lokal cukup.
- Jangan menggunakan data pribadi nyata.
- Jangan menghapus dokumen kontrak atau mengganti teknologi utama.

## Cara bekerja
1. Beri ringkasan singkat rencana dan file yang akan disentuh.
2. Implementasikan perubahan dalam langkah kecil.
3. Jalankan `npm install` bila dependensi belum terpasang.
4. Jalankan `npm run build` dan perbaiki error build yang ditemukan.
5. Laporkan tes yang benar-benar dilakukan, hasilnya, dan kendala yang belum terverifikasi.

## Format laporan akhir
- Ringkasan perubahan.
- Daftar file yang berubah.
- Perintah tes dan hasil aktual.
- Batasan yang masih ada.
- Jangan mengklaim tes atau validasi yang tidak dijalankan.
