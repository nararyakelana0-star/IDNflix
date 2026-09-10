<div align="center">

# 🎬 IDNflix

### *Nobar Untuk Santri IDN*

Platform katalog & streaming video untuk santri **IDN Boarding School Pamijahan**.
Tampilan premium ala platform streaming modern, dark mode dengan aksen biru,
dan seluruh video diputar langsung lewat **YouTube Embed**.

![Status](https://img.shields.io/badge/status-ready-2f7dff?style=flat-square)
![Stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-0b4fd1?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-none-1a1d26?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-2f7dff?style=flat-square)

</div>

---

## 📖 Tentang

IDNflix adalah website **katalog dan pemutar video** yang dirancang untuk kegiatan
**nobar (nonton bareng)** santri. Website ini tidak menyimpan atau meng-host file video —
semua tayangan diputar langsung dari YouTube melalui embed resmi, sehingga ringan,
legal, dan tidak butuh server khusus.

Konten utama adalah serial animasi Islami **“I'm The Best Muslim”** (Season 1–4)
dari channel **[FreeQuranEducation](https://www.youtube.com/@FreeQuranEducation)**,
dilengkapi serial dan film pendukung dari channel yang sama, ditambah dua serial
pilihan lain: **Epic Story** (Yufid.TV) dan **Outdoor Boys**.

> ⚠️ IDNflix bukan produk resmi Netflix maupun platform streaming manapun.
> Tidak ada logo, aset, atau identitas visual pihak lain yang digunakan.

---

## ✨ Fitur

### Halaman
| Halaman | Route | Keterangan |
|---|---|---|
| Home | `#/` | Hero featured + 8 baris konten |
| TV Shows | `#/tv` | Katalog serial + filter lengkap |
| Movies | `#/movies` | Katalog film & kompilasi |
| Genres | `#/genres` | Tile genre + hasil terfilter |
| Search | `#/search` | Pencarian dengan empty state |
| My List | `#/mylist` | Watchlist pribadi |
| Profile | `#/profile` | Statistik & pengaturan data |
| Detail | `#/title/:id` | Info judul + season selector + episode grid + cast + rekomendasi |
| Watch | `#/watch/:id/:season/:ep` | Player YouTube + daftar episode + cast + rekomendasi |

### Home Page Sections
1. **Hero / Featured** — banner besar, judul, deskripsi, genre, tahun, durasi, rating, tombol *Watch Now* & *+ My List*
2. **Continue Watching** — otomatis muncul setelah menonton
3. **Popular on IDNflix**
4. **Trending Now** — dengan nomor peringkat besar
5. **TV Shows**
6. **Movies**
7. **Recommended for Santri**
8. **Browse by Genre**

### Fungsional
- 🔊 **Pilihan suara English / Indonesia** — FreeQuranEducation merilis dua versi, keduanya tersedia di IDNflix. Switcher ada di navbar, halaman detail, halaman watch, dan Profile. Pilihan tersimpan di `localStorage`
- 🎞️ **Season selector 1–4** pada halaman detail & watch — tersedia dalam bentuk pill maupun dropdown
- 🗓️ **Episode grid** dengan badge `S01E01`, tanggal rilis asli, dan durasi di atas thumbnail
- ↕️ **Toggle urutan episode** Oldest ⇄ Newest
- 👥 **Cast** — deretan avatar bulat berisi nama karakter & perannya
- 🎴 **More Like This** — rekomendasi bergaya kartu poster potret dengan badge TV/Movie, jumlah season, rating, dan jumlah episode
- 🔍 **Search modal** dengan live suggestion — shortcut `/` atau `Ctrl` + `K`
- 🎛️ **Filter**: Tipe (TV/Movie) · Genre · Tahun · Rating · Sort (Popularity, Rating, Terbaru, A–Z)
- 🔖 **My List** tersimpan di `localStorage`
- 🔔 **Toast notification** saat menambah / menghapus dari My List
- 💀 **Skeleton loading** saat perpindahan halaman
- 🕳️ **Empty state** untuk hasil pencarian kosong & My List kosong
- 🖼️ **Lazy loading** thumbnail via `IntersectionObserver`
- ✨ **Smooth page transition** dan hover animation pada card
- 📱 **Responsive** desktop / tablet / mobile + hamburger menu

---

## 🎨 Desain

| Token | Nilai |
|---|---|
| Background | `#08090d` |
| Surface | `#12141c` |
| Aksen biru | `#2f7dff` → `#0b4fd1` |
| Teks | `#eef1f7` |
| Muted | `#98a0b3` |
| Radius | `16px` |

Dark mode sebagai tampilan utama, rounded cards, subtle glow pada elemen biru,
dan overlay gradient gelap pada hero agar teks tetap terbaca.

---

## 🗂️ Struktur Proyek

```
idnflix/
├── index.html      # Shell aplikasi: navbar, search modal, container view
├── styles.css      # Seluruh styling & animasi
├── app.js          # Router, render engine, filter, My List, toast
├── data.js         # 📌 Database konten — file yang diedit admin
├── README.md
└── .gitignore
```

Tanpa build step, tanpa dependency, tanpa framework. Murni HTML + CSS + Vanilla JS.

---

## 🚀 Menjalankan

### Cara tercepat
Buka `index.html` langsung di browser.

### Dengan local server (disarankan)

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# PHP
php -S localhost:8080
```

Lalu buka <http://localhost:8080>

### Deploy
Cukup upload seluruh folder ke hosting statis apa pun:
**GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**, atau shared hosting biasa.

---

## ➕ Menambah Konten

Semua konten dikelola dari satu file: **`data.js`** — tambahkan objek baru ke array `CATALOG`.

### Menambah Movie

```js
{
  id: "judul-film-baru",          // slug unik, wajib
  type: "movie",
  title: "Judul Film Baru",
  youtubeId: "dQw4w9WgXcQ",       // 11 karakter dari URL YouTube
  year: 2026,
  rating: 8.7,                    // skala 0–10
  duration: "1h 24m",
  genres: ["Islamic", "Animation"],
  channel: "FreeQuranEducation",
  audioLang: "id",   // opsional — bahasa asli judul; default "en"
  country: "Indonesia",
  popularity: 80,                 // 0–100, dipakai untuk sorting & Trending
  description: "Deskripsi singkat film...",
  thumb: null                     // null = otomatis pakai thumbnail YouTube
}
```

### Menambah TV Show

```js
{
  id: "serial-baru",
  type: "tv",
  title: "Serial Baru",
  year: 2026,
  rating: 9.0,
  genres: ["Islamic", "Educational"],
  channel: "FreeQuranEducation",
  country: "Indonesia",
  popularity: 90,
  description: "Deskripsi serial...",
  thumb: null,

  // Tampil di section "Cast" halaman detail & watch
  cast: [
    { name: "Nama Karakter", role: "Peran" }
  ],

  seasons: [
    {
      season: 1,
      year: 2026,
      episodes: [
        {
          ep: 1,
          title: "Judul Episode",
          youtubeId: "VIDEO_ID",
          airDate: "2026-03-01",     // tampil sebagai badge "1 Mar 26"
          duration: "10:41",
          description: "Ringkasan episode..."
        }
      ]
    }
  ]
}
```

> 💡 `airDate` memakai format `YYYY-MM-DD` dan otomatis diformat menjadi
> `1 Mar 26` pada badge episode. Boleh dikosongkan — badge tanggal
> hanya tidak akan ditampilkan.

### 🔊 Menambah versi suara Indonesia

Cukup tambahkan tiga field pada episode atau movie yang sudah ada.
**Jangan** membuat entri terpisah:

```js
{
  ep: 1,
  title: "Cleanliness",              // judul versi English
  youtubeId: "rQEesf-lVrk",          // video English
  airDate: "2020-04-15",
  duration: "1:55",
  description: "...",

  // ↓ versi suara Indonesia
  idnYoutubeId: "F0SuPnn8kSs",       // video dari FreeQuranEducationIndonesia
  idnTitle: "Kebersihan",            // judul versi Indonesia
  idnAirDate: "2021-04-13"
}
```

**Perilaku otomatis:**
- Judul akan menampilkan badge `EN / ID` bila kedua versi tersedia
- Saat pengguna memilih 🇮🇩 Indonesia, judul dan thumbnail ikut berubah
- Episode yang **belum** punya `idnYoutubeId` otomatis fallback ke versi English,
  dengan badge `EN` dan catatan penjelas di halaman watch
- Filter **Semua Suara / Ada Dub Indonesia / Ada Versi English** muncul otomatis di katalog

### Field opsional
| Field | Fungsi |
|---|---|
| `featured: true` | Menjadikan judul ini sebagai Hero di halaman Home |
| `backdrop` | URL gambar banner khusus untuk hero |
| `tagline` | Kalimat miring di bawah judul pada halaman detail |
| `endYear` | Tahun berakhir serial, tampil sebagai `2020–2026` |
| `cast` | Array `{ name, role }` untuk section Cast. Avatar & warnanya dibuat otomatis dari inisial nama |
| `airDate` | Tanggal rilis episode (`YYYY-MM-DD`), tampil sebagai badge di pojok thumbnail |
| `idnYoutubeId` | Video ID versi suara Indonesia — mengaktifkan opsi 🇮🇩 pada judul tersebut |
| `idnTitle` | Judul versi Indonesia |
| `idnAirDate` | Tanggal rilis versi Indonesia |

### Cara mendapatkan YouTube Video ID
```
https://www.youtube.com/watch?v=PT6KSgOZT90
                                └── ini ID-nya ──┘
https://youtu.be/PT6KSgOZT90
                 └─── ini ID-nya ───┘
```

### Menambah genre baru
Tambahkan namanya ke array `GENRES` di bagian bawah `data.js`.
Filter, tile genre, dan halaman Genres akan menyesuaikan otomatis.

---

## 📺 Katalog Saat Ini

**13 judul · 46 episode · 55 video**

### TV Shows
| Judul | Season | Episode |
|---|---|---|
| I'm The Best Muslim | 4 | 35 |
| Isekai Sharia | 1 | 7 |
| I'm Best Muslim: RedLock | 1 | 3 |
| Forgotten Sunnah | 1 | 1 |

### I'm The Best Muslim — rincian season
| Season | Tahun | Episode | Episode pertama | Dub 🇮🇩 |
|---|---|---|---|---|
| Season 1 | 2020 | 14 | Cleanliness / *Kebersihan* | 14/14 |
| Season 2 | 2021 | 9 | Silence is Gold / *Diam Itu Emas* | 9/9 |
| Season 3 | 2023 | 8 | How to Borrow your Friend's Money? / *Cara Pinjam Uang ke Teman Kamu* | 8/8 |
| Season 4 | 2025 | 4 | Dark Cloud / *No Galap* | 1/4 |

### Cakupan versi suara
| Judul | Suara tersedia | Cakupan dub 🇮🇩 |
|---|---|---|
| I'm The Best Muslim | EN + ID | 32 / 35 episode |
| Isekai Sharia | EN + ID | 7 / 7 episode |
| I'm Best Muslim: RedLock | EN | — |
| Forgotten Sunnah | EN | — |
| Kompilasi Musim 1, 2, 3 | EN + ID | penuh |

#### Epic Story — Yufid.TV

Serial kisah nabi & umat terdahulu bersama **Ustadz Johan Saputra Halim, M.H.I.**
dari channel **[Yufid.TV](https://www.youtube.com/@yufid)**.

| Season | Isi | Episode |
| --- | --- | --- |
| 1 | Kisah para nabi & umat terdahulu | 28 |
| 2 | Serial Spesial Sirah Nabawiyah (Eps 1–10) | 10 |

Bahasa asli serial ini **Indonesia** (`audioLang: "id"`), jadi tidak ada versi
English — dropdown audio otomatis menonaktifkan opsi EN.

#### Outdoor Boys

Serial petualangan & survival keluarga di alam liar Alaska, **13 episode pilihan**
dari channel **[Outdoor Boys](https://www.youtube.com/@OutdoorBoys)** milik Luke Nichols.

> ℹ️ **Catatan:** Outdoor Boys **bukan** produksi Yufid TV seperti yang sempat
> diperkirakan. Channel ini milik Luke Nichols (Alaska, AS) dan berbahasa English.
> Kontennya tetap aman dan mendidik untuk santri: keterampilan bertahan hidup,
> kerja keras, dan kekaguman pada alam ciptaan Allah.

#### Kok Bisa

Serial animasi edukasi dari channel **[Kok Bisa?](https://www.youtube.com/@KokBisa)** —
menjawab pertanyaan sehari-hari dengan penjelasan ilmiah yang ringkas. **77 episode
pilihan**, dikelompokkan jadi 4 season:

| Season | Judul | Episode |
| --- | --- | --- |
| 1 | Alam Semesta dan Luar Angkasa | 32 |
| 2 | Seri Tokoh Bangsa | 13 |
| 3 | Taman Edukasi: Belajar IPA | 8 |
| 4 | Terbaru: Sains & Dunia Kita | 24 |

Berbahasa **Indonesia** (`audioLang: "id"`), jadi opsi English dinonaktifkan otomatis.
Episode hanya menyimpan tahun rilis (`airYear`) alih-alih tanggal penuh — lihat catatan
di bawah.

#### Dub Indonesia I'm The Best Muslim

Total **42 video versi Indonesia** dari channel
**[FreeQuranEducationIndonesia](https://www.youtube.com/@IndonesianFreeQuranEducation)**,
seluruhnya diverifikasi nama channel + tanggal rilisnya.

### Movies
Kompilasi penuh Season 1, Season 2, Season 1 & 2 Complete, Season 3 Volume 1,
Season 4 Compilation, Ramadan Compilation, serta trailer & teaser resmi.

> Seluruh Video ID diverifikasi lewat YouTube oEmbed API — judul dan nama channel
> cocok dengan sumber aslinya. Tidak ada ID atau URL fiktif.
>
> **Tanggal rilis (`airDate`) untuk ke-55 video juga diambil langsung dari metadata
> `uploadDate` di halaman YouTube masing-masing**, bukan tanggal karangan.

---

## 🧠 Catatan Teknis

- **Routing** — hash-based (`#/tv`, `#/watch/id/1/2`), aman untuk hosting statis tanpa konfigurasi rewrite
- **Penyimpanan** — `localStorage` dengan key `idnflix.mylist`, `idnflix.continue`, dan `idnflix.voice`
- **Thumbnail** — `i.ytimg.com/vi/{id}/maxresdefault.jpg` dengan fallback otomatis ke `hqdefault.jpg`
- **Player** — iframe `youtube.com/embed/` dengan parameter `rel=0&modestbranding=1&playsinline=1`
- **Browser** — Chrome, Edge, Firefox, Safari versi modern

---

## 🔐 Akun & Foto Profil

Login bersifat **opsional** — tanpa akun pun semua tayangan tetap bisa ditonton.
Akun berguna agar My List, riwayat tonton, dan foto profil tiap santri tidak
tercampur saat satu perangkat dipakai bergantian.

| Halaman | Route |
| --- | --- |
| Masuk | `#/login` |
| Daftar | `#/signup` |
| Profil | `#/profile` |

**Daftar** butuh nama, username (3–20 karakter: huruf, angka, titik, garis bawah),
dan password minimal 6 karakter. Tanpa email.

**Foto profil** — di halaman Profile, klik kotak avatar atau seret gambar ke atasnya.
Menerima JPG, PNG, WebP, dan GIF sampai 5 MB. Gambar otomatis dipotong dari tengah
lalu dikecilkan jadi 256×256 JPEG (±20–40 KB) supaya muat di `localStorage`.

### ⚠️ Batas keamanan — baca sebelum dipakai luas

Situs ini statis, jadi akun disimpan di **`localStorage` browser**, bukan server.

- Password **tidak** disimpan sebagai teks polos — di-hash SHA-256 dengan salt acak per akun.
- **Tapi ini bukan keamanan sungguhan.** Siapa pun yang bisa membuka DevTools di
  perangkat itu tetap bisa membaca isinya, dan akun **tidak sinkron antar perangkat**.
- Cukup untuk memisahkan profil antar santri di satu laptop nobar. **Jangan** pakai
  password yang dipakai di layanan lain.

Kalau nanti butuh akun lintas perangkat yang benar-benar aman, `auth.js` perlu
dipindahkan ke backend dengan bcrypt/argon2 di belakang HTTPS.

### Penyimpanan

| Key | Isi |
| --- | --- |
| `idnflix.users` | Semua akun di perangkat ini |
| `idnflix.session` | UID akun yang sedang login |
| `idnflix.mylist::<uid>` | My List per akun |
| `idnflix.continue::<uid>` | Riwayat tonton per akun |
| `idnflix.voice` | Preferensi bahasa suara |

Pengunjung tanpa login tetap memakai key lama tanpa akhiran, jadi data lama tidak hilang.

---

## 🧪 Tes

Suite JSDOM ada di folder `tests/`:

```bash
npm i jsdom
NODE_PATH=./node_modules node tests/catalog.test.js   # 48 assertion
NODE_PATH=./node_modules node tests/auth.test.js      # 81 assertion
NODE_PATH=./node_modules node tests/kokbisa.test.js   # 65 assertion
```

### Catatan tanggal episode

Season 4 berisi 24 unggahan terbaru channel (semuanya 2026), diurutkan kronologis
sehingga episode terakhir adalah video paling baru. Judul diambil dalam bahasa
Indonesia asli lewat oEmbed — halaman playlist menampilkan judul yang sudah
diterjemahkan otomatis ke Inggris, jadi jangan pakai itu.

Sebagian besar episode menyimpan `airDate` lengkap (`YYYY-MM-DD`). Untuk Kok Bisa,
halaman `watch` YouTube menolak permintaan beruntun (rate limit), sehingga tanggal
persisnya tidak bisa diverifikasi. Daripada mengarang tanggal, episode-episode itu
memakai `airYear` (tahun saja) dan badge kartu menampilkan tahunnya. Fungsi
`epDateLabel()` di `data.js` menangani kedua format ini.

---

## 🙏 Kredit

Seluruh konten video tetap menjadi hak milik pembuatnya masing-masing.
IDNflix hanya menampilkan katalog dan memutar video melalui YouTube Embed resmi.

- 🇬🇧 **[FreeQuranEducation](https://www.youtube.com/@FreeQuranEducation)** — I'm The Best Muslim & serial pendukung, versi English
- 🇮🇩 **[FreeQuranEducationIndonesia](https://www.youtube.com/@IndonesianFreeQuranEducation)** — versi dub Indonesia
- 🇮🇩 **[Yufid.TV](https://www.youtube.com/@yufid)** — Epic Story bersama Ustadz Johan Saputra Halim, M.H.I.
- 🌲 **[Outdoor Boys](https://www.youtube.com/@OutdoorBoys)** — Luke Nichols, petualangan & survival Alaska
- 🧠 **[Kok Bisa?](https://www.youtube.com/@KokBisa)** — animasi edukasi sains, sejarah, dan pengetahuan umum

Dukung karya mereka dengan menonton, menyukai, dan berlangganan di channel aslinya.

---

## 📄 Lisensi

Kode sumber IDNflix dirilis di bawah lisensi **MIT**.
Konten video **tidak** termasuk dalam lisensi ini.

---

<div align="center">

**IDNflix** — dibuat untuk santri IDN Boarding School Pamijahan 💙

</div>
