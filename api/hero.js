import artHandler from './art.js';

export default function handler(req,res){
  req.url='/api/art?name=hero';
  return artHandler(req,res);
}
