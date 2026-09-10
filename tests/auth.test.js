const { JSDOM } = require('jsdom'); const fs=require('fs'); const D=__dirname+'/../';
const crypto=require('crypto');
let p=0,f=0; const t=(n,c,e='')=>{c?p++:f++;console.log((c?'  PASS ':'  FAIL ')+n+(e?'  ['+e+']':''));};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

function boot(){
  const dom=new JSDOM(fs.readFileSync(D+'index.html','utf8').replace(/<script src="[^"]*"><\/script>/g,''),
    {runScripts:'outside-only',url:'http://localhost:8080/',pretendToBeVisual:true});
  const w=dom.window;
  w.IntersectionObserver=class{constructor(){}observe(){}unobserve(){}disconnect(){}};
  w.scrollTo=()=>{}; w.confirm=()=>true;
  w.crypto={getRandomValues:a=>{crypto.randomFillSync(Buffer.from(a.buffer));return a;}};
  // canvas stub: pipeline crop/resize
  w.HTMLCanvasElement.prototype.getContext=function(){return {drawImage(){},imageSmoothingQuality:''};};
  w.HTMLCanvasElement.prototype.toDataURL=function(){return 'data:image/jpeg;base64,ZmFrZWpwZWc=';};
  Object.defineProperty(w.Image.prototype,'src',{set(v){this._s=v;setTimeout(()=>{
    Object.defineProperty(this,'width',{value:800,configurable:true});
    Object.defineProperty(this,'height',{value:600,configurable:true});
    this.onload&&this.onload();},5);},get(){return this._s;}});
  w.eval(fs.readFileSync(D+'auth.js','utf8')+'\n;\n'+fs.readFileSync(D+'data.js','utf8')+'\n;\n'
    +fs.readFileSync(D+'app.js','utf8')+'\n;window.__=x=>eval(x);');
  w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
  return w;
}
const $=(w,s)=>w.document.querySelector(s), $$=(w,s)=>[...w.document.querySelectorAll(s)];
const nav=async(w,h)=>{w.location.hash=h;w.dispatchEvent(new w.Event('hashchange'));await sleep(400);};
const click=(w,el)=>el.dispatchEvent(new w.Event('click',{bubbles:true}));
const V=w=>w.document.getElementById('view').textContent.replace(/\s+/g,' ');
const fill=(w,form,k,v)=>{const i=form.querySelector(`[name="${k}"]`);i.value=v;};
const submit=async(w,form)=>{form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sleep(400);};

