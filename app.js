(()=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav=document.getElementById('nav');
const onScroll=()=>nav.classList.toggle('solid',scrollY>20);addEventListener('scroll',onScroll,{passive:true});onScroll();
// hero carousel
const imgs=[...document.querySelectorAll('#heroPhone .screen img')],dots=document.getElementById('heroDots');let i=0;
imgs.forEach((_,k)=>{const d=document.createElement('i');if(!k)d.className='on';dots.appendChild(d)});
if(!reduce&&imgs.length>1)setInterval(()=>{if(document.hidden)return;imgs[i].classList.remove('on');dots.children[i].classList.remove('on');i=(i+1)%imgs.length;imgs[i].loading='eager';imgs[i].classList.add('on');dots.children[i].classList.add('on')},2800);
// reveal
const els=document.querySelectorAll('.reveal');
document.querySelectorAll('.steps,.badges,.fgrid,.ios-grid').forEach(g=>[...g.children].forEach((c,k)=>c.style.setProperty('--d',(k%4)*0.08+'s')));
const count=el=>{const n=+el.dataset.count;if(reduce){el.textContent=n;return}let s=null;const f=t=>{s??=t;const p=Math.min((t-s)/1200,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
if('IntersectionObserver' in window&&!reduce){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(count);io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -40px 0px'});els.forEach(e=>io.observe(e))}
else{els.forEach(e=>e.classList.add('in'));document.querySelectorAll('[data-count]').forEach(count)}
// live activity rest timer demo
const r=document.getElementById('rest'),bar=document.getElementById('restBar');let left=90;
const tick=()=>{left=left<=0?90:left-1;r.textContent=Math.floor(left/60)+':'+String(left%60).padStart(2,'0');bar.style.transform=`scaleX(${left/90})`};
if(!reduce)setInterval(tick,1000);
// notify: local only, nothing stored or sent
const f=document.getElementById('nform'),m=document.getElementById('nmsg'),em=document.getElementById('email');
f.addEventListener('submit',e=>{e.preventDefault();if(!em.checkValidity()||!em.value){m.className='fine';m.textContent='Please enter a valid email address.';em.focus();return}
m.className='fine ok';m.textContent="Thanks! You're on the list in spirit 🎉 This preview doesn't collect emails, so check back here for launch news.";f.reset()});
})();
