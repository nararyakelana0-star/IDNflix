/* =========================================================================
   IDNFLIX — AUTH (Login / Daftar / Foto Profil)
   -------------------------------------------------------------------------
   Akun disimpan LOKAL di browser (localStorage). Tidak ada server.

   ⚠️  CATATAN KEAMANAN — PENTING, JANGAN DIABAIKAN
   Password di-hash SHA-256 + salt acak per akun, jadi tidak tersimpan
   sebagai teks polos. TAPI karena semuanya berjalan di browser, siapa pun
   yang bisa membuka DevTools di perangkat itu tetap bisa membaca datanya.
   Ini cukup untuk memisahkan profil antar santri di satu perangkat bersama,
   TAPI BUKAN keamanan sungguhan. Jangan pakai password yang kamu pakai
   di layanan lain, dan jangan simpan data sensitif di sini.
   Kalau nanti butuh akun lintas perangkat yang benar-benar aman,
   pindahkan bagian ini ke backend dengan bcrypt/argon2 + HTTPS.

   Struktur penyimpanan:
     idnflix.users    -> { "<username-lowercase>": {uid, name, user, salt, hash, pfp, joined} }
     idnflix.session  -> "<uid>" akun yang sedang login
   Data per akun (My List, riwayat) diberi akhiran "::<uid>", sedangkan
   pengunjung tanpa login tetap memakai key lama sehingga tidak hilang.
   ========================================================================= */

const LS_USERS = "idnflix.users";
const LS_SESSION = "idnflix.session";

/* ---------- SHA-256 (implementasi ringkas, sinkron) ---------- */
const _K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];
function sha256(str) {
  const rr = (x, n) => (x >>> n) | (x << (32 - n));
  const bytes = unescape(encodeURIComponent(str)).split("").map(c => c.charCodeAt(0));
  const bitLen = bytes.length * 8;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  for (let i = 7; i >= 0; i--) bytes.push((bitLen / Math.pow(2, i * 8)) & 0xff);

  let H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  const w = new Array(64);
  for (let p = 0; p < bytes.length; p += 64) {
    for (let i = 0; i < 16; i++) {
      w[i] = (bytes[p + i * 4] << 24) | (bytes[p + i * 4 + 1] << 16) | (bytes[p + i * 4 + 2] << 8) | bytes[p + i * 4 + 3];
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + _K[i] + w[i]) | 0;
      const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22);
      const mj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + mj) | 0;
      h = g; g = f; f = e; e = (d + t1) | 0;
      d = c; c = b; b = a; a = (t1 + t2) | 0;
    }
    H = H.map((x, i) => (x + [a, b, c, d, e, f, g, h][i]) | 0);
  }
  return H.map(x => (x >>> 0).toString(16).padStart(8, "0")).join("");
}

function randHex(n) {
  const a = new Uint8Array(n);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) crypto.getRandomValues(a);
  else for (let i = 0; i < n; i++) a[i] = Math.floor(Math.random() * 256);
  return [...a].map(b => b.toString(16).padStart(2, "0")).join("");
}

/* ---------- Penyimpanan akun ---------- */
const users = {
  all() { try { return JSON.parse(localStorage.getItem(LS_USERS)) || {}; } catch { return {}; } },
  save(o) { localStorage.setItem(LS_USERS, JSON.stringify(o)); },
  find(username) { return this.all()[String(username || "").trim().toLowerCase()] || null; },
  byUid(uid) { return Object.values(this.all()).find(u => u.uid === uid) || null; }
};

let SESSION = users.byUid(localStorage.getItem(LS_SESSION) || "");
const currentUser = () => SESSION;
const isLoggedIn = () => !!SESSION;

/* Nama tampilan & inisial untuk avatar */
function displayName() { return SESSION ? SESSION.name : "Tamu"; }
function userInitials() {
  const n = SESSION ? SESSION.name : "Santri";
  return n.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase() || "S";
}

/* ---------- Validasi ---------- */
function validateSignup({ name, user, pass, pass2 }) {
  const e = {};
  if (!name || name.trim().length < 2) e.name = "Nama minimal 2 karakter.";
  else if (name.trim().length > 40) e.name = "Nama maksimal 40 karakter.";

  const u = String(user || "").trim();
  if (!u) e.user = "Username wajib diisi.";
  else if (!/^[a-zA-Z0-9._]{3,20}$/.test(u)) e.user = "3–20 karakter, hanya huruf, angka, titik, garis bawah.";
  else if (users.find(u)) e.user = "Username sudah dipakai. Coba yang lain.";

  if (!pass) e.pass = "Password wajib diisi.";
  else if (pass.length < 6) e.pass = "Password minimal 6 karakter.";
  if (!pass2) e.pass2 = "Ulangi passwordmu untuk konfirmasi.";
  else if (pass && pass2 !== pass) e.pass2 = "Konfirmasi password tidak cocok.";
  return e;
}

