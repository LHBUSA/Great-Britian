import sharp from 'sharp';

const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050e16"/><stop offset=".58" stop-color="#081723"/><stop offset="1" stop-color="#0d2737"/></linearGradient>
  <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7cf6c5"/><stop offset="1" stop-color="#7fc7ff"/></linearGradient>
  <radialGradient id="glow"><stop stop-color="#46a7d0" stop-opacity=".24"/><stop offset="1" stop-color="#46a7d0" stop-opacity="0"/></radialGradient>
  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#7fc7ff" stroke-opacity=".15" stroke-width="1"/></pattern>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<rect width="1200" height="630" fill="url(#grid)"/>
<circle cx="1060" cy="270" r="340" fill="url(#glow)"/>

<!-- brand -->
<rect x="70" y="55" width="56" height="56" rx="14" fill="#071b28" stroke="#7cf6c5" stroke-width="2"/>
<path d="M98 68 115 83 98 100 81 83Z" fill="url(#mark)"/>
<path d="M98 77 105 83 98 90 91 83Z" fill="#071b28"/>
<text x="143" y="80" fill="#f6fafc" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="700">PropData</text>
<text x="144" y="101" fill="#8fa6b4" font-family="Arial,Helvetica,sans-serif" font-size="11" letter-spacing="2.1">GREAT BRITAIN  •  BY PROPTECHUSA.AI</text>

<!-- live pill -->
<rect x="70" y="143" width="214" height="39" rx="20" fill="#7cf6c5"/>
<circle cx="91" cy="162.5" r="5" fill="#06131a"/>
<text x="108" y="167" fill="#06131a" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="700" letter-spacing=".6">PRODUCTION API LIVE</text>

<!-- headline -->
<text x="70" y="270" fill="#f8fbfc" font-family="Arial,Helvetica,sans-serif" font-size="67" font-weight="700" letter-spacing="-2.5">Great Britain</text>
<text x="70" y="342" fill="#dce9ef" font-family="Arial,Helvetica,sans-serif" font-size="59" font-weight="400" letter-spacing="-2">Property</text>
<text x="70" y="410" fill="#dce9ef" font-family="Arial,Helvetica,sans-serif" font-size="59" font-weight="400" letter-spacing="-2">Intelligence.</text>
<text x="72" y="455" fill="#b2c7d2" font-family="Arial,Helvetica,sans-serif" font-size="20">UPRN-first identity. Deterministic OS + HMLR enrichment.</text>
<line x1="72" y1="481" x2="690" y2="481" stroke="#ffffff" stroke-opacity=".14"/>

<!-- features -->
<g fill="#9fb4bf" font-family="Arial,Helvetica,sans-serif" font-size="16">
 <circle cx="76" cy="516" r="4" fill="#7cf6c5"/><text x="90" y="521">Official UPRN identity</text>
 <circle cx="354" cy="516" r="4" fill="#7cf6c5"/><text x="368" y="521">Linked OS identifiers</text>
 <circle cx="76" cy="555" r="4" fill="#7cf6c5"/><text x="90" y="560">HMLR + INSPIRE</text>
 <circle cx="354" cy="555" r="4" fill="#7cf6c5"/><text x="368" y="560">Source-aware coverage</text>
</g>
<text x="72" y="607" fill="#f0f7fa" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700">gb.proptechusa.ai</text>

<!-- right graph card -->
<rect x="770" y="95" width="360" height="450" rx="28" fill="#071722" fill-opacity=".96" stroke="#ffffff" stroke-opacity=".18"/>
<text x="798" y="127" fill="#7894a4" font-family="Arial,Helvetica,sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">GB PROPERTY GRAPH</text>
<circle cx="1082" cy="123" r="4" fill="#7cf6c5"/>
<text x="1093" y="127" fill="#8ef0ca" font-family="Arial,Helvetica,sans-serif" font-size="11" font-weight="700">LIVE</text>

<!-- stylised GB + graph -->
<path d="M917 136l27 10 7 22-13 16 14 20-11 18 19 18-4 23 19 15-5 22 22 24-12 20 13 24-16 18 6 24-21 15-10 25-23 10-21 20-20-12 4-25-21-10-2-24-16-14 5-22-15-15 10-20-7-20 16-17-5-23 19-15-3-22 20-13-7-19 13-15-5-20 13-13-5-18z" fill="#7fc7ff" fill-opacity=".28" stroke="#7fc7ff" stroke-opacity=".72" stroke-width="2"/>
<g stroke="#7fc7ff" stroke-opacity=".25"><path d="M815 172l270-22M812 214l276-18M811 259l280-16M810 305l281-12M811 351l280-8M813 399l278-4M815 447h275"/><path d="M845 157l20 318M890 154l15 322M938 153l9 324M986 152l4 326M1033 150l-3 328M1076 149l-9 328"/></g>
<g stroke="#7cf6c5" stroke-width="2" stroke-opacity=".8" fill="none"><path d="M860 324 905 210 1003 188 1050 294 956 350 860 324 903 435 1005 425 1050 294"/><path d="M905 210 956 350"/></g>
<g fill="#7cf6c5"><circle cx="860" cy="324" r="7"/><circle cx="905" cy="210" r="7"/><circle cx="1003" cy="188" r="7"/><circle cx="1050" cy="294" r="7"/><circle cx="956" cy="350" r="7"/><circle cx="903" cy="435" r="7"/><circle cx="1005" cy="425" r="7"/></g>

<rect x="793" y="469" width="314" height="58" rx="11" fill="#041018" stroke="#ffffff" stroke-opacity=".14"/>
<text x="809" y="491" fill="#d5e4eb" font-family="Arial,Helvetica,sans-serif" font-size="12" font-weight="700" letter-spacing=".7">UPRN  &gt;  OS IDs  &gt;  HMLR  &gt;  INSPIRE</text>
<text x="809" y="513" fill="#829aa8" font-family="Arial,Helvetica,sans-serif" font-size="14">One source-aware property graph.</text>
<text x="1008" y="607" fill="#7cf6c5" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="700" letter-spacing="1">PROPDATA GB</text>
</svg>`;

export default async function handler(req,res){
  if(req.method!=='GET') return res.status(405).end();
  try{
    const body=await sharp(Buffer.from(svg)).png({compressionLevel:9,palette:true,quality:100}).toBuffer();
    res.setHeader('Content-Type','image/png');
    res.setHeader('Content-Length',String(body.length));
    res.setHeader('Cache-Control','public, max-age=0, s-maxage=31536000, immutable');
    return res.status(200).send(body);
  }catch(error){
    console.error('gb_og_render_failed',error);
    return res.status(500).json({error:'og_render_failed'});
  }
}
