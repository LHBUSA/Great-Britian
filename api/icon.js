import sharp from 'sharp';

const makeSvg=(size)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 68" preserveAspectRatio="xMidYMid meet" fill="none">
<path d="M32 2 58 11v18c0 17-10.1 29.7-26 36.6C16.1 58.7 6 46 6 29V11Z" fill="#fff" stroke="#dce7f4" stroke-width="2" stroke-linejoin="round"/>
<path d="M32 6 54 13.6v15c0 14.2-7.8 24.9-22 31.6-14.2-6.7-22-17.4-22-31.6v-15Z" fill="#123f86" stroke="#0a2548" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M32 10.2 50 16.4v12.2c0 11.6-6 20.5-18 26.5-12-6-18-14.9-18-26.5V16.4Z" stroke="#a9c9ff" stroke-width="1.4" stroke-linejoin="round" opacity=".92"/>
<path d="m18 23 14-6 14 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="18" y="34" width="6" height="12" rx="1.6" fill="#ef3340"/>
<rect x="29" y="27" width="6" height="19" rx="1.6" fill="#fff"/>
<rect x="40" y="20" width="6" height="26" rx="1.6" fill="#7db5ff"/>
</svg>`;

export default async function handler(req,res){
  if(req.method!=='GET') return res.status(405).end();
  const url=new URL(req.url||'/api/icon','https://gb.proptechusa.ai');
  const requested=Number(url.searchParams.get('size')||192);
  const size=[32,180,192,512].includes(requested)?requested:192;
  try{
    const body=await sharp(Buffer.from(makeSvg(size))).resize(size,size,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png({compressionLevel:9}).toBuffer();
    res.setHeader('Content-Type','image/png');
    res.setHeader('Content-Length',String(body.length));
    res.setHeader('Cache-Control','public, max-age=0, s-maxage=31536000, immutable');
    return res.status(200).send(body);
  }catch(error){
    console.error('gb_icon_render_failed',error);
    return res.status(500).json({error:'icon_render_failed'});
  }
}
