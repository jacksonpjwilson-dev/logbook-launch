(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// loops only run while visible
const lo=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('play',e.isIntersecting)),{threshold:.35});
document.querySelectorAll('.pager,.zoomer').forEach(el=>lo.observe(el));
const img=document.getElementById('cwimg');
document.querySelectorAll('.cw').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.cw').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b)});const n=new Image();n.src=b.dataset.src;n.decode().catch(()=>{}).then(()=>{img.style.opacity=0;setTimeout(()=>{img.src=b.dataset.src;img.style.opacity=1},180)})}));
const nav=document.querySelector('.nav');addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>20),{passive:true});
})();
(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;const st=document.querySelector('.lockbg');const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('play',e.isIntersecting)),{threshold:.3});
document.querySelectorAll('.notifbg,.lockbg').forEach(el=>io.observe(el));if(!st||RM)return;
const T=90;let left=T;const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
setInterval(()=>{if(!st.classList.contains('play'))return;left=left<=0?T:left-1;st.querySelectorAll('.rt').forEach(e=>e.textContent=fmt(left));st.style.setProperty('--p',left/T);st.querySelector('.dyn').style.setProperty('--off',100-left/T*100)},1000)})();
