const API_BASE='https://propdata-api-worker.sales-fd3.workers.dev';
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store, max-age=0');
  if(req.method!=='POST')return res.status(405).json({error:'method_not_allowed'});
  const key=String(req.headers['x-propdata-key']||'').trim();
  let body=req.body||{};
  if(typeof body==='string'){try{body=JSON.parse(body||'{}')}catch{return res.status(400).json({error:'invalid_json'})}}
  const uprn=String(body.uprn||'').trim();
  if(!key||key.length>512)return res.status(401).json({error:'api_key_required'});
  if(!/^\d{1,20}$/.test(uprn))return res.status(400).json({error:'invalid_uprn'});
  const url=new URL('/v1/property',API_BASE);url.searchParams.set('country','GB');url.searchParams.set('uprn',uprn);url.searchParams.set('enrich','standard');
  const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),12000);
  try{
    const upstream=await fetch(url,{headers:{'x-api-key':key,'accept':'application/json','user-agent':'PropData-GB-Workspace/1.0'},signal:controller.signal});
    const text=await upstream.text();
    res.status(upstream.status);res.setHeader('content-type',upstream.headers.get('content-type')||'application/json; charset=utf-8');
    for(const h of ['x-ratelimit-limit','x-ratelimit-remaining','x-ratelimit-reset']){const v=upstream.headers.get(h);if(v)res.setHeader(h,v)}
    return res.send(text);
  }catch(err){if(err&&err.name==='AbortError')return res.status(504).json({error:'propdata_timeout'});return res.status(502).json({error:'propdata_upstream_error'});}finally{clearTimeout(timer)}
}
