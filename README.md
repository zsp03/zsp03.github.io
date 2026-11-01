# Portofolio — Zulfiqry Saadputra

Situs portofolio statis untuk GitHub Pages. Tanpa framework, tanpa proses build —
cukup HTML, CSS, dan JavaScript. Tampilan mengikuti `DESIGN.md` (sistem desain
Ollama): kanvas putih, tipografi rounded, pill hitam, kartu bergaris rambut, dan
satu permukaan gelap untuk bagian kontak.

## Menjalankan secara lokal

```bash
python3 -m http.server 8000
```

Buka `http://localhost:8000`.

## Struktur file

| File | Isi |
|---|---|
| `index.html` | Seluruh konten halaman |
| `styles.css` | Token desain, layout, komponen, responsive |
| `script.js` | Menu mobile, scroll-spy, animasi reveal, konfigurasi kontak |
| `assets/` | Mockup SVG proyek dan favicon |
| `.nojekyll` | Menonaktifkan pemrosesan Jekyll di GitHub Pages |

## Mengubah kontak

Semua tautan kontak diatur di bagian atas `script.js`:

```js
const contact = {
  email: "hello@example.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
};
```

Ganti dengan data Anda. Jika salah satu nilainya dikosongkan, tautan terkait
otomatis dihapus dari halaman. Placeholder di `index.html` hanya fallback jika
JavaScript tidak berjalan.

## Mengganti mockup proyek

Gambar proyek saat ini berupa ilustrasi SVG monokrom di `assets/`:

- `portal-alumni.svg`
- `monitoring-publikasi.svg`
- `posyandu.svg`
- `qr-ticket.svg`

Untuk memakai screenshot asli, letakkan file baru di `assets/`, lalu ubah
`src` pada `<img>` terkait di `index.html`. Rasio gambar adalah `800 × 420`
(sekitar 1.9:1); gunakan rasio serupa agar kartu tetap rapi. Jika rasio berbeda,
`object-fit: cover` akan memotong tepinya.

## Deploy ke GitHub Pages

### Opsi A — Situs pengguna (`username.github.io`)

1. Buat repository bernama `<username>.github.io`.
2. Push seluruh isi folder ini ke branch `main`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
6. Situs tersedia di `https://<username>.github.io`.

### Opsi B — Situs proyek (repository apa pun)

1. Push isi folder ini ke repository (misalnya `portofolio`).
2. Buka **Settings → Pages**.
3. Pilih **Deploy from a branch → main → / (root)**.
4. Situs tersedia di `https://<username>.github.io/<nama-repo>/`.

Semua path di proyek ini relatif, jadi kedua opsi bekerja tanpa perubahan.
File `.nojekyll` memastikan GitHub Pages tidak memproses file melalui Jekyll.

### Custom domain (opsional)

Tambahkan file `CNAME` berisi domain Anda, lalu atur DNS sesuai dokumentasi
GitHub Pages.

## Catatan

- Font display memakai **Nunito** dari Google Fonts sebagai pengganti open-source
  untuk SF Pro Rounded; body memakai system sans dan kode memakai system mono.
  Jika Google Fonts gagal dimuat, situs tetap tampil dengan font sistem.
- Navigasi memakai smooth scroll, scroll-spy, dan animasi reveal yang otomatis
  dinonaktifkan saat pengguna mengaktifkan `prefers-reduced-motion`.
- Bagian kontak adalah satu-satunya permukaan gelap di halaman, sesuai aturan
  desain untuk menjaga satu momen fokus per halaman.
