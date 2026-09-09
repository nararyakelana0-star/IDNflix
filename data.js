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
    seasons: [
      {
        season: 1,
        year: 2020,
        episodes: [
          { ep: 1, title: "Cleanliness", youtubeId: "rQEesf-lVrk", duration: "1:55", description: "Kebersihan sebagian dari iman — tapi bagaimana praktiknya sehari-hari?" },
          { ep: 2, title: "The Ramadan Avengers", youtubeId: "vZk51owZ358", duration: "3:45", description: "Pasukan Ramadan berkumpul menyambut bulan penuh berkah." },
          { ep: 3, title: "Fast and Furious Muslim!", youtubeId: "Fg71fyN43dA", duration: "1:42", description: "Puasa bukan alasan untuk jadi pemarah." },
          { ep: 4, title: "I Need Water!!!", youtubeId: "ZVKepszxAYc", duration: "1:22", description: "Ujian kecil yang menguji kesabaran saat berpuasa." },
          { ep: 5, title: "Need for Speed: The Best Deeds", youtubeId: "7eF6w4R6m-c", duration: "2:51", description: "Berlomba-lomba dalam kebaikan, bukan dalam pamer." },
          { ep: 6, title: "World Peace", youtubeId: "baF37RTHhD0", duration: "1:42", description: "Damai dimulai dari diri sendiri dan lisan kita." },
          { ep: 7, title: "Hardest Sacrifice!", youtubeId: "caBLmWWjV_8", duration: "4:58", description: "Pengorbanan terberat justru melawan ego sendiri." },
          { ep: 8, title: "The Most Awesome Post!", youtubeId: "ayllALZFWOU", duration: "1:37", description: "Bermedia sosial dengan adab seorang muslim." },
          { ep: 9, title: "Road Rage Terminator!", youtubeId: "5VapTmgaYLw", duration: "7:22", description: "Menahan amarah di jalanan adalah jihad kecil harian." },
          { ep: 10, title: "High Excellence Spirit!", youtubeId: "fMEP16wvYGo", duration: "8:57", description: "Semangat ihsan: melakukan segala sesuatu sebaik mungkin." },
          { ep: 11, title: "The Best of People!", youtubeId: "0eMgSjVcEtI", duration: "7:38", description: "Sebaik-baik manusia adalah yang paling bermanfaat." },
          { ep: 12, title: "Awesome Head!", youtubeId: "oxbKvpHBg4Q", duration: "10:12", description: "Ilmu tanpa amal, kepala besar tanpa isi." },
          { ep: 13, title: "The Ramadan Avenger: Infinity Worship", youtubeId: "GnJy6Miuo68", duration: "6:03", description: "Ibadah tanpa batas di penghujung Ramadan." },
          { ep: 14, title: "Most Benefit", youtubeId: "_aYkK8hLzdQ", duration: "9:01", description: "Mencari amal yang paling besar manfaatnya." }
        ]
      },
      {
        season: 2,
        year: 2021,
        episodes: [
          { ep: 1, title: "Silence is Gold", youtubeId: "xgWAKeStf-8", duration: "11:31", description: "Diam itu emas — menjaga lisan dari kata sia-sia." },
          { ep: 2, title: "Don't Lower your Gazee!", youtubeId: "xH79ZkALc6U", duration: "5:36", description: "Menundukkan pandangan, gerbang menuju hati yang bersih." },
          { ep: 3, title: "It's Your Fault!", youtubeId: "JjjyEm_PRq8", duration: "6:31", description: "Ketika ego berkuasa, semua orang jadi salah kecuali kita." },
          { ep: 4, title: "I'm the Expert!", youtubeId: "Wq_3HCh2HbU", duration: "6:51", description: "Merasa paling ahli adalah awal dari kejatuhan." },
          { ep: 5, title: "Better than the whole World!", youtubeId: "FB1A747xyu4", duration: "4:56", description: "Amal kecil yang lebih baik dari dunia dan seisinya." },
          { ep: 6, title: "All Day just for you!", youtubeId: "IyUbInWuqXM", duration: "6:51", description: "Berapa waktu yang benar-benar kita berikan untuk ilmu?" },
          { ep: 7, title: "Learn to be the Best!", youtubeId: "vry_sYuPfYQ", duration: "3:41", description: "Belajar bukan sekadar menonton, tapi mengamalkan." },
          { ep: 8, title: "Best Superhero", youtubeId: "KR8C_Xy5no4", duration: "7:26", description: "Pahlawan sejati dalam pandangan Islam." },
          { ep: 9, title: "The Greatest Enemy (Last Episode Season 2!)", youtubeId: "9wrSES-cDFg", duration: "12:07", description: "Musuh terbesar itu bernama hawa nafsu." }
        ]
      },
      {
        season: 3,
        year: 2023,
        episodes: [
          { ep: 1, title: "How to Borrow your Friend's Money?", youtubeId: "PT6KSgOZT90", duration: "10:41", description: "Adab berhutang dan menjaga amanah kepada sesama." },
          { ep: 2, title: "How to say Aameen", youtubeId: "0hXu2p_dgeU", duration: "8:11", description: "Sunnah mengucap aamiin dan keutamaannya dalam shalat." },
          { ep: 3, title: "How to Avoid Curse Words?", youtubeId: "B8O6Rs9Jz4Q", duration: "6:06", description: "Menjaga lisan dari kata-kata kotor dan celaan." },
          { ep: 4, title: "How to Open the Door?", youtubeId: "A6LtWvWjnfc", duration: "5:17", description: "Adab bertamu dan mengetuk pintu ala Rasulullah." },
          { ep: 5, title: "How to Raise Your Child?", youtubeId: "Xdj1fFGRg0s", duration: "16:21", description: "Mendidik anak dengan kasih sayang dan keteladanan." },
          { ep: 6, title: "How to Become Religious?", youtubeId: "kT-O0EFx5Hs", duration: "10:14", description: "Hijrah yang benar: bertahap, ikhlas, dan istiqamah." },
          { ep: 7, title: "How to Say Yes?", youtubeId: "uHhx_8JKXGE", duration: "5:01", description: "Memenuhi janji dan berkata baik kepada saudara." },
          { ep: 8, title: "Undying Courage (Last Episode Season 3)", youtubeId: "XXNGr8xFwL4", duration: "9:05", description: "Keberanian yang tak padam menghadapi ujian hidup." }
        ]
      },
      {
        season: 4,
        year: 2025,
        episodes: [
          { ep: 1, title: "Dark Cloud", youtubeId: "7NO-UkUPtSY", duration: "10:40", description: "Awan gelap menyelimuti kehidupan sang tokoh utama." },
          { ep: 2, title: "Shadows Beneath The Sun", youtubeId: "-S7nQ9m9VJw", duration: "8:41", description: "Bayangan di balik terik: ujian yang tak terlihat orang lain." },
          { ep: 3, title: "Shattered Rocks", youtubeId: "--RqdFbJldM", duration: "13:22", description: "Batu yang retak — hati yang perlu diperbaiki." },
          { ep: 4, title: "Lighting and Storm Before Dawn", youtubeId: "pzE9gkGG7HE", duration: "9:57", description: "Badai sebelum fajar, harapan setelah kesulitan." }
        ]
      }
    ]
  },

  /* ===================== TV SHOW LAIN ===================== */
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
    seasons: [
      {
        season: 1,
        year: 2024,
        episodes: [
          { ep: 1, title: "What is The Fate of Believers in The Grave?", youtubeId: "bNGChY6oDAc", duration: "2:06", description: "Nasib orang beriman di alam kubur." },
          { ep: 2, title: "The Shortcut to the Blazing Hellfire", youtubeId: "pKUqWAw9Mpo", duration: "1:43", description: "Jalan pintas menuju api neraka yang harus dihindari." },
          { ep: 3, title: "Surviving Yaumul Mahsyar?", youtubeId: "ucGmojDnZHE", duration: "3:36", description: "Bertahan di padang mahsyar yang menyesakkan." },
          { ep: 4, title: "The Outfit for the Day of Judgment", youtubeId: "Q-QPiM_66YI", duration: "5:47", description: "Pakaian apa yang kita kenakan di hari kiamat?" },
          { ep: 5, title: "Your Friends in The Hereafter", youtubeId: "KOKiY2GyMPs", duration: "3:46", description: "Teman-teman kita di akhirat nanti." },
          { ep: 6, title: "VIP Cheat Code in The Afterlife", youtubeId: "dvECU8h7mhk", duration: "3:34", description: "Amalan yang jadi 'cheat code' di akhirat." },
          { ep: 7, title: "Choose to Glow or Burn in the Afterlife?", youtubeId: "0VzPmgf1yG4", duration: "2:40", description: "Bercahaya atau terbakar — pilihan ada di dunia." }
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
    seasons: [
      {
        season: 1,
        year: 2026,
        episodes: [
          { ep: 1, title: "Enter the Ramadan Camp", youtubeId: "Nci1KYkQIdU", duration: "8:06", description: "Memasuki kamp Ramadan yang penuh tantangan." },
          { ep: 2, title: "Proving Your Intentions", youtubeId: "dn2nVAaVhpA", duration: "9:16", description: "Membuktikan kemurnian niat di hadapan ujian." },
          { ep: 3, title: "Trailer: RedLock Ep.2", youtubeId: "DJldW86w9M8", duration: "0:20", description: "Cuplikan episode berikutnya." }
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
    seasons: [
      {
        season: 1,
        year: 2026,
        episodes: [
          { ep: 2, title: "Brush Your Teeth", youtubeId: "2IVGrtzoH_I", duration: "4:43", description: "Sunnah siwak dan menjaga kebersihan mulut." }
        ]
      }
    ]
  },

  /* ===================== MOVIES (KOMPILASI PENUH) ===================== */
  {
    id: "imbm-s1-movie",
    type: "movie",
    title: "I'm The Best Muslim — Season 1 (Full Movie)",
    youtubeId: "lGind6Cn0Tw",
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
    youtubeId: "zXJ9ubnwXds",
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
    youtubeId: "bZCeztKUUic",
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
    youtubeId: "illAE9r4idk",
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
    youtubeId: "wnqktlruJY0",
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
    youtubeId: "wKbl5SBsRvw",
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
    youtubeId: "123qjTwLKA0",
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
    youtubeId: "ZwdCguop7nE",
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
    youtubeId: "2k9JpAxXDGo",
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
