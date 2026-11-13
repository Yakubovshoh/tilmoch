/* Tilmoch v3 — qo'shimcha modullar: daraja sahnalari, sertifikat, o'lchagich. app.js dan oldin yuklanadi. */
(function(){
'use strict';
function sceneSvg(li){
  const P=[
   {sky:['#6FC3F0','#D9F1FF'],sun:'#FFD45A',far:'#9CC9E3',city:'#2C4F86',acc:'#18B2A9',win:'#FFE7A0',ground:'#3E9B63'},
   {sky:['#FFB65C','#FFEFD0'],sun:'#FFF3B0',far:'#E9B77C',city:'#8C4A1E',acc:'#14A3C7',win:'#2B6FB8',ground:'#D49A52'},
   {sky:['#F28A6A','#FFDCC0'],sun:'#FFE29A',far:'#E6A07C',city:'#6E3420',acc:'#1BA6A0',win:'#E8C27A',ground:'#C78345'},
   {sky:['#7FD6CF','#ECFBF8'],sun:'#FFE7A0',far:'#A9DCD3',city:'#9A6A3A',acc:'#1E8FD0',win:'#38C3B4',ground:'#D6AE72'},
   {sky:['#4D5FC4','#C2CBF4'],sun:'#FFE9B8',far:'#7D8AD4',city:'#2B3577',acc:'#FFFFFF',win:'#F4A51C',ground:'#3A4590'},
   {sky:['#0A1240','#2C3C92'],sun:'#FFF6D6',far:'#3A4AA0',city:'#141C55',acc:'#FFFFFF',win:'#F4A51C',ground:'#1B246A'}][li];
  const id='sky'+li;
  const dome=(x,y,w,c)=>`<path d="M${x-w/2} ${y}a${w/2} ${w*0.62} 0 0 1 ${w} 0z" fill="${c}"/><rect x="${x-1.2}" y="${y-w*0.62-9}" width="2.4" height="10" fill="${c}"/>`;
  const box=(x,y,w,h,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`;
  const minaret=(x,base,h,w,c,cap)=>`<path d="M${x-w/2} ${base}L${x-w*0.36} ${base-h}H${x+w*0.36}L${x+w/2} ${base}z" fill="${c}"/><rect x="${x-w*0.55}" y="${base-h-5}" width="${w*1.1}" height="5" fill="${c}"/><path d="M${x-w*0.38} ${base-h-5}a${w*0.38} ${w*0.5} 0 0 1 ${w*0.76} 0z" fill="${cap||c}"/>`;
  const portal=(x,base,w,h,c,a)=>`<rect x="${x-w/2}" y="${base-h}" width="${w}" height="${h}" fill="${c}"/><path d="M${x-w*0.28} ${base}V${base-h*0.52}Q${x} ${base-h*0.92} ${x+w*0.28} ${base-h*0.52}V${base}z" fill="${a}"/>`;
  const winRow=(x,y,w,n,c)=>Array.from({length:n},(_,i)=>`<rect x="${x+4+i*((w-8)/n)}" y="${y}" width="${Math.max(2,(w-8)/n-4)}" height="5" fill="${c}" opacity=".8"/>`).join('');
  let s='';
  const far=`<path d="M0 118Q60 92 120 110T240 104T360 108V150H0z" fill="${P.far}"/>`;
  if(li===0){
    s+=`<circle cx="62" cy="38" r="20" fill="${P.sun}"/>`+far;
    s+=box(14,88,34,62,P.city)+winRow(14,96,34,3,P.win)+winRow(14,108,34,3,P.win)+box(52,70,30,80,P.city)+winRow(52,78,30,3,P.win)+winRow(52,92,30,3,P.win)+box(86,96,40,54,P.city)+winRow(86,104,40,4,P.win);
    s+=box(166,104,68,46,P.city)+dome(200,104,46,P.acc)+minaret(156,150,74,9,P.city,P.acc)+minaret(244,150,74,9,P.city,P.acc);
    s+=`<rect x="297" y="40" width="6" height="110" fill="${P.city}"/><ellipse cx="300" cy="66" rx="13" ry="9" fill="${P.city}"/><rect x="299" y="12" width="2" height="30" fill="${P.city}"/><circle cx="300" cy="66" r="3" fill="${P.win}"/>`;
  }else if(li===1){
    s+=`<circle cx="306" cy="34" r="22" fill="${P.sun}"/>`+far;
    s+=dome(98,68,38,P.acc)+dome(262,68,38,P.acc)+dome(180,56,46,P.acc);
    s+=portal(98,150,76,82,P.city,P.acc)+portal(180,150,88,96,P.city,P.acc)+portal(262,150,76,82,P.city,P.acc);
    [56,140,220,304].forEach(x=>s+=minaret(x,150,100,9,P.city,P.acc));
  }else if(li===2){
    s+=`<circle cx="70" cy="40" r="20" fill="${P.sun}"/>`+far;
    s+=portal(80,150,70,72,P.city,P.acc)+box(210,96,84,54,P.city)+dome(252,96,62,P.acc);
    s+=minaret(160,150,128,26,P.city);
    [44,64,84,104].forEach(y=>s+=`<rect x="${149}" y="${y}" width="22" height="3" fill="${P.win}" opacity=".7"/>`);
  }else if(li===3){
    s+=`<circle cx="66" cy="36" r="18" fill="${P.sun}"/>`+far;
    s+=minaret(292,150,132,15,P.city,P.acc);
    [40,58,76,94].forEach(y=>s+=`<rect x="286" y="${y}" width="12" height="4" fill="${P.win}"/>`);
    s+=`<rect x="146" y="58" width="52" height="58" fill="${P.acc}"/>`;
    [64,76,88,100].forEach((y,i)=>s+=`<rect x="146" y="${y}" width="52" height="6" fill="${i%2?P.win:'#FFFFFF'}" opacity=".85"/>`);
    s+=`<ellipse cx="172" cy="58" rx="26" ry="6" fill="${P.win}"/>`;
    s+=box(0,112,360,38,P.city);
    for(let x=0;x<360;x+=18)s+=box(x,104,10,9,P.city);
  }else if(li===4){
    s+=`<circle cx="300" cy="36" r="18" fill="${P.sun}"/>`;
    s+=`<polygon points="-20,150 70,58 160,150" fill="${P.far}"/><polygon points="200,150 300,62 400,150" fill="${P.far}"/>`;
    s+=`<polygon points="70,150 180,34 290,150" fill="${P.city}"/><polygon points="156,59 180,34 204,59 192,54 180,62 168,54" fill="#FFFFFF"/>`;
    s+=`<polygon points="52,76 70,58 88,76 78,72 70,78 62,72" fill="#FFFFFF" opacity=".9"/><polygon points="282,80 300,62 318,80 308,76 300,82 292,76" fill="#FFFFFF" opacity=".9"/>`;
    s+=`<path d="M180 150C150 134 214 122 186 108S160 90 178 82" stroke="${P.win}" stroke-width="3" fill="none" stroke-dasharray="6 5"/>`;
  }else{
    for(let i=0;i<40;i++){const x=(i*73)%360,y=(i*37)%80+6,r=i%5===0?1.6:1;s+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFFFF" opacity="${.5+(i%3)*.2}"/>`;}
    s+=`<circle cx="62" cy="36" r="16" fill="${P.sun}"/><circle cx="69" cy="31" r="14" fill="${P.sky[0]}"/>`;
    s+=`<polygon points="-30,150 60,90 150,150" fill="${P.far}"/><polygon points="230,150 320,92 410,150" fill="${P.far}"/>`;
    s+=`<polygon points="40,150 180,26 320,150" fill="${P.city}"/><polygon points="150,53 180,26 210,53 196,48 180,58 164,48" fill="#FFFFFF"/>`;
    s+=`<rect x="179" y="2" width="2.4" height="26" fill="#FFFFFF"/><path d="M181.4 3h22l-6 6 6 6h-22z" fill="${P.win}"/>`;
  }
  return `<svg class="scene" viewBox="0 0 360 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.sky[0]}"/><stop offset="1" stop-color="${P.sky[1]}"/></linearGradient></defs><rect width="360" height="150" fill="url(#${id})"/>${s}<rect y="146" width="360" height="4" fill="${P.ground}"/></svg>`;
}
function starPts(cx,cy,R,r){const p=[];for(let i=0;i<16;i++){const a=Math.PI/8*i-Math.PI/2,rr=i%2?r:R;p.push((cx+rr*Math.cos(a)).toFixed(1)+','+(cy+rr*Math.sin(a)).toFixed(1));}return p.join(' ');}
function certSvg(o){
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const corner=(x,y)=>`<polygon points="${starPts(x,y,9,6)}" fill="#0FA3A0"/>`;
  return `<svg class="cert-art" viewBox="0 0 300 210" role="img" aria-label="${esc(o.title+' '+o.level)}">
   <rect x="3" y="3" width="294" height="204" rx="14" fill="#FFFDF7" stroke="#2350D8" stroke-width="3"/>
   <rect x="13" y="13" width="274" height="184" rx="8" fill="none" stroke="#F4A51C" stroke-width="1.5" stroke-dasharray="6 4"/>
   ${corner(24,24)}${corner(276,24)}${corner(24,186)}${corner(276,186)}
   <text x="150" y="46" text-anchor="middle" font-family="Unbounded, Onest, sans-serif" font-weight="700" font-size="17" letter-spacing="3" fill="#0F1A47">${esc(o.title)}</text>
   <text x="150" y="66" text-anchor="middle" font-family="Onest, sans-serif" font-size="12" fill="#5A668E">${esc(o.of)}</text>
   <text x="150" y="124" text-anchor="middle" font-family="Unbounded, Onest, sans-serif" font-weight="700" font-size="50" fill="#2350D8">${esc(o.level)}</text>
   <text x="150" y="146" text-anchor="middle" font-family="Onest, sans-serif" font-weight="600" font-size="12.5" fill="#0F1A47">${esc(o.equiv)}</text>
   <text x="34" y="180" font-family="JetBrains Mono, monospace" font-size="10" fill="#5A668E">${esc(o.date||'')}</text>
   <text x="150" y="193" text-anchor="middle" font-family="Onest, sans-serif" font-size="8.5" fill="#8A93B3">${esc(o.note)}</text>
   <polygon points="${starPts(250,164,22,17)}" fill="#F4A51C"/><circle cx="250" cy="164" r="12" fill="#FFD66B"/>
   <path d="M244 164l4.5 4.5L257 160" stroke="#0F1A47" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function gaugeSvg(v,labels,center,sub){
  const cx=160,cy=132,r=104,cols=['var(--turq)','var(--leaf)','var(--cobalt)','var(--saffron)','var(--pom)','var(--cobalt-d)'];
  const pt=(deg,rr)=>{const a=(180-deg)*Math.PI/180;return [(cx+rr*Math.cos(a)).toFixed(1),(cy-rr*Math.sin(a)).toFixed(1)];};
  let s='';
  for(let i=0;i<6;i++){const p0=pt(i*30+1.5,r),p1=pt((i+1)*30-1.5,r),on=v>i;
    s+=`<path d="M${p0[0]} ${p0[1]}A${r} ${r} 0 0 1 ${p1[0]} ${p1[1]}" stroke="${cols[i]}" stroke-width="22" fill="none" opacity="${on?1:.28}"/>`;
    const m=pt(i*30+15,r+25);s+=`<text x="${m[0]}" y="${m[1]}" text-anchor="middle" dominant-baseline="central" font-family="Unbounded, sans-serif" font-weight="700" font-size="11.5" fill="${on?'var(--ink)':'var(--muted)'}">${labels[i]}</text>`;}
  const nd=Math.min(180,Math.max(0,v/6*180)),tip=pt(nd,r-20);
  s+=`<line x1="${cx}" y1="${cy}" x2="${tip[0]}" y2="${tip[1]}" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="9" fill="var(--ink)"/>`;
  s+=`<text x="${cx}" y="${cy+36}" text-anchor="middle" font-family="Unbounded, sans-serif" font-weight="700" font-size="26" fill="var(--ink)">${center}</text>`;
  s+=`<text x="${cx}" y="${cy+56}" text-anchor="middle" font-family="Onest, sans-serif" font-weight="600" font-size="12.5" fill="var(--muted)">${sub}</text>`;
  return `<svg viewBox="0 0 320 196" role="img" aria-label="${center} ${sub}">${s}</svg>`;
}
window.TM3={sceneSvg,certSvg,gaugeSvg};
})();
