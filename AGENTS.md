# AGENTS.md — Kontrak Awal RuangTaruna

## 1. Identitas proyek
Bangun frontend **Sistem Informasi Pengelolaan Data Anggota dan Kegiatan Karang Taruna Berbasis Web**. Nama UI sementara: **RuangTaruna**.

## 2. Source of Truth
Urutan acuan bila ada konflik:
1. `AGENTS.md` untuk batasan dan aturan pengerjaan.
2. `README.md` untuk cara menjalankan proyek dan ringkasan fitur.
3. `src/data/mockData.js` untuk bentuk dan isi data dummy.
4. `src/App.jsx` untuk perilaku dan susunan UI yang berjalan.
5. Permintaan eksplisit terbaru dari pemilik proyek, selama tidak melanggar batasan di atas; jika mengubah arsitektur atau ruang lingkup, perbarui dokumen terkait.

Jangan menduplikasi definisi data yang sama di banyak tempat bila bisa diambil dari satu sumber.

## 3. Sasaran tahap ini
- Frontend saja menggunakan React + Vite + Tailwind CSS.
- Menggunakan data dummy lokal.
- Menghadirkan dashboard admin dan halaman informasi publik.
- Membuat interaksi UI yang bisa didemokan: navigasi, pencarian, filter, modal form, tambah/edit/hapus state lokal, dan cetak halaman.
- Menjaga struktur tetap sederhana dan mudah dipahami mahasiswa pemula.

## 4. Batasan keras
- Jangan menambahkan backend, database, API, autentikasi sungguhan, pembayaran, chat otomatis, atau fitur di luar konsep tanpa persetujuan eksplisit.
- Jangan mengklaim state frontend sebagai penyimpanan permanen.
- Jangan mengklaim login/logout sebagai keamanan sungguhan.
- Jangan menampilkan nomor telepon atau data pribadi anggota nyata di halaman publik.
- Jangan menambahkan dependensi baru kecuali benar-benar diperlukan dan alasannya dijelaskan.
- Jangan mengganti React-Vite atau Tailwind CSS.
- Jangan melakukan refactor besar jika perubahan kecil cukup menyelesaikan tugas.
- Jangan mengganti palet utama tanpa persetujuan.

## 5. Fitur dalam ruang lingkup
1. Dashboard: ringkasan anggota, kegiatan, dan pengumuman.
2. Data anggota: daftar, pencarian, filter status, tambah, edit, hapus.
3. Kegiatan: daftar, pencarian, filter status, tambah, edit, hapus.
4. Jadwal: kalender bulanan dan agenda.
5. Dokumentasi: galeri dan pencarian.
6. Pengumuman: daftar, tambah, edit, hapus, status draft/terbit.
7. Laporan: ringkasan anggota/kegiatan dan cetak melalui browser.
8. Profil organisasi: sejarah, visi, misi, alamat, kontak contoh.
9. Halaman publik: beranda, agenda, pengumuman, dan tautan ke informasi organisasi.
10. Login/logout hanya placeholder UI pada tahap frontend.

## 6. Aturan desain
- Brand: cokelat `#49362B`, cokelat gelap `#34261F`, cream `#F7F1E7`, paper `#FFFCF7`, hijau army `#65704D`, sage `#E7EBDD`.
- Nuansa SaaS modern, rapi, hangat, ringan, sedikit futuristik; hindari visual ramai.
- Gunakan komponen konsisten untuk tombol, badge status, panel, tabel, avatar, dan modal.
- Responsif pada lebar ponsel, tablet, dan desktop.
- Gunakan label yang jelas, fokus keyboard yang terlihat, dan kontras teks yang layak.
- Gunakan ikon `lucide-react` yang sudah tersedia sebelum menambah library ikon lain.

## 7. Aturan implementasi
- Gunakan komponen React fungsional dan hooks.
- Data contoh berada di `src/data/mockData.js`.
- Hindari hardcode data yang sama pada banyak komponen jika bisa memakai data source yang ada.
- Semua aksi harus memberikan respons UI yang jelas.
- Untuk operasi yang hanya simulasi, tulis keterangan simulasi secara jujur.
- Jangan membuat fitur yang terlihat interaktif tetapi tidak mempunyai aksi; jika belum didukung, tampilkan pesan yang menjelaskan batasannya.
- Pertahankan penamaan file yang sudah ada kecuali ada alasan teknis.
- Jangan memasukkan secret, credential, atau data pribadi ke repo.

## 8. Protokol kerja
Sebelum mengubah kode:
1. Baca `AGENTS.md`, `README.md`, dan file relevan.
2. Jelaskan singkat file yang akan diubah dan hasil yang dituju.
3. Kerjakan perubahan sekecil mungkin.
4. Jalankan `npm run build` jika lingkungan memungkinkan.
5. Periksa console/error dan responsivitas jika browser preview tersedia.
6. Perbarui README atau data source bila perubahan mengubah perilaku/struktur.

## 9. Definisi selesai
Pekerjaan dianggap selesai bila:
- Tujuan permintaan terpenuhi tanpa menambah scope.
- Build berhasil, atau kendala build dijelaskan.
- Navigasi/aksi terkait bekerja dan tidak ada error runtime yang diketahui.
- Tampilan tetap konsisten dengan palet dan responsif.
- Dokumen acuan diperbarui bila kontrak atau perilaku berubah.
- Jawaban akhir menyebut file yang diubah, cara tes, hasil tes, dan batasan yang masih ada.

## 10. Prioritas
Kebenaran perilaku > aksesibilitas dan kejelasan > konsistensi UI > efek dekoratif. Jangan mengorbankan fungsi inti demi animasi atau hiasan.
