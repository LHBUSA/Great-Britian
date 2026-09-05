const root=document.querySelector<HTMLDivElement>('#site-root')!;

const STRIPE={
  developer:'https://buy.stripe.com/4gM8wP1rUfKS4pv5sn7wA0g',
  builder:'https://buy.stripe.com/8x29ATgmOaqy4pvg717wA0h',
  scale:'https://buy.stripe.com/00w5kDfiK1U21djaMH7wA0i'
};

type Lang='en'|'cy';
const C={
  en:{
    navProduct:'Product',navCoverage:'Coverage',navDocs:'Docs',navWorkspace:'API Workspace',navPricing:'Pricing',navSources:'Sources',navAccess:'Get API access',
    eyebrow:'PROPDATA · GREAT BRITAIN',heroTitle:'Property infrastructure built on the identifier — not the guess.',heroBody:'Resolve the official UPRN first. Then attach source-aware OS identifiers, HMLR transactions, registered extents and market intelligence only where deterministic coverage supports it.',heroPrimary:'Start Developer — £79',heroWorkspace:'Open live workspace',heroDocs:'Read API docs',
    proof1:'Production API live',proof2:'GB-wide UPRN identity',proof3:'Deterministic enrichment',
    dossierLabel:'LIVE PROPERTY DOSSIER',dossierTitle:'One property. One identity. Every layer keeps its provenance.',
    graphEyebrow:'THE PROPERTY GRAPH',graphTitle:'A cleaner contract for British property data.',graphBody:'PropData keeps identity, official transaction records, geometry and derived market signals distinct. Your product gets one response without losing where each fact came from.',
    f1:'Official property identity',f1b:'UPRN-first resolution with coordinates and linked OS identifiers.',f2:'Recorded transactions',f2b:'HMLR sale facts only when the official relationship supports the join.',f3:'Registered extent context',f3b:'INSPIRE relationships remain source-aware and explicitly bounded.',f4:'Indicative valuation',f4b:'Transparent comp-backed market signals where coverage qualifies.',
    coverageEyebrow:'COVERAGE WITHOUT HAND-WAVING',coverageTitle:'National identity. Jurisdiction-aware enrichment.',coverageBody:'The loaded OS UPRN layer provides Great Britain property identity. HMLR Price Paid and INSPIRE depth is specific to England & Wales and appears only where deterministic official links exist.',coverageCta:'Read the coverage contract',
    developerEyebrow:'DEVELOPER FIRST',developerTitle:'From UPRN to production response in one call.',developerBody:'Use the same PropData property route with country=GB. Credentials stay server-side, coverage states remain explicit, and unavailable data stays unavailable.',developerDocs:'View documentation',developerWorkspace:'Run a live request',
    sourcesEyebrow:'SOURCE TRANSPARENCY',sourcesTitle:'Official sources. Clear boundaries.',sourcesBody:'The point is not to flatten every source into a mystery payload. The point is to make authoritative identity and enrichment useful without erasing provenance.',
    pricingEyebrow:'LIVE GBP PRICING',pricingTitle:'Start self-serve. Scale when the workload does.',pricingBody:'These are live recurring Stripe plans in GBP — not placeholder pricing.',popular:'MOST POPULAR',perMonth:'/month',requests:'requests / month',startDeveloper:'Start Developer',startBuilder:'Start Builder',startScale:'Start Scale',enterprise:'Enterprise',enterprisePrice:'Custom',enterpriseBody:'Bulk delivery, redistribution, white-label, custom endpoints and contracted volume.',talkSales:'Talk to sales',
    finalEyebrow:'PROPDATA GREAT BRITAIN',finalTitle:'Build on the identifier. Not the guess.',finalBody:'Great Britain property identity is live in production with docs, a real API workspace and direct GBP access.',finalPrimary:'Get API access',finalSecondary:'Open workspace'
  },
  cy:{
    navProduct:'Cynnyrch',navCoverage:'Cwmpas',navDocs:'Dogfennau',navWorkspace:'Gweithle API',navPricing:'Prisiau',navSources:'Ffynonellau',navAccess:'Cael mynediad API',
    eyebrow:'PROPDATA · PRYDAIN FAWR',heroTitle:'Seilwaith eiddo wedi’i adeiladu ar y dynodwr — nid y dyfaliad.',heroBody:'Datryswch yr UPRN swyddogol yn gyntaf. Yna cysylltwch ddynodwyr OS, trafodion HMLR, estyniadau cofrestredig a gwybodaeth marchnad dim ond lle mae cwmpas pendant yn eu cefnogi.',heroPrimary:'Cychwyn Developer — £79',heroWorkspace:'Agor y gweithle byw',heroDocs:'Darllen dogfennau API',
    proof1:'API cynhyrchu yn fyw',proof2:'Hunaniaeth UPRN ledled GB',proof3:'Cyfoethogi pendant',
    dossierLabel:'DOSSIER EIDDO BYW',dossierTitle:'Un eiddo. Un hunaniaeth. Mae pob haen yn cadw ei tharddiad.',
    graphEyebrow:'Y GRAFF EIDDO',graphTitle:'Contract glanach ar gyfer data eiddo Prydain.',graphBody:'Mae PropData yn cadw hunaniaeth, trafodion swyddogol, geometreg a signalau marchnad deilliedig ar wahân. Mae eich cynnyrch yn cael un ymateb heb golli tarddiad y ffeithiau.',
    f1:'Hunaniaeth eiddo swyddogol',f1b:'Datrysiad UPRN gyda chyfesurynnau a dynodwyr OS cysylltiedig.',f2:'Trafodion cofnodedig',f2b:'Ffeithiau gwerthu HMLR dim ond pan fo’r berthynas swyddogol yn cefnogi’r cysylltiad.',f3:'Cyd-destun estyniad cofrestredig',f3b:'Mae perthnasoedd INSPIRE yn cadw tarddiad a ffiniau eglur.',f4:'Gwerth dangosol',f4b:'Signalau marchnad tryloyw yn seiliedig ar gymariaethau lle mae’r cwmpas yn gymwys.',
    coverageEyebrow:'CWMPAS HEB DDYFALU',coverageTitle:'Hunaniaeth genedlaethol. Cyfoethogi sy’n ymwybodol o awdurdodaeth.',coverageBody:'Mae haen OS UPRN wedi’i llwytho yn darparu hunaniaeth eiddo ledled Prydain Fawr. Mae manylder HMLR Price Paid ac INSPIRE yn benodol i Gymru a Lloegr ac yn ymddangos dim ond lle mae dolenni swyddogol pendant.',coverageCta:'Darllen y contract cwmpas',
    developerEyebrow:'DATBLYGWR YN GYNTAF',developerTitle:'O UPRN i ymateb cynhyrchu mewn un alwad.',developerBody:'Defnyddiwch yr un llwybr eiddo PropData gyda country=GB. Mae cymwysterau’n aros ar y gweinydd, mae statws cwmpas yn eglur, ac nid yw data sydd ddim ar gael yn cael ei ddyfeisio.',developerDocs:'Gweld dogfennaeth',developerWorkspace:'Rhedeg cais byw',
    sourcesEyebrow:'TRYLOYWDER FFYNHONNELL',sourcesTitle:'Ffynonellau swyddogol. Ffiniau clir.',sourcesBody:'Nid y nod yw fflatio pob ffynhonnell i mewn i lwyth dirgel. Y nod yw gwneud hunaniaeth awdurdodol a chyfoethogi yn ddefnyddiol heb ddileu tarddiad.',
    pricingEyebrow:'PRISIAU GBP BYW',pricingTitle:'Cychwyn hunanwasanaeth. Graddio pan fydd y llwyth gwaith yn gwneud.',pricingBody:'Cynlluniau Stripe cylchol byw mewn GBP yw’r rhain — nid prisiau enghreifftiol.',popular:'MWYAF POBLOGAIDD',perMonth:'/mis',requests:'ceisiadau / mis',startDeveloper:'Cychwyn Developer',startBuilder:'Cychwyn Builder',startScale:'Cychwyn Scale',enterprise:'Menter',enterprisePrice:'Pwrpasol',enterpriseBody:'Dosbarthu swmp, ailddosbarthu, label gwyn, pwyntiau terfyn pwrpasol a chyfaint dan gontract.',talkSales:'Siarad â gwerthiant',
    finalEyebrow:'PROPDATA PRYDAIN FAWR',finalTitle:'Adeiladwch ar y dynodwr. Nid y dyfaliad.',finalBody:'Mae hunaniaeth eiddo Prydain Fawr yn fyw mewn cynhyrchu gyda dogfennau, gweithle API go iawn a mynediad GBP uniongyrchol.',finalPrimary:'Cael mynediad API',finalSecondary:'Agor gweithle'
  }
} as const;