(async()=>{
 const w=boot(); await sleep(400);

 console.log('\n=== SHA-256 benar ===');
 const sha=w.__('sha256("abc")');
 t('sha256("abc") sesuai vektor uji', sha==='ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad', sha.slice(0,16));
 t('sha256("") sesuai vektor uji', w.__('sha256("")')==='e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
 t('sha256 teks panjang >64 byte', w.__('sha256("santri IDN Boarding School Pamijahan nobar bareng di aula besar 2026")').length===64);
 t('sha256 unicode aman', typeof w.__('sha256("Ustadz Johan — kisah nabi ﷺ")')==='string');

 console.log('\n=== Status awal: tamu ===');
 t('belum login', w.__('isLoggedIn()')===false);
 t('navbar tulis "Masuk"', $(w,'.avatar').textContent.includes('Masuk'));
 t('navbar link ke #/login', $(w,'.avatar').getAttribute('href')==='#/login');
 await nav(w,'#/profile');
 t('profile tamu: ajakan masuk', V(w).includes('Kamu belum masuk'));
 t('profile tamu: tak ada editor foto', !$(w,'[data-pfpdrop]'));
 await nav(w,'#/');
 t('tamu tetap bisa lihat Home', V(w).length>500);
 await nav(w,'#/watch/epic-story/1/1');
 t('tamu tetap bisa menonton', $(w,'.player-wrap iframe').src.includes('MMJTQsCTjhI'));

 console.log('\n=== Validasi form daftar ===');
 await nav(w,'#/signup');
 let form=$(w,'[data-authform="signup"]');
 t('halaman daftar tampil', !!form);
 await submit(w,form);
 t('form kosong ditolak', $$(w,'.fld.bad').length===4, $$(w,'.fld.bad').length+' field error');
 t('masih belum login', w.__('isLoggedIn()')===false);

 fill(w,form,'name','A'); fill(w,form,'user','ab'); fill(w,form,'pass','123'); fill(w,form,'pass2','456');
 await submit(w,form);
 t('nama terlalu pendek ditolak', $(w,'[data-fld="name"]').classList.contains('bad'));
 t('username <3 karakter ditolak', $(w,'[data-fld="user"]').classList.contains('bad'));
 t('password <6 karakter ditolak', $(w,'[data-fld="pass"]').classList.contains('bad'));
 t('konfirmasi tidak cocok ditolak', $(w,'[data-fld="pass2"]').classList.contains('bad'));

 fill(w,form,'user','ahmad fauzi!');
 await submit(w,form);
 t('username dengan spasi/simbol ditolak', $(w,'[data-fld="user"]').querySelector('.err').textContent.includes('huruf'));

 console.log('\n=== Daftar berhasil ===');
 fill(w,form,'name','Ahmad Fauzi'); fill(w,form,'user','santri.ahmad');
 fill(w,form,'pass','rahasia123'); fill(w,form,'pass2','rahasia123');
 await submit(w,form);
 t('berhasil login setelah daftar', w.__('isLoggedIn()')===true);
 t('diarahkan ke profile', w.location.hash==='#/profile');
 const u=w.__('currentUser()');
 t('nama tersimpan', u.name==='Ahmad Fauzi');
 t('username tersimpan', u.user==='santri.ahmad');
 t('password TIDAK disimpan polos', JSON.stringify(u).indexOf('rahasia123')===-1);
 t('hash 64 hex', /^[0-9a-f]{64}$/.test(u.hash));
 t('punya salt acak', /^[0-9a-f]{32}$/.test(u.salt));
 t('hash = sha256(salt:pass)', u.hash===w.__(`sha256(${JSON.stringify(u.salt+':rahasia123')})`));
 t('navbar tampil nama depan', $(w,'.avatar').textContent.includes('Ahmad'));
 t('avatar inisial AF', $(w,'.avatar .pic').textContent==='AF');
 t('profile tampil nama lengkap', V(w).includes('Ahmad Fauzi'));
 t('profile tampil @username', V(w).includes('@santri.ahmad'));

 console.log('\n=== Username ganda ditolak ===');
 w.__('logout()');
 await nav(w,'#/signup');
 form=$(w,'[data-authform="signup"]');
 fill(w,form,'name','Ahmad Lain'); fill(w,form,'user','SANTRI.AHMAD');
 fill(w,form,'pass','lainlain'); fill(w,form,'pass2','lainlain');
 await submit(w,form);
 t('username duplikat (beda huruf besar) ditolak', $(w,'[data-fld="user"]').classList.contains('bad'));
 t('tidak jadi login', w.__('isLoggedIn()')===false);
 t('jumlah akun tetap 1', Object.keys(w.__('users.all()')).length===1);

 console.log('\n=== Login ===');
 await nav(w,'#/login');
 form=$(w,'[data-authform="login"]');
 fill(w,form,'user','santri.ahmad'); fill(w,form,'pass','salahpassword');
 await submit(w,form);
 t('password salah ditolak', $(w,'.form-err').classList.contains('show'));
 t('pesan error jelas', $(w,'.form-err').textContent.includes('Password salah'));
 t('tetap belum login', w.__('isLoggedIn()')===false);

 fill(w,form,'user','tidakada'); fill(w,form,'pass','apapun');
 await submit(w,form);
 t('username tak terdaftar ditolak', $(w,'.form-err').textContent.includes('tidak terdaftar'));

 fill(w,form,'user','Santri.Ahmad'); fill(w,form,'pass','rahasia123');
 await submit(w,form);
 t('login berhasil (username case-insensitive)', w.__('isLoggedIn()')===true);
 t('diarahkan ke profile', w.location.hash==='#/profile');

 console.log('\n=== Toggle lihat password ===');
 w.__('logout()'); await nav(w,'#/login');
 const pw=$(w,'#f_pass'), eye=$(w,'[data-pweye]');
 t('password awalnya tersembunyi', pw.type==='password');
 click(w,eye); await sleep(60);
 t('klik mata -> terlihat', pw.type==='text');
 click(w,eye); await sleep(60);
 t('klik lagi -> tersembunyi', pw.type==='password');

 console.log('\n=== Upload foto profil ===');
 w.__('login("santri.ahmad","rahasia123")'); await nav(w,'#/profile');
 t('editor foto tampil', !!$(w,'[data-pfpdrop]'));
 t('input file ada & tersembunyi', !!$(w,'[data-pfpinput]') && $(w,'[data-pfpinput]').hidden);
 t('input hanya terima gambar', $(w,'[data-pfpinput]').accept==='image/*');
 t('awalnya tampil inisial', !!$(w,'.pfp-drop .ini'));
 t('belum ada tombol hapus foto', !$(w,'[data-pfpremove]'));

 const mkFile=(name,type,size)=>{const b=new w.Blob(['x'],{type});Object.defineProperty(b,'size',{value:size});
   Object.defineProperty(b,'name',{value:name});Object.defineProperty(b,'type',{value:type});return b;};
 let err=null;
 try{ await w.__('readAvatarFile')(mkFile('a.pdf','application/pdf',1000)); }catch(e){err=e;}
 t('file non-gambar ditolak', err && /harus berupa gambar/i.test(err.message), err&&err.message);
 err=null;
 try{ await w.__('readAvatarFile')(mkFile('big.jpg','image/jpeg',9*1024*1024)); }catch(e){err=e;}
 t('file >5MB ditolak', err && /maksimal 5 MB/i.test(err.message), err&&err.message);
 err=null;
 try{ await w.__('readAvatarFile')(null); }catch(e){err=e;}
 t('tanpa file ditolak', !!err);

 const okUrl=await w.__('readAvatarFile')(mkFile('foto.png','image/png',50000));
 t('gambar valid -> dataURL JPEG', okUrl.startsWith('data:image/jpeg'), okUrl.slice(0,24));
 await w.__('applyAvatarFile')(mkFile('foto.png','image/png',50000)); await sleep(400);
 t('foto tersimpan di akun', !!w.__('currentUser()').pfp);
 t('profil kini tampil <img>', !!$(w,'.pfp-drop img'));
 t('navbar avatar jadi <img>', !!$(w,'.avatar .pic img'));
 t('tombol hapus foto muncul', !!$(w,'[data-pfpremove]'));

 console.log('\n=== Foto bertahan & bisa dihapus ===');
 const saved=w.__('currentUser()').pfp;
 w.__('logout()'); w.__('login("santri.ahmad","rahasia123")');
 t('foto bertahan setelah logout+login', w.__('currentUser()').pfp===saved);
 await nav(w,'#/profile');
 click(w,$(w,'[data-pfpremove]')); await sleep(400);
 t('foto terhapus', w.__('currentUser()').pfp===null);
 t('kembali tampil inisial', !!$(w,'.pfp-drop .ini'));

 console.log('\n=== My List terpisah per akun ===');
 w.__('store.list=["epic-story"]');
 t('akun A punya 1 judul', w.__('store.list').length===1);
 w.__('logout()');
 t('tamu: My List kosong (tak tercampur)', w.__('store.list').length===0);
 w.__('signup({name:"Budi Santoso",user:"budi",pass:"budi123456"})');
 t('akun B: My List kosong', w.__('store.list').length===0);
 w.__('store.list=["outdoor-boys","epic-story"]');
 t('akun B punya 2 judul', w.__('store.list').length===2);
 w.__('logout()'); w.__('login("santri.ahmad","rahasia123")');
 t('akun A tetap 1 judul (terisolasi)', w.__('store.list').length===1);
 t('isi My List akun A benar', w.__('store.list')[0]==='epic-story');

 console.log('\n=== Ganti password ===');
 let r=w.__('changePassword("salah","barubaru")');
 t('password lama salah ditolak', r.ok===false);
 r=w.__('changePassword("rahasia123","123")');
 t('password baru terlalu pendek ditolak', r.ok===false);
 r=w.__('changePassword("rahasia123","passwordbaru")');
 t('ganti password berhasil', r.ok===true);
 t('login password lama gagal', w.__('login("santri.ahmad","rahasia123")').ok===false);
 t('login password baru berhasil', w.__('login("santri.ahmad","passwordbaru")').ok===true);

 console.log('\n=== Logout & hapus akun ===');
 await nav(w,'#/profile');
 t('tombol Keluar ada', !!$(w,'[data-logout]'));
 click(w,$(w,'[data-logout]')); await sleep(400);
 t('berhasil logout', w.__('isLoggedIn()')===false);
 t('kembali ke home', w.location.hash==='#/');
 t('navbar kembali "Masuk"', $(w,'.avatar').textContent.includes('Masuk'));

 w.__('login("santri.ahmad","passwordbaru")'); await nav(w,'#/profile');
 click(w,$(w,'[data-delacc]')); await sleep(400);
 t('akun terhapus', w.__('isLoggedIn()')===false);
 t('tidak bisa login lagi', w.__('login("santri.ahmad","passwordbaru")').ok===false);
 t('akun lain tetap ada', !!w.__('users.find("budi")'));

 console.log('\n=== Regresi fitur lama ===');
 await nav(w,'#/tv');
 t('TV Shows tetap jalan', V(w).includes('Epic Story') && V(w).includes('Outdoor Boys'));
 await nav(w,'#/watch/im-the-best-muslim/1/1');
 t('watch page tetap jalan', !!$(w,'.player-wrap iframe'));
 t('dropdown audio tetap ada', !!$(w,'.audio-dd-btn'));
 await nav(w,'#/mylist');
 t('My List page tetap jalan', V(w).length>50);

 console.log('\n============================================');
 console.log('  '+p+' PASS   '+f+' FAIL');
 console.log('============================================');
 process.exit(f?1:0);
})().catch(e=>{console.error('CRASH',e);process.exit(1);});
