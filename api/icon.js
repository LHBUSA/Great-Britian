import React from 'react';
import { ImageResponse } from '@vercel/og';

const h=React.createElement;
export default async function handler(req,res){
  if(req.method!=='GET') return res.status(405).end();
  const url=new URL(req.url||'/api/icon','https://gb.proptechusa.ai');
  const requested=Number(url.searchParams.get('size')||192);
  const size=[32,180,192,512].includes(requested)?requested:192;
  try{
    const mark=h('div',{style:{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'#06111b'}},
      h('div',{style:{width:'76%',height:'76%',borderRadius:'22%',border:'2px solid #7cf6c5',background:'#0a2231',display:'flex',alignItems:'center',justifyContent:'center'}},
        h('div',{style:{width:'44%',height:'44%',transform:'rotate(45deg)',background:'#7cf6c5',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'7%'}},
          h('div',{style:{width:'38%',height:'38%',background:'#06111b',borderRadius:'4%'}})
        )
      )
    );
    const image=new ImageResponse(mark,{width:size,height:size});
    const body=Buffer.from(await image.arrayBuffer());
    res.setHeader('Content-Type','image/png');
    res.setHeader('Cache-Control','public, max-age=0, s-maxage=31536000, immutable');
    return res.status(200).send(body);
  }catch(error){
    console.error('gb_icon_render_failed',error);
    return res.status(500).json({error:'icon_render_failed'});
  }
}