root.innerHTML=`
<a class="skip" href="#main">Skip to content</a>
<header class="topbar" id="header">
  <div class="shell nav-wrap">
    <a class="brand" href="/" aria-label="PropData Great Britain home"><span class="brand-mark">PD</span><span><b>PropData</b><small>GREAT BRITAIN · BY PROPTECHUSA.AI</small></span></a>
    <button class="menu-btn" id="menu" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav id="nav"><a href="#product" data-copy="navProduct">Product</a><a href="#coverage" data-copy="navCoverage">Coverage</a><a href="/docs" data-copy="navDocs">Docs</a><a href="/workspace" data-copy="navWorkspace">API Workspace</a><a href="#pricing" data-copy="navPricing">Pricing</a><a href="#sources" data-copy="navSources">Sources</a></nav>
    <div class="lang-switch" aria-label="Language"><button class="lang-btn active" data-lang="en">EN</button><button class="lang-btn" data-lang="cy">CY</button></div>
    <a class="nav-cta" href="#pricing" data-copy="navAccess">Get API access</a>
  </div>
</header>

<main id="main">
<section class="hero-v2" id="product">
  <div class="hero-glow"></div>
  <div class="shell hero-v2-grid">
    <div class="hero-v2-copy">
      <span class="eyebrow" data-copy="eyebrow">PROPDATA · GREAT BRITAIN</span>
      <h1 data-copy="heroTitle">Property infrastructure built on the identifier — not the guess.</h1>
      <p data-copy="heroBody">Resolve the official UPRN first. Then attach source-aware OS identifiers, HMLR transactions, registered extents and market intelligence only where deterministic coverage supports it.</p>
      <div class="hero-v2-actions"><a class="btn-primary-v2" href="${STRIPE.developer}" data-copy="heroPrimary">Start Developer — £79</a><a class="btn-secondary-v2" href="/workspace" data-copy="heroWorkspace">Open live workspace</a><a class="hero-text-link" href="/docs" data-copy="heroDocs">Read API docs →</a></div>
      <div class="proof-row"><span><i></i><b data-copy="proof1">Production API live</b></span><span><i></i><b data-copy="proof2">GB-wide UPRN identity</b></span><span><i></i><b data-copy="proof3">Deterministic enrichment</b></span></div>
    </div>

    <div class="hero-stage" aria-label="PropData Great Britain live property intelligence visual">
      <div class="hero-stage-image"></div>
      <div class="stage-topline"><span>GB PROPERTY GRAPH</span><span class="stage-live"><i></i> LIVE</span></div>
      <div class="dossier-card">
        <div class="dossier-head"><span data-copy="dossierLabel">LIVE PROPERTY DOSSIER</span><b>UPRN 10090718379</b></div>
        <h2 data-copy="dossierTitle">One property. One identity. Every layer keeps its provenance.</h2>
        <div class="dossier-flow"><span>UPRN<b>exact</b></span><em>→</em><span>OS IDs<b>linked</b></span><em>→</em><span>HMLR<b>verified</b></span><em>→</em><span>Value<b>qualified</b></span></div>
        <div class="dossier-metrics"><div><strong>100</strong><small>match confidence</small></div><div><strong>GB</strong><small>country contract</small></div><div><strong>4</strong><small>source layers</small></div></div>
      </div>
      <div class="stage-chip chip-a"><small>IDENTITY</small><b>UPRN exact</b></div>
      <div class="stage-chip chip-b"><small>PROVENANCE</small><b>OS + HMLR</b></div>
    </div>
  </div>
</section>

<section class="trust-strip"><div class="shell trust-grid"><div><b>97,163</b><span>canonical HMLR transactions</span></div><div><b>176,605</b><span>transaction ↔ identifier links</span></div><div><b>174,262</b><span>reusable identity nodes</span></div><div><b>95.63%</b><span>deterministic July feed coverage</span></div><div><b>0</b><span>semantic mismatches at launch</span></div></div></section>

<section class="graph-v2">
  <div class="shell">
    <div class="section-heading"><span class="kicker-v2" data-copy="graphEyebrow">THE PROPERTY GRAPH</span><h2 data-copy="graphTitle">A cleaner contract for British property data.</h2><p data-copy="graphBody">PropData keeps identity, official transaction records, geometry and derived market signals distinct. Your product gets one response without losing where each fact came from.</p></div>
    <div class="feature-mosaic">
      <article class="feature-large"><div class="feature-art art-identity"></div><div class="feature-content"><span>01 · IDENTITY</span><h3 data-copy="f1">Official property identity</h3><p data-copy="f1b">UPRN-first resolution with coordinates and linked OS identifiers.</p><div class="feature-tags"><b>UPRN</b><b>TOID</b><b>USRN</b><b>Coordinates</b></div></div></article>
      <article class="feature-small"><div class="feature-art art-transactions"></div><div class="feature-content"><span>02 · HMLR</span><h3 data-copy="f2">Recorded transactions</h3><p data-copy="f2b">HMLR sale facts only when the official relationship supports the join.</p></div></article>
      <article class="feature-small"><div class="feature-art art-geometry"></div><div class="feature-content"><span>03 · SPATIAL</span><h3 data-copy="f3">Registered extent context</h3><p data-copy="f3b">INSPIRE relationships remain source-aware and explicitly bounded.</p></div></article>
      <article class="feature-wide"><div class="feature-art art-valuation"></div><div class="feature-content"><span>04 · MARKET SIGNAL</span><h3 data-copy="f4">Indicative valuation</h3><p data-copy="f4b">Transparent comp-backed market signals where coverage qualifies.</p><div class="value-mini"><span>Source records</span><i></i><span>Comparable context</span><i></i><span>Indicative signal</span></div></div></article>
    </div>
  </div>
</section>

<section class="coverage-v2" id="coverage"><div class="shell coverage-v2-grid">
  <div class="coverage-map"><div class="coverage-map-art"></div><div class="coverage-map-card"><span>GREAT BRITAIN</span><b>Identity layer</b><strong>National</strong><small>UPRN + coordinates + linked OS identifiers</small></div><div class="coverage-map-card secondary"><span>ENGLAND + WALES</span><b>HMLR depth</b><strong>Deterministic</strong><small>Transactions + INSPIRE where officially linked</small></div></div>
  <div class="coverage-v2-copy"><span class="kicker-v2" data-copy="coverageEyebrow">COVERAGE WITHOUT HAND-WAVING</span><h2 data-copy="coverageTitle">National identity. Jurisdiction-aware enrichment.</h2><p data-copy="coverageBody">The loaded OS UPRN layer provides Great Britain property identity. HMLR Price Paid and INSPIRE depth is specific to England & Wales and appears only where deterministic official links exist.</p><ul><li><b>England</b><span>UPRN identity + HMLR enrichment where linked</span></li><li><b>Wales</b><span>UPRN identity + HMLR enrichment where linked</span></li><li><b>Scotland</b><span>UPRN identity + OS linked identifiers; HMLR-specific layers unavailable</span></li></ul><a href="/docs#coverage" data-copy="coverageCta">Read the coverage contract</a></div>
</div></section>

<section class="developer-v2"><div class="shell developer-v2-grid">
  <div class="developer-copy"><span class="kicker-v2 light" data-copy="developerEyebrow">DEVELOPER FIRST</span><h2 data-copy="developerTitle">From UPRN to production response in one call.</h2><p data-copy="developerBody">Use the same PropData property route with country=GB. Credentials stay server-side, coverage states remain explicit, and unavailable data stays unavailable.</p><div class="developer-actions"><a href="/docs" data-copy="developerDocs">View documentation</a><a href="/workspace" data-copy="developerWorkspace">Run a live request</a></div><div class="developer-pills"><span>REST</span><span>MCP</span><span>Server-side auth</span><span>Explicit coverage</span><span>Provenance</span></div></div>
  <div class="terminal-v2"><div class="terminal-bar"><span><i></i><i></i><i></i></span><b>GET /v1/property</b><button id="copy-code">Copy</button></div><pre id="code-block">curl -G 'https://propdata-api-worker.sales-fd3.workers.dev/v1/property' \\
  -H 'x-api-key: $PROPDATA_API_KEY' \\
  --data-urlencode 'country=GB' \\
  --data-urlencode 'uprn=10090718379'</pre><div class="terminal-response"><div><span>match_level</span><b>uprn_exact</b></div><div><span>confidence</span><b>100</b></div><div><span>country_code</span><b>GB</b></div><div><span>coverage</span><b>explicit</b></div></div></div>
</div></section>

<section class="sources-v2" id="sources"><div class="shell">
  <div class="section-heading source-heading"><span class="kicker-v2" data-copy="sourcesEyebrow">SOURCE TRANSPARENCY</span><h2 data-copy="sourcesTitle">Official sources. Clear boundaries.</h2><p data-copy="sourcesBody">The point is not to flatten every source into a mystery payload. The point is to make authoritative identity and enrichment useful without erasing provenance.</p></div>
  <div class="source-network"><article><span>OS</span><div><h3>OS Open UPRN</h3><p>Great Britain property identity and official coordinates.</p></div><b>IDENTITY</b></article><article><span>OS</span><div><h3>Open Linked Identifiers</h3><p>Published relationships from UPRN to TOID and USRN.</p></div><b>LINKAGE</b></article><article><span>HMLR</span><div><h3>Price Paid Data</h3><p>Recorded transaction facts for England and Wales.</p></div><b>TRANSACTIONS</b></article><article><span>HMLR</span><div><h3>INSPIRE + lookup tables</h3><p>Official deterministic bridges and registered-extent context.</p></div><b>SPATIAL</b></article></div>
  <div class="rights-v2"><strong>Rights-aware by design.</strong><p>Restricted HMLR address fields are not exposed in the certified canonical transaction graph. INSPIRE geometry is indicative registered freehold extent context, not a legal title boundary. Indicative valuation is a market signal, not a formal appraisal.</p></div>
</div></section>

<section class="pricing-v2" id="pricing"><div class="shell">
  <div class="section-heading pricing-heading"><span class="kicker-v2" data-copy="pricingEyebrow">LIVE GBP PRICING</span><h2 data-copy="pricingTitle">Start self-serve. Scale when the workload does.</h2><p data-copy="pricingBody">These are live recurring Stripe plans in GBP — not placeholder pricing.</p></div>
  <div class="plan-grid">
    <article class="plan-card"><span class="plan-name">Developer</span><div class="plan-price"><b>£79</b><small data-copy="perMonth">/month</small></div><p><strong>10,000</strong> <span data-copy="requests">requests / month</span></p><ul><li>GB-wide UPRN identity</li><li>Linked identifiers</li><li>HMLR intelligence where linked</li><li>REST + MCP access</li></ul><a href="${STRIPE.developer}" data-copy="startDeveloper">Start Developer</a></article>
    <article class="plan-card featured"><span class="popular" data-copy="popular">MOST POPULAR</span><span class="plan-name">Builder</span><div class="plan-price"><b>£249</b><small data-copy="perMonth">/month</small></div><p><strong>50,000</strong> <span data-copy="requests">requests / month</span></p><ul><li>Everything in Developer</li><li>Production-volume access</li><li>HMLR + INSPIRE enrichment</li><li>Priority integration support</li></ul><a href="${STRIPE.builder}" data-copy="startBuilder">Start Builder</a></article>
    <article class="plan-card"><span class="plan-name">Scale</span><div class="plan-price"><b>£699</b><small data-copy="perMonth">/month</small></div><p><strong>250,000</strong> <span data-copy="requests">requests / month</span></p><ul><li>Everything in Builder</li><li>High-volume workflows</li><li>Advanced support</li><li>Production platform scale</li></ul><a href="${STRIPE.scale}" data-copy="startScale">Start Scale</a></article>
    <article class="plan-card enterprise"><span class="plan-name" data-copy="enterprise">Enterprise</span><div class="plan-price"><b data-copy="enterprisePrice">Custom</b></div><p data-copy="enterpriseBody">Bulk delivery, redistribution, white-label, custom endpoints and contracted volume.</p><ul><li>Custom volume</li><li>Commercial licensing</li><li>Bulk + webhook delivery</li><li>Dedicated integration scope</li></ul><a href="mailto:sales@proptechusa.ai" data-copy="talkSales">Talk to sales</a></article>
  </div>
</div></section>

<section class="final-v2"><div class="shell final-v2-inner"><div><span class="kicker-v2 light" data-copy="finalEyebrow">PROPDATA GREAT BRITAIN</span><h2 data-copy="finalTitle">Build on the identifier. Not the guess.</h2><p data-copy="finalBody">Great Britain property identity is live in production with docs, a real API workspace and direct GBP access.</p></div><div class="final-v2-actions"><a href="#pricing" data-copy="finalPrimary">Get API access</a><a href="/workspace" data-copy="finalSecondary">Open workspace</a></div></div></section>
</main>

<footer class="footer-v2"><div class="shell footer-v2-grid"><div class="footer-v2-brand"><a class="brand" href="/"><span class="brand-mark">PD</span><span><b>PropData</b><small>GREAT BRITAIN</small></span></a><p>Property intelligence infrastructure by PropTechUSA.ai.</p></div><div><b>Product</b><a href="/docs">Docs</a><a href="/workspace">API Workspace</a><a href="#pricing">Pricing</a></div><div><b>Network</b><a href="https://propdata.proptechusa.ai">PropData USA</a><a href="https://global.proptechusa.ai">Global coverage</a><a href="https://data.proptechusa.ai">Data</a></div><div><b>Company</b><a href="https://proptechusa.ai">PropTechUSA.ai</a><a href="mailto:sales@proptechusa.ai">Sales</a><a href="https://proptechusa.ai/privacy">Privacy</a></div></div><div class="shell footer-v2-bottom"><span>© 2026 PropTechUSA.ai</span><span>Great Britain property intelligence · EN / CY</span></div></footer>
`;

function setLang(lang:Lang){
  document.documentElement.lang=lang==='cy'?'cy-GB':'en-GB';
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach(el=>{
    const key=el.dataset.copy as keyof typeof C.en;
    const value=C[lang][key];
    if(value)el.textContent=value;
  });
  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  localStorage.setItem('propdata-gb-lang',lang);
}

const saved=(localStorage.getItem('propdata-gb-lang')||'en') as Lang;
setLang(saved==='cy'?'cy':'en');
document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLang((btn.dataset.lang||'en') as Lang)));

const menu=document.querySelector<HTMLButtonElement>('#menu');
const nav=document.querySelector<HTMLElement>('#nav');
menu?.addEventListener('click',()=>{const open=nav?.classList.toggle('open')||false;menu.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

const header=document.querySelector<HTMLElement>('#header');
const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>16);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

document.querySelector<HTMLButtonElement>('#copy-code')?.addEventListener('click',async e=>{
  const button=e.currentTarget as HTMLButtonElement;
  const code=document.querySelector<HTMLElement>('#code-block')?.textContent||'';
  try{await navigator.clipboard.writeText(code);button.textContent='Copied';setTimeout(()=>button.textContent='Copy',1400)}catch{button.textContent='Select';}
});
