# 📘 GUIDEBOOK — Jungle Rescue: Petualangan Ranger Cilik

**Guideline Book Sistem Multimedia**
Kelompok 5

---

## 1. Latar Belakang

Pendidikan anak usia dini (TK) memerlukan metode pembelajaran yang interaktif dan menyenangkan. Salah satu topik penting dalam pendidikan anak adalah pengenalan jenis-jenis binatang. Dengan perkembangan teknologi web, media interaktif berbasis browser menjadi solusi yang mudah diakses dan tidak memerlukan instalasi khusus.

Proyek **Jungle Rescue: Petualangan Ranger Cilik** dikembangkan sebagai game edukasi berbasis web yang menggabungkan berbagai elemen multimedia untuk menciptakan pengalaman belajar yang menarik bagi anak TK.

## 2. Tujuan Game

- **Mengenalkan jenis-jenis binatang** kepada anak TK melalui media interaktif
- **Mengajarkan klasifikasi hewan** berdasarkan suara, habitat, dan makanan
- **Meningkatkan kemampuan kognitif** melalui aktivitas mencocokkan dan menebak
- **Menerapkan konsep multimedia** dalam media pembelajaran interaktif
- **Mengembangkan game edukasi** yang ringan, responsif, dan mudah diakses

## 3. Target Pengguna

| Aspek | Spesifikasi |
|-------|-------------|
| Usia | 4-6 tahun (anak TK) |
| Perangkat | Smartphone, tablet, laptop |
| Kemampuan membaca | Minimal/belum lancar |
| Pendamping | Orang tua/guru (opsional) |

### Implikasi Desain untuk Target Pengguna:
- Ikon dan gambar besar sebagai fokus utama
- Teks minimal, menggunakan bahasa Indonesia sederhana
- Warna cerah dan kontras tinggi
- Tombol besar (minimal 48px) agar mudah disentuh
- Instruksi visual, bukan tekstual
- Feedback langsung (suara + visual) saat benar/salah
- Navigasi sederhana tanpa menu kompleks

## 4. Konsep Multimedia

### 4.1 Definisi Multimedia
Multimedia adalah penggunaan gabungan berbagai jenis media (teks, gambar, audio, video, animasi) dalam satu sistem terintegrasi untuk menyampaikan informasi atau hiburan.

### 4.2 Penerapan dalam Game
Game ini menerapkan konsep multimedia melalui:

| Jenis Media | Penerapan dalam Game |
|-------------|---------------------|
| **Teks** | Instruksi level, nama hewan, feedback |
| **Gambar** | Hewan, habitat, makanan, background, ikon UI |
| **Audio** | Suara hewan, sound effect, musik latar |
| **Animasi** | Transisi screen, feedback benar/salah, confetti |
| **Interaktivitas** | Tap-to-select, navigasi level, progress system |

### 4.3 Prinsip Multimedia yang Diterapkan
1. **Prinsip Multimedia (Mayer)**: Menggunakan kombinasi visual dan audio untuk meningkatkan pemahaman
2. **Prinsip Kedekatan Spasial**: Gambar dan label ditempatkan berdekatan
3. **Prinsip Modality**: Menggunakan audio sebagai pelengkap visual
4. **Prinsip Koherensi**: Tidak ada elemen dekoratif yang mengganggu pembelajaran

## 5. Alur Permainan

```
┌─────────────┐
│   Loading    │
│   Screen     │
└──────┬───────┘
       │
┌──────▼───────┐
│    Home      │
│   Screen     │
└──────┬───────┘
       │ [Klik Play]
┌──────▼───────┐
│ Level Select │◄──────────────────────────┐
│   Screen     │                           │
└──────┬───────┘                           │
       │ [Pilih Level]                     │
┌──────▼───────┐                           │
│   Gameplay   │                           │
│ Level 1-5    │                           │
└──────┬───────┘                           │
       │ [Selesai]                         │
┌──────▼───────┐                           │
│Level Complete│──[Pilih Level]────────────┘
│   / Victory  │──[Main Lagi]──► Restart Level
└──────────────┘
```

## 6. Penjelasan Level 1-5

### Level 1: Tebak Suara Hewan 🔊
- **Mekanisme**: Pemain mendengar suara hewan, lalu memilih hewan yang benar dari 4 pilihan
- **Jumlah soal**: 5 soal acak
- **Tujuan edukasi**: Mengenalkan suara-suara hewan
- **Elemen multimedia**: Audio suara hewan + gambar hewan

