/* ================= IDNFLIX APP ================= */

/* ---------- Icons ---------- */
const I = {
  play: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z"/></svg>`,
  plus: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  check: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  search: (s = 19) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>`,
  left: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  right: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  star: (s = 14) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.6 7 .9-5.1 4.8 1.3 7L12 18l-6.2 3.3 1.3-7L2 9.5l7-.9z"/></svg>`,
  menu: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  x: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  bookmark: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 4h12v17l-6-4.2L6 21z"/></svg>`,
  info: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
  sort: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h10M4 12h7M4 18h4"/><path d="M17 5v14M17 19l3-3M17 19l-3-3"/></svg>`,
  layers: (s = 15) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 14 9 5 9-5"/></svg>`,
  audio: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>`,
  eye: (s = 17) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeoff: (s = 17) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.6 6.2A9.9 9.9 0 0 1 12 6c6.4 0 10 7 10 7a17 17 0 0 1-3 3.8M6.2 6.4A17 17 0 0 0 2 13s3.6 7 10 7a9.7 9.7 0 0 0 4.3-1M3 3l18 18"/></svg>`,
  user: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v2"/><circle cx="12" cy="8" r="4"/></svg>`,
  camera: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l2-2.5h8L18 8h3v11H3z"/><circle cx="12" cy="13" r="3.6"/></svg>`,
  logout: (s = 17) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></svg>`,
  chev: (s = 15) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`
};

/* ---------- State ---------- */
const LS_LIST = "idnflix.mylist";
const LS_CONT = "idnflix.continue";
const LS_VOICE = "idnflix.voice";

/* Bahasa suara aktif: "en" | "id" (default Indonesia untuk santri IDN) */
let VOICE = (() => {
  const v = localStorage.getItem(LS_VOICE);
  return v === "en" || v === "id" ? v : "id";
})();
function setVoice(lang, silent) {
  if (VOICE === lang) return;
  VOICE = lang;
  localStorage.setItem(LS_VOICE, lang);
  if (!silent) toast(`Suara diubah ke ${VOICES[lang].flag} ${VOICES[lang].label}`);
}

/* Dropdown audio gaya Netflix — dipakai di bar bawah player.
   avail = bahasa yang tersedia, activeLang = yang benar-benar diputar (bisa fallback) */
function audioDropdownHTML(avail, activeLang, node, item) {
  return `<div class="audio-dd" data-dd>
    <button class="audio-dd-btn" data-ddtoggle>
      ${I.audio(16)}
      <span class="cap">Audio</span>
      <span class="cur"><span class="fl">${VOICES[activeLang].flag}</span>${VOICES[activeLang].label}</span>
      <span class="arw">${I.chev(15)}</span>
    </button>
    <div class="audio-menu">
      <div class="hd">Pilih bahasa suara</div>
      ${["id", "en"].map(l => {
        // ketersediaan dicek pada episode/movie yang sedang diputar, bukan judulnya
        const ok = node ? hasVoice(node, l, item) : avail.includes(l);
        const isActive = activeLang === l;
        let note = voiceChannel(item, l);
        if (!ok) note = avail.includes(l)
          ? `Episode ini belum di-dub — diputar ${VOICES[nativeLang(item)].label}`
          : "Belum tersedia untuk judul ini";
        return `<button class="audio-opt ${isActive ? "on" : ""} ${ok ? "" : "off"}"
          ${ok ? `data-voice="${l}"` : "disabled"}>
          <span class="fl">${VOICES[l].flag}</span>
          <span class="tx"><span class="t1">${VOICES[l].label}</span><span class="t2">${note}</span></span>
          <span class="tick">${I.check(17)}</span>
        </button>`;
      }).join("")}
    </div>
  </div>`;
}

/* Voice switcher UI. avail = daftar bahasa yang tersedia untuk judul ini */
function voiceSwitchHTML(avail = ["en", "id"], compact) {
  const eff = avail.includes(VOICE) ? VOICE : avail[0];
  return `<div class="voice-box">
    ${compact ? "" : `<span class="vlabel">Suara</span>`}
    ${["en", "id"].map(l => {
      const on = avail.includes(l);
      return `<button class="vbtn ${eff === l ? "active" : ""} ${on ? "" : "disabled"}"
        ${on ? `data-voice="${l}"` : "disabled"}
        title="${on ? "Putar dengan suara " + VOICES[l].label : "Versi " + VOICES[l].label + " belum tersedia"}">
        <span class="fl">${VOICES[l].flag}</span>${VOICES[l].short}</button>`;
    }).join("")}
  </div>`;
}
/* Key penyimpanan mengikuti akun yang login, supaya My List tiap santri
   terpisah. Pengunjung tanpa login tetap memakai key lama. */
function nsKey(base) {
  const u = typeof currentUser === "function" ? currentUser() : null;
  return u ? base + "::" + u.uid : base;
}
const store = {
  get list() { try { return JSON.parse(localStorage.getItem(nsKey(LS_LIST))) || []; } catch { return []; } },
  set list(v) { localStorage.setItem(nsKey(LS_LIST), JSON.stringify(v)); },
  get cont() { try { return JSON.parse(localStorage.getItem(nsKey(LS_CONT))) || []; } catch { return []; } },
  set cont(v) { localStorage.setItem(nsKey(LS_CONT), JSON.stringify(v)); }
};
const byId = id => CATALOG.find(x => x.id === id);
const inList = id => store.list.includes(id);

function toggleList(id) {
  const l = store.list;
  const i = l.indexOf(id);
  let added;
  if (i === -1) { l.push(id); added = true; } else { l.splice(i, 1); added = false; }
  store.list = l;
  const t = byId(id);
  toast(added ? `“${t.title}” ditambahkan ke My List` : `“${t.title}” dihapus dari My List`, added);
  document.querySelectorAll(`[data-listbtn="${id}"]`).forEach(b => paintListBtn(b, id));
  if (location.hash.startsWith("#/mylist")) render();
  return added;
}
function paintListBtn(b, id) {
  const on = inList(id);
  b.classList.toggle("saved", on);
  b.innerHTML = `${on ? I.check() : I.plus()}<span>${on ? "In My List" : "My List"}</span>`;
}
function pushContinue(id) {
  let c = store.cont.filter(x => x !== id);
  c.unshift(id);
  store.cont = c.slice(0, 10);
}

