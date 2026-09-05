import React from 'react';
import { ImageResponse } from '@vercel/og';

const h=React.createElement;
const feature=(text)=>h('div',{style:{display:'flex',alignItems:'center',fontSize:17,color:'#a9bdc8',marginRight:24,marginBottom:12}},
  h('span',{style:{width:8,height:8,borderRadius:8,background:'#7cf6c5',marginRight:10}}),text
);

export default async function handler(req,res){
  if(req.method!=='GET') return res.status(405).end();
  try{
    const card=h('div',{style:{width:'100%',height:'100%',display:'flex',background:'#06111b',color:'#ffffff',fontFamily:'sans-serif',padding:'56px 64px'}},
      h('div',{style:{display:'flex',flexDirection:'column',width:690,height:'100%'}},
        h('div',{style:{display:'flex',alignItems:'center'}},
          h('div',{style:{width:56,height:56,borderRadius:14,border:'2px solid #7cf6c5',background:'#0a2231',display:'flex',alignItems:'center',justifyContent:'center',marginRight:16}},
            h('div',{style:{width:28,height:28,background:'#7cf6c5',transform:'rotate(45deg)',display:'flex',alignItems:'center',justifyContent:'center'}},
              h('div',{style:{width:10,height:10,background:'#06111b'}})
            )
          ),
          h('div',{style:{display:'flex',flexDirection:'column'}},
            h('div',{style:{fontSize:28,fontWeight:800}},'PropData'),
            h('div',{style:{fontSize:12,letterSpacing:2.2,color:'#8fa6b4',marginTop:3}},'GREAT BRITAIN · BY PROPTECHUSA.AI')
          )
        ),
        h('div',{style:{display:'flex',alignItems:'center',width:220,padding:'9px 14px',borderRadius:30,background:'#7cf6c5',color:'#06131a',fontSize:13,fontWeight:800,marginTop:35}},
          h('span',{style:{width:8,height:8,borderRadius:8,background:'#06131a',marginRight:10}}),'PRODUCTION API LIVE'
        ),
        h('div',{style:{fontSize:68,fontWeight:800,letterSpacing:-3.4,lineHeight:1,marginTop:28}},'Great Britain'),
        h('div',{style:{fontSize:60,fontWeight:400,letterSpacing:-3,lineHeight:1.05,color:'#dce9ef',marginTop:5}},'Property Intelligence.'),
        h('div',{style:{fontSize:21,lineHeight:1.45,color:'#b2c7d2',marginTop:26}},'UPRN-first identity with deterministic OS + HMLR enrichment.'),
        h('div',{style:{display:'flex',flexWrap:'wrap',marginTop:28,paddingTop:20,borderTop:'1px solid rgba(255,255,255,.14)'}},
          feature('Official UPRN identity'),feature('Linked OS identifiers'),feature('HMLR + INSPIRE'),feature('Source-aware coverage')
        ),
        h('div',{style:{fontSize:18,fontWeight:800,color:'#f0f7fa',marginTop:'auto'}},'gb.proptechusa.ai')
      ),
      h('div',{style:{display:'flex',flexDirection:'column',flex:1,height:455,alignSelf:'center',marginLeft:42,padding:28,borderRadius:26,border:'1px solid rgba(255,255,255,.16)',background:'#0a1d2a'}},
        h('div',{style:{display:'flex',justifyContent:'space-between',fontSize:12,letterSpacing:1.8,color:'#7894a4'}},
          h('span',null,'GB PROPERTY GRAPH'),h('span',{style:{color:'#8ef0ca'}},'● LIVE')
        ),
        h('div',{style:{display:'flex',alignItems:'center',justifyContent:'center',height:245}},
          h('div',{style:{width:205,height:205,border:'3px solid rgba(124,246,197,.45)',transform:'rotate(45deg)',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:24}},
            h('div',{style:{width:88,height:88,border:'3px solid #7cf6c5',background:'rgba(124,246,197,.08)',borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center'}},
              h('div',{style:{transform:'rotate(-45deg)',fontSize:34,fontWeight:900,color:'#dce9ef'}},'GB')
            )
          )
        ),
        h('div',{style:{display:'flex',alignItems:'center',fontSize:15,color:'#d8e6ed'}},
          h('b',{style:{color:'#7cf6c5'}},'UPRN'),h('span',{style:{margin:'0 8px'}},'→'),h('b',null,'OS IDs'),h('span',{style:{margin:'0 8px'}},'→'),h('b',null,'HMLR'),h('span',{style:{margin:'0 8px'}},'→'),h('b',null,'INSPIRE')
        ),
        h('div',{style:{fontSize:16,color:'#829aa8',marginTop:10}},'One source-aware property graph.'),
        h('div',{style:{display:'flex',marginTop:'auto'}},
          ['IDENTITY','TRANSACTIONS','SPATIAL','VALUE'].map((x,i)=>h('span',{key:x,style:{padding:'7px 8px',borderRadius:7,border:'1px solid rgba(255,255,255,.1)',fontSize:9,letterSpacing:1,color:'#8ca4b2',marginRight:i===3?0:7}},x))
        )
      )
    );
    const image=new ImageResponse(card,{width:1200,height:630});
    const body=Buffer.from(await image.arrayBuffer());
    res.setHeader('Content-Type','image/png');
    res.setHeader('Cache-Control','public, max-age=0, s-maxage=31536000, immutable');
    return res.status(200).send(body);
  }catch(error){
    console.error('gb_og_render_failed',error);
    return res.status(500).json({error:'og_render_failed'});
  }
}
