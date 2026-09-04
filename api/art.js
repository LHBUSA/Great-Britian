import zlib from 'node:zlib';

const crcTable=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
function crc32(buf){let c=0xffffffff;for(const b of buf)c=crcTable[(c^b)&255]^(c>>>8);return (c^0xffffffff)>>>0}
function chunk(type,data){const tb=Buffer.from(type);const len=Buffer.alloc(4);len.writeUInt32BE(data.length);const crc=Buffer.alloc(4);crc.writeUInt32BE(crc32(Buffer.concat([tb,data])));return Buffer.concat([len,tb,data,crc])}
function png(w,h,rgba){const raw=Buffer.alloc((w*4+1)*h);for(let y=0;y<h;y++){const o=y*(w*4+1);raw[o]=0;Buffer.from(rgba.buffer,rgba.byteOffset+y*w*4,w*4).copy(raw,o+1)}const ih=Buffer.alloc(13);ih.writeUInt32BE(w,0);ih.writeUInt32BE(h,4);ih[8]=8;ih[9]=6;return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ih),chunk('IDAT',zlib.deflateSync(raw,{level:7})),chunk('IEND',Buffer.alloc(0))])}
function rng(seed){let s=seed>>>0;return()=>((s=(s*1664525+1013904223)>>>0)/4294967296)}
function makeArt(name){
  const sizes={graph:[1100,610],coverage:[900,620],identity:[720,400],transactions:[720,400],land:[720,400],geometry:[720,400],valuation:[720,400],developers:[720,400]};
  const [w,h]=sizes[name]||sizes.identity;
  const p=new Uint8Array(w*h*4);const ix=(x,y)=>(y*w+x)*4;
  const put=(x,y,r,g,b,a=255)=>{if(x<0||y<0||x>=w||y>=h)return;const i=ix(x|0,y|0),oa=p[i+3]/255,na=a/255,out=na+oa*(1-na);if(!out)return;p[i]=(r*na+p[i]*oa*(1-na))/out;p[i+1]=(g*na+p[i+1]*oa*(1-na))/out;p[i+2]=(b*na+p[i+2]*oa*(1-na))/out;p[i+3]=out*255};
  const line=(x0,y0,x1,y1,c,a=255,width=1)=>{const dx=x1-x0,dy=y1-y0,steps=Math.max(Math.abs(dx),Math.abs(dy));for(let s=0;s<=steps;s++){const x=x0+dx*s/steps,y=y0+dy*s/steps;for(let oy=-width;oy<=width;oy++)for(let ox=-width;ox<=width;ox++)if(ox*ox+oy*oy<=width*width)put(x+ox,y+oy,c[0],c[1],c[2],a)}};
  const rect=(x,y,ww,hh,c,a=255)=>{for(let yy=Math.max(0,y|0);yy<Math.min(h,(y+hh)|0);yy++)for(let xx=Math.max(0,x|0);xx<Math.min(w,(x+ww)|0);xx++)put(xx,yy,c[0],c[1],c[2],a)};
  const circle=(cx,cy,r,c,a=255)=>{const rr=r*r;for(let y=Math.max(0,(cy-r)|0);y<Math.min(h,(cy+r)|0);y++)for(let x=Math.max(0,(cx-r)|0);x<Math.min(w,(cx+r)|0);x++){const d=(x-cx)*(x-cx)+(y-cy)*(y-cy);if(d<=rr)put(x,y,c[0],c[1],c[2],a*Math.max(.12,1-d/rr))}};
  const rand=rng([...name].reduce((a,c)=>a+c.charCodeAt(0),0)*7717+19);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){const t=y/h,rx=x/w,glow=Math.max(0,1-Math.hypot(rx-.72,t-.42)*1.4);put(x,y,5+Math.round(glow*10),16+Math.round(16*t+glow*18),27+Math.round(24*t+glow*24),255)}
  const grid=Math.max(44,Math.round(w/18));for(let x=0;x<w;x+=grid)line(x,0,x,h,[112,191,220],18,0);for(let y=0;y<h;y+=grid)line(0,y,w,y,[112,191,220],18,0);
  for(let i=0;i<70;i++){const x=rand()*w,y=rand()*h,ww=18+rand()*70,hh=10+rand()*45;rect(x,y,ww,hh,[74,94,105],35+rand()*45);if(rand()>.66)line(x,y,x+ww,y+hh,[145,175,185],28,0)}
  for(let i=0;i<5;i++){let x=-50,y=rand()*h;for(let j=1;j<7;j++){const nx=j*w/6+rand()*70-35,ny=y+(rand()-.5)*110;line(x,y,nx,ny,[130,151,160],45,2);line(x,y,nx,ny,[13,30,41],135,0);x=nx;y=ny}}
  const mint=[121,241,194],cyan=[118,200,255],blue=[43,145,255],gold=[215,178,100];
  if(name==='coverage'){
    const pts=[[345,38],[390,62],[380,92],[410,125],[392,155],[428,185],[410,225],[445,260],[424,300],[455,337],[425,372],[440,420],[405,445],[390,490],[350,505],[322,548],[286,532],[297,492],[262,470],[270,430],[245,405],[260,365],[230,340],[250,305],[236,270],[260,236],[250,205],[278,180],[268,146],[300,125],[290,93],[315,75],[305,52]];
    for(let y=30;y<560;y++)for(let x=220;x<470;x++){let inside=false;for(let i=0,j=pts.length-1;i<pts.length;j=i++){const [xi,yi]=pts[i],[xj,yj]=pts[j];if(((yi>y)!=(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))inside=!inside}if(inside)put(x,y,96,176,226,118)}
    for(const [x,y] of [[340,125],[355,245],[350,350],[325,455]]){circle(x,y,24,mint,55);circle(x,y,8,mint,240)}
    for(let i=0;i<4;i++){const yy=150+i*95;rect(540,yy,275,52,[255,255,255],15);rect(566,yy+20,135+rand()*100,10,mint,90)}
  } else if(name==='graph'||name==='identity'||name==='geometry'){
    const cx=[.18,.42,.66,.84,.29,.56].map(v=>v*w),cy=[.3,.24,.31,.44,.7,.67].map(v=>v*h),colors=[mint,cyan,mint,cyan,cyan,mint];
    for(let i=0;i<6;i++){const x=cx[i],y=cy[i],pw=w*(.16+rand()*.08),ph=h*(.18+rand()*.1),pts=[[x-pw/2,y-ph/2],[x+pw*.35,y-ph*.62],[x+pw/2,y],[x+pw*.25,y+ph/2],[x-pw*.45,y+ph*.35],[x-pw*.55,y]];for(let yy=Math.max(0,(y-ph)|0);yy<Math.min(h,(y+ph)|0);yy++)for(let xx=Math.max(0,(x-pw)|0);xx<Math.min(w,(x+pw)|0);xx++){let ins=false;for(let a=0,b=pts.length-1;a<pts.length;b=a++){const [xi,yi]=pts[a],[xj,yj]=pts[b];if(((yi>yy)!=(yj>yy))&&(xx<(xj-xi)*(yy-yi)/(yj-yi)+xi))ins=!ins}if(ins)put(xx,yy,colors[i][0],colors[i][1],colors[i][2],24)}for(let a=0;a<pts.length;a++){const b=(a+1)%pts.length;line(...pts[a],...pts[b],colors[i],100,0)}}
    [[0,1],[1,2],[2,3],[0,4],[4,5],[1,5]].forEach(([a,b])=>line(cx[a],cy[a],cx[b],cy[b],mint,145,1));for(let i=0;i<6;i++){circle(cx[i],cy[i],15,colors[i],45);circle(cx[i],cy[i],5,colors[i],245)}
  } else if(name==='land'||name==='transactions'){
    for(let i=0;i<6;i++){const x=70+i*w/7,base=h*.78,hh=h*(.3+rand()*.22),ww=w/9;rect(x,base-hh,ww,hh,[150+rand()*35,118+rand()*25,88+rand()*20],75);for(let r=0;r<3;r++)for(let c=0;c<2;c++)rect(x+14+c*28,base-hh+24+r*34,12,19,[210,225,230],75);line(x,base-hh,x+ww/2,base-hh-30,[205,220,225],95,1);line(x+ww/2,base-hh-30,x+ww,base-hh,[205,220,225],95,1)}
    for(let i=0;i<4;i++){const x=w*(.2+i*.2),y=h*(.22+i*.12);circle(x,y,12,gold,40);circle(x,y,4,gold,210);if(i)line(w*(.2+(i-1)*.2),h*(.22+(i-1)*.12),x,y,gold,90,1)}
  } else if(name==='valuation'){
    for(let i=0;i<7;i++){const x=70+i*(w-140)/7,bar=h*(.18+rand()*.5);rect(x,h*.78-bar,42,bar,blue,65+20*i);circle(x+21,h*.78-bar,18,mint,30)}line(50,h*.78,w-50,h*.78,[180,205,215],70,1);for(let i=0;i<6;i++){const x=70+i*(w-140)/5,y=h*(.52-Math.sin(i*.8)*.18);if(i)line(70+(i-1)*(w-140)/5,h*(.52-Math.sin((i-1)*.8)*.18),x,y,mint,180,2);circle(x,y,6,mint,230)}
  } else {
    for(let i=0;i<11;i++){const y=55+i*27;rect(52,y,110+rand()*420,8,i%3===0?cyan:mint,35+rand()*55)}for(let i=0;i<5;i++){const x=90+i*125;rect(x,80+i*38,78,44,[255,255,255],14);circle(x+39,102+i*38,8,i%2?cyan:mint,175)}
  }
  return png(w,h,p)
}
export default function handler(req,res){if(req.method!=='GET')return res.status(405).json({error:'method_not_allowed'});const name=String(req.query?.name||'identity');const allowed=new Set(['graph','coverage','identity','transactions','land','geometry','valuation','developers']);if(!allowed.has(name))return res.status(404).end();const body=makeArt(name);res.setHeader('Content-Type','image/png');res.setHeader('Cache-Control','public, max-age=31536000, immutable');res.setHeader('CDN-Cache-Control','public, s-maxage=31536000, stale-while-revalidate=86400');res.status(200).end(body)}
