# 🌿 Jungle Rescue: Petualangan Ranger Cilik

> Game edukasi interaktif mengenal jenis-jenis hewan untuk anak TK — berbasis HTML, CSS, dan JavaScript.

![Status](https://img.shields.io/badge/status-prototype-green)
![Tech](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JS-blue)
![Kelompok](https://img.shields.io/badge/Kelompok%205-Sistem%20Multimedia-orange)

## 📖 Deskripsi

**Jungle Rescue** adalah game edukasi berbasis web yang dirancang khusus untuk anak TK. Pemain berperan sebagai **Ranger Cilik** yang menjelajahi hutan untuk membantu hewan-hewan yang tersesat. Game ini mengenalkan jenis-jenis binatang melalui 5 level interaktif yang mencakup pengenalan suara, habitat, makanan, siluet, dan misi penyelamatan.

Game ini dibuat sebagai tugas **Sistem Multimedia — Kelompok 5** dengan tujuan mengenalkan jenis-jenis binatang melalui media interaktif berbasis web.

## 🎮 Cara Menjalankan

1. **Clone atau download** repository ini
2. **Buka file `index.html`** langsung di browser (Chrome/Firefox/Safari)
3. Tidak perlu server, database, atau instalasi tambahan
4. Untuk pengalaman terbaik, gunakan XAMPP atau live server:
   ```
   Akses melalui: http://localhost/Sismul/jungle-rescue/
   ```

## 📁 Struktur Folder

```
jungle-rescue/
│
├── index.html          # Halaman utama game
├── style.css           # Styling CSS lengkap
├── script.js           # Logic game JavaScript
├── README.md           # Dokumentasi ini
├── GUIDEBOOK.md        # Guideline book multimedia
│
└── assets/
    ├── images/
    │   ├── background/     # Background hutan (3 file PNG)
    │   ├── animals/        # Gambar 10 hewan (PNG)
    │   ├── food/           # Gambar makanan hewan (PNG)
    │   ├── habitat/        # Gambar habitat (PNG)
    │   ├── icons/          # Ikon UI (PNG)
    │   └── ui/             # Elemen UI kayu (PNG)
    │
    └── sounds/
        ├── animals/        # Suara hewan (MP3)
        ├── effects/        # Sound effect (MP3)
        └── music/          # Musik latar (MP3)
```

## 🎯 Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🔊 **Tebak Suara Hewan** | Level 1: Dengarkan suara, tebak hewannya |
| 🏡 **Hewan & Habitat** | Level 2: Cocokkan hewan dengan tempat tinggalnya |
| 🍎 **Beri Makan Hewan** | Level 3: Pilih makanan yang benar untuk hewan |
| 👤 **Tebak Bayangan** | Level 4: Tebak hewan dari siluetnya |
| 🎯 **Misi Penyelamatan** | Level 5: Gabungan semua tantangan |
| ⭐ **Sistem Bintang** | 0 salah = 3⭐, 1-2 salah = 2⭐, >2 salah = 1⭐ |
| 💾 **Save Progress** | Progress tersimpan otomatis di localStorage |
| 🔊 **Audio Manager** | BGM, SFX, suara hewan, toggle on/off |
| 📱 **Responsive** | Mobile-first, terasa seperti game mobile |
| 🎨 **Animasi** | Pulse, bounce, shake, confetti, floating leaves |

## 🐾 Hewan dalam Game

| Hewan | Nama | Habitat | Makanan |
|-------|------|---------|---------|
| 🦁 | Singa | Hutan | Daging |
| 🐘 | Gajah | Hutan | Rumput |
| 🐒 | Monyet | Pohon | Pisang |
| 🦒 | Jerapah | Padang Rumput | Daun |
| 🐄 | Sapi | Peternakan | Rumput |
| 🐱 | Kucing | Peternakan | Ikan |
| 🐰 | Kelinci | Padang Rumput | Wortel |
| 🐦 | Burung | Pohon | Biji |
| 🦆 | Bebek | Sungai | Biji |
| 🐟 | Ikan | Sungai | Plankton |

## 🔄 Cara Mengganti Asset

### Mengganti Gambar Hewan:
1. Siapkan gambar PNG/WEBP (rekomendasi: 512x512px, transparan)
2. Letakkan di folder `assets/images/animals/`
3. Nama file harus sesuai: `lion.png`, `elephant.png`, dll.
4. Jika ingin mengubah path, edit di `script.js` bagian `ASSETS.images.animals`

### Mengganti Audio:
1. Siapkan file MP3 (rekomendasi: <200KB, 1-3 detik untuk SFX)
2. Letakkan di folder yang sesuai:
   - Suara hewan → `assets/sounds/animals/`
   - Sound effect → `assets/sounds/effects/`
   - Musik latar → `assets/sounds/music/`
3. Nama file harus sesuai dengan yang ada di `script.js` bagian `ASSETS.sounds`

### Mengganti Background:
1. Siapkan gambar PNG/WEBP (rekomendasi: 1080x1920px atau lebih)
2. Letakkan di `assets/images/background/`
3. Nama file: `jungle-home.png`, `jungle-level.png`, `jungle-game.png`

> **Tips:** Semua path asset terpusat di objek `ASSETS` di awal file `script.js`. Anda hanya perlu mengubah path di satu tempat.

## 🛠️ Teknologi

- **HTML5** — Struktur semantik
- **CSS3** — Styling, animasi, responsive design, filter siluet
- **JavaScript (Vanilla)** — Game logic, audio management, localStorage
- **Google Fonts (Nunito)** — Tipografi ramah anak
- **Web Audio API** — Pengelolaan suara

## ⚠️ Catatan

- Game menggunakan **emoji sebagai fallback** jika gambar belum tersedia
- Semua asset bersifat **lokal**, tidak ada koneksi internet yang diperlukan
- **Tidak ada data sensitif** yang disimpan; hanya progress game di localStorage
- Dioptimalkan untuk **perangkat mobile** dengan ukuran tombol minimal 48px

## 👥 Tim Pengembang

**Kelompok 5 — Sistem Multimedia**

---

*Dibuat dengan 🌿 untuk tugas Sistem Multimedia*
