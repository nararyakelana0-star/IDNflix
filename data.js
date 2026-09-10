/* =========================================================================
   IDNFLIX — DATA KONTEN
   -------------------------------------------------------------------------
   Cara menambah konten baru (untuk admin):

   MOVIE:
   {
     id: "slug-unik", type: "movie", title: "Judul",
     youtubeId: "VIDEO_ID", year: 2024, rating: 8.5,
     duration: "1h 04m", genres: ["Islamic","Animation"],
     channel: "FreeQuranEducation",
     description: "Deskripsi singkat...",
     popularity: 95, thumb: null  // null = otomatis pakai thumbnail YouTube
   }

   TV SHOW:
   {
     id: "slug-unik", type: "tv", title: "Judul",
     year: 2020, rating: 9.1, genres: [...], channel: "...",
     description: "...", popularity: 99, thumb: "VIDEO_ID atau URL",
     seasons: [
       { season: 1, year: 2020, episodes: [
           { ep: 1, title: "Judul Episode", youtubeId: "VIDEO_ID",
             duration: "1:55", description: "..." }
       ]}
     ]
   }
   ========================================================================= */

const YT_THUMB = (id, q) => `https://i.ytimg.com/vi/${id}/${q || "hqdefault"}.jpg`;

const CATALOG = [
  /* ===================== TV SHOW UTAMA ===================== */
  {
    id: "im-the-best-muslim",
    type: "tv",
    title: "I'm The Best Muslim",
    year: 2020,
    endYear: 2026,
    rating: 9.4,
    genres: ["Islamic", "Animation", "Comedy", "Educational"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    featured: true,
    popularity: 100,
    tagline: "World's Best Islamic Education Series",
    thumb: YT_THUMB("PT6KSgOZT90", "maxresdefault"),
    backdrop: YT_THUMB("7NO-UkUPtSY", "maxresdefault"),
    description:
      "Serial animasi 3D Islami karya studio Free Quran Education. Mengikuti perjalanan seorang muslim yang merasa dirinya paling hebat, lalu belajar akhlak, adab, dan ilmu agama lewat kisah yang kocak sekaligus menohok. Cocok untuk nobar santri.",
    cast: [
      { name: "Best Muslim", role: "Tokoh Utama" },
      { name: "Tubagus Punky", role: "Pengendara Motor" },
      { name: "Gen Bowl", role: "Si Doyan Makan" },
      { name: "Bossman Bosque", role: "Eksekutif Perusahaan" },
      { name: "Alienwati", role: "Si Cinta Kebersihan" },
      { name: "Free Quran Education", role: "Studio Produksi" }
    ],
    seasons: [
      {
        season: 1,
        year: 2020,
        episodes: [
          { ep: 1, title: "Cleanliness", youtubeId: "rQEesf-lVrk", airDate: "2020-04-15", duration: "1:55", description: "Kebersihan sebagian dari iman — tapi bagaimana praktiknya sehari-hari?", idnYoutubeId: "F0SuPnn8kSs", idnAirDate: "2021-04-13", idnTitle: "Kebersihan" },
          { ep: 2, title: "The Ramadan Avengers", youtubeId: "vZk51owZ358", airDate: "2020-04-24", duration: "3:45", description: "Pasukan Ramadan berkumpul menyambut bulan penuh berkah.", idnYoutubeId: "tlUOjGDIO-w", idnAirDate: "2021-04-20", idnTitle: "Avengers Ramadan (Spesial Ramadan)" },
          { ep: 3, title: "Fast and Furious Muslim!", youtubeId: "Fg71fyN43dA", airDate: "2020-05-05", duration: "1:42", description: "Puasa bukan alasan untuk jadi pemarah.", idnYoutubeId: "OhOmn5XO_Zk", idnAirDate: "2021-04-27", idnTitle: "Salat Super Cepat" },
          { ep: 4, title: "I Need Water!!!", youtubeId: "ZVKepszxAYc", airDate: "2020-05-29", duration: "1:22", description: "Ujian kecil yang menguji kesabaran saat berpuasa.", idnYoutubeId: "Kbkcl0CKG4c", idnAirDate: "2022-03-10", idnTitle: "Aku Butuh Air!!!" },
          { ep: 5, title: "Need for Speed: The Best Deeds", youtubeId: "7eF6w4R6m-c", airDate: "2020-06-10", duration: "2:51", description: "Berlomba-lomba dalam kebaikan, bukan dalam pamer.", idnYoutubeId: "GtCIpTmB25o", idnAirDate: "2022-03-24", idnTitle: "Siapa yang Tercepat: Amal Terbaik" },
          { ep: 6, title: "World Peace", youtubeId: "baF37RTHhD0", airDate: "2020-06-27", duration: "1:42", description: "Damai dimulai dari diri sendiri dan lisan kita.", idnYoutubeId: "Ja_GtRtMHcE", idnAirDate: "2022-08-03", idnTitle: "Perdamaian Dunia" },
          { ep: 7, title: "Hardest Sacrifice!", youtubeId: "caBLmWWjV_8", airDate: "2020-07-27", duration: "4:58", description: "Pengorbanan terberat justru melawan ego sendiri.", idnYoutubeId: "JEZ-aaDJ5Mw", idnAirDate: "2022-08-31", idnTitle: "Pengorbanan Terberat!" },
          { ep: 8, title: "The Most Awesome Post!", youtubeId: "ayllALZFWOU", airDate: "2020-08-28", duration: "1:37", description: "Bermedia sosial dengan adab seorang muslim.", idnYoutubeId: "JCpzik1QSWM", idnAirDate: "2022-09-07", idnTitle: "Postingan Terkeren!!" },
          { ep: 9, title: "Road Rage Terminator!", youtubeId: "5VapTmgaYLw", airDate: "2020-10-04", duration: "7:22", description: "Menahan amarah di jalanan adalah jihad kecil harian.", idnYoutubeId: "0OV-n-dLlXo", idnAirDate: "2022-10-05", idnTitle: "Penghancur Amarah" },
          { ep: 10, title: "High Excellence Spirit!", youtubeId: "fMEP16wvYGo", airDate: "2020-11-20", duration: "8:57", description: "Semangat ihsan: melakukan segala sesuatu sebaik mungkin.", idnYoutubeId: "EJPgVzjgSJE", idnAirDate: "2022-11-02", idnTitle: "Jiwa Terbaik!!" },
          { ep: 11, title: "The Best of People!", youtubeId: "0eMgSjVcEtI", airDate: "2021-02-02", duration: "7:38", description: "Sebaik-baik manusia adalah yang paling bermanfaat.", idnYoutubeId: "SG9HTUqVQcU", idnAirDate: "2022-11-30", idnTitle: "Orang Terbaik!" },
          { ep: 12, title: "Awesome Head!", youtubeId: "oxbKvpHBg4Q", airDate: "2021-04-13", duration: "10:12", description: "Ilmu tanpa amal, kepala besar tanpa isi.", idnYoutubeId: "Ebi3iEbs_mw", idnAirDate: "2022-12-07", idnTitle: "Pemimpin Keren!!" },
          { ep: 13, title: "The Ramadan Avenger: Infinity Worship", youtubeId: "GnJy6Miuo68", airDate: "2021-05-13", duration: "6:03", description: "Ibadah tanpa batas di penghujung Ramadan.", idnYoutubeId: "d9qsD5c91-k", idnAirDate: "2023-01-04", idnTitle: "Ibadah Tanpa Batas" },
          { ep: 14, title: "Most Benefit", youtubeId: "_aYkK8hLzdQ", airDate: "2021-07-09", duration: "9:01", description: "Mencari amal yang paling besar manfaatnya.", idnYoutubeId: "-DuU3RTiVho", idnAirDate: "2023-02-02", idnTitle: "Paling Bermanfaat" }
        ]
      },
      {
        season: 2,
        year: 2021,
        episodes: [
          { ep: 1, title: "Silence is Gold", youtubeId: "xgWAKeStf-8", airDate: "2022-06-30", duration: "11:31", description: "Diam itu emas — menjaga lisan dari kata sia-sia.", idnYoutubeId: "gG5XXJSTzBE", idnAirDate: "2023-10-11", idnTitle: "Diam Itu Emas" },
          { ep: 2, title: "Don't Lower your Gazee!", youtubeId: "xH79ZkALc6U", airDate: "2022-07-07", duration: "5:36", description: "Menundukkan pandangan, gerbang menuju hati yang bersih.", idnYoutubeId: "7orNTz7FId8", idnAirDate: "2023-11-18", idnTitle: "Jangan Tundukkan Pandanganmu!" },
          { ep: 3, title: "It's Your Fault!", youtubeId: "JjjyEm_PRq8", airDate: "2022-07-14", duration: "6:31", description: "Ketika ego berkuasa, semua orang jadi salah kecuali kita.", idnYoutubeId: "lWxbpL4owco", idnAirDate: "2023-12-30", idnTitle: "Ini Salahmu!" },
          { ep: 4, title: "I'm the Expert!", youtubeId: "Wq_3HCh2HbU", airDate: "2022-07-21", duration: "6:51", description: "Merasa paling ahli adalah awal dari kejatuhan.", idnYoutubeId: "ABhP07caHic", idnAirDate: "2024-01-27", idnTitle: "Akulah Ahlinya!" },
          { ep: 5, title: "Better than the whole World!", youtubeId: "FB1A747xyu4", airDate: "2022-07-28", duration: "4:56", description: "Amal kecil yang lebih baik dari dunia dan seisinya.", idnYoutubeId: "I2sTwCQjYi4", idnAirDate: "2024-03-01", idnTitle: "Lebih Baik dari Dunia dan Seisinya" },
          { ep: 6, title: "All Day just for you!", youtubeId: "IyUbInWuqXM", airDate: "2022-08-04", duration: "6:51", description: "Berapa waktu yang benar-benar kita berikan untuk ilmu?", idnYoutubeId: "sFohBIoq2fo", idnAirDate: "2024-03-08", idnTitle: "Seharian Hanya Untukmu!" },
          { ep: 7, title: "Learn to be the Best!", youtubeId: "vry_sYuPfYQ", airDate: "2022-08-11", duration: "3:41", description: "Belajar bukan sekadar menonton, tapi mengamalkan.", idnYoutubeId: "IgmmDR2Jy7c", idnAirDate: "2024-05-04", idnTitle: "Belajar Menjadi yang Terbaik" },
          { ep: 8, title: "Best Superhero", youtubeId: "KR8C_Xy5no4", airDate: "2022-08-18", duration: "7:26", description: "Pahlawan sejati dalam pandangan Islam.", idnYoutubeId: "MMCbHIUYK4Q", idnAirDate: "2024-07-28", idnTitle: "Superhero Terbaik" },
          { ep: 9, title: "The Greatest Enemy (Last Episode Season 2!)", youtubeId: "9wrSES-cDFg", airDate: "2022-08-25", duration: "12:07", description: "Musuh terbesar itu bernama hawa nafsu.", idnYoutubeId: "OwT5suq5hI8", idnAirDate: "2024-08-25", idnTitle: "Episode Terakhir - Musuh Terbesar" }
        ]
      },
      {
        season: 3,
        year: 2023,
        episodes: [
          { ep: 1, title: "How to Borrow your Friend's Money?", youtubeId: "PT6KSgOZT90", airDate: "2023-03-25", duration: "10:41", description: "Adab berhutang dan menjaga amanah kepada sesama.", idnYoutubeId: "y7ou4N_Ahzo", idnAirDate: "2024-09-01", idnTitle: "Cara Pinjam Uang ke Teman Kamu" },
          { ep: 2, title: "How to say Aameen", youtubeId: "0hXu2p_dgeU", airDate: "2023-04-08", duration: "8:11", description: "Sunnah mengucap aamiin dan keutamaannya dalam shalat.", idnYoutubeId: "tvlV1HW9qqo", idnAirDate: "2024-09-08", idnTitle: "Bagaimana Cara Mengucapkan Aamiiin?!" },
          { ep: 3, title: "How to Avoid Curse Words?", youtubeId: "B8O6Rs9Jz4Q", airDate: "2023-04-29", duration: "6:06", description: "Menjaga lisan dari kata-kata kotor dan celaan.", idnYoutubeId: "GgIqbnKzO08", idnAirDate: "2024-09-15", idnTitle: "Bagaimana Menghindari Kata Kasar?" },
          { ep: 4, title: "How to Open the Door?", youtubeId: "A6LtWvWjnfc", airDate: "2023-05-13", duration: "5:17", description: "Adab bertamu dan mengetuk pintu ala Rasulullah.", idnYoutubeId: "XXug2DCq8Ao", idnAirDate: "2024-09-22", idnTitle: "Bagaimana Cara Membuka Pintu?" },
          { ep: 5, title: "How to Raise Your Child?", youtubeId: "Xdj1fFGRg0s", airDate: "2023-07-28", duration: "16:21", description: "Mendidik anak dengan kasih sayang dan keteladanan.", idnYoutubeId: "YX8J9asQcQc", idnAirDate: "2024-09-29", idnTitle: "Bagaimana Mendidik Anakmu?" },
          { ep: 6, title: "How to Become Religious?", youtubeId: "kT-O0EFx5Hs", airDate: "2023-09-29", duration: "10:14", description: "Hijrah yang benar: bertahap, ikhlas, dan istiqamah.", idnYoutubeId: "lOU480JotLw", idnAirDate: "2024-10-06", idnTitle: "Bagaimana Menjadi Religius?" },
          { ep: 7, title: "How to Say Yes?", youtubeId: "uHhx_8JKXGE", airDate: "2023-12-15", duration: "5:01", description: "Memenuhi janji dan berkata baik kepada saudara.", idnYoutubeId: "F4jSE39n7WY", idnAirDate: "2024-10-13", idnTitle: "Bagaimana Mengatakan Ya?" },
          { ep: 8, title: "Undying Courage (Last Episode Season 3)", youtubeId: "XXNGr8xFwL4", airDate: "2024-03-17", duration: "9:05", description: "Keberanian yang tak padam menghadapi ujian hidup.", idnYoutubeId: "HPB8c-SO07s", idnAirDate: "2024-10-20", idnTitle: "Keberanian Abadi (Episode Terakhir)" }
        ]
      },
      {
        season: 4,
        year: 2025,
        episodes: [
          { ep: 1, title: "Dark Cloud", youtubeId: "7NO-UkUPtSY", airDate: "2025-03-01", duration: "10:40", description: "Awan gelap menyelimuti kehidupan sang tokoh utama.", idnYoutubeId: "1jhci1_VyYY", idnAirDate: "2025-03-01", idnTitle: "No Galap" },
          { ep: 2, title: "Shadows Beneath The Sun", youtubeId: "-S7nQ9m9VJw", airDate: "2025-08-15", duration: "8:41", description: "Bayangan di balik terik: ujian yang tak terlihat orang lain." },
          { ep: 3, title: "Shattered Rocks", youtubeId: "--RqdFbJldM", airDate: "2025-12-04", duration: "13:22", description: "Batu yang retak — hati yang perlu diperbaiki." },
          { ep: 4, title: "Lighting and Storm Before Dawn", youtubeId: "pzE9gkGG7HE", airDate: "2026-03-03", duration: "9:57", description: "Badai sebelum fajar, harapan setelah kesulitan." }
        ]
      }
    ]
  },

  /* ===================== TV SHOW LAIN ===================== */
  {
    id: "kok-bisa",
    type: "tv",
    title: "Kok Bisa",
    audioLang: "id",
    year: 2015,
    endYear: 2026,
    rating: 9.2,
    genres: ["Educational", "Documentary", "Animation", "Sci-Fi"],
    channel: "Kok Bisa?",
    country: "Indonesia",
    popularity: 91,
    tagline: "Menjawab Pertanyaan yang Terlihat Sederhana",
    thumb: YT_THUMB("QK01ROEqJ1A", "maxresdefault"),
    backdrop: YT_THUMB("kGTDRup5PbY", "maxresdefault"),
    description:
      "Kanal animasi edukasi Indonesia yang membedah pertanyaan sehari-hari dengan penjelasan ilmiah yang ringkas dan mudah dicerna. Dari ujung alam semesta, perjuangan para tokoh bangsa, sampai cara kerja tubuh manusia — cocok untuk menambah wawasan santri di luar pelajaran kitab.",
    cast: [
      { name: "Kok Bisa?", role: "Rumah Produksi" },
      { name: "Tim Animator Kok Bisa", role: "Animasi & Ilustrasi" }
    ],
    seasons: [
      {
        season: 1,
        year: 2015,
        title: "Alam Semesta dan Luar Angkasa",
        episodes: [
          { ep: 1, title: "Apakah Ada Kehidupan Lain di Luar Bumi?", youtubeId: "FjFsx6iQE3Y", airYear: 2015, duration: "4:43", description: "Menimbang kemungkinan adanya kehidupan di planet lain." },
          { ep: 2, title: "Kenapa Pluto Tidak Lagi Dianggap Sebagai Planet?", youtubeId: "FMNRItiR6ZA", airYear: 2015, duration: "2:31", description: "Alasan ilmiah di balik turunnya status Pluto dari planet." },
          { ep: 3, title: "Apa Itu Black Hole Sebenarnya?", youtubeId: "Tx87wEaDtxo", airYear: 2015, duration: "3:21", description: "Penjelasan sederhana tentang apa itu lubang hitam." },
          { ep: 4, title: "Apakah Manusia Bisa Hidup di Luar Angkasa?", youtubeId: "zbSe0xE7tg0", airYear: 2016, duration: "2:58", description: "Syarat bertahan hidup manusia di lingkungan luar angkasa." },
          { ep: 5, title: "Bagaimana Matahari Terbakar Tanpa Oksigen di Luar Angkasa?", youtubeId: "2EVv7dmTFik", airYear: 2016, duration: "2:53", description: "Reaksi fusi nuklir yang menyalakan Matahari tanpa oksigen." },
          { ep: 6, title: "Apa Yang Terjadi Jika Bulan Lenyap?", youtubeId: "iyJeozHhvJI", airYear: 2016, duration: "3:21", description: "Dampak berantai bagi Bumi seandainya Bulan menghilang." },
          { ep: 7, title: "Bisakah Kita Membangun Koloni di Mars?", youtubeId: "uA3cMFjqfaM", airYear: 2016, duration: "4:28", description: "Rencana dan rintangan membangun koloni manusia di Mars." },
          { ep: 8, title: "Bisakah Pesawat Terbang ke Luar Angkasa?", youtubeId: "YxgOhIQJX3Q", airYear: 2017, duration: "3:07", description: "Batas ketinggian pesawat dan sebab ia tak bisa ke luar angkasa." },
          { ep: 9, title: "Kenapa Luar Angkasa Gelap?", youtubeId: "dghOCZmSEUQ", airYear: 2017, duration: "3:09", description: "Mengapa langit luar angkasa tampak gelap meski penuh bintang." },
          { ep: 10, title: "Apakah Ada Ujung Alam Semesta?", youtubeId: "QK01ROEqJ1A", airYear: 2018, duration: "10:04", description: "Sejauh mana alam semesta membentang, dan apakah ia punya tepi?" },
          { ep: 11, title: "Seberapa Perlu Kita Mencari ‘Bumi’ Baru?", youtubeId: "t5SaFgSaM_M", airYear: 2018, duration: "5:46", description: "Urgensi mencari planet layak huni selain Bumi." },
          { ep: 12, title: "Dari Mana Bulan Kita Berasal?", youtubeId: "5Zi4qGpGop4", airYear: 2018, duration: "2:50", description: "Teori asal-usul Bulan dan kaitannya dengan Bumi." },
          { ep: 13, title: "Seberapa Jauh Bumi dan Matahari?", youtubeId: "rloh5wZxFrU", airYear: 2018, duration: "2:38", description: "Jarak Bumi ke Matahari dan cara mengukurnya." },
          { ep: 14, title: "Apa yang Terjadi pada Bintang yang Mati?", youtubeId: "vHM83awJtVw", airYear: 2019, duration: "3:51", description: "Akhir hidup sebuah bintang dan sisa yang ditinggalkannya." },
          { ep: 15, title: "Bisakah Kita Selamat dari Hantaman Asteroid Raksasa?", youtubeId: "rgISfN3B7FE", airYear: 2019, duration: "11:24", description: "Peluang manusia bertahan dari hantaman asteroid raksasa." },
          { ep: 16, title: "Bisakah Kita Teleportasi dengan Wormhole?", youtubeId: "OO6erYFxRMU", airYear: 2020, duration: "3:42", description: "Wormhole dan kemungkinan perjalanan antarruang." },
          { ep: 17, title: "Apa Jadinya Jika Kita 'Puasa' di Luar Angkasa?", youtubeId: "BbVs_ZzQH-M", airYear: 2020, duration: "3:46", description: "Bagaimana menghitung waktu puasa saat berada di orbit." },
          { ep: 18, title: "Seberapa Besar Bintang Bisa Terbentuk?", youtubeId: "rha05J96bOM", airYear: 2020, duration: "3:54", description: "Batas maksimal ukuran sebuah bintang dan sebabnya." },
          { ep: 19, title: "The Great Filter: Tantangan Terbesar Umat Manusia", youtubeId: "SWmU0p_jcgU", airYear: 2020, duration: "5:22", description: "Great Filter dan pertanyaan besar tentang masa depan manusia." },
          { ep: 20, title: "Apa Jadinya Jika Alien Datang ke Bumi?", youtubeId: "SDS_m7gIKEY", airYear: 2020, duration: "4:35", description: "Skenario ilmiah bila makhluk luar angkasa mendatangi Bumi." },
          { ep: 21, title: "Apa yang Ada Sebelum Big Bang?", youtubeId: "kGTDRup5PbY", airYear: 2020, duration: "5:08", description: "Menelusuri apa yang mungkin ada sebelum Big Bang." },
          { ep: 22, title: "Apakah Dunia Paralel Benar-benar Ada?", youtubeId: "U2anTtDa03c", airYear: 2020, duration: "5:42", description: "Teori dunia paralel dan bukti yang mendukungnya." },
          { ep: 23, title: "BREAKING NEWS: Penemuan Potensi Kehidupan di Luar Bumi", youtubeId: "aHdyNI6KXZs", airYear: 2020, duration: "3:50", description: "Temuan yang mengarah pada potensi kehidupan di luar Bumi." },
          { ep: 24, title: "Planet Ini Bikin Bingung Sains", youtubeId: "fbLbWEHUJNw", airYear: 2021, duration: "4:28", description: "Sebuah planet dengan sifat yang menantang penjelasan sains." },
          { ep: 25, title: "BREAKING NEWS: Foto Pertama Teleskop Terkuat dalam Sejarah", youtubeId: "Hqq1C-2DH8c", airYear: 2021, duration: "5:36", description: "Foto perdana dari teleskop paling kuat yang pernah dibuat manusia." },
          { ep: 26, title: "Seberapa Tua Alam Semesta? (Dan Gimana Cara Taunya?)", youtubeId: "NEkpbAy0GR0", airYear: 2021, duration: "4:22", description: "Cara ilmuwan memperkirakan umur alam semesta." },
          { ep: 27, title: "Apakah Manusia Bisa Menguasai Galaksi?", youtubeId: "uoCfyIAOmFw", airYear: 2021, duration: "4:23", description: "Skala Kardashev dan sejauh mana peradaban bisa berkembang." },
          { ep: 28, title: "Ide Gila Membajak Matahari demi Energi Tak Terbatas", youtubeId: "QtT8swjxvSo", airYear: 2021, duration: "4:24", description: "Gagasan memanen energi matahari secara besar-besaran." },
          { ep: 29, title: "Gimana Cara Ilmuwan Mengukur Alam Semesta?", youtubeId: "_aoOVVGBGhM", airYear: 2021, duration: "4:28", description: "Metode mengukur jarak antarbintang dan antargalaksi." },
          { ep: 30, title: "Apa Jadinya Jika Bayi Lahir Di Luar Angkasa?", youtubeId: "hptHGTRIhWA", airYear: 2021, duration: "3:49", description: "Tantangan kelahiran manusia dalam kondisi tanpa gravitasi." },
          { ep: 31, title: "Kenapa Pesawat Luar Angkasa Tidak Terbakar di Atmosfer?", youtubeId: "VSYeai1NTlc", airYear: 2021, duration: "4:00", description: "Fisika di balik perisai panas pesawat saat menembus atmosfer." },
          { ep: 32, title: "Matahari Akan Melahap Bumi: Bisakah Kita Kabur?", youtubeId: "uZEMJIdsET0", airYear: 2022, duration: "4:09", description: "Nasib Bumi saat Matahari mengembang, dan peluang manusia kabur." }
        ]
      },
      {
        season: 2,
        year: 2018,
        title: "Seri Tokoh Bangsa",
        episodes: [
          { ep: 1, title: "Trailer: Kok Bisa - Seri Tokoh Bangsa", youtubeId: "ebPjVymXo6g", airYear: 2018, duration: "1:11", description: "Cuplikan pembuka seri animasi tentang para tokoh pendiri bangsa." },
          { ep: 2, title: "Tan Malaka, Bapak Republik yang Terlupakan", youtubeId: "6lveJ8B_fWA", airYear: 2018, duration: "5:02", description: "Tan Malaka dan gagasan republik yang mendahului zamannya." },
          { ep: 3, title: "Sutan Sjahrir, Bung Kecil yang Berperan Besar", youtubeId: "KG_pIqVgr1o", airYear: 2018, duration: "4:17", description: "Sutan Sjahrir, diplomat muda dengan peran besar bagi kemerdekaan." },
          { ep: 4, title: "Mohammad Hatta, Sosok Jenius di Balik Revolusi", youtubeId: "eOryoPRAShs", airYear: 2018, duration: "4:33", description: "Mohammad Hatta, otak di balik revolusi dan ekonomi Indonesia." },
          { ep: 5, title: "Soekarno, Pemimpin Besar Revolusi Indonesia", youtubeId: "2UR4ZiLahQg", airYear: 2018, duration: "5:18", description: "Soekarno dan orasi yang menyatukan bangsa Indonesia." },
          { ep: 6, title: "Trailer: Tiga Serangkai Paling Ditakuti di Zamannya - Seri Tokoh Bangsa Season 2", youtubeId: "57HaywVxlYY", airYear: 2019, duration: "1:11", description: "Cuplikan pembuka musim kedua Seri Tokoh Bangsa." },
          { ep: 7, title: "dr. Cipto, Dokter yang Memimpin Revolusi", youtubeId: "P8JzjGiQdbo", airYear: 2019, duration: "4:54", description: "dr. Cipto Mangunkusumo, dokter yang memimpin perlawanan." },
          { ep: 8, title: "Douwes Dekker, Sosok ‘Asing’ yang Membela Indonesia", youtubeId: "37lAIDjl1mY", airYear: 2019, duration: "4:58", description: "Douwes Dekker, keturunan Eropa yang membela Indonesia." },
          { ep: 9, title: "Ki Hadjar Dewantara, Bapak Pendidikan yang Bersuara Lantang", youtubeId: "GVpvL3dextw", airYear: 2019, duration: "5:57", description: "Ki Hadjar Dewantara dan lahirnya pendidikan nasional." },
          { ep: 10, title: "Merdeka atau Mati: Pertempuran Besar Pertama Bangsa Indonesia", youtubeId: "Wxfa8gCHlow", airYear: 2020, duration: "7:08", description: "Pertempuran Surabaya, perlawanan besar pertama setelah merdeka." },
          { ep: 11, title: "Kota Surga yang Hangus Jadi Neraka", youtubeId: "fCsNKgeDfF4", airYear: 2020, duration: "6:09", description: "Bandung Lautan Api dan keputusan berat membakar kota sendiri." },
          { ep: 12, title: "Dahsyatnya Perang Gerilya Merebut Kota Yogyakarta", youtubeId: "Wf1cVQ7W0WU", airYear: 2020, duration: "5:49", description: "Serangan Umum 1 Maret dan strategi perang gerilya." },
          { ep: 13, title: "Masa Ketika Indonesia di Ambang ‘Kehancuran’", youtubeId: "hEgFeLMf9uE", airYear: 2021, duration: "7:03", description: "Masa genting ketika Republik Indonesia nyaris runtuh." }
        ]
      },
      {
        season: 3,
        year: 2022,
        title: "Taman Edukasi: Belajar IPA",
        episodes: [
          { ep: 1, title: "Sistem Canggih Tubuh Manusia yang Lahirin Kehidupan", youtubeId: "6ye5NOaxIYg", airYear: 2022, duration: "6:56", description: "Sistem reproduksi manusia dijelaskan secara ilmiah dan santun." },
          { ep: 2, title: "Berkembang Biak: Hewan dan Tumbuhan Punya Cara Mereka Sendiri", youtubeId: "9UkTh1sSWt4", airYear: 2022, duration: "9:11", description: "Beragam cara hewan dan tumbuhan melanjutkan keturunan." },
          { ep: 3, title: "Kenapa Kita Mirip Orangtua Kita?", youtubeId: "JYL0xSSZgAA", airYear: 2022, duration: "10:09", description: "Genetika dan alasan wajah kita menyerupai orang tua." },
          { ep: 4, title: "Apa Jadinya Jika Kemagnetan Bumi Hilang dalam Sekejap?", youtubeId: "-rT697FBDOM", airYear: 2022, duration: "11:41", description: "Peran medan magnet Bumi sebagai pelindung kehidupan." },
          { ep: 5, title: "Teknologi Biologi: Masa Depan Dunia!", youtubeId: "-etEvbbnDOQ", airYear: 2022, duration: "8:15", description: "Bioteknologi dan pengaruhnya bagi masa depan manusia." },
          { ep: 6, title: "Benda-benda Terkecil yang Menyusun Alam Semesta", youtubeId: "kPHhHClKDQA", airYear: 2022, duration: "7:40", description: "Partikel terkecil penyusun seluruh materi di alam semesta." },
          { ep: 7, title: "Apa Jadinya Jika Tanah Hilang?", youtubeId: "mudJs7dX2Qc", airYear: 2022, duration: "6:59", description: "Peran tanah bagi kehidupan dan akibat bila ia hilang." },
          { ep: 8, title: "Energi Masa Depan yang Perlu Kita Tau!", youtubeId: "qm4tTGJ_eQo", airYear: 2022, duration: "9:45", description: "Sumber energi masa depan yang lebih bersih dan terbarukan." }
        ]
      },
      {
        season: 4,
        year: 2026,
        title: "Terbaru: Sains & Dunia Kita",
        episodes: [
          { ep: 1, title: "Pasukan Janda Terkuat Indonesia yang Mengusir Penjajah", youtubeId: "LWk3psIofA8", airYear: 2026, duration: "4:07", description: "Pasukan perempuan Aceh yang gigih melawan penjajah." },
          { ep: 2, title: "Apa Jadinya Jika Kita Berhenti Konsumsi Gula?", youtubeId: "iWv_ZyP3peI", airYear: 2026, duration: "4:02", description: "Perubahan pada tubuh saat kita berhenti mengonsumsi gula." },
          { ep: 3, title: "Cara Gila Baru untuk Mencoba Nyetop Penuaan", youtubeId: "sTPRtmpQi1Y", airYear: 2026, duration: "4:06", description: "Pendekatan ilmiah terbaru dalam upaya memperlambat penuaan." },
          { ep: 4, title: "Apa Jadinya Jika ASEAN Punya Satu Mata Uang?", youtubeId: "d7O6Eujw7tQ", airYear: 2026, duration: "3:21", description: "Membayangkan dampak ekonomi bila ASEAN memakai satu mata uang." },
          { ep: 5, title: "Satu Orang yang Merombak Kekuatan Nuklir Dunia", youtubeId: "IOSSrNitwr4", airYear: 2026, duration: "4:27", description: "Sosok yang mengubah arah pemanfaatan tenaga nuklir dunia." },
          { ep: 6, title: "Kenapa Banyak Anak Kecil Punya Temen Khayalan?", youtubeId: "IOu2jcTk9JQ", airYear: 2026, duration: "3:16", description: "Fenomena teman khayalan pada anak dan penjelasan psikologisnya." },
          { ep: 7, title: "Apa Rasanya Jadi Orang Autis?", youtubeId: "5J6o5eIKqOY", airYear: 2026, duration: "5:21", description: "Memahami cara orang autis merasakan dan memandang dunia." },
          { ep: 8, title: "Misteri Terbesar Laut yang Belum Terpecahkan", youtubeId: "oVXN_7gzirA", airYear: 2026, duration: "3:46", description: "Misteri laut dalam yang sampai kini belum terpecahkan sains." },
          { ep: 9, title: "Gimana Jika Kita Punya Dua Pasang Paru-paru?", youtubeId: "16huZsayUUQ", airYear: 2026, duration: "3:51", description: "Andai manusia punya dua pasang paru-paru, apa yang berubah?" },
          { ep: 10, title: "Bisa Seberapa Parah Krisis Energi Dunia Saat Ini?", youtubeId: "T_5rixMMTWk", airYear: 2026, duration: "3:47", description: "Seberapa parah krisis energi dunia dan dampaknya bagi kita." },
          { ep: 11, title: "Apa Jadinya Jika Bumi Punya Dua Matahari?", youtubeId: "ujzX3F2PW7c", airYear: 2026, duration: "4:19", description: "Skenario ilmiah jika Bumi mengorbit dua matahari." },
          { ep: 12, title: "Seberapa Sulit Bikin Roket Sebenarnya?", youtubeId: "H1oSgMtFXkQ", airYear: 2026, duration: "3:50", description: "Tantangan teknik di balik pembuatan roket luar angkasa." },
          { ep: 13, title: "Kenapa Peradaban Besar Selalu Mulai di Area Ini?", youtubeId: "kqOtfYVPcew", airYear: 2026, duration: "4:19", description: "Alasan geografis peradaban besar selalu lahir di kawasan tertentu." },
          { ep: 14, title: "Seberapa Kaya Orang-orang Terkaya Sebenarnya?", youtubeId: "UcpIPDoMGvk", airYear: 2026, duration: "15:59", description: "Membayangkan skala kekayaan orang terkaya dunia secara nyata." },
          { ep: 15, title: "Kenapa Ada Ratusan Danau Aneh di Bawah Es Antarktika?", youtubeId: "RUK3AMr9iN0", airYear: 2026, duration: "4:00", description: "Ratusan danau tersembunyi di bawah lapisan es Antarktika." },
          { ep: 16, title: "Kenapa Benda Sebahaya Ini Ada di Rumah Banyak Orang?", youtubeId: "6WlMwI0l_js", airYear: 2026, duration: "4:25", description: "Benda berbahaya yang diam-diam ada di banyak rumah." },
          { ep: 17, title: "Bagaimana Cara Tercepat untuk Kena Kanker?", youtubeId: "yslj7zpN3K4", airYear: 2026, duration: "11:08", description: "Faktor-faktor yang paling mempercepat risiko kanker — dan cara menghindarinya." },
          { ep: 18, title: "Belajar cari tujuan hidup dari B.J. Habibie!", youtubeId: "p0d5q_vRF1s", airYear: 2026, duration: "2:07", description: "Pelajaran mencari tujuan hidup dari perjalanan B.J. Habibie." },
          { ep: 19, title: "Apakah Benar Orang Indonesia Malas-malas?", youtubeId: "c5AQZFKVngA", airYear: 2026, duration: "4:53", description: "Menguji anggapan soal etos kerja orang Indonesia dengan data." },
          { ep: 20, title: "Apa yang Terjadi Jika Usus Buntu Kita Pecah?", youtubeId: "T2z0uQ_uy9Q", airYear: 2026, duration: "4:14", description: "Apa yang terjadi saat usus buntu pecah dan kenapa itu gawat darurat." },
          { ep: 21, title: "Kenapa Sebenarnya Pulpen Gak Bisa Dihapus?", youtubeId: "tgQLOaiFpjA", airYear: 2026, duration: "4:27", description: "Kimia tinta pulpen dan alasan ia menempel permanen di kertas." },
          { ep: 22, title: "Gimana Cara Menghadapi 'Kutukan' Sumber Daya Alam?", youtubeId: "gbAUrGgksXc", airYear: 2026, duration: "3:54", description: "Paradoks negara kaya sumber daya yang justru sulit sejahtera." },
          { ep: 23, title: "Kenapa Kedokteran Gigi Terpisah dari Kedokteran?", youtubeId: "m68-_9kVjoc", airYear: 2026, duration: "3:45", description: "Sebab historis kedokteran gigi berkembang terpisah dari kedokteran umum." },
          { ep: 24, title: "Apa Jadinya Jika Kita Kebanyakan Kafein?", youtubeId: "3RZ6Eir-QyI", airYear: 2026, duration: "4:03", description: "Efek kafein berlebih pada tubuh dan batas aman konsumsinya." }
        ]
      }
    ]
  },
  {
    id: "epic-story",
    type: "tv",
    title: "Epic Story",
    audioLang: "id",
    year: 2022,
    endYear: 2026,
    rating: 9.1,
    genres: ["Islamic", "Educational", "Documentary", "Drama"],
    channel: "Yufid.TV",
    country: "Indonesia",
    popularity: 93,
    tagline: "Kisah Para Nabi & Umat Terdahulu",
    thumb: YT_THUMB("Rh5WNIW-gCU", "maxresdefault"),
    backdrop: YT_THUMB("f1G7cHUa-dc", "maxresdefault"),
    description:
      "Serial kisah Islami dari Yufid.TV bersama Ustadz Johan Saputra Halim, M.H.I. Mengupas kisah para nabi dan umat terdahulu secara runtut dan berdasar dalil, dikemas sinematik sehingga enak diikuti dari awal sampai akhir. Season 2 khusus membahas Sirah Nabawiyah secara berurutan.",
    cast: [
      { name: "Ustadz Johan Saputra Halim, M.H.I.", role: "Pembawa Kisah" },
      { name: "Yufid.TV", role: "Rumah Produksi" }
    ],
    seasons: [
      {
        season: 1,
        year: 2022,
        episodes: [
          { ep: 1, title: "Kisah Nabi Danial (Nabi yang Jenazahnya Ditemukan)", youtubeId: "MMJTQsCTjhI", airDate: "2022-05-23", duration: "16:56", description: "Kisah Nabi Danial, nabi yang jenazahnya ditemukan berabad-abad kemudian." },
          { ep: 2, title: "Perjuangan Lunasi Hutang dengan Cara Yang Tidak Terduga", youtubeId: "-BE0LSTdKmc", airDate: "2022-06-27", duration: "16:40", description: "Kisah seseorang yang berjuang melunasi hutang dengan cara yang sama sekali tak terduga." },
          { ep: 3, title: "Inilah Fakta Di Balik 2 Tanduk dari Surga", youtubeId: "yRMSFkpAkOM", airDate: "2022-07-10", duration: "18:55", description: "Fakta di balik dua tanduk dari langit dan pelajaran di baliknya." },
          { ep: 4, title: "Kisah Menyentuh Hati: Beratnya Ujian Keimanan Orang Terdahulu", youtubeId: "LVNW6oaGbnA", airDate: "2022-09-05", duration: "20:12", description: "Ashabul Ukhdud — beratnya ujian keimanan umat terdahulu yang menyentuh hati." },
          { ep: 5, title: "Allah Menahan Matahari Untuknya!!! Kisah Nabi Joshua (Yusya' bin Nun 'Alaihissalam)", youtubeId: "LO_eX_n7mtQ", airDate: "2022-11-13", duration: "17:43", description: "Allah menahan matahari untuknya: kisah Nabi Yusya' bin Nun 'alaihissalam." },
          { ep: 6, title: "Kisah Nabi Daud Eps. 1 (Munculnya Nabi Samuel dan Pertarungan Nabi Daud vs Jalut)", youtubeId: "llce_dd6-XY", airDate: "2023-01-26", duration: "19:09", description: "Munculnya Nabi Samuel dan pertarungan legendaris Nabi Daud melawan Jalut." },
          { ep: 7, title: "Kisah Nabi Daud Eps. 2 (Mukjizat Nabi Daud, Besi Menjadi Lunak dan Kitab Zabur)", youtubeId: "ExQLRCzkbLk", airDate: "2023-01-27", duration: "17:53", description: "Mukjizat Nabi Daud: besi yang melunak di tangannya dan turunnya Kitab Zabur." },
          { ep: 8, title: "Kisah Keistimewaan Nabi Sulaiman (Nabi yang Menguasai Manusia, Jin & Hewan)", youtubeId: "jPgN0SCrIeE", airDate: "2023-05-01", duration: "17:32", description: "Keistimewaan Nabi Sulaiman, nabi yang menguasai manusia, jin, dan hewan." },
          { ep: 9, title: "Kisah Bagaimana Nabi Sulaiman Mengenal Ratu Bilqis & Kecerdasan Burung Hud-hud", youtubeId: "0L158UQaz9c", airDate: "2023-07-04", duration: "12:37", description: "Bagaimana Nabi Sulaiman mengenal Ratu Bilqis lewat kecerdasan burung Hud-hud." },
          { ep: 10, title: "Kisah Nabi Sulaiman & Ratu Bilqis yang Akhirnya Beriman kepada Allah", youtubeId: "mG6-76sZ_iA", airDate: "2023-07-05", duration: "10:29", description: "Ratu Bilqis akhirnya beriman kepada Allah setelah melihat kebesaran-Nya." },
          { ep: 11, title: "Misteri di Balik Jasad di Singgasana Nabi Sulaiman", youtubeId: "ysE5ypAmgKQ", airDate: "2023-08-29", duration: "15:40", description: "Misteri di balik jasad yang muncul di singgasana Nabi Sulaiman." },
          { ep: 12, title: "Kisah Ketidaktahuan Para Jin Tentang Wafatnya Nabi Sulaiman", youtubeId: "AJzpynTy50Q", airDate: "2023-09-23", duration: "11:58", description: "Para jin tidak mengetahui wafatnya Nabi Sulaiman — pelajaran tentang batas ilmu makhluk." },
          { ep: 13, title: "KAMU BUTUH INI SAAT JALANMU BUNTU! KISAH NYATA KEBAIKANMU DI MASA LALU BISA MENOLONGMU DI KALA SUSAH", youtubeId: "5Q6k4uRGxac", airDate: "2023-10-23", duration: "17:55", description: "Kisah nyata: kebaikan di masa lalu yang menolong saat jalan terasa buntu." },
          { ep: 14, title: "SEAKAN TIDAK TERJADI APA-APA, KAUM Y4HUD1 PERGI KE PASAR SETELAH M3M8UNUH BANYAK NABI", youtubeId: "b0MGkUWqyz8", airDate: "2023-12-01", duration: "23:51", description: "Kekerasan hati kaum yang membunuh para nabi lalu melanjutkan hidup seakan tak terjadi apa-apa." },
          { ep: 15, title: "YANG TERJADI DILUAR DUGAAN! KISAH NYATA 3 ORANG YANG DIUJI ALLAH DENGAN NIKMAT", youtubeId: "n8pAwlv0OwY", airDate: "2024-02-24", duration: "19:00", description: "Tiga orang yang diuji Allah dengan nikmat, dan akhir yang di luar dugaan." },
          { ep: 16, title: "KISAH NYATA UNTA AJAIB YANG KELUAR DARI BATU (KISAH NABI SHALIH & KAUM TSAMUD)", youtubeId: "207s8U7vuww", airDate: "2024-08-19", duration: "26:30", description: "Unta ajaib yang keluar dari batu: kisah Nabi Shalih dan kaum Tsamud." },
          { ep: 17, title: "FULL Kisah Dzulqarnain, Jejak Kerajaan Hingga Proses Pembangunan Tembok Ya'juj & Ma'juj", youtubeId: "f1G7cHUa-dc", airDate: "2024-10-28", duration: "21:33", description: "Kisah lengkap Dzulqarnain hingga pembangunan tembok penahan Ya'juj & Ma'juj." },
          { ep: 18, title: "FULL KISAH NABI YANG MASIH HIDUP SAMPAI HARI INI, ISA ALAIHISSALAM", youtubeId: "CYcC_YrhPVg", airDate: "2024-12-28", duration: "20:54", description: "Kisah lengkap Nabi Isa 'alaihissalam, nabi yang masih hidup hingga hari ini." },
          { ep: 19, title: "TERTIDUR SELAMA 309 TAHUN! INILAH RAHASIA KISAH ASHABUL KAHFI LENGKAP", youtubeId: "yqxtev1sXW0", airDate: "2025-02-01", duration: "21:41", description: "Tertidur selama 309 tahun — rahasia lengkap kisah Ashabul Kahfi." },
          { ep: 20, title: "EPIC STORY NABI AYYUB, KISAH TENTANG UJIAN SAKIT YANG LAMA, KESABARAN HINGGA HUJAN BELALANG EMAS", youtubeId: "tFTRyWw8pg4", airDate: "2025-03-01", duration: "26:57", description: "Nabi Ayyub: ujian sakit yang panjang, kesabaran luar biasa, hingga hujan belalang emas." },
          { ep: 21, title: "Kisah Umar Mencari Sosok yang Tak Dikenal di Bumi Tapi Terkenal di Langit, Uwais Al Qarni", youtubeId: "SA3MHgwlh5g", airDate: "2025-04-15", duration: "4:49", description: "Umar mencari sosok yang tak dikenal di bumi tapi terkenal di langit: Uwais Al Qarni." },
          { ep: 22, title: "Kenapa Nabi Musa Tampar Malaikat Maut Hingga Buta? Ini Jawabannya! -Kisah Wafat Nabi Musa", youtubeId: "Jj2EgNFjKH0", airDate: "2025-07-18", duration: "20:06", description: "Mengapa Nabi Musa menampar Malaikat Maut? Kisah wafatnya Nabi Musa." },
          { ep: 23, title: "Azab Sudah Terlihat di Depan Mata?! Apa yang Membuat Kaum ini Hampir Diazab?!", youtubeId: "dvTR4ApMydQ", airDate: "2025-09-30", duration: "21:28", description: "Kaum Nabi Yunus yang nyaris diazab — dan apa yang menyelamatkan mereka." },
          { ep: 24, title: "SAMA-SAMA PERNAH BERSALAH, KENAPA ADAM DIAMPUNI DAN IBLIS TIDAK? INILAH HAL YANG BANYAK DILUPAKAN!", youtubeId: "oTAe8CKz0IE", airDate: "2025-12-10", duration: "30:49", description: "Sama-sama bersalah, mengapa Adam diampuni sedangkan Iblis tidak?" },
          { ep: 25, title: "FULL EPIC! Kisah Nabi Yusuf Lengkap: Dari Sumur, Penjara hingga Menjadi Menteri Mesir!", youtubeId: "Rh5WNIW-gCU", airDate: "2026-04-16", duration: "27:35", description: "Kisah lengkap Nabi Yusuf: dari dasar sumur, penjara, hingga menjadi menteri Mesir." },
          { ep: 26, title: "Fakta Nabi Luth yang Jarang Dibahas dan Kengerian Tingkah dan Azab Kaum Sodom", youtubeId: "Vf0aXDVWi0w", airDate: "2026-06-28", duration: "16:12", description: "Fakta Nabi Luth yang jarang dibahas dan azab yang menimpa kaum Sodom." },
          { ep: 27, title: "SUNGGUH DI LUAR NALAR😱! 3 UJIAN DARI NABI KHIDIR YANG BIKIN NABI MUSA TIDAK BISA SABAR?", youtubeId: "udRCJ1DHd9c", airDate: "2026-07-29", duration: "25:35", description: "Tiga ujian dari Nabi Khidir yang membuat Nabi Musa kehilangan kesabaran." },
          { ep: 28, title: "KISAH NYATA. LOGIKA GAK KEPAKE!! 100 TAHUN MATI BISA HIDUP KEMBALI! EPICNYA KISAH NABI UZAIR", youtubeId: "kyBb_HzuXwg", airDate: "2026-08-18", duration: "21:37", description: "Seratus tahun wafat lalu dihidupkan kembali — epicnya kisah Nabi Uzair." }
        ]
      },
      {
        season: 2,
        year: 2025,
        episodes: [
          { ep: 1, title: "Kenapa Sih Kita Harus Belajar Sirah Nabi Muhammad?", youtubeId: "XubiDKs0oyg", airDate: "2025-05-16", duration: "20:07", description: "Mengapa kita perlu mempelajari sirah Nabi Muhammad? Pembuka serial spesial." },
          { ep: 2, title: "SEAKAN TAK ASING! INILAH KENGERIAN ZAMAN JAHILIYAH YG MIRIP DGN ZAMAN SEKARANG!", youtubeId: "xeZujG8n4fE", airDate: "2025-06-14", duration: "23:30", description: "Kengerian zaman jahiliyah yang ternyata mirip dengan zaman sekarang." },
          { ep: 3, title: "Garis Keturunan Nabi dan Sejarah Si Pemberi Makan Burung Langit", youtubeId: "HJIguD3TuC4", airDate: "2025-08-12", duration: "19:58", description: "Garis keturunan Nabi dan sejarah sang pemberi makan burung langit." },
          { ep: 4, title: "Dari Mimpi Bertemu Orang Misterius, Hingga Munculnya Kembali Zam-zam Setelah Lama Hilang!", youtubeId: "Ys-nY4kcJZI", airDate: "2025-10-29", duration: "17:31", description: "Dari mimpi bertemu orang misterius hingga munculnya kembali sumur Zamzam." },
          { ep: 5, title: "Nabi Kita Nyaris Tidak Terlahir? Kisah Dramatis Undian di Kabah yg Hampir Korbankan Ayah Nabi", youtubeId: "HYOoRuv3fhM", airDate: "2026-01-17", duration: "19:38", description: "Kisah dramatis undian di Ka'bah yang hampir mengorbankan ayah Nabi." },
          { ep: 6, title: "MENGERIKAN!😱 Niat Hati Ingin Hancurkan Ka’bah, Justru ini yang Terjadi pada Pasukan Bergajah!", youtubeId: "KZmmSiiiTMY", airDate: "2026-02-17", duration: "22:44", description: "Niat menghancurkan Ka'bah, inilah yang justru terjadi pada pasukan bergajah." },
          { ep: 7, title: "Kisah Pilu dari Orangtua Nabi Hingga Lahirnya Nabi Muhammad", youtubeId: "Aj81iyXGF1s", airDate: "2026-05-29", duration: "20:23", description: "Kisah pilu orangtua Nabi hingga lahirnya Nabi Muhammad shallallahu 'alaihi wasallam." },
          { ep: 8, title: "Mengapa Dada Nabi Muhammad ﷺ Dibelah Saat Masih Kecil? Kisah Halimah dan Persiapan Sang Rasul", youtubeId: "BEw-0jG7rg4", airDate: "2026-07-11", duration: "19:52", description: "Mengapa dada Nabi dibelah saat kecil? Kisah Halimah dan persiapan sang Rasul." },
          { ep: 9, title: "Ujian Berat yang Datang Bertubi-tubi. Inilah Kisah Mengharukan yang Dialami Masa Kecil Nabi ﷺ", youtubeId: "fmQMic1IIzE", airDate: "2026-07-21", duration: "18:10", description: "Ujian bertubi-tubi di masa kecil Nabi yang mengharukan." },
          { ep: 10, title: "Kisah Pendeta yang Menyadari Mukjizat Nabi Sejak Kecil, Ini yang Ia Lakukan kepada Nabi", youtubeId: "WaHmvvt0p_U", airDate: "2026-08-30", duration: "21:16", description: "Pendeta yang menyadari mukjizat Nabi sejak kecil dan apa yang ia lakukan." }
        ]
      }
    ]
  },
  {
    id: "outdoor-boys",
    type: "tv",
    title: "Outdoor Boys",
    year: 2020,
    endYear: 2025,
    rating: 9.0,
    genres: ["Adventure", "Documentary", "Educational", "Action"],
    channel: "Outdoor Boys",
    country: "Amerika Serikat",
    popularity: 90,
    tagline: "Bertahan Hidup di Alam Liar Alaska",
    thumb: YT_THUMB("iys_pmJSp9M", "maxresdefault"),
    backdrop: YT_THUMB("8hvbcAvkuJs", "maxresdefault"),
    description:
      "Luke Nichols bersama ketiga putranya menjelajah alam liar Alaska: membangun shelter dari nol, menempa besi, memancing di laut beku, dan bertahan hidup di suhu ekstrem. Tontonan petualangan keluarga yang sarat keterampilan praktis dan pelajaran tentang kesabaran, kerja keras, serta kekaguman pada ciptaan Allah.",
    cast: [
      { name: "Luke Nichols", role: "Pemandu Utama" },
      { name: "Tommy Nichols", role: "Anggota Tim" },
      { name: "Nate Nichols", role: "Anggota Tim" },
      { name: "Jacob Nichols", role: "Anggota Tim" }
    ],
    seasons: [
      {
        season: 1,
        year: 2020,
        episodes: [
          { ep: 1, title: "Winter Survival Camping with 4 yr old in Alaska - Primitive Survival Shelter", youtubeId: "w7nBJegBk8Q", airDate: "2020-02-01", duration: "15:02", description: "Camping musim dingin bersama anak usia 4 tahun di Alaska dengan shelter darurat." },
          { ep: 2, title: "Camping & Fishing on Floating Cabin Built From Scratch (My Quarantine Bug Out Cabin)", youtubeId: "U908K7lMXpk", airDate: "2020-03-28", duration: "29:38", description: "Membangun kabin apung dari nol lalu berkemah dan memancing di atasnya." },
          { ep: 3, title: "1 Year in Log Cabin Survival Shelter (Building, Camping, Repairing Bushcraft Shelter)", youtubeId: "3UIw_7g0P_g", airDate: "2022-01-08", duration: "1:59:41", description: "Satu tahun penuh membangun, menghuni, dan memperbaiki kabin kayu di hutan." },
          { ep: 4, title: "3 Days Stranded in Alaska Without a Tent - Camping in Deep Snow Survival Shelters", youtubeId: "3Ym3LW8ZVeY", airDate: "2023-02-11", duration: "32:29", description: "Tiga hari terdampar di Alaska tanpa tenda, bermalam di shelter salju." },
          { ep: 5, title: "Lost in Alaska - How to NOT Freeze to Death! Winter Survival Camping & Bushcraft (No Tent or Bag)", youtubeId: "sqoOzGMqCQU", airDate: "2023-04-22", duration: "23:45", description: "Tersesat di Alaska tanpa tenda maupun kantong tidur — cara bertahan agar tidak membeku." },
          { ep: 6, title: "4 Days Alone in Alaska - Bushcraft Camping & Foraging Food", youtubeId: "sSsTR8qqDl4", airDate: "2023-09-02", duration: "27:56", description: "Empat hari sendirian di Alaska: bushcraft, membangun tempat berlindung, dan mencari makan dari alam." },
          { ep: 7, title: "Stranded in Alaska's Rainforest - 3 Days Solo camping", youtubeId: "o6zb6_TTVWo", airDate: "2023-10-14", duration: "30:40", description: "Tiga hari solo camping di hutan hujan Alaska yang basah dan dingin." },
          { ep: 8, title: "Camping in Alaska's Deepest Snow with a Dugout Survival Shelter", youtubeId: "ggWZoH9PeIU", airDate: "2024-02-17", duration: "25:09", description: "Berkemah di salju terdalam Alaska dengan shelter galian di bawah permukaan." },
          { ep: 9, title: "Camping in Whale Graveyard & Treasure Hunting Remote Alaskan Beaches", youtubeId: "NeU6OTeKQxk", airDate: "2024-06-08", duration: "47:19", description: "Berkemah di kuburan paus sambil berburu harta karun di pantai terpencil Alaska." },
          { ep: 10, title: "6 Days Jungle Survival Camping with NO Food - US Marine Corps Jungle Survival School", youtubeId: "2OdYv8YKSaI", airDate: "2024-10-19", duration: "1:13:02", description: "Enam hari survival di hutan tanpa bekal makanan bersama sekolah survival Marinir AS." },
          { ep: 11, title: "3 Days in Arctic Survival Shelter - Solo Bushcraft Camping & Blacksmithing.", youtubeId: "iys_pmJSp9M", airDate: "2024-12-28", duration: "25:46", description: "Tiga hari di shelter Arktik: bushcraft solo sekaligus menempa besi." },
          { ep: 12, title: "Forging a Knife & Survival Camping Alone in the Wilderness", youtubeId: "zHt1IEgEISo", airDate: "2025-03-08", duration: "33:48", description: "Menempa pisau sendiri sambil bertahan hidup sendirian di alam liar." },
          { ep: 13, title: "Camping on Frozen Ocean - 6 Days Fishing for King Crab & Hunting Ptarmigan", youtubeId: "8hvbcAvkuJs", airDate: "2025-03-22", duration: "50:21", description: "Enam hari berkemah di atas laut beku, memancing kepiting raja dan berburu ptarmigan." }
        ]
      }
    ]
  },
  {
    id: "isekai-sharia",
    type: "tv",
    title: "Isekai Sharia",
    year: 2024,
    rating: 8.6,
    genres: ["Islamic", "Animation", "Fantasy", "Educational"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 82,
    thumb: YT_THUMB("bNGChY6oDAc", "maxresdefault"),
    description:
      "Serial pendek bergaya isekai yang membahas kehidupan setelah kematian: alam kubur, padang mahsyar, hingga hari perhitungan — dikemas ringan namun menggetarkan.",
    cast: [
      { name: "Sang Musafir", role: "Tokoh Utama" },
      { name: "Malaikat Penjaga", role: "Pemandu" },
      { name: "Free Quran Education", role: "Studio Produksi" }
    ],
    seasons: [
      {
        season: 1,
        year: 2024,
        episodes: [
          { ep: 1, title: "What is The Fate of Believers in The Grave?", youtubeId: "bNGChY6oDAc", airDate: "2024-11-27", duration: "2:06", description: "Nasib orang beriman di alam kubur.", idnYoutubeId: "OTuDa_R3N5U", idnAirDate: "2024-11-10", idnTitle: "Bagaimana Nasib Orang Beriman di Alam Kubur?" },
          { ep: 2, title: "The Shortcut to the Blazing Hellfire", youtubeId: "pKUqWAw9Mpo", airDate: "2024-12-12", duration: "1:43", description: "Jalan pintas menuju api neraka yang harus dihindari.", idnYoutubeId: "VdnIbGKXtm4", idnAirDate: "2024-12-12", idnTitle: "Jalan Pintas Menuju Neraka yang Membakar" },
          { ep: 3, title: "Surviving Yaumul Mahsyar?", youtubeId: "ucGmojDnZHE", airDate: "2025-01-10", duration: "3:36", description: "Bertahan di padang mahsyar yang menyesakkan.", idnYoutubeId: "Fmp-aoK3Lp4", idnAirDate: "2025-01-10", idnTitle: "Bertahan di Yaumul Mahsyar?" },
          { ep: 4, title: "The Outfit for the Day of Judgment", youtubeId: "Q-QPiM_66YI", airDate: "2025-01-24", duration: "5:47", description: "Pakaian apa yang kita kenakan di hari kiamat?", idnYoutubeId: "w71Fr608WdY", idnAirDate: "2025-01-24", idnTitle: "Pakaian di Hari Kiamat" },
          { ep: 5, title: "Your Friends in The Hereafter", youtubeId: "KOKiY2GyMPs", airDate: "2025-01-27", duration: "3:46", description: "Teman-teman kita di akhirat nanti.", idnYoutubeId: "qe6l0wKkFhw", idnAirDate: "2025-01-27", idnTitle: "Circle-mu di Akhirat" },
          { ep: 6, title: "VIP Cheat Code in The Afterlife", youtubeId: "dvECU8h7mhk", airDate: "2025-02-10", duration: "3:34", description: "Amalan yang jadi 'cheat code' di akhirat.", idnYoutubeId: "rsORpM0GhOw", idnAirDate: "2025-02-10", idnTitle: "Cheat Code VIP di Akhirat" },
          { ep: 7, title: "Choose to Glow or Burn in the Afterlife?", youtubeId: "0VzPmgf1yG4", airDate: "2025-04-19", duration: "2:40", description: "Bercahaya atau terbakar — pilihan ada di dunia.", idnYoutubeId: "aphGB7ADzoU", idnAirDate: "2025-04-19", idnTitle: "Pilih Bercahaya atau Terbakar di Akhirat?" }
        ]
      }
    ]
  },
  {
    id: "imbm-redlock",
    type: "tv",
    title: "I'm Best Muslim: RedLock",
    year: 2026,
    rating: 8.8,
    genres: ["Islamic", "Animation", "Drama", "Action"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 88,
    thumb: YT_THUMB("Nci1KYkQIdU", "maxresdefault"),
    description:
      "Spin-off spesial: RedLock adalah kamp latihan hati. Perjalanan mendisiplinkan diri, memurnikan niat, dan menjadi muslim yang lebih baik selama Ramadan.",
    cast: [
      { name: "Best Muslim", role: "Peserta Kamp" },
      { name: "Tubagus Punky", role: "Peserta Kamp" },
      { name: "Instruktur RedLock", role: "Pelatih" },
      { name: "Free Quran Education", role: "Studio Produksi" }
    ],
    seasons: [
      {
        season: 1,
        year: 2026,
        episodes: [
          { ep: 1, title: "Enter the Ramadan Camp", youtubeId: "Nci1KYkQIdU", airDate: "2026-02-18", duration: "8:06", description: "Memasuki kamp Ramadan yang penuh tantangan." },
          { ep: 2, title: "Proving Your Intentions", youtubeId: "dn2nVAaVhpA", airDate: "2026-03-06", duration: "9:16", description: "Membuktikan kemurnian niat di hadapan ujian." },
          { ep: 3, title: "Trailer: RedLock Ep.2", youtubeId: "DJldW86w9M8", airDate: "2026-03-05", duration: "0:20", description: "Cuplikan episode berikutnya." }
        ]
      }
    ]
  },
  {
    id: "forgotten-sunnah",
    type: "tv",
    title: "Forgotten Sunnah",
    year: 2026,
    rating: 8.3,
    genres: ["Islamic", "Educational", "Comedy", "Animation"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 74,
    thumb: YT_THUMB("2IVGrtzoH_I", "maxresdefault"),
    description:
      "Seri pendek yang mengangkat sunnah-sunnah Nabi yang sering dilupakan di kehidupan modern.",
    cast: [
      { name: "Best Muslim", role: "Tokoh Utama" },
      { name: "Tubagus Punky", role: "Pendukung" },
      { name: "Free Quran Education", role: "Studio Produksi" }
    ],
    seasons: [
      {
        season: 1,
        year: 2026,
        episodes: [
          { ep: 2, title: "Brush Your Teeth", youtubeId: "2IVGrtzoH_I", airDate: "2026-05-15", duration: "4:43", description: "Sunnah siwak dan menjaga kebersihan mulut." }
        ]
      }
    ]
  },

  /* ===================== MOVIES (KOMPILASI PENUH) ===================== */
  {
    id: "imbm-s1-movie",
    type: "movie",
    title: "I'm The Best Muslim — Season 1 (Full Movie)",
    youtubeId: "lGind6Cn0Tw", airDate: "2021-07-13",
    idnYoutubeId: "l8IskXVjnB4", idnAirDate: "2023-05-31", idnTitle: "I'm The Best Muslim — Kompilasi Musim Ke-1",
    year: 2021,
    rating: 9.5,
    duration: "1h 04m",
    genres: ["Islamic", "Animation", "Comedy", "Educational"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 99,
    description:
      "Kompilasi lengkap Season 1 dalam satu tayangan penuh. Pilihan terbaik untuk agenda nobar santri — 13 juta penonton di seluruh dunia.",
    thumb: YT_THUMB("lGind6Cn0Tw", "maxresdefault")
  },
  {
    id: "imbm-s2-movie",
    type: "movie",
    title: "I'm The Best Muslim — Season 2 (Full Movie)",
    youtubeId: "zXJ9ubnwXds", airDate: "2022-09-03",
    idnYoutubeId: "ObTe1JzbKto", idnAirDate: "2024-12-21", idnTitle: "I'm The Best Muslim — Kompilasi Musim Ke-2",
    year: 2022,
    rating: 9.2,
    duration: "1h 02m",
    genres: ["Islamic", "Animation", "Comedy", "Educational"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 93,
    description:
      "Seluruh episode Season 2 dirangkai jadi satu film utuh: dari Silence is Gold sampai The Greatest Enemy.",
    thumb: YT_THUMB("zXJ9ubnwXds", "maxresdefault")
  },
  {
    id: "imbm-s12-movie",
    type: "movie",
    title: "I'm The Best Muslim — Season 1 & 2 Complete",
    youtubeId: "bZCeztKUUic", airDate: "2022-10-01",
    year: 2022,
    rating: 9.3,
    duration: "2h 06m",
    genres: ["Islamic", "Animation", "Comedy"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 90,
    description:
      "Kompilasi resmi gabungan Season 1 dan Season 2. Marathon nobar paling lengkap dalam satu video.",
    thumb: YT_THUMB("bZCeztKUUic", "maxresdefault")
  },
  {
    id: "imbm-s3-vol1",
    type: "movie",
    title: "I'm Best Muslim — Season 3 Volume 1",
    youtubeId: "illAE9r4idk", airDate: "2023-08-14",
    idnYoutubeId: "7oE4qt8e7h8", idnAirDate: "2025-02-21", idnTitle: "I'm The Best Muslim — Kompilasi Musim Ke-3",
    year: 2023,
    rating: 8.9,
    duration: "45m",
    genres: ["Islamic", "Animation", "Educational"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 85,
    description: "Kompilasi Season 3 episode 1–5 dalam satu tayangan.",
    thumb: YT_THUMB("illAE9r4idk", "maxresdefault")
  },
  {
    id: "imbm-s4-comp",
    type: "movie",
    title: "I'm Best Muslim — Season 4 Compilation (Ep 01–03)",
    youtubeId: "wnqktlruJY0", airDate: "2026-02-11",
    year: 2026,
    rating: 8.7,
    duration: "31m",
    genres: ["Islamic", "Animation", "Drama"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 83,
    description: "Tiga episode pembuka Season 4 dalam satu kompilasi.",
    thumb: YT_THUMB("wnqktlruJY0", "maxresdefault")
  },
  {
    id: "imbm-ramadan-comp",
    type: "movie",
    title: "I'm The Best Muslim — Ramadan Compilation",
    youtubeId: "wKbl5SBsRvw", airDate: "2020-05-18",
    year: 2019,
    rating: 8.5,
    duration: "6m 39s",
    genres: ["Islamic", "Animation", "Comedy"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 78,
    description: "Kompilasi spesial Ramadan berisi episode 1 sampai 3 dari serial original.",
    thumb: YT_THUMB("wKbl5SBsRvw", "maxresdefault")
  },
  {
    id: "imbm-s2-final-trailer",
    type: "movie",
    title: "I'm The Best Muslim — Season 2 Final Episode Trailer",
    youtubeId: "123qjTwLKA0", airDate: "2022-08-22",
    year: 2021,
    rating: 8.0,
    duration: "1m 09s",
    genres: ["Islamic", "Animation", "Action"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 60,
    description: "Trailer menuju episode penutup Season 2.",
    thumb: YT_THUMB("123qjTwLKA0", "maxresdefault")
  },
  {
    id: "imbm-s3-teaser",
    type: "movie",
    title: "I'm Best Muslim — Season 3 Teaser: Pungky Transform",
    youtubeId: "ZwdCguop7nE", airDate: "2023-02-17",
    year: 2023,
    rating: 8.1,
    duration: "1m 09s",
    genres: ["Islamic", "Animation", "Comedy"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 58,
    description: "Teaser transformasi Pungky menjelang Season 3.",
    thumb: YT_THUMB("ZwdCguop7nE", "maxresdefault")
  },
  {
    id: "imbm-special-trailer",
    type: "movie",
    title: "I'm Best Muslim — Special Series Trailer",
    youtubeId: "2k9JpAxXDGo", airDate: "2026-02-17",
    year: 2026,
    rating: 8.2,
    duration: "2m 53s",
    genres: ["Islamic", "Animation", "Action"],
    channel: "FreeQuranEducation",
    country: "Indonesia",
    popularity: 62,
    description: "Trailer seri spesial terbaru dari studio Free Quran Education.",
    thumb: YT_THUMB("2k9JpAxXDGo", "maxresdefault")
  }
];

/* Genre master list */
const GENRES = [
  "Action", "Adventure", "Comedy", "Drama", "Animation",
  "Documentary", "Horror", "Sci-Fi", "Fantasy", "Islamic", "Educational"
];

/* Helper turunan */
function totalEpisodes(item) {
  if (item.type !== "tv") return 0;
  return item.seasons.reduce((n, s) => n + s.episodes.length, 0);
}
function itemThumb(item) {
  if (item.thumb) return item.thumb;
  if (item.youtubeId) return YT_THUMB(item.youtubeId, "maxresdefault");
  const first = item.seasons?.[0]?.episodes?.[0];
  return first ? YT_THUMB(first.youtubeId, "maxresdefault") : "";
}
function itemMeta(item) {
  if (item.type === "movie") return item.duration;
  const s = item.seasons.length;
  return `${s} Season${s > 1 ? "s" : ""} • ${totalEpisodes(item)} Eps`;
}

/* =========================================================================
   DUAL AUDIO / VOICE — English & Indonesia
   -------------------------------------------------------------------------
   Sebuah episode / movie bisa punya versi suara Indonesia dengan menambah:
     idnYoutubeId : "VIDEO_ID"   (wajib, dari channel FreeQuranEducationIndonesia)
     idnTitle     : "Judul versi Indonesia"   (opsional)
     idnAirDate   : "YYYY-MM-DD"              (opsional)
   Kalau field ini tidak ada, judul tersebut dianggap hanya punya versi English.
   ========================================================================= */

/* Channel sumber untuk bahasa tertentu pada sebuah judul */
function voiceChannel(item, lang) {
  if (!item) return VOICES[lang].channel;
  if (lang === nativeLang(item)) return item.channel;
  return VOICES[lang].channel;
}

const VOICES = {
  en: { code: "en", label: "English",   short: "EN", flag: "🇬🇧", channel: "FreeQuranEducation" },
  id: { code: "id", label: "Indonesia", short: "ID", flag: "🇮🇩", channel: "FreeQuranEducationIndonesia" }
};

/* Bahasa asli sebuah judul. Judul tanpa field `audioLang` dianggap "en"
   (mis. serial FreeQuranEducation), sedangkan serial produksi Indonesia
   seperti Epic Story Yufid.TV diberi audioLang: "id". */
function nativeLang(item) {
  return item && item.audioLang ? item.audioLang : "en";
}

/* Apakah sebuah episode/movie punya versi suara tertentu.
   `item` opsional — dipakai untuk tahu bahasa asli judulnya. */
function hasVoice(node, lang, item) {
  if (!node) return false;
  const nat = nativeLang(item);
  if (lang === nat) return !!node.youtubeId;
  if (lang === "id") return !!node.idnYoutubeId;
  return false;
}

/* Ambil video id sesuai bahasa, fallback ke bahasa asli bila belum tersedia */
function voiceVideoId(node, lang, item) {
  if (lang === "id" && node.idnYoutubeId) return node.idnYoutubeId;
  return node.youtubeId;
}
function voiceTitle(node, lang) {
  if (lang === "id" && node.idnYoutubeId && node.idnTitle) return node.idnTitle;
  return node.title;
}
function voiceAirDate(node, lang) {
  if (lang === "id" && node.idnYoutubeId && node.idnAirDate) return node.idnAirDate;
  return node.airDate;
}

/* Label tanggal untuk badge episode. Sebagian judul hanya punya tahun rilis
   (airYear) — tampilkan tahunnya saja daripada mengarang tanggal palsu. */
function epDateLabel(node, lang) {
  const d = voiceAirDate(node, lang);
  if (d) return shortDate(d);
  return node.airYear ? String(node.airYear) : "";
}

/* Daftar bahasa yang tersedia pada sebuah judul (item level) */
function itemVoices(item) {
  const nodes = item.type === "tv"
    ? item.seasons.flatMap(s => s.episodes)
    : [item];
  const langs = [nativeLang(item)];
  if (nativeLang(item) !== "id" && nodes.some(n => n.idnYoutubeId)) langs.push("id");
  return langs;
}
/* Berapa episode yang sudah punya dub Indonesia */
function voiceCoverage(item, lang) {
  if (lang !== "id" || nativeLang(item) === "id") return null;
  const nodes = item.type === "tv" ? item.seasons.flatMap(s => s.episodes) : [item];
  return { done: nodes.filter(n => n.idnYoutubeId).length, total: nodes.length };
}

/* Format "2020-04-15" -> "15 Apr 20" (gaya badge episode) */
const _MON = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
function shortDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${Number(d)} ${_MON[Number(m) - 1]} ${y.slice(2)}`;
}

/* Inisial untuk avatar cast */
function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/* Warna avatar cast deterministik dari nama */
function nameHue(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}
