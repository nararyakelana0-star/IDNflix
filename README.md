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
dilengkapi serial dan film pendukung dari channel yang sama.

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
| Detail | `#/title/:id` | Info judul + selector season |
| Watch | `#/watch/:id/:season/:ep` | Player YouTube responsif |

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
- 🎞️ **Season selector 1–4** pada halaman detail & watch
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
  seasons: [
    {
      season: 1,
      year: 2026,
      episodes: [
        {
          ep: 1,
          title: "Judul Episode",
          youtubeId: "VIDEO_ID",
          duration: "10:41",
          description: "Ringkasan episode..."
        }
      ]
    }
  ]
}
```

### Field opsional
| Field | Fungsi |
|---|---|
| `featured: true` | Menjadikan judul ini sebagai Hero di halaman Home |
| `backdrop` | URL gambar banner khusus untuk hero |
| `tagline` | Kalimat miring di bawah judul pada halaman detail |
| `endYear` | Tahun berakhir serial, tampil sebagai `2020–2026` |

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
| Season | Tahun | Episode | Episode pertama |
|---|---|---|---|
| Season 1 | 2020 | 14 | Cleanliness |
| Season 2 | 2021 | 9 | Silence is Gold |
| Season 3 | 2023 | 8 | How to Borrow your Friend's Money? |
| Season 4 | 2025 | 4 | Dark Cloud |

### Movies
Kompilasi penuh Season 1, Season 2, Season 1 & 2 Complete, Season 3 Volume 1,
Season 4 Compilation, Ramadan Compilation, serta trailer & teaser resmi.

> Seluruh Video ID diverifikasi lewat YouTube oEmbed API — judul dan nama channel
> cocok dengan sumber aslinya. Tidak ada ID atau URL fiktif.

---

## 🧠 Catatan Teknis

- **Routing** — hash-based (`#/tv`, `#/watch/id/1/2`), aman untuk hosting statis tanpa konfigurasi rewrite
- **Penyimpanan** — `localStorage` dengan key `idnflix.mylist` dan `idnflix.continue`
- **Thumbnail** — `i.ytimg.com/vi/{id}/maxresdefault.jpg` dengan fallback otomatis ke `hqdefault.jpg`
- **Player** — iframe `youtube.com/embed/` dengan parameter `rel=0&modestbranding=1&playsinline=1`
- **Browser** — Chrome, Edge, Firefox, Safari versi modern

---

## 🙏 Kredit

Seluruh konten video adalah karya
**[FreeQuranEducation](https://www.youtube.com/@FreeQuranEducation)** (Free Quran Education Studio, Indonesia)
dan tetap menjadi hak milik mereka. IDNflix hanya menampilkan katalog dan
memutar video melalui YouTube Embed resmi.

Dukung karya mereka dengan menonton, menyukai, dan berlangganan di channel aslinya.

---

## 📄 Lisensi

Kode sumber IDNflix dirilis di bawah lisensi **MIT**.
Konten video **tidak** termasuk dalam lisensi ini.

---

<div align="center">

**IDNflix** — dibuat untuk santri IDN Boarding School Pamijahan 💙

</div>