/* ---------- Toast ---------- */
function toast(msg, ok = true) {
  const wrap = document.getElementById("toasts");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<div class="ico">${ok ? I.check(15) : I.x(14)}</div><div>${msg}</div>`;
  wrap.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 300); }, 2600);
}

/* ---------- Lazy images ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const img = e.target;
    img.src = img.dataset.src;
    img.onload = () => img.classList.add("loaded");
    img.onerror = () => { img.src = img.dataset.fallback || img.dataset.src; img.classList.add("loaded"); };
    io.unobserve(img);
  });
}, { rootMargin: "300px" });
function hydrateLazy(root = document) {
  root.querySelectorAll("img[data-src]:not([data-obs])").forEach(img => {
    img.setAttribute("data-obs", "1"); io.observe(img);
  });
}

/* ---------- Card ---------- */
function cardHTML(item, opts = {}) {
  const thumb = itemThumb(item);
  const fb = item.youtubeId ? `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${item.seasons?.[0]?.episodes?.[0]?.youtubeId}/hqdefault.jpg`;
  const inner = `
    <div class="thumb">
      <span class="badge-type">${item.type === "tv" ? "Series" : "Movie"}</span>
      <span class="badge-rate">${I.star(11)} ${item.rating.toFixed(1)}</span>
      <img loading="lazy" data-src="${thumb}" data-fallback="${fb}" alt="${item.title}">
      <div class="play-fab">${I.play(20)}</div>
      <span class="audio-badge">${itemVoices(item).map(l => VOICES[l].short).join(" / ")}</span>
    </div>
    <div class="card-body">
      <h3>${item.title}</h3>
      <div class="card-meta">
        <span>${item.year}</span><span>•</span>
        <span class="g">${item.genres.slice(0, 2).join(", ")}</span><span>•</span>
        <span>${itemMeta(item)}</span>
      </div>
      <div class="card-extra"><p>${item.description}</p></div>
    </div>`;
  if (opts.rank) {
    return `<article class="card rank" data-go="#/title/${item.id}">
      <span class="rank-num">${opts.rank}</span><div class="inner">${inner}</div></article>`;
  }
  return `<article class="card" data-go="#/title/${item.id}">${inner}</article>`;
}

function rowHTML(title, items, opts = {}) {
  if (!items.length) return "";
  const id = "row" + Math.random().toString(36).slice(2, 8);
  return `<section class="section">
    <div class="row-head">
      <h2>${title}</h2>
      ${opts.moreHref ? `<a class="more" href="${opts.moreHref}">Lihat semua ${I.right(14)}</a>` : ""}
    </div>
    <div class="row-wrap">
      <button class="row-nav prev" data-scroll="${id}" data-dir="-1">${I.left()}</button>
      <div class="row" id="${id}">
        ${items.map((it, i) => cardHTML(it, { rank: opts.ranked ? i + 1 : null })).join("")}
      </div>
      <button class="row-nav next" data-scroll="${id}" data-dir="1">${I.right()}</button>
    </div>
  </section>`;
}

function gridHTML(items) {
  if (!items.length) return emptyHTML("Belum ada konten", "Coba ubah filter atau kata kunci pencarianmu.");
  return `<div class="grid">${items.map(i => cardHTML(i)).join("")}</div>`;
}

function emptyHTML(t, s, action = "") {
  return `<div class="empty">
    <div class="ico">${I.search(30)}</div>
    <h3>${t}</h3><p>${s}</p>${action}
  </div>`;
}

function skeletonGrid(n = 10) {
  return `<div class="grid">${Array.from({ length: n }).map(() =>
    `<div class="sk-card"><div class="a sk"></div><div class="b sk"></div><div class="c sk"></div></div>`).join("")}</div>`;
}

/* ---------- Pages ---------- */
const tvs = () => CATALOG.filter(x => x.type === "tv");
const movies = () => CATALOG.filter(x => x.type === "movie");
const byPop = arr => [...arr].sort((a, b) => b.popularity - a.popularity);
const byRate = arr => [...arr].sort((a, b) => b.rating - a.rating);

function heroHTML(item) {
  const bg = item.backdrop || itemThumb(item);
  const saved = inList(item.id);
  const first = item.type === "tv" ? item.seasons[0].episodes[0] : null;
  const href = item.type === "tv" ? `#/watch/${item.id}/1/${first.ep}` : `#/watch/${item.id}`;
  return `<section class="hero">
    <div class="hero-bg"><img src="${bg}" alt="${item.title}"></div>
    <div class="hero-inner">
      <div class="hero-badge">✦ Featured Nobar Hari Ini</div>
      <h1>${item.title}</h1>
      <div class="hero-meta">
        <span class="star">${I.star()} ${item.rating.toFixed(1)}</span><span class="dot"></span>
        <span>${item.year}</span><span class="dot"></span>
        <span>${itemMeta(item)}</span><span class="dot"></span>
        ${item.genres.slice(0, 3).map(g => `<span class="chip">${g}</span>`).join("")}
      </div>
      <p class="desc">${item.description}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="${href}">${I.play()} Watch Now</a>
        <button class="btn btn-ghost ${saved ? "saved" : ""}" data-listbtn="${item.id}">
          ${saved ? I.check() : I.plus()}<span>${saved ? "In My List" : "My List"}</span>
        </button>
        <a class="btn btn-ghost" href="#/title/${item.id}">${I.info()} Detail</a>
      </div>
    </div>
  </section>`;
}

function pageHome() {
  const featured = CATALOG.find(x => x.featured) || CATALOG[0];
  const cont = store.cont.map(byId).filter(Boolean);
  const genreTiles = GENRES.map(g => {
    const n = CATALOG.filter(c => c.genres.includes(g)).length;
    return `<div class="genre-tile" data-go="#/genres/${encodeURIComponent(g)}">
      <h3>${g}</h3><span>${n} judul</span></div>`;
  }).join("");

  return heroHTML(featured) +
    (cont.length ? rowHTML("Continue Watching", cont) : "") +
    rowHTML("Popular on IDNflix", byPop(CATALOG).slice(0, 10)) +
    rowHTML("Trending Now", byPop(CATALOG).slice(0, 10), { ranked: true }) +
    rowHTML("TV Shows", tvs(), { moreHref: "#/tv" }) +
    rowHTML("Movies", movies(), { moreHref: "#/movies" }) +
    rowHTML("Recommended for Santri", byRate(CATALOG).slice(0, 8)) +
    `<section class="section">
      <div class="row-head"><h2>Browse by <span class="accent">Genre</span></h2></div>
      <div class="genre-grid">${genreTiles}</div>
    </section>` + footerHTML();
}

/* --- Catalog page w/ filters --- */
const F = { type: "all", genre: "All", year: "all", rating: "all", sort: "popularity", q: "", voice: "all" };

function applyFilters(base) {
  let out = base.filter(i => {
    if (F.type !== "all" && i.type !== F.type) return false;
    if (F.genre !== "All" && !i.genres.includes(F.genre)) return false;
    if (F.year !== "all" && String(i.year) !== F.year) return false;
    if (F.rating !== "all" && i.rating < Number(F.rating)) return false;
    if (F.voice !== "all" && !itemVoices(i).includes(F.voice)) return false;
    if (F.q && !(i.title + " " + i.genres.join(" ") + " " + i.description).toLowerCase().includes(F.q.toLowerCase())) return false;
    return true;
  });
  if (F.sort === "popularity") out.sort((a, b) => b.popularity - a.popularity);
  if (F.sort === "rating") out.sort((a, b) => b.rating - a.rating);
  if (F.sort === "year") out.sort((a, b) => b.year - a.year);
  if (F.sort === "az") out.sort((a, b) => a.title.localeCompare(b.title));
  return out;
}

