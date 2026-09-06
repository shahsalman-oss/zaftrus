(() => {
 document.body.classList.add('page-ready');
 const root=document.documentElement, canvases=[...document.querySelectorAll('.system-canvas')];
 let sy=scrollY, target=sy, mx=.5,my=.5;
 addEventListener('scroll',()=>target=scrollY,{passive:true}); addEventListener('pointermove',e=>{mx=e.clientX/innerWidth;my=e.clientY/innerHeight});
 function draw(c,t){const r=c.getBoundingClientRect(),d=devicePixelRatio||1,w=r.width,h=r.height;c.width=w*d;c.height=h*d;const x=c.getContext('2d');x.scale(d,d);x.clearRect(0,0,w,h);x.translate(w/2,h/2);x.rotate((mx-.5)*.08);const s=Math.min(w,h)*.32;for(let i=0;i<8;i++){const a=t*.00018*(i%2?-.7:.7)+i*.78;const rx=s*(.35+i*.09),ry=s*(.12+i*.045);x.save();x.rotate(a);x.beginPath();x.ellipse(0,0,rx,ry,0,0,Math.PI*2);x.strokeStyle=i%3===0?'#c9ff3d':'rgba(233,229,220,.32)';x.lineWidth=i===0?1.5:.6;x.stroke();x.restore()}for(let i=0;i<18;i++){const a=i*Math.PI*2/18+t*.00012;const rr=s*(.75+Math.sin(i*2.7+t*.001)*.08);x.fillStyle=i%5===0?'#c9ff3d':'#e9e5dc';x.fillRect(Math.cos(a)*rr-1,Math.sin(a)*rr-1,2,2)}x.beginPath();x.moveTo(-s*1.1,0);x.lineTo(s*1.1,0);x.strokeStyle='rgba(233,229,220,.2)';x.stroke();}
 function frame(t){sy+=(target-sy)*.08;root.style.setProperty('--scroll',sy);canvases.forEach(c=>draw(c,t));requestAnimationFrame(frame)} requestAnimationFrame(frame);
 document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12}).observe(el));
 const menu=document.querySelector('.menu'),panel=document.querySelector('.mobile-panel');if(menu)menu.onclick=()=>{panel.classList.toggle('open');menu.setAttribute('aria-expanded',panel.classList.contains('open'))};
})();
