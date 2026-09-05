import sharp from 'sharp';

const makeSvg=(size)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
<defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#050e16"/><stop offset="1" stop-color="#0b2231"/></linearGradient><linearGradient id="parcel" x1="0" x2="1"><stop stop-color="#7cf6c5"/><stop offset="1" stop-color="#7fc7ff"/></linearGradient></defs>
<rect width="64" height="64" rx="15" fill="url(#bg)"/>
<rect x="8" y="8" width="48" height="48" rx="12" fill="#071b28" stroke="#7cf6c5" stroke-opacity=".78" stroke-width="2"/>
<path d="M32 16 48 32 32 48 16 32Z" fill="url(#parcel)"/>
<path d="M32 25 39 32 32 39 25 32Z" fill="#071b28"/>
<path d="M15 22h8M15 22v8M49 42h-8M49 42v-8" fill="none" stroke="#7fc7ff" stroke-width="2" stroke-linecap="round"/>
</svg>`;

export default async function handler(req,res){
  if(req.method!=='GET') return res.status(405).end();
  const url=new URL(req.url||'/api/icon','https://gb.proptechusa.ai');
  const requested=Number(url.searchParams.get('size')||192);
  const size=[32,180,192,512].includes(requested)?requested:192;
  try{
    const body=await sharp(Buffer.from(makeSvg(size))).png({compressionLevel:9}).toBuffer();
    res.setHeader('Content-Type','image/png');
    res.setHeader('Content-Length',String(body.length));
    res.setHeader('Cache-Control','public, max-age=0, s-maxage=31536000, immutable');
    return res.status(200).send(body);
  }catch(error){
    console.error('gb_icon_render_failed',error);
    return res.status(500).json({error:'icon_render_failed'});
  }
}