### Level 2: Hewan & Habitat 🏡
- **Mekanisme**: Pemain melihat satu hewan, lalu memilih habitat yang sesuai dari 3 pilihan
- **Jumlah soal**: 5 soal acak
- **Tujuan edukasi**: Mengajarkan tempat tinggal hewan
- **Contoh**: Ikan → Sungai, Burung → Pohon, Sapi → Peternakan

### Level 3: Beri Makan Hewan 🍎
- **Mekanisme**: Pemain melihat hewan yang lapar, lalu memilih makanan yang cocok dari 3 pilihan
- **Jumlah soal**: 5 soal acak
- **Tujuan edukasi**: Mengajarkan jenis makanan hewan
- **Contoh**: Monyet → Pisang, Kelinci → Wortel, Kucing → Ikan

### Level 4: Tebak Bayangan 👤
- **Mekanisme**: Pemain melihat siluet/bayangan hewan, lalu menebak hewan yang benar dari 4 pilihan
- **Jumlah soal**: 5 soal acak
- **Tujuan edukasi**: Mengenali bentuk tubuh hewan
- **Teknik**: Menggunakan CSS filter `brightness(0)` untuk membuat siluet

### Level 5: Misi Penyelamatan 🎯
- **Mekanisme**: Level final berupa mini adventure gabungan
- **Jumlah ronde**: 3 ronde misi
- **Setiap ronde terdiri dari 3 tahap**:
  1. Kenali suara hewan yang tersesat
  2. Pilih makanan yang sesuai
  3. Antar hewan ke habitat yang benar
- **Tujuan edukasi**: Menguji pemahaman komprehensif tentang hewan

## 7. Elemen Media yang Digunakan

### 7.1 Gambar
| Kategori | Jumlah | Format | Deskripsi |
|----------|--------|--------|-----------|
| Hewan | 10 | PNG | Gambar kartun hewan transparan |
| Background | 3 | PNG | Latar hutan untuk setiap screen |
| Makanan | 5 | PNG | Gambar makanan hewan |
| Habitat | 5 | PNG | Gambar lingkungan habitat |
| Ikon | 7 | PNG | Ikon UI (play, star, lock, dll.) |
| UI | 4 | PNG | Elemen dekoratif (papan kayu, dll.) |

### 7.2 Audio
| Kategori | Jumlah | Format | Deskripsi |
|----------|--------|--------|-----------|
| Suara Hewan | 7 | MP3 | Suara khas setiap hewan |
| Sound Effect | 6 | MP3 | Click, correct, wrong, yeay, win, unlock |
| Musik Latar | 1 | MP3 | BGM hutan yang loop |

### 7.3 Animasi CSS
| Animasi | Penggunaan |
|---------|-----------|
| `pulse` | Tombol play berdenyut |
| `bounce` / `bounceIn` | Hewan muncul, jawaban benar |
| `shake` | Kartu bergetar saat salah |
| `floatLeaf` | Daun melayang di background |
| `floatAnimal` | Hewan dekoratif melayang |
| `confettiFall` | Partikel confetti saat menang |
| `starReveal` | Bintang muncul dengan rotasi |
| `revealPop` | Siluet berubah jadi gambar |
| `eating` | Hewan makan saat jawaban benar (Level 3) |

## 8. Teknik Pemrosesan Media

### 8.1 Kompresi Gambar/Audio
- Format gambar yang direkomendasikan: **PNG** (transparan) atau **WEBP** (lebih ringan)
- Resolusi gambar hewan: **512x512px** optimal
- Resolusi background: **1080x1920px** optimal
- File audio: **MP3** dengan bitrate 128kbps
- Durasi SFX: **1-3 detik**
- Durasi suara hewan: **2-5 detik**
- Ukuran maksimum per file audio: **<200KB**

### 8.2 Preload / Lazy Load
```javascript
// Preload asset kritis saat loading screen
function preloadAssets() {
  Object.values(ASSETS.images.animals).forEach(src => {
    const img = new Image();
    img.src = src;
  });
}
```
- Gambar hewan dan background di-preload saat loading screen
- Gambar non-kritis menggunakan `loading="lazy"` pada tag `<img>`
- Audio dimuat saat pertama kali dibutuhkan (on-demand)