function filterBarHTML(showType = true) {
  const years = [...new Set(CATALOG.map(i => i.year))].sort((a, b) => b - a);
  return `<div class="filters">
    ${showType ? `<select class="select" data-f="type">
      <option value="all"${F.type === "all" ? " selected" : ""}>Semua Tipe</option>
      <option value="tv"${F.type === "tv" ? " selected" : ""}>TV Shows</option>
      <option value="movie"${F.type === "movie" ? " selected" : ""}>Movies</option>
    </select>` : ""}
    <select class="select" data-f="year">
      <option value="all">Semua Tahun</option>
      ${years.map(y => `<option value="${y}"${F.year == y ? " selected" : ""}>${y}</option>`).join("")}
    </select>
    <select class="select" data-f="rating">
      <option value="all">Semua Rating</option>
      <option value="9"${F.rating === "9" ? " selected" : ""}>9.0+</option>
      <option value="8.5"${F.rating === "8.5" ? " selected" : ""}>8.5+</option>
      <option value="8"${F.rating === "8" ? " selected" : ""}>8.0+</option>
    </select>
    <select class="select" data-f="voice">
      <option value="all"${F.voice === "all" ? " selected" : ""}>Semua Suara</option>
      <option value="id"${F.voice === "id" ? " selected" : ""}>🇮🇩 Ada Dub Indonesia</option>
      <option value="en"${F.voice === "en" ? " selected" : ""}>🇬🇧 Ada Versi English</option>
    </select>
    <select class="select" data-f="sort">
      <option value="popularity"${F.sort === "popularity" ? " selected" : ""}>Urutkan: Popularity</option>
      <option value="rating"${F.sort === "rating" ? " selected" : ""}>Urutkan: Rating</option>
      <option value="year"${F.sort === "year" ? " selected" : ""}>Urutkan: Terbaru</option>
      <option value="az"${F.sort === "az" ? " selected" : ""}>Urutkan: A–Z</option>
    </select>
    <button class="pill" data-reset>Reset Filter</button>
  </div>
  <div class="pill-row">
    ${["All", ...GENRES].map(g => `<button class="pill ${F.genre === g ? "active" : ""}" data-genre="${g}">${g}</button>`).join("")}
  </div>`;
}

function pageCatalog(kind) {
  const base = kind === "tv" ? tvs() : kind === "movie" ? movies() : CATALOG;
  const title = kind === "tv" ? "TV Shows" : kind === "movie" ? "Movies" : "Semua Konten";
  const sub = kind === "tv" ? "Serial pilihan untuk agenda nobar mingguan santri."
    : kind === "movie" ? "Film & kompilasi penuh, siap diputar di aula."
      : "Jelajahi seluruh katalog IDNflix.";
  const items = applyFilters(base);
  return `<div class="page-head"><h1>${title}</h1><p>${sub}</p></div>
    ${filterBarHTML(kind === "all")}
    <div style="padding:0 clamp(16px,4vw,48px) 12px;color:#98a0b3;font-size:13px">${items.length} judul ditemukan</div>
    ${gridHTML(items)}${footerHTML()}`;
}

function pageGenres(active) {
  if (active) F.genre = decodeURIComponent(active);
  const items = applyFilters(CATALOG);
  const tiles = GENRES.map(g => {
    const n = CATALOG.filter(c => c.genres.includes(g)).length;
    return `<div class="genre-tile" data-go="#/genres/${encodeURIComponent(g)}"><h3>${g}</h3><span>${n} judul</span></div>`;
  }).join("");
  return `<div class="page-head"><h1>Genres</h1><p>Pilih genre dan saring konten sesuai selera.</p></div>
    <div class="genre-grid" style="padding-top:22px">${tiles}</div>
    ${filterBarHTML(true)}
    <div style="padding:0 clamp(16px,4vw,48px) 12px;color:#98a0b3;font-size:13px">${items.length} judul • Genre: ${F.genre}</div>
    ${gridHTML(items)}${footerHTML()}`;
}

function pageSearch(q) {
  F.q = q ? decodeURIComponent(q) : "";
  const items = F.q ? applyFilters(CATALOG) : [];
  const body = !F.q
    ? emptyHTML("Mulai pencarian", "Ketik judul, genre, atau kata kunci untuk menemukan tayangan.")
    : items.length
      ? gridHTML(items)
      : emptyHTML(`Tidak ada hasil untuk “${F.q}”`, "Coba kata kunci lain atau jelajahi katalog kami.",
        `<a class="btn btn-primary" href="#/tv" style="display:inline-flex">${I.play(16)} Jelajahi TV Shows</a>`);
  return `<div class="page-head"><h1>Search</h1><p>Cari tayangan di katalog IDNflix.</p></div>
    <div class="filters">
      <div class="search-field" style="flex:1;min-width:260px">
        ${I.search()}<input type="text" id="pageSearch" placeholder="Cari judul, genre…" value="${F.q.replace(/"/g, "&quot;")}">
      </div>
    </div>
    ${F.q ? `<div style="padding:0 clamp(16px,4vw,48px) 12px;color:#98a0b3;font-size:13px">${items.length} hasil</div>` : ""}
    ${body}${footerHTML()}`;
}

function pageMyList() {
  const items = store.list.map(byId).filter(Boolean);
  return `<div class="page-head"><h1>My List</h1><p>Tayangan yang kamu simpan untuk ditonton nanti.</p></div>
    <div style="height:18px"></div>
    ${items.length ? gridHTML(items)
      : emptyHTML("My List masih kosong", "Tekan tombol + My List pada judul favoritmu untuk menyimpannya di sini.",
        `<a class="btn btn-primary" href="#/" style="display:inline-flex">${I.play(16)} Mulai Jelajahi</a>`)}
    ${footerHTML()}`;
}

/* ---------- Halaman Login / Daftar ---------- */
function fieldHTML(id, label, type, placeholder, hint, autocomplete) {
  const pw = type === "password";
  return `<div class="fld" data-fld="${id}">
    <label for="f_${id}">${label}</label>
    <div class="${pw ? "pw-wrap" : ""}">
      <input id="f_${id}" name="${id}" type="${type}" placeholder="${placeholder}"
        autocomplete="${autocomplete || "off"}" spellcheck="false">
      ${pw ? `<button type="button" class="pw-eye" data-pweye="f_${id}" title="Tampilkan password" aria-label="Tampilkan password">${I.eye()}</button>` : ""}
    </div>
    ${hint ? `<div class="hint">${hint}</div>` : ""}
    <div class="err"></div>
  </div>`;
}

function pageLogin() {
  if (isLoggedIn()) { location.hash = "#/profile"; return ""; }
  return `<div class="auth-wrap"><div class="auth-card">
    <div class="auth-tabs">
      <a class="on" href="#/login">Masuk</a>
      <a href="#/signup">Daftar</a>
    </div>
    <h1>Selamat datang kembali</h1>
    <p class="lead">Masuk untuk menyimpan My List dan foto profilmu sendiri.</p>
    <div class="form-err" data-formerr></div>
    <form data-authform="login" novalidate>
      ${fieldHTML("user", "Username", "text", "mis. santri.ahmad", "", "username")}
      ${fieldHTML("pass", "Password", "password", "Masukkan password", "", "current-password")}
      <button class="auth-btn" type="submit">Masuk</button>
    </form>
    <p class="auth-alt">Belum punya akun? <a href="#/signup">Daftar sekarang</a></p>
    <p class="auth-skip"><a href="#/">Lanjut tanpa akun →</a></p>
  </div></div>`;
}