/* ---------- Aksi akun ---------- */
function signup({ name, user, pass }) {
  const all = users.all();
  const key = user.trim().toLowerCase();
  const salt = randHex(16);
  const rec = {
    uid: "u_" + randHex(8),
    name: name.trim(),
    user: user.trim(),
    salt,
    hash: sha256(salt + ":" + pass),
    pfp: null,
    joined: new Date().toISOString().slice(0, 10)
  };
  all[key] = rec;
  users.save(all);
  SESSION = rec;
  localStorage.setItem(LS_SESSION, rec.uid);
  return rec;
}

function login(user, pass) {
  const rec = users.find(user);
  if (!rec) return { ok: false, error: "Username tidak terdaftar." };
  if (rec.hash !== sha256(rec.salt + ":" + pass)) return { ok: false, error: "Password salah." };
  SESSION = rec;
  localStorage.setItem(LS_SESSION, rec.uid);
  return { ok: true, user: rec };
}

function logout() {
  SESSION = null;
  localStorage.removeItem(LS_SESSION);
}

/* Simpan perubahan pada akun yang sedang login */
function updateUser(patch) {
  if (!SESSION) return null;
  const all = users.all();
  const key = SESSION.user.toLowerCase();
  all[key] = { ...all[key], ...patch };
  users.save(all);
  SESSION = all[key];
  return SESSION;
}

function changePassword(oldPass, newPass) {
  if (!SESSION) return { ok: false, error: "Belum login." };
  if (SESSION.hash !== sha256(SESSION.salt + ":" + oldPass)) return { ok: false, error: "Password lama salah." };
  if (!newPass || newPass.length < 6) return { ok: false, error: "Password baru minimal 6 karakter." };
  const salt = randHex(16);
  updateUser({ salt, hash: sha256(salt + ":" + newPass) });
  return { ok: true };
}

function deleteAccount() {
  if (!SESSION) return;
  const all = users.all();
  delete all[SESSION.user.toLowerCase()];
  users.save(all);
  ["idnflix.mylist", "idnflix.continue"].forEach(k => localStorage.removeItem(k + "::" + SESSION.uid));
  logout();
}

/* ---------- Foto profil ---------- */
const PFP_MAX_BYTES = 5 * 1024 * 1024;   // batas file mentah 5 MB
const PFP_SIZE = 256;                     // hasil akhir 256×256

/* Baca file gambar -> crop tengah jadi kotak -> kecilkan -> dataURL JPEG.
   Dikecilkan supaya muat di localStorage (hasil ±20–40 KB). */
function readAvatarFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("Tidak ada file dipilih."));
    if (!/^image\//.test(file.type)) return reject(new Error("File harus berupa gambar (JPG, PNG, WebP, atau GIF)."));
    if (file.size > PFP_MAX_BYTES) return reject(new Error("Ukuran gambar maksimal 5 MB."));

    const fr = new FileReader();
    fr.onerror = () => reject(new Error("Gagal membaca file."));
    fr.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("File gambar tidak bisa dibaca atau rusak."));
      img.onload = () => {
        try {
          const side = Math.min(img.width, img.height);       // crop tengah
          const sx = (img.width - side) / 2;
          const sy = (img.height - side) / 2;
          const cv = document.createElement("canvas");
          cv.width = cv.height = PFP_SIZE;
          const cx = cv.getContext("2d");
          cx.imageSmoothingQuality = "high";
          cx.drawImage(img, sx, sy, side, side, 0, 0, PFP_SIZE, PFP_SIZE);
          resolve(cv.toDataURL("image/jpeg", 0.85));
        } catch (err) { reject(new Error("Gagal memproses gambar.")); }
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

function setAvatar(dataUrl) {
  try {
    updateUser({ pfp: dataUrl });
    return { ok: true };
  } catch (err) {
    // localStorage penuh
    return { ok: false, error: "Penyimpanan browser penuh. Hapus foto lama atau kosongkan My List." };
  }
}
function removeAvatar() { updateUser({ pfp: null }); }

/* Markup avatar dipakai di navbar & halaman profil */
function avatarHTML(u, cls) {
  const usr = u || SESSION;
  const pfp = usr && usr.pfp;
  const ini = usr ? (usr.name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase() || "S") : "?";
  return pfp
    ? `<span class="${cls}"><img src="${pfp}" alt="Foto profil ${usr.name}"></span>`
    : `<span class="${cls}">${ini}</span>`;
}
