import React from 'react';
import { ImageResponse } from '@vercel/og';

const h=React.createElement;

const dot=(label,value)=>h('div',{style:{display:'flex',alignItems:'center',gap:12,fontSize:18,color:'#a9bdc8'}},
  h('span',{style:{width:8,height:8,borderRadius:999,background:'#7cf6c5',boxShadow:'0 0 18px rgba(124,246,197,.7)'}}),
  h('span',null,label),
  value?h('b',{style:{color:'#eef7fa',fontWeight:700}},value):null
);

export default function handler(req,res){
  if(req.method!=='GET') return res.status(405).end();
  const card=h('div',{style:{width:'100%',height:'100%',display:'flex',position:'relative',overflow:'hidden',background:'linear-gradient(115deg,#050e16 0%,#081723 56%,#0d2737 100%)',color:'#fff',fontFamily:'sans-serif'}},
    h('div',{style:{position:'absolute',inset:0,display:'flex',opacity:.16,backgroundImage:'linear-gradient(rgba(124,246,197,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(127,199,255,.18) 1px,transparent 1px)',backgroundSize:'48px 48px'}}),
    h('div',{style:{position:'absolute',width:560,height:560,right:-120,top:35,borderRadius:560,background:'radial-gradient(circle,rgba(75,184,224,.28),rgba(75,184,224,.06) 48%,transparent 72%)'}}),
    h('div',{style:{position:'relative',display:'flex',width:'100%',height:'100%',padding:'56px 66px',gap:48}},
      h('div',{style:{display:'flex',flexDirection:'column',width:675}},
        h('div',{style:{display:'flex',alignItems:'center',gap:16}},
          h('div',{style:{width:56,height:56,borderRadius:14,border:'2px solid rgba(124,246,197,.75)',background:'#071b28',display:'flex',alignItems:'center',justifyContent:'center'}},
            h('div',{style:{width:28,height:28,transform:'rotate(45deg)',background:'#7cf6c5',display:'flex',alignItems:'center',justifyContent:'center'}},h('div',{style:{width:10,height:10,background:'#071b28'}}))
          ),
          h('div',{style:{display:'flex',flexDirection:'column'}},
            h('b',{style:{fontSize:28,letterSpacing:'-.03em'}},'PropData'),
            h('span',{style:{fontSize:12,letterSpacing:'.18em',color:'#8fa6b4'}},'GREAT BRITAIN · BY PROPTECHUSA.AI')
          )
        ),
        h('div',{style:{display:'flex',alignItems:'center',gap:10,marginTop:34,padding:'9px 14px',width:215,borderRadius:999,background:'#7cf6c5',color:'#06131a',fontSize:13,fontWeight:800,letterSpacing:'.05em'}},
          h('span',{style:{width:8,height:8,borderRadius:99,background:'#06131a'}}),'PRODUCTION API LIVE'
        ),
        h('div',{style:{display:'flex',flexDirection:'column',marginTop:27}},
          h('div',{style:{fontSize:68,lineHeight:.98,fontWeight:800,letterSpacing:'-.055em'}},'Great Britain'),
          h('div',{style:{fontSize:61,lineHeight:1.02,fontWeight:400,letterSpacing:'-.05em',color:'#dce9ef'}},'Property Intelligence.')
        ),
        h('div',{style:{fontSize:21,lineHeight:1.45,color:'#b2c7d2',marginTop:25}},'UPRN-first identity with deterministic OS + HMLR enrichment.'),
        h('div',{style:{display:'flex',flexWrap:'wrap',gap:'14px 26px',marginTop:31,paddingTop:22,borderTop:'1px solid rgba(255,255,255,.12)'}},
          dot('Official UPRN identity'),dot('Linked OS identifiers'),dot('HMLR + INSPIRE'),dot('Source-aware coverage')
        ),
        h('div',{style:{marginTop:'auto',fontSize:18,fontWeight:700,color:'#f0f7fa'}},'gb.proptechusa.ai')
      ),
      h('div',{style:{display:'flex',flexDirection:'column',flex:1,alignSelf:'center',height:450,border:'1px solid rgba(255,255,255,.14)',borderRadius:28,background:'rgba(5,18,28,.88)',padding:28,boxShadow:'0 28px 90px rgba(0,0,0,.32)'}},
        h('div',{style:{display:'flex',justifyContent:'space-between',fontSize:12,letterSpacing:'.13em',color:'#7793a3'}},h('span',null,'GB PROPERTY GRAPH'),h('span',{style:{color:'#8ef0ca'}},'● LIVE')),
        h('div',{style:{display:'flex',alignItems:'center',justifyContent:'center',height:210,marginTop:16,position:'relative'}},
          h('div',{style:{fontSize:148,fontWeight:800,letterSpacing:'-.09em',color:'rgba(127,199,255,.13)'}},'GB'),
          h('div',{style:{position:'absolute',width:190,height:190,border:'2px solid rgba(124,246,197,.4)',transform:'rotate(45deg)',borderRadius:18}}),
          h('div',{style:{position:'absolute',width:78,height:78,border:'2px solid #7cf6c5',transform:'rotate(45deg)',borderRadius:10,background:'rgba(124,246,197,.09)'}})
        ),
        h('div',{style:{display:'flex',flexDirection:'column',gap:10,marginTop:6}},
          h('div',{style:{display:'flex',gap:9,alignItems:'center',fontSize:15,color:'#d8e6ed'}},h('b',{style:{color:'#7cf6c5'}},'UPRN'),'→',h('b',null,'OS IDs'),'→',h('b',null,'HMLR'),'→',h('b',null,'INSPIRE')),
          h('div',{style:{fontSize:16,color:'#829aa8'}},'One source-aware property graph.')
        ),
        h('div',{style:{display:'flex',gap:8,marginTop:'auto'}},
          ['IDENTITY','TRANSACTIONS','SPATIAL','VALUE'].map(x=>h('span',{key:x,style:{padding:'7px 9px',borderRadius:7,border:'1px solid rgba(255,255,255,.09)',fontSize:10,letterSpacing:'.08em',color:'#8ca4b2'}},x))
        )
      )
    )
  );
  return new ImageResponse(card,{width:1200,height:630,headers:{'Cache-Control':'public, s-maxage=31536000, immutable'}});
}