function pageSignup() {
  if (isLoggedIn()) { location.hash = "#/profile"; return ""; }
  return `<div class="auth-wrap"><div class="auth-card">
    <div class="auth-tabs">
      <a href="#/login">Masuk</a>
      <a class="on" href="#/signup">Daftar</a>
    </div>
    <h1>Buat akun santri</h1>
    <p class="lead">Gratis, tanpa email. Cukup nama, username, dan password.</p>
    <div class="form-err" data-formerr></div>
    <form data-authform="signup" novalidate>
      ${fieldHTML("name", "Nama Lengkap", "text", "mis. Ahmad Fauzi", "", "name")}
      ${fieldHTML("user", "Username", "text", "mis. santri.ahmad", "3–20 karakter: huruf, angka, titik, garis bawah.", "username")}
      ${fieldHTML("pass", "Password", "password", "Minimal 6 karakter", "", "new-password")}
      ${fieldHTML("pass2", "Ulangi Password", "password", "Ketik ulang password", "", "new-password")}
      <button class="auth-btn" type="submit">Daftar & Masuk</button>
    </form>
    <p class="auth-alt">Sudah punya akun? <a href="#/login">Masuk di sini</a></p>
    <div class="auth-note">${I.info(15)}
      <span>Akun disimpan <b>di perangkat ini saja</b>, tidak dikirim ke server mana pun.
      Jangan pakai password yang kamu gunakan di layanan lain.</span>
    </div>
  </div></div>`;
}

function pageProfile() {
  const list = store.list.length, cont = store.cont.length;
  const eps = CATALOG.reduce((n, i) => n + totalEpisodes(i), 0);
  const u = currentUser();

  if (!u) {
    return `<div class="page-head"><h1>Profile</h1><p>Masuk untuk menyimpan My List dan foto profilmu.</p></div>
      <div style="height:18px"></div>
      <div class="guest-card">
        <div class="big" style="width:74px;height:74px;border-radius:22px;margin:0 auto 16px;display:grid;place-items:center;
          background:linear-gradient(135deg,#3d8bff,#0b4fd1);box-shadow:0 10px 34px rgba(47,125,255,.34)">${I.user(30)}</div>
        <h3>Kamu belum masuk</h3>
        <p>Kamu tetap bisa menonton semua tayangan. Buat akun kalau ingin punya
        foto profil sendiri dan My List yang tidak tercampur dengan santri lain di perangkat ini.</p>
        <div class="row">
          <a class="btn btn-primary" href="#/login">${I.user(17)} Masuk</a>
          <a class="btn btn-ghost" href="#/signup">${I.plus(17)} Daftar</a>
        </div>
      </div>
      <div class="stats">
        <div class="stat"><div class="n">${list}</div><div class="l">Judul di My List</div></div>
        <div class="stat"><div class="n">${cont}</div><div class="l">Sedang Ditonton</div></div>
        <div class="stat"><div class="n">${CATALOG.length}</div><div class="l">Judul di Katalog</div></div>
        <div class="stat"><div class="n">${eps}</div><div class="l">Total Episode</div></div>
      </div>
      ${footerHTML()}`;
  }

  return `<div class="page-head"><h1>Profile</h1><p>Akun nobar santri IDN Boarding School Pamijahan.</p></div>
    <div style="height:18px"></div>
    <div class="profile-hero">
      ${avatarHTML(u, "big")}
      <div>
        <h2 style="margin:0 0 4px;font-size:24px;font-weight:900">${u.name}</h2>
        <p style="margin:0;color:#98a0b3;font-size:14px">@${u.user} • IDN Boarding School Pamijahan</p>
        <p style="margin:4px 0 0;color:#6f7889;font-size:12.5px">Bergabung ${shortDate(u.joined)}</p>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><div class="n">${list}</div><div class="l">Judul di My List</div></div>
      <div class="stat"><div class="n">${cont}</div><div class="l">Sedang Ditonton</div></div>
      <div class="stat"><div class="n">${CATALOG.length}</div><div class="l">Judul di Katalog</div></div>
      <div class="stat"><div class="n">${eps}</div><div class="l">Total Episode</div></div>
    </div>
    <div style="padding:6px clamp(16px,4vw,48px) 4px">
      <div class="side-card" style="max-width:520px;margin-bottom:16px">
        <h4>Foto Profil</h4>
        <div class="pfp-edit" style="margin-top:14px">
          <div class="pfp-drop" data-pfpdrop tabindex="0" role="button" aria-label="Ganti foto profil">
            ${u.pfp ? `<img src="${u.pfp}" alt="Foto profil">` : `<span class="ini">${userInitials()}</span>`}
            <span class="ov">${I.camera(22)}<span>Ganti Foto</span></span>
          </div>
          <div class="pfp-side">
            <h5>Unggah fotomu sendiri</h5>
            <p>Klik kotak di samping, atau seret gambar ke sana. JPG, PNG, WebP, atau GIF — maksimal 5 MB.
            Gambar otomatis dipotong jadi kotak 256×256 supaya ringan.</p>
            <div class="pfp-btns">
              <button class="pill" data-pfppick>${I.camera(15)} Pilih Gambar</button>
              ${u.pfp ? `<button class="pill danger" data-pfpremove>Hapus Foto</button>` : ""}
            </div>
          </div>
        </div>
        <input type="file" accept="image/*" data-pfpinput hidden>
      </div>
      <div class="side-card" style="max-width:520px">
        <h4>Preferensi Suara</h4>
        <p style="margin:0 0 14px;font-size:13.5px;color:#b8c0d0;line-height:1.6">
          Pilih bahasa suara default saat memutar tayangan. Pilihan ini tersimpan di perangkatmu.
        </p>
        ${voiceSwitchHTML(["en", "id"])}
      </div>
    </div>
    ${store.cont.length ? rowHTML("Lanjutkan Menonton", store.cont.map(byId).filter(Boolean)) : ""}
    <div style="padding:8px clamp(16px,4vw,48px) 40px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="pill" data-clear="list">Kosongkan My List</button>
      <button class="pill" data-clear="cont">Hapus Riwayat Tonton</button>
      <button class="pill" data-logout>${I.logout(15)} Keluar</button>
      <button class="pill danger" data-delacc>Hapus Akun</button>
    </div>
    ${footerHTML()}`;
}

