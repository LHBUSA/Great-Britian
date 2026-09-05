import React from 'react';
import { ImageResponse } from '@vercel/og';

const h=React.createElement;
export default function handler(req,res){
  if(req.method!=='GET') return res.status(405).end();
  const url=new URL(req.url||'/api/icon','https://gb.proptechusa.ai');
  const requested=Number(url.searchParams.get('size')||192);
  const size=[32,180,192,512].includes(requested)?requested:192;
  const mark=h('div',{style:{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(145deg,#050e16,#0b2231)',position:'relative'}},
    h('div',{style:{position:'absolute',width:'76%',height:'76%',borderRadius:'22%',border:'2px solid rgba(124,246,197,.78)',background:'rgba(7,27,40,.96)',display:'flex',alignItems:'center',justifyContent:'center'}},
      h('div',{style:{width:'42%',height:'42%',transform:'rotate(45deg)',background:'#7cf6c5',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'7%'}},
        h('div',{style:{width:'38%',height:'38%',background:'#071b28',borderRadius:'4%'}})
      )
    ),
    h('div',{style:{position:'absolute',width:'58%',height:'2px',background:'rgba(127,199,255,.5)',transform:'rotate(-45deg)'}})
  );
  return new ImageResponse(mark,{width:size,height:size,headers:{'Cache-Control':'public, s-maxage=31536000, immutable'}});
}
