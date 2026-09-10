/* Tes serial "Kok Bisa" (channel Kok Bisa?).
   Jalankan:  NODE_PATH=<path-jsdom> node tests/kokbisa.test.js   */
const { JSDOM } = require('jsdom'); const fs = require('fs');
const D = __dirname + '/../';
let p = 0, f = 0;
const t = (n, c, e = '') => { c ? p++ : f++; console.log((c ? '  PASS ' : '  FAIL ') + n + (e ? '  [' + e + ']' : '')); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

const dom = new JSDOM(fs.readFileSync(D + 'index.html', 'utf8').replace(/<script src="[^"]*"><\/script>/g, ''),
  { runScripts: 'outside-only', url: 'http://localhost:8080/', pretendToBeVisual: true });
const w = dom.window;
w.IntersectionObserver = class { constructor() {} observe() {} unobserve() {} disconnect() {} };
w.scrollTo = () => {};
w.eval(fs.readFileSync(D + 'auth.js', 'utf8') + '\n;\n' + fs.readFileSync(D + 'data.js', 'utf8') + '\n;\n'
  + fs.readFileSync(D + 'app.js', 'utf8') + '\n;window.__=x=>eval(x);');
w.document.dispatchEvent(new w.Event('DOMContentLoaded'));

const ev = x => w.__(x);
const $ = s => w.document.querySelector(s), $$ = s => [...w.document.querySelectorAll(s)];
const nav = async h => { w.location.hash = h; w.dispatchEvent(new w.Event('hashchange')); await sleep(400); };
const click = el => el.dispatchEvent(new w.Event('click', { bubbles: true }));
const V = () => w.document.getElementById('view').textContent.replace(/\s+/g, ' ');
const setV = l => { w.localStorage.setItem('idnflix.voice', l); ev(`setVoice(${JSON.stringify(l)},true)`); };

(async () => {
  await sleep(400);

  console.log('\n=== DATA ===');
  const C = ev('CATALOG');
  t('katalog jadi 16 judul', C.length === 16, 'len=' + C.length);
  const K = C.find(x => x.id === 'kok-bisa');
  t('kok-bisa ada', !!K);
  t('type tv', K.type === 'tv');
  t('judul "Kok Bisa"', K.title === 'Kok Bisa');
  t('channel "Kok Bisa?"', K.channel === 'Kok Bisa?');
  t('audioLang id (serial Indonesia)', K.audioLang === 'id');
  t('4 season', K.seasons.length === 4);
  t('S1 32 · S2 13 · S3 8 · S4 24 eps',
    K.seasons.map(s => s.episodes.length).join('/') === '32/13/8/24',
    K.seasons.map(s => s.episodes.length).join('/'));
  t('total 77 episode', ev("totalEpisodes(CATALOG.find(x=>x.id==='kok-bisa'))") === 77);
  t('endYear 2026 (ada video terbaru)', K.endYear === 2026);
  t('setiap season punya judul', K.seasons.every(s => !!s.title), K.seasons.map(s => s.title).join(' | '));

  const eps = K.seasons.flatMap(s => s.episodes);
  t('semua youtubeId 11 karakter valid', eps.every(e => /^[\w-]{11}$/.test(e.youtubeId)));
  t('tidak ada video ID duplikat', new Set(eps.map(e => e.youtubeId)).size === 77);
  t('semua punya judul', eps.every(e => e.title && e.title.length > 3));
  t('semua punya deskripsi', eps.every(e => e.description && e.description.length > 10));
  t('semua punya durasi valid', eps.every(e => /^\d+:\d{2}$/.test(e.duration)));
  t('semua punya airYear masuk akal', eps.every(e => e.airYear >= 2015 && e.airYear <= 2026));
  t('S4 semua bertahun 2026', K.seasons[3].episodes.every(e => e.airYear === 2026));
  t('S4 judul berbahasa Indonesia (bukan terjemahan EN)',
    K.seasons[3].episodes.filter(e => /^(What|Why|How|Are|The|When|This|These|Crazy|Indonesia's|A |1 )/i.test(e.title)).length === 0,
    K.seasons[3].episodes.filter(e => /^(What|Why|How|Are|The|When)/i.test(e.title)).map(e=>e.title).join(' / ') || 'semua ID');
  t('S4 durasi semua terisi', K.seasons[3].episodes.every(e => /^\d+:\d{2}$/.test(e.duration)));
  t('judul bersih dari emoji', eps.every(e => !/[\u{1F300}-\u{1FAFF}]/u.test(e.title)));
  t('judul bersih dari embel "Seri Tokoh Bangsa Eps."', eps.every(e => !/Seri Tokoh Bangsa Eps/i.test(e.title)));
  t('nomor episode urut 1..n', K.seasons.every(s => s.episodes.every((e, i) => e.ep === i + 1)));
  t('episode urut kronologis per season', K.seasons.every(s => s.episodes.every((e, i) => i === 0 || s.episodes[i - 1].airYear <= e.airYear)));

  t('tidak bentrok dengan ID judul lain', C.filter(x => x.id === 'kok-bisa').length === 1);
  const allVid = C.flatMap(i => (i.seasons || []).flatMap(s => s.episodes.map(e => e.youtubeId)).concat(i.youtubeId ? [i.youtubeId] : []));
  t('tidak ada video ID bentrok lintas judul', new Set(allVid).size === allVid.length, allVid.length + ' id');
  t('katalog total 183 video', allVid.length === 183, allVid.length + '');
  t('genre valid semua', K.genres.every(g => ev('GENRES').includes(g)));
  t('voices = [id] saja', ev("itemVoices(CATALOG.find(x=>x.id==='kok-bisa')).join()") === 'id');
  t('tidak ada notif coverage dub', ev("voiceCoverage(CATALOG.find(x=>x.id==='kok-bisa'),'id')") === null);
  t('thumb & backdrop terisi', !!K.thumb && !!K.backdrop);

  console.log('\n=== NAVIGASI & PENCARIAN ===');
  await nav('#/tv');
  t('muncul di TV Shows', V().includes('Kok Bisa'));
  await nav('#/search/kok%20bisa');
  t('pencarian "kok bisa" menemukan', V().includes('Kok Bisa'));
  await nav('#/search/pluto');
  t('pencarian kata dalam deskripsi judul tetap jalan', V().length > 50);
  await nav('#/genres/Educational');
  t('muncul di genre Educational', V().includes('Kok Bisa'));

  console.log('\n=== DETAIL ===');
  await nav('#/title/kok-bisa');
  t('judul tampil', V().includes('Kok Bisa'));
  t('tagline tampil', V().includes('Menjawab Pertanyaan'));
  t('channel tampil', V().includes('Kok Bisa?'));
  t('nama season tampil (bukan cuma "Season 1")', V().includes('Alam Semesta'));
  t('season Tokoh Bangsa tampil', V().includes('Seri Tokoh Bangsa'));
  t('grid episode terisi', $$('.epc').length === 32, $$('.epc').length + ' kartu');
  t('selektor season punya 4 opsi', $$('[data-seasonsel] option').length === 4, $$('[data-seasonsel] option').length + '');
  await nav('#/title/kok-bisa/4');
  t('season 4 bisa dibuka', $$('.epc').length === 24, $$('.epc').length + ' kartu');
  t('judul terbaru tampil', V().includes('Kafein') || V().includes('kafein'));
  t('badge tahun tampil di kartu', /20\d\d/.test(($('.epc .ep-tag.date') || {}).textContent || ''), ($('.epc .ep-tag.date') || {}).textContent);

  console.log('\n=== WATCH ===');
  setV('id');
  await nav('#/watch/kok-bisa/1/1');
  t('S1E1 memutar FjFsx6iQE3Y', $('.player-wrap iframe').src.includes('FjFsx6iQE3Y'), $('.player-wrap iframe').src.split('/embed/')[1]);
  t('bar audio Indonesia', $('.player-bar .now').textContent.includes('Indonesia'));
  t('bar sebut channel Kok Bisa?', $('.player-bar .now').textContent.includes('Kok Bisa?'));
  t('tidak ada catatan fallback', !$('.voice-note'));
  t('subjudul pakai nama season', V().includes('Alam Semesta'));
  click($('[data-ddtoggle]')); await sleep(120);
  t('opsi English dinonaktifkan', $$('.audio-opt').find(o => o.textContent.includes('English')).classList.contains('off'));

  setV('en');
  await nav('#/watch/kok-bisa/2/2');
  t('S2E2 memutar ID benar', !!$('.player-wrap iframe').src.match(/embed\/[\w-]{11}/));
  t('fallback ke Indonesia walau user pilih EN', $('.player-bar .now').textContent.includes('Indonesia'));
  t('catatan fallback tampil', !!$('.voice-note'));
  setV('id');

  await nav('#/watch/kok-bisa/3/8');
  t('S3E8 jalan', $('.player-wrap iframe').src.includes('qm4tTGJ_eQo'));

  await nav('#/watch/kok-bisa/4/1');
  t('S4E1 (terlama di S4) memutar LWk3psIofA8', $('.player-wrap iframe').src.includes('LWk3psIofA8'));
  t('S4 nama season tampil', V().includes('Terbaru'));
  await nav('#/watch/kok-bisa/4/24');
  t('S4E24 (paling baru) memutar 3RZ6Eir-QyI', $('.player-wrap iframe').src.includes('3RZ6Eir-QyI'));
  t('bar audio tetap Indonesia', $('.player-bar .now').textContent.includes('Indonesia'));

  console.log('\n=== MY LIST ===');
  ev("store.list=[]");
  await nav('#/title/kok-bisa');
  click($('[data-listbtn]')); await sleep(300);
  t('bisa ditambah ke My List', ev("store.list").includes('kok-bisa'));
  await nav('#/mylist');
  t('muncul di halaman My List', V().includes('Kok Bisa'));
  ev("store.list=[]");

  console.log('\n=== REGRESI judul lain ===');
  await nav('#/watch/im-the-best-muslim/1/1');
  t('IMBM tetap dub Indonesia', $('.player-wrap iframe').src.includes('F0SuPnn8kSs'));
  await nav('#/watch/epic-story/1/1');
  t('Epic Story tetap jalan', $('.player-wrap iframe').src.includes('MMJTQsCTjhI'));
  await nav('#/watch/outdoor-boys/1/1');
  t('Outdoor Boys tetap English', $('.player-bar .now').textContent.includes('English'));
  await nav('#/title/im-the-best-muslim');
  t('judul tanpa nama season tetap tampil "Season 1"', V().includes('Season 1'));

  console.log('\n============================================');
  console.log('  ' + p + ' PASS   ' + f + ' FAIL');
  console.log('============================================');
  process.exit(f ? 1 : 0);
})().catch(e => { console.error('CRASH', e); process.exit(1); });