/* --- Title detail --- */
function pageTitle(id, seasonNo) {
  const item = byId(id);
  if (!item) return emptyHTML("Judul tidak ditemukan", "Konten mungkin sudah dipindahkan.");
  const saved = inList(id);
  const bg = item.backdrop || itemThumb(item);
  let seasonBlock = "";
  if (item.type === "tv") {
    const s = item.seasons.find(x => x.season == seasonNo) || item.seasons[0];
    seasonBlock = `
      <div class="season-bar" style="margin-top:26px">
        ${item.seasons.map(x => `<button class="pill ${x.season === s.season ? "active" : ""}" data-go="#/title/${id}/${x.season}">${seasonLabel(x)}</button>`).join("")}
      </div>
      ${episodesBlockHTML(item, s, null)}`;
  }
  const playHref = item.type === "tv"
    ? `#/watch/${id}/${(item.seasons.find(x => x.season == seasonNo) || item.seasons[0]).season}/${(item.seasons.find(x => x.season == seasonNo) || item.seasons[0]).episodes[0].ep}`
    : `#/watch/${id}`;

  const related = CATALOG.filter(x => x.id !== id && x.genres.some(g => item.genres.includes(g))).slice(0, 10);

  return `<section class="hero" style="min-height:min(70vh,620px)">
      <div class="hero-bg"><img src="${bg}" alt="${item.title}"></div>
      <div class="hero-inner">
        <a class="back-btn" href="#/" data-back>${I.left(15)} Kembali</a>
        <h1>${item.title}</h1>
        ${item.tagline ? `<p style="color:#9fc6ff;margin:-6px 0 14px;font-style:italic">${item.tagline}</p>` : ""}
        <div class="hero-meta">
          <span class="star">${I.star()} ${item.rating.toFixed(1)}</span><span class="dot"></span>
          <span>${item.year}${item.endYear ? "–" + item.endYear : ""}</span><span class="dot"></span>
          <span>${itemMeta(item)}</span><span class="dot"></span>
          ${item.genres.map(g => `<span class="chip">${g}</span>`).join("")}
        </div>
        <p class="desc">${item.description}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${playHref}">${I.play()} Watch Now</a>
          <button class="btn btn-ghost ${saved ? "saved" : ""}" data-listbtn="${id}">
            ${saved ? I.check() : I.plus()}<span>${saved ? "In My List" : "My List"}</span></button>
          ${voiceSwitchHTML(itemVoices(item))}
        </div>
      </div>
    </section>
    <div style="padding:26px clamp(16px,4vw,48px) 10px">
      <div class="info-list" style="margin-top:0">
        <div class="kv"><span class="k">Channel</span><span>${item.channel}</span></div>
        <div class="kv"><span class="k">Negara</span><span>${item.country || "-"}</span></div>
        <div class="kv"><span class="k">Genre</span><span>${item.genres.join(", ")}</span></div>
        <div class="kv"><span class="k">Pilihan suara</span><span>${itemVoices(item).map(l => VOICES[l].flag + " " + VOICES[l].label).join(" · ")}</span></div>
      </div>
      ${seasonBlock}
    </div>
    ${castHTML(item)}
    ${posterRowHTML("More Like This", related)}
    ${footerHTML()}`;
}

/* Label season: pakai judul season kalau ada (mis. "Alam Semesta"),
   selain itu jatuh ke "Season N". */
function seasonLabel(s, long) {
  if (!s.title) return `Season ${s.season}`;
  return long ? `Season ${s.season} — ${s.title}` : s.title;
}

/* ---------- Episode card (grid style, gaya referensi) ---------- */
function epCardHTML(item, s, e, playing = false) {
  const nat = nativeLang(item);
  const vid = voiceVideoId(e, VOICE, item);
  const ttl = voiceTitle(e, VOICE);
  const date = epDateLabel(e, VOICE);
  // tandai kalau bahasa pilihan user tidak tersedia -> fallback ke bahasa asli
  const fellBack = VOICE !== nat && !hasVoice(e, VOICE, item);
  const shownLang = fellBack ? nat : VOICE;
  return `<article class="epc ${playing ? "playing" : ""}" data-go="#/watch/${item.id}/${s.season}/${e.ep}">
    <div class="shot">
      <span class="ep-tag se">S${String(s.season).padStart(2, "0")}E${String(e.ep).padStart(2, "0")}</span>
      ${date ? `<span class="ep-tag date">${date}</span>` : ""}
      <span class="ep-tag dur">${e.duration}</span>
      <span class="audio-badge">${VOICES[shownLang].flag} ${VOICES[shownLang].short}</span>
      <img loading="lazy" data-src="https://i.ytimg.com/vi/${vid}/hqdefault.jpg" alt="${ttl}">
      <div class="fab">${I.play(18)}</div>
    </div>
    <h4>${ttl}</h4>
    <p>${e.description || ""}</p>
  </article>`;
}

/* ---------- Blok Episodes lengkap: header + sort + season select + grid ---------- */
const EPSORT = { desc: false }; // false = Oldest first

function episodesBlockHTML(item, s, currentEp) {
  let eps = [...s.episodes];
  if (EPSORT.desc) eps.reverse();
  const avail = itemVoices(item);
  const cov = voiceCoverage(item, "id");
  const partial = cov && cov.done > 0 && cov.done < cov.total;
  return `<section id="episodes">
    <div class="eps-head">
      <h2>Episodes</h2>
      <div class="eps-tools">
        ${voiceSwitchHTML(avail)}
        <button class="sort-btn ${EPSORT.desc ? "desc" : ""}" data-epsort>
          ${I.sort()} <span>${EPSORT.desc ? "Newest" : "Oldest"}</span>
        </button>
        <select class="season-select" data-seasonsel data-item="${item.id}">
          ${item.seasons.map(x => `<option value="${x.season}"${x.season === s.season ? " selected" : ""}>${seasonLabel(x, true)}</option>`).join("")}
        </select>
      </div>
    </div>
    ${VOICE === "id" && partial ? `<div class="voice-note" style="margin:-4px 0 16px">
      ${I.info(15)}<span>Dub <b>Indonesia</b> tersedia untuk <b>${cov.done} dari ${cov.total}</b> episode.
      Episode yang belum di-dub otomatis diputar dalam versi <b>English</b>.</span></div>` : ""}
    <div class="ep-grid">
      ${eps.map(e => epCardHTML(item, s, e, currentEp != null && e.ep == currentEp)).join("")}
    </div>
  </section>`;
}

/* ---------- Cast ---------- */
function castHTML(item) {
  if (!item.cast?.length) return "";
  return `<section class="section" style="padding-bottom:6px">
    <div class="row-head"><h2>Cast</h2></div>
    <div class="cast-row">
      ${item.cast.map(c => {
        const h = nameHue(c.name);
        return `<div class="cast">
          <div class="face" style="background:linear-gradient(145deg,hsl(${h} 62% 42%),hsl(${(h + 40) % 360} 68% 26%))">
            ${initials(c.name)}
          </div>
          <div class="nm">${c.name}</div>
          <div class="rl">${c.role}</div>
        </div>`;
      }).join("")}
    </div>
  </section>`;
}

/* ---------- Poster card + More Like This row ---------- */
function posterHTML(item) {
  const thumb = itemThumb(item);
  const badge = item.type === "tv" ? `S${item.seasons.length}` : "HD";
  const meta = item.type === "tv" ? `${totalEpisodes(item)} Eps` : item.duration;
  return `<article class="poster" data-go="#/title/${item.id}">
    <div class="pf">
      <span class="p-tag tl">${item.type === "tv" ? "TV" : "Movie"}</span>
      <span class="p-tag tr">${badge}</span>
      <img loading="lazy" data-src="${thumb}" alt="${item.title}">
      <div class="pfab">${I.play(20)}</div>
      <div class="p-foot">
        <span class="rt">${I.star(11)} ${item.rating.toFixed(1)}</span>
        <span class="ep">${I.layers(11)} ${meta}</span>
      </div>
    </div>
    <div class="pt">${item.title}</div>
  </article>`;
}

function posterRowHTML(title, items) {
  if (!items.length) return "";
  const id = "pr" + Math.random().toString(36).slice(2, 8);
  return `<section class="section">
    <div class="row-head"><h2>${title}</h2></div>
    <div class="row-wrap">
      <button class="row-nav prev" data-scroll="${id}" data-dir="-1">${I.left()}</button>
      <div class="row" id="${id}">${items.map(posterHTML).join("")}</div>
      <button class="row-nav next" data-scroll="${id}" data-dir="1">${I.right()}</button>
    </div>
  </section>`;
}