### 8.3 CSS Filter untuk Siluet (Level 4)
```css
/* Membuat siluet tanpa asset terpisah */
.animal-display.silhouette img {
  filter: brightness(0) drop-shadow(0 0 8px rgba(0,0,0,.5));
}

/* Reveal animasi saat jawaban benar */
.animal-display.silhouette.revealed img {
  filter: none;
  animation: revealPop .5s ease-out;
}
```
- Menggunakan CSS `filter: brightness(0)` untuk mengubah gambar hewan menjadi siluet hitam
- Tidak memerlukan asset gambar siluet terpisah
- Animasi reveal mengembalikan gambar ke warna asli

### 8.4 Web Audio untuk Volume/Fade
```javascript
const AudioManager = {
  bgmVolume: 0.25,   // Volume BGM lebih rendah
  sfxVolume: 0.65,    // Volume SFX lebih tinggi

  // Fade in musik latar
  _fadeIn(audio, targetVol, ms) {
    audio.volume = 0;
    const interval = setInterval(() => {
      audio.volume = Math.min(audio.volume + step, targetVol);
    }, stepTime);
  },

  // Fade out musik latar
  _fadeOut(audio, ms) {
    const interval = setInterval(() => {
      audio.volume = Math.max(audio.volume - step, 0);
      if (audio.volume <= 0) audio.pause();
    }, stepTime);
  }
};
```
- **Volume normalisasi**: BGM 25%, SFX 65% — agar suara efek terdengar jelas di atas musik
- **Fade in/out**: Musik latar memiliki transisi halus saat mulai/berhenti
- **Audio cache**: File audio di-cache untuk menghindari loading berulang
- **Error handling**: Semua operasi audio dibungkus try/catch agar game tetap berjalan jika audio gagal

## 9. Aspek Keamanan

### 9.1 Asset Lokal
- ✅ Semua gambar, audio, dan font di-host secara lokal
- ✅ Tidak ada hotlinking ke server eksternal
- ✅ Game berjalan sepenuhnya offline setelah dimuat
- ✅ Satu-satunya koneksi eksternal: Google Fonts (opsional, ada fallback)

### 9.2 Tidak Ada Data Sensitif
- ✅ Tidak mengumpulkan data pribadi pengguna
- ✅ Tidak ada form input teks bebas
- ✅ Tidak ada sistem login atau autentikasi
- ✅ Tidak ada tracking atau analytics

### 9.3 Tidak Menggunakan eval()
- ✅ Tidak ada penggunaan `eval()`, `Function()`, atau `innerHTML` yang berbahaya
- ✅ Konten dinamis dibuat melalui DOM manipulation yang aman
- ✅ Tidak ada injeksi kode dari sumber eksternal

### 9.4 localStorage Hanya untuk Progress
- ✅ Data yang disimpan: progress level dan jumlah bintang
- ✅ Data yang disimpan: preferensi suara (on/off)
- ✅ Format data: JSON sederhana
- ✅ Tidak ada data sensitif atau personal yang disimpan
- ✅ User dapat mereset progress kapan saja

### 9.5 Contoh Data localStorage
```json
{
  "levels": {
    "1": { "unlocked": true, "stars": 3 },
    "2": { "unlocked": true, "stars": 2 },
    "3": { "unlocked": true, "stars": 0 },
    "4": { "unlocked": false, "stars": 0 },
    "5": { "unlocked": false, "stars": 0 }
  }
}
```

## 10. Kesimpulan

**Jungle Rescue: Petualangan Ranger Cilik** merupakan implementasi game edukasi yang menerapkan konsep-konsep multimedia secara komprehensif:

1. **Integrasi multi-media**: Menggabungkan teks, gambar, audio, animasi, dan interaksi dalam satu pengalaman yang kohesif
2. **User-centered design**: Dirancang khusus untuk anak TK dengan antarmuka yang intuitif dan ramah anak
3. **Teknik pemrosesan media**: Menggunakan CSS filter, audio fading, preloading, dan kompresi untuk optimasi performa
4. **Keamanan**: Menerapkan prinsip keamanan web dengan asset lokal dan tanpa data sensitif
5. **Progressive learning**: Sistem level yang bertahap dari sederhana ke kompleks untuk meningkatkan pemahaman anak
6. **Aksesibilitas**: Responsif di berbagai perangkat, ringan, dan mudah diakses tanpa instalasi

Game ini menunjukkan bahwa teknologi web standar (HTML, CSS, JavaScript) mampu menciptakan media pembelajaran interaktif yang menarik dan efektif tanpa memerlukan framework atau pustaka tambahan yang kompleks.

---

**Kelompok 5 — Sistem Multimedia**
*Jungle Rescue: Petualangan Ranger Cilik*
