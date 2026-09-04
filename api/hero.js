export default function handler(req,res){
  if(req.method!=='GET') return res.status(405).json({error:'method_not_allowed'});
  res.setHeader('Cache-Control','public, max-age=86400, stale-while-revalidate=604800');
  res.redirect(302,'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=2200&q=88');
}