function epHTML(item, s, e, playing = false) {
  return `<div class="ep ${playing ? "playing" : ""}" data-go="#/watch/${item.id}/${s.season}/${e.ep}">
    <div class="th">
      <img loading="lazy" data-src="https://i.ytimg.com/vi/${e.youtubeId}/mqdefault.jpg" alt="">
      <span class="dur">${e.duration}</span>
    </div>
    <div>
      <div class="num">S${String(s.season).padStart(2, "0")}E${String(e.ep).padStart(2, "0")}</div>
      <h5>${e.title}</h5>
      <p>${e.description || ""}</p>
    </div>
  </div>`;
}

/* --- Watch page --- */
function pageWatch(id, seasonNo, epNo) {
  const item = byId(id);
  if (!item) return emptyHTML("Konten tidak ditemukan", "Silakan kembali ke beranda.");
  pushContinue(id);
  const saved = inList(id);
  let vid, heading, sub, desc, extra = "", sideEps = "", watchEpisodes = "";

  let node = null, avail = itemVoices(item), fellBack = false;
  const nat = nativeLang(item);

  if (item.type === "tv") {
    const s = item.seasons.find(x => x.season == seasonNo) || item.seasons[0];
    const e = s.episodes.find(x => x.ep == epNo) || s.episodes[0];
    node = e;
    fellBack = VOICE !== nat && !hasVoice(e, VOICE, item);
    vid = voiceVideoId(e, VOICE, item);
    heading = item.title;
    sub = `${seasonLabel(s, true)} • Episode ${e.ep} — ${voiceTitle(e, VOICE)}`;
    desc = e.description || item.description;
    extra = `<div class="season-bar" style="margin-top:22px">
        ${item.seasons.map(x => `<button class="pill ${x.season === s.season ? "active" : ""}" data-go="#/watch/${id}/${x.season}/${x.episodes[0].ep}">${seasonLabel(x)}</button>`).join("")}
      </div>`;
    sideEps = `<div class="side-card" style="margin-top:16px">
        <h4>${seasonLabel(s, true)} • ${s.episodes.length} Episode</h4>
        <div class="ep-list">${s.episodes.map(x => epHTML(item, s, x, x.ep === e.ep)).join("")}</div>
      </div>`;
    watchEpisodes = `<div style="padding:0 clamp(16px,4vw,48px)">${episodesBlockHTML(item, s, e.ep)}</div>`;
  } else {
    node = item;
    fellBack = VOICE !== nat && !hasVoice(item, VOICE, item);
    vid = voiceVideoId(item, VOICE, item);
    heading = voiceTitle(item, VOICE);
    sub = `Movie • ${item.duration}`;
    desc = item.description;
  }

  const activeLang = fellBack ? nat : VOICE;

  /* Bar audio menempel langsung di bawah player */
  const playerBar = `<div class="player-bar">
      <div class="now">${I.audio(15)}
        <span>Audio: <b>${VOICES[activeLang].flag} ${VOICES[activeLang].label}</b>
        · ${voiceChannel(item, activeLang)}</span>
      </div>
      ${audioDropdownHTML(avail, activeLang, node, item)}
    </div>`;

  const voiceUI = fellBack ? `<div class="voice-note" style="margin-top:18px">${I.info(15)}
      <span>Versi suara <b>${VOICES[VOICE].label}</b> untuk bagian ini belum tersedia di channel resmi,
      jadi diputar dalam <b>${VOICES[nat].label}</b>.</span>
    </div>` : "";

  return `<div class="watch">
    <div class="player-wrap">
      <iframe src="https://www.youtube.com/embed/${vid}?rel=0&modestbranding=1&playsinline=1"
        title="${heading}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    ${playerBar}
    <div class="watch-body">
      <div>
        <a class="back-btn" href="#/title/${id}">${I.left(15)} Back</a>
        <h1>${heading}</h1>
        <div class="sub">${sub}</div>
        <div class="hero-meta" style="margin-bottom:14px">
          <span class="star">${I.star()} ${item.rating.toFixed(1)}</span><span class="dot"></span>
          <span>${item.year}</span><span class="dot"></span>
          ${item.genres.map(g => `<span class="chip">${g}</span>`).join("")}
        </div>
        <p class="desc">${desc}</p>
        ${voiceUI}
        <div class="hero-actions" style="margin-top:20px">
          <button class="btn btn-ghost ${saved ? "saved" : ""}" data-listbtn="${id}">
            ${saved ? I.check() : I.plus()}<span>${saved ? "In My List" : "My List"}</span></button>
          <a class="btn btn-ghost" href="#/title/${id}">${I.info()} Detail Lengkap</a>
        </div>
        ${extra}
        <div class="info-list">
          <div class="kv"><span class="k">Channel</span><span>${item.channel}</span></div>
          <div class="kv"><span class="k">Tipe</span><span>${item.type === "tv" ? "TV Show" : "Movie"}</span></div>
          <div class="kv"><span class="k">Tahun</span><span>${item.year}</span></div>
          <div class="kv"><span class="k">Rating</span><span>${item.rating.toFixed(1)} / 10</span></div>
          <div class="kv"><span class="k">Pilihan suara</span><span>${avail.map(l => VOICES[l].flag + " " + VOICES[l].label).join(" · ")}</span></div>
          <div class="kv"><span class="k">Sumber</span><span>YouTube — ${voiceChannel(item, activeLang)}</span></div>
        </div>
      </div>
      <aside>
        <div class="side-card">
          <h4>Nobar Info</h4>
          <p style="margin:0;font-size:13.5px;color:#b8c0d0;line-height:1.6">
            Tayangan ini diputar langsung dari YouTube. Pastikan koneksi aula stabil dan volume sudah disesuaikan sebelum nobar dimulai.
          </p>
        </div>
        ${sideEps}
      </aside>
    </div>
    ${watchEpisodes}
    ${castHTML(item)}
    ${posterRowHTML("More Like This", CATALOG.filter(x => x.id !== id && x.genres.some(g => item.genres.includes(g))).slice(0, 10))}
  </div>${footerHTML()}`;
}

function footerHTML() {
  return `<footer><div class="frow">
    <div>
      <div class="fbrand">IDN<span>flix</span></div>
      <p style="margin:6px 0 0;max-width:340px;line-height:1.6">
        Platform nobar &amp; streaming untuk santri IDN Boarding School Pamijahan.
        Seluruh video diputar melalui YouTube Embed dari channel aslinya.
      </p>
    </div>
    <div class="links">
      <a href="#/">Home</a><a href="#/tv">TV Shows</a><a href="#/movies">Movies</a>
      <a href="#/genres">Genres</a><a href="#/mylist">My List</a><a href="#/profile">Profile</a>
    </div>
  </div>
  <p style="margin:26px 0 0;font-size:12px;opacity:.65">
    © ${new Date().getFullYear()} IDNflix — Nobar Untuk Santri IDN. Konten milik channel FreeQuranEducation.
  </p></footer>`;
}

/* ---------- Navbar: avatar & menu sesuai status login ---------- */
function paintNavUser() {
  const a = document.querySelector(".avatar");
  if (a) {
    const u = currentUser();
    a.setAttribute("href", u ? "#/profile" : "#/login");
    a.innerHTML = u
      ? `${avatarHTML(u, "pic")}<span>${u.name.split(/\s+/)[0]}</span>`
      : `<span class="pic">${I.user(15)}</span><span>Masuk</span>`;
    a.title = u ? `Masuk sebagai ${u.name}` : "Masuk atau daftar";
  }
  const link = document.querySelector('.nav-links a[href="#/profile"]');
  if (link) link.textContent = currentUser() ? "Profile" : "Masuk";
}

