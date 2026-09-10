/* Regresi: katalog, dropdown audio, Epic Story & Outdoor Boys.
   Jalankan:  NODE_PATH=<path-jsdom> node tests/catalog.test.js   */
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

  console.log('\n=== DATA KATALOG ===');
  const C = ev('CATALOG');
  t('katalog 16 judul', C.length === 16, 'len=' + C.length);
  const E = C.find(x => x.id === 'epic-story'), O = C.find(x => x.id === 'outdoor-boys');
  t('Epic Story channel Yufid.TV', E.channel === 'Yufid.TV');
  t('Outdoor Boys channel Outdoor Boys (bukan Yufid)', O.channel === 'Outdoor Boys');
  t('Epic Story audioLang=id', E.audioLang === 'id');
  t('Outdoor Boys bahasa asli English', !O.audioLang);
  t('Epic Story 2 season (28+10)', E.seasons.length === 2 && E.seasons[0].episodes.length === 28 && E.seasons[1].episodes.length === 10);
  t('Outdoor Boys 13 episode', O.seasons[0].episodes.length === 13);
  const all = [...E.seasons, ...O.seasons].flatMap(s => s.episodes);
  t('51 episode baru', all.length === 51);
  t('semua youtubeId 11 karakter', all.every(x => /^[\w-]{11}$/.test(x.youtubeId)));
  t('tidak ada ID duplikat', new Set(all.map(x => x.youtubeId)).size === 51);
  t('semua airDate valid', all.every(x => /^\d{4}-\d{2}-\d{2}$/.test(x.airDate)));
  t('semua durasi valid', all.every(x => /^\d+:\d{2}(:\d{2})?$/.test(x.duration)));
  t('semua punya judul+deskripsi', all.every(x => x.title && x.description));
  t('episode urut kronologis', [...E.seasons, ...O.seasons].every(s => s.episodes.every((x, i) => i === 0 || s.episodes[i - 1].airDate <= x.airDate)));
  t('genre valid', [...E.genres, ...O.genres].every(g => ev('GENRES').includes(g)));
  t('Epic Story voices=[id]', ev("itemVoices(CATALOG.find(x=>x.id==='epic-story')).join()") === 'id');
  t('Outdoor Boys voices=[en]', ev("itemVoices(CATALOG.find(x=>x.id==='outdoor-boys')).join()") === 'en');
  t('IMBM tetap dual audio', ev("itemVoices(CATALOG.find(x=>x.id==='im-the-best-muslim')).join()") === 'en,id');

  console.log('\n=== NAVIGASI ===');
  await nav('#/tv');
  t('Epic Story di TV Shows', V().includes('Epic Story'));
  t('Outdoor Boys di TV Shows', V().includes('Outdoor Boys'));
  await nav('#/search/outdoor');
  t('pencarian menemukan Outdoor Boys', V().toLowerCase().includes('outdoor boys'));
  await nav('#/genres');
  t('halaman genre jalan', V().includes('Adventure'));

  console.log('\n=== DROPDOWN AUDIO (IMBM) ===');
  setV('id');
  await nav('#/watch/im-the-best-muslim/1/1');
  t('player-bar tepat setelah player', !!$('.player-wrap + .player-bar'));
  t('tombol dropdown ada', !!$('.audio-dd-btn'));
  t('menu awal tertutup', !$('.audio-dd').classList.contains('open'));
  click($('[data-ddtoggle]')); await sleep(120);
  t('menu terbuka', $('.audio-dd').classList.contains('open'));
  t('2 opsi bahasa', $$('.audio-opt').length === 2);
  click($('.audio-opt[data-voice="en"]')); await sleep(450);
  t('ganti ke video EN', $('.player-wrap iframe').src.includes('rQEesf-lVrk'));
  t('bar tampil English', $('.player-bar .now').textContent.includes('English'));
  t('menu tertutup lagi', !$('.audio-dd').classList.contains('open'));
  click($('[data-ddtoggle]')); await sleep(100);
  click($('.audio-opt[data-voice="id"]')); await sleep(450);
  t('kembali ke video ID', $('.player-wrap iframe').src.includes('F0SuPnn8kSs'));
  await nav('#/watch/im-the-best-muslim/4/2');
  t('S4E2 fallback ke EN', $('.player-wrap iframe').src.includes('-S7nQ9m9VJw'));
  t('catatan fallback tampil', !!$('.voice-note'));

  console.log('\n=== WATCH Epic Story (asli Indonesia) ===');
  setV('id');
  await nav('#/watch/epic-story/1/1');
  t('S1E1 memutar MMJTQsCTjhI', $('.player-wrap iframe').src.includes('MMJTQsCTjhI'));
  t('bar audio Indonesia', $('.player-bar .now').textContent.includes('Indonesia'));
  t('bar sebut Yufid.TV', $('.player-bar .now').textContent.includes('Yufid.TV'));
  t('tidak ada catatan fallback', !$('.voice-note'));
  click($('[data-ddtoggle]')); await sleep(120);
  t('opsi English dinonaktifkan', $$('.audio-opt').find(o => o.textContent.includes('English')).classList.contains('off'));
  setV('en');
  await nav('#/watch/epic-story/2/1');
  t('S2E1 memutar XubiDKs0oyg', $('.player-wrap iframe').src.includes('XubiDKs0oyg'));
  t('fallback ke Indonesia', $('.player-bar .now').textContent.includes('Indonesia'));

  console.log('\n=== WATCH Outdoor Boys (asli English) ===');
  setV('id');
  await nav('#/watch/outdoor-boys/1/1');
  t('E1 memutar w7nBJegBk8Q', $('.player-wrap iframe').src.includes('w7nBJegBk8Q'));
  t('bar audio English', $('.player-bar .now').textContent.includes('English'));
  t('bar sebut Outdoor Boys', $('.player-bar .now').textContent.includes('Outdoor Boys'));
  click($('[data-ddtoggle]')); await sleep(120);
  t('opsi Indonesia dinonaktifkan', $$('.audio-opt').find(o => o.textContent.includes('Indonesia')).classList.contains('off'));

  console.log('\n=== DETAIL ===');
  await nav('#/title/epic-story');
  t('cast ustadz tampil', V().includes('Ustadz Johan Saputra Halim'));
  t('selektor 2 season', V().includes('Season 1') && V().includes('Season 2'));
  t('grid episode terisi', $$('.epc').length > 0, $$('.epc').length + ' kartu');
  await nav('#/title/outdoor-boys');
  t('cast Luke Nichols tampil', V().includes('Luke Nichols'));

  console.log('\n============================================');
  console.log('  ' + p + ' PASS   ' + f + ' FAIL');
  console.log('============================================');
  process.exit(f ? 1 : 0);
})().catch(e => { console.error('CRASH', e); process.exit(1); });