/* ---------- Form auth ---------- */
function showFieldErrors(form, errs) {
  form.querySelectorAll("[data-fld]").forEach(f => {
    const msg = errs[f.dataset.fld];
    f.classList.toggle("bad", !!msg);
    f.querySelector(".err").textContent = msg || "";
  });
  const first = form.querySelector(".fld.bad input");
  if (first) first.focus();
}
function showFormError(scope, msg) {
  const box = scope.querySelector("[data-formerr]");
  if (!box) return;
  box.textContent = msg || "";
  box.classList.toggle("show", !!msg);
}

function handleAuthSubmit(form) {
  const mode = form.dataset.authform;
  const val = k => (form.querySelector(`[name="${k}"]`)?.value || "");
  const card = form.closest(".auth-card");
  showFormError(card, "");

  if (mode === "signup") {
    const data = { name: val("name"), user: val("user"), pass: val("pass"), pass2: val("pass2") };
    const errs = validateSignup(data);
    showFieldErrors(form, errs);
    if (Object.keys(errs).length) return;
    try {
      const u = signup(data);
      toast(`Akun dibuat. Selamat datang, ${u.name.split(/\s+/)[0]}!`);
      location.hash = "#/profile";
    } catch (err) {
      showFormError(card, "Gagal menyimpan akun — penyimpanan browser mungkin penuh.");
    }
    return;
  }

  const errs = {};
  if (!val("user").trim()) errs.user = "Username wajib diisi.";
  if (!val("pass")) errs.pass = "Password wajib diisi.";
  showFieldErrors(form, errs);
  if (Object.keys(errs).length) return;

  const res = login(val("user"), val("pass"));
  if (!res.ok) { showFormError(card, res.error); return; }
  toast(`Selamat datang kembali, ${res.user.name.split(/\s+/)[0]}!`);
  location.hash = "#/profile";
}

/* ---------- Upload foto profil ---------- */
async function applyAvatarFile(file) {
  try {
    const dataUrl = await readAvatarFile(file);
    const res = setAvatar(dataUrl);
    if (!res.ok) { toast(res.error, false); return; }
    render();
    toast("Foto profil diperbarui");
  } catch (err) {
    toast(err.message || "Gagal mengunggah foto.", false);
  }
}

/* ---------- Router ---------- */
const view = () => document.getElementById("view");

function route() {
  const h = location.hash.replace(/^#\/?/, "");
  const p = h.split("/").filter(Boolean);
  if (!p.length) return { name: "home" };
  switch (p[0]) {
    case "tv": return { name: "tv" };
    case "movies": return { name: "movies" };
    case "browse": return { name: "browse" };
    case "genres": return { name: "genres", g: p[1] };
    case "search": return { name: "search", q: p[1] };
    case "mylist": return { name: "mylist" };
    case "profile": return { name: "profile" };
    case "login": return { name: "login" };
    case "signup": return { name: "signup" };
    case "title": return { name: "title", id: p[1], s: p[2] };
    case "watch": return { name: "watch", id: p[1], s: p[2], e: p[3] };
    default: return { name: "home" };
  }
}

function render() {
  const r = route();
  const v = view();
  // Kata kunci pencarian hanya berlaku di halaman Search — kalau tidak direset,
  // katalog/genre ikut tersaring dan tampil kosong tanpa sebab yang jelas.
  if (r.name !== "search") F.q = "";
  v.innerHTML = skeletonGrid(8);
  v.style.paddingTop = ["home", "title", "watch"].includes(r.name) ? "0" : "0";

  setTimeout(() => {
    let html = "";
    switch (r.name) {
      case "home": html = pageHome(); break;
      case "tv": F.type = "tv"; html = pageCatalog("tv"); break;
      case "movies": F.type = "movie"; html = pageCatalog("movie"); break;
      case "browse": html = pageCatalog("all"); break;
      case "genres": html = pageGenres(r.g); break;
      case "search": html = pageSearch(r.q); break;
      case "mylist": html = pageMyList(); break;
      case "profile": html = pageProfile(); break;
      case "login": html = pageLogin(); break;
      case "signup": html = pageSignup(); break;
      case "title": html = pageTitle(r.id, r.s); break;
      case "watch": html = pageWatch(r.id, r.s, r.e); break;
    }
    v.innerHTML = html;
    v.style.animation = "none"; void v.offsetWidth; v.style.animation = "";
    hydrateLazy(v);
    markNav(r);
    const nv = document.getElementById("navVoice");
    if (nv) nv.innerHTML = voiceSwitchHTML(["en", "id"], true);
    paintNavUser();
    if (r.name === "search") {
      const inp = document.getElementById("pageSearch");
      if (inp) {
        inp.focus();
        inp.value = F.q;
        inp.addEventListener("input", debounce(() => {
          location.hash = "#/search/" + encodeURIComponent(inp.value);
        }, 350));
      }
    }
  }, 220);
}

function markNav(r) {
  const map = { home: "#/", tv: "#/tv", movies: "#/movies", genres: "#/genres", search: "#/search", mylist: "#/mylist", profile: "#/profile" };
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === map[r.name]);
  });
}

function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

/* ---------- Search modal ---------- */
function openSearch() {
  const m = document.getElementById("searchModal");
  m.classList.add("open"); document.body.classList.add("no-scroll");
  const i = document.getElementById("modalInput"); i.value = ""; i.focus();
  renderSuggest("");
}
function closeSearch() {
  document.getElementById("searchModal").classList.remove("open");
  document.body.classList.remove("no-scroll");
}
function renderSuggest(q) {
  const box = document.getElementById("suggest");
  const items = q
    ? CATALOG.filter(i => (i.title + " " + i.genres.join(" ")).toLowerCase().includes(q.toLowerCase())).slice(0, 8)
    : byPop(CATALOG).slice(0, 6);
  const head = q ? `<div class="sug-head">Hasil untuk “${q}”</div>` : `<div class="sug-head">Paling populer di IDNflix</div>`;
  if (!items.length) {
    box.innerHTML = head + `<div class="empty" style="padding:34px 10px"><h3>Tidak ditemukan</h3><p>Coba kata kunci lain.</p></div>`;
    return;
  }
  box.innerHTML = head + items.map(i => `
    <div class="sug" data-go="#/title/${i.id}" data-close>
      <img loading="lazy" data-src="${itemThumb(i)}" alt="">
      <div><div class="t">${i.title}</div>
        <div class="m">${i.type === "tv" ? "Series" : "Movie"} • ${i.year} • ⭐ ${i.rating.toFixed(1)} • ${i.genres.slice(0, 2).join(", ")}</div>
      </div>
    </div>`).join("");
  hydrateLazy(box);
}

/* ---------- Global events ---------- */
document.addEventListener("click", (ev) => {
  const go = ev.target.closest("[data-go]");
  if (go) {
    if (go.closest("[data-listbtn]")) return;
    location.hash = go.dataset.go;
    if (ev.target.closest("[data-close]")) closeSearch();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const lb = ev.target.closest("[data-listbtn]");
  if (lb) { ev.preventDefault(); ev.stopPropagation(); toggleList(lb.dataset.listbtn); return; }

  const sc = ev.target.closest("[data-scroll]");
  if (sc) {
    const el = document.getElementById(sc.dataset.scroll);
    el.scrollBy({ left: Number(sc.dataset.dir) * (el.clientWidth * .82), behavior: "smooth" });
    return;
  }
  const ddt = ev.target.closest("[data-ddtoggle]");
  if (ddt) {
    ev.preventDefault(); ev.stopPropagation();
    const dd = ddt.closest("[data-dd]");
    const wasOpen = dd.classList.contains("open");
    document.querySelectorAll("[data-dd].open").forEach(d => d.classList.remove("open"));
    if (!wasOpen) dd.classList.add("open");
    return;
  }
  if (!ev.target.closest(".audio-menu")) {
    document.querySelectorAll("[data-dd].open").forEach(d => d.classList.remove("open"));
  }

  const vb = ev.target.closest("[data-voice]");
  if (vb) {
    ev.preventDefault(); ev.stopPropagation();
    if (vb.classList.contains("disabled")) return;
    const y = window.scrollY;
    setVoice(vb.dataset.voice);
    render();
    setTimeout(() => window.scrollTo({ top: y }), 240);
    return;
  }

  const eye = ev.target.closest("[data-pweye]");
  if (eye) {
    ev.preventDefault();
    const inp = document.getElementById(eye.dataset.pweye);
    const show = inp.type === "password";
    inp.type = show ? "text" : "password";
    eye.innerHTML = show ? I.eyeoff() : I.eye();
    eye.title = show ? "Sembunyikan password" : "Tampilkan password";
    inp.focus();
    return;
  }

  if (ev.target.closest("[data-pfppick]") || ev.target.closest("[data-pfpdrop]")) {
    ev.preventDefault();
    const inp = document.querySelector("[data-pfpinput]");
    if (inp) inp.click();
    return;
  }
  if (ev.target.closest("[data-pfpremove]")) {
    removeAvatar(); render(); toast("Foto profil dihapus", false); return;
  }
  if (ev.target.closest("[data-logout]")) {
    const n = displayName().split(/\s+/)[0];
    logout(); location.hash = "#/"; render();
    toast(`Sampai jumpa, ${n}!`, false);
    return;
  }
  if (ev.target.closest("[data-delacc]")) {
    if (confirm("Hapus akun ini beserta My List dan riwayat tontonnya? Tindakan ini tidak bisa dibatalkan.")) {
      deleteAccount(); location.hash = "#/"; render();
      toast("Akun dihapus", false);
    }
    return;
  }

  const es = ev.target.closest("[data-epsort]");
  if (es) {
    EPSORT.desc = !EPSORT.desc;
    const y = window.scrollY;
    render();
    setTimeout(() => window.scrollTo({ top: y }), 240);
    toast(EPSORT.desc ? "Episode diurutkan: Terbaru dulu" : "Episode diurutkan: Terlama dulu");
    return;
  }

  const g = ev.target.closest("[data-genre]");
  if (g) { F.genre = g.dataset.genre; render(); return; }
  if (ev.target.closest("[data-reset]")) {
    Object.assign(F, { genre: "All", year: "all", rating: "all", sort: "popularity", voice: "all" });
    render(); toast("Filter direset"); return;
  }
  const cl = ev.target.closest("[data-clear]");
  if (cl) {
    if (cl.dataset.clear === "list") { store.list = []; toast("My List dikosongkan", false); }
    else { store.cont = []; toast("Riwayat tonton dihapus", false); }
    render(); return;
  }
  if (ev.target.closest("[data-back]")) { ev.preventDefault(); history.back(); return; }
  if (ev.target.closest("#btnSearch")) { openSearch(); return; }
  if (ev.target.closest("#closeSearch") || ev.target.id === "searchModal") { closeSearch(); return; }
  if (ev.target.closest("#burger")) { document.getElementById("navLinks").classList.toggle("open"); return; }
  if (ev.target.closest(".nav-links a")) { document.getElementById("navLinks").classList.remove("open"); }
});

document.addEventListener("change", (ev) => {
  const pf = ev.target.closest("[data-pfpinput]");
  if (pf) {
    const file = pf.files && pf.files[0];
    pf.value = "";
    if (file) applyAvatarFile(file);
    return;
  }

  const f = ev.target.closest("[data-f]");
  if (f) { F[f.dataset.f] = f.value; render(); return; }

  const ss = ev.target.closest("[data-seasonsel]");
  if (ss) {
    const it = byId(ss.dataset.item);
    const sNo = ss.value;
    if (location.hash.startsWith("#/watch/")) {
      const s = it.seasons.find(x => x.season == sNo);
      location.hash = `#/watch/${it.id}/${sNo}/${s.episodes[0].ep}`;
    } else {
      location.hash = `#/title/${it.id}/${sNo}`;
    }
  }
});

document.addEventListener("submit", (ev) => {
  const form = ev.target.closest("[data-authform]");
  if (form) { ev.preventDefault(); handleAuthSubmit(form); }
});

/* Seret & lepas gambar ke kotak foto profil */
["dragenter", "dragover"].forEach(t => document.addEventListener(t, (ev) => {
  const d = ev.target.closest("[data-pfpdrop]");
  if (!d) return;
  ev.preventDefault();
  d.classList.add("drag");
}));
document.addEventListener("dragleave", (ev) => {
  const d = ev.target.closest("[data-pfpdrop]");
  if (d && !d.contains(ev.relatedTarget)) d.classList.remove("drag");
});
document.addEventListener("drop", (ev) => {
  const d = ev.target.closest("[data-pfpdrop]");
  if (!d) return;
  ev.preventDefault();
  d.classList.remove("drag");
  const file = ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0];
  if (file) applyAvatarFile(file);
});

document.addEventListener("keydown", (ev) => {
  // Enter/Spasi pada kotak foto profil = buka pemilih file
  const d = document.activeElement && document.activeElement.closest && document.activeElement.closest("[data-pfpdrop]");
  if (d && (ev.key === "Enter" || ev.key === " ")) {
    ev.preventDefault();
    const inp = document.querySelector("[data-pfpinput]");
    if (inp) inp.click();
    return;
  }
  if (ev.key === "Escape") closeSearch();
  if ((ev.key === "/" || (ev.ctrlKey && ev.key === "k")) && !/input|textarea/i.test(document.activeElement.tagName)) {
    ev.preventDefault(); openSearch();
  }
});

window.addEventListener("scroll", () => {
  document.querySelector(".nav").classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

window.addEventListener("hashchange", () => { render(); window.scrollTo({ top: 0 }); });

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnSearch").innerHTML = I.search();
  document.getElementById("burger").innerHTML = I.menu();
  document.getElementById("closeSearch").innerHTML = I.x();
  document.getElementById("searchIco").innerHTML = I.search();
  const mi = document.getElementById("modalInput");
  mi.addEventListener("input", debounce(() => renderSuggest(mi.value), 200));
  mi.addEventListener("keydown", e => {
    if (e.key === "Enter" && mi.value.trim()) { closeSearch(); location.hash = "#/search/" + encodeURIComponent(mi.value.trim()); }
  });
  paintNavUser();
  if (!location.hash) location.hash = "#/";
  render();
});
