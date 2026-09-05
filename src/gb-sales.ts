const doc=document;

const bilingual=(el:Element|null,en:string,cy:string)=>{
  if(!el)return;
  el.setAttribute('data-gb-en',en);
  el.setAttribute('data-gb-cy',cy);
};

const syncGbLanguage=()=>{
  const cy=doc.documentElement.lang.toLowerCase().startsWith('cy');
  doc.querySelectorAll<HTMLElement>('[data-gb-en]').forEach(el=>{
    const value=el.getAttribute(cy?'data-gb-cy':'data-gb-en');
    if(value)el.textContent=value;
  });
};

// Reframe the hero around the complete intelligence result, not the route count.
bilingual(
  doc.querySelector('.hero-v2 h1'),
  'Great Britain property intelligence. One UPRN. Every verified layer.',
  'Gwybodaeth eiddo Prydain Fawr. Un UPRN. Pob haen wedi’i dilysu.'
);
bilingual(
  doc.querySelector('.hero-v2-copy>p'),
  'Turn an official UPRN into a production-ready property dossier: coordinates, linked OS identifiers, HMLR transactions, registered-extent context, indicative valuation, explicit coverage and source provenance — without building the joins yourself.',
  'Trowch UPRN swyddogol yn ddosier eiddo parod ar gyfer cynhyrchu: cyfesurynnau, dynodwyr OS cysylltiedig, trafodion HMLR, cyd-destun estyniad cofrestredig, gwerth dangosol, cwmpas eglur a tharddiad ffynhonnell — heb adeiladu’r cysylltiadau eich hun.'
);
bilingual(
  doc.querySelector('.developer-v2 h2'),
  'One certified GB resolver. Multiple intelligence domains in the response.',
  'Un datryswr GB ardystiedig. Sawl parth gwybodaeth yn yr ymateb.'
);
bilingual(
  doc.querySelector('.developer-copy>p'),
  'The GB contract deliberately keeps the integration simple: call the production property resolver with country=GB and an official UPRN. PropData handles the deterministic joins and returns only the layers the source coverage supports.',
  'Mae contract GB yn cadw’r integreiddiad yn syml: galwch y datryswr eiddo cynhyrchu gyda country=GB ac UPRN swyddogol. Mae PropData yn trin y cysylltiadau pendant ac yn dychwelyd dim ond yr haenau a gefnogir gan y cwmpas ffynhonnell.'
);
bilingual(
  doc.querySelector('.final-v2 h2'),
  'Stop assembling British property data. Start shipping with it.',
  'Rhowch y gorau i gydosod data eiddo Prydain. Dechreuwch adeiladu ag ef.'
);
bilingual(
  doc.querySelector('.final-v2 p'),
  'A production property identity layer, deterministic enrichment, developer tooling and commercial delivery paths — already packaged behind PropData.',
  'Haen hunaniaeth eiddo cynhyrchu, cyfoethogi pendant, offer datblygwyr a llwybrau dosbarthu masnachol — eisoes wedi’u pecynnu y tu ôl i PropData.'
);

// Platform-grade navigation while preserving the existing language controls and CTA.
const header=doc.querySelector<HTMLElement>('#header');
const nav=doc.querySelector<HTMLElement>('#nav');
if(header&&nav){
  const brand=header.querySelector('.brand');
  if(brand&&!header.querySelector('.nav-live')){
    brand.insertAdjacentHTML('afterend','<span class="nav-live"><i></i><b>GB LIVE</b></span>');
  }
  nav.innerHTML=`
    <a href="#platform" data-gb-en="Platform" data-gb-cy="Platfform">Platform</a>
    <a href="#product" data-gb-en="Intelligence" data-gb-cy="Gwybodaeth">Intelligence</a>
    <a href="#coverage" data-gb-en="Coverage" data-gb-cy="Cwmpas">Coverage</a>
    <a href="/docs" data-gb-en="Developers" data-gb-cy="Datblygwyr">Developers</a>
    <a href="#pricing" data-gb-en="Pricing" data-gb-cy="Prisiau">Pricing</a>
  `;
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    header.querySelector<HTMLButtonElement>('#menu')?.setAttribute('aria-expanded','false');
  }));
}

const trust=doc.querySelector('.trust-strip');
if(trust&&!doc.querySelector('#platform')){
  trust.insertAdjacentHTML('afterend',`
    <section class="gb-platform" id="platform">
      <div class="shell">
        <div class="gb-platform-head">
          <div>
            <span class="kicker-v2" data-gb-en="THE GB PRODUCT CONTRACT" data-gb-cy="CONTRACT CYNNYRCH GB">THE GB PRODUCT CONTRACT</span>
            <h2 data-gb-en="One resolver. An entire property dossier." data-gb-cy="Un datryswr. Dosier eiddo cyfan.">One resolver. An entire property dossier.</h2>
          </div>
          <div class="gb-contract-note">
            <b data-gb-en="CERTIFIED PRODUCTION ROUTE" data-gb-cy="LLWYBR CYNHYRCHU ARDYSTIEDIG">CERTIFIED PRODUCTION ROUTE</b>
            <code>GET /v1/property?country=GB&amp;uprn=…</code>
            <p data-gb-en="The route count is not the product. PropData turns one exact property identifier into multiple source-aware intelligence domains in a single response." data-gb-cy="Nid nifer y llwybrau yw’r cynnyrch. Mae PropData yn troi un dynodwr eiddo union yn sawl parth gwybodaeth sy’n ymwybodol o ffynhonnell mewn un ymateb.">The route count is not the product. PropData turns one exact property identifier into multiple source-aware intelligence domains in a single response.</p>
          </div>
        </div>

        <div class="gb-capability-grid">
          <article><span>01</span><b data-gb-en="Exact property identity" data-gb-cy="Hunaniaeth eiddo union">Exact property identity</b><p data-gb-en="Canonical UPRN resolution with explicit match level and confidence." data-gb-cy="Datrysiad UPRN canonaidd gyda lefel paru a hyder eglur.">Canonical UPRN resolution with explicit match level and confidence.</p></article>
          <article><span>02</span><b data-gb-en="Official coordinates" data-gb-cy="Cyfesurynnau swyddogol">Official coordinates</b><p data-gb-en="Latitude and longitude attached to the resolved property identity." data-gb-cy="Lledred a hydred wedi’u cysylltu â’r hunaniaeth eiddo a ddatryswyd.">Latitude and longitude attached to the resolved property identity.</p></article>
          <article><span>03</span><b data-gb-en="Linked OS identifiers" data-gb-cy="Dynodwyr OS cysylltiedig">Linked OS identifiers</b><p data-gb-en="UPRN relationships to published TOID and USRN identifiers where available." data-gb-cy="Perthnasoedd UPRN â dynodwyr TOID ac USRN cyhoeddedig lle maent ar gael.">UPRN relationships to published TOID and USRN identifiers where available.</p></article>
          <article><span>04</span><b data-gb-en="HMLR transactions" data-gb-cy="Trafodion HMLR">HMLR transactions</b><p data-gb-en="Recorded sale facts appear only when the official relationship supports the join." data-gb-cy="Mae ffeithiau gwerthu cofnodedig yn ymddangos dim ond pan fo’r berthynas swyddogol yn cefnogi’r cysylltiad.">Recorded sale facts appear only when the official relationship supports the join.</p></article>
          <article><span>05</span><b data-gb-en="Registered-extent context" data-gb-cy="Cyd-destun estyniad cofrestredig">Registered-extent context</b><p data-gb-en="INSPIRE registered freehold extent context where deterministic coverage exists." data-gb-cy="Cyd-destun estyniad rhydd-ddaliad cofrestredig INSPIRE lle mae cwmpas pendant ar gael.">INSPIRE registered freehold extent context where deterministic coverage exists.</p></article>
          <article><span>06</span><b data-gb-en="Indicative valuation" data-gb-cy="Gwerth dangosol">Indicative valuation</b><p data-gb-en="A transparent PropData market signal where the underlying coverage qualifies." data-gb-cy="Signal marchnad PropData tryloyw lle mae’r cwmpas sylfaenol yn gymwys.">A transparent PropData market signal where the underlying coverage qualifies.</p></article>
          <article><span>07</span><b data-gb-en="Coverage states" data-gb-cy="Statws cwmpas">Coverage states</b><p data-gb-en="Available, unavailable and jurisdiction-specific layers stay explicit." data-gb-cy="Mae haenau sydd ar gael, ddim ar gael ac sy’n benodol i awdurdodaeth yn aros yn eglur.">Available, unavailable and jurisdiction-specific layers stay explicit.</p></article>
          <article><span>08</span><b data-gb-en="Source provenance" data-gb-cy="Tarddiad ffynhonnell">Source provenance</b><p data-gb-en="Every returned layer can retain where the fact came from instead of becoming a mystery payload." data-gb-cy="Gall pob haen a ddychwelir gadw tarddiad y ffaith yn hytrach na dod yn lwyth dirgel.">Every returned layer can retain where the fact came from instead of becoming a mystery payload.</p></article>
        </div>

        <div class="gb-delivery-bar">
          <div><span data-gb-en="DELIVERY SURFACE" data-gb-cy="ARWYNEB DOSBARTHU">DELIVERY SURFACE</span><b data-gb-en="Use the same intelligence in the way your product needs it." data-gb-cy="Defnyddiwch yr un wybodaeth yn y ffordd sydd ei hangen ar eich cynnyrch.">Use the same intelligence in the way your product needs it.</b></div>
          <div class="gb-delivery-pills"><span>REST API</span><span>OAuth MCP</span><span>Bulk</span><span>Webhook</span><span>White-label</span><span>Custom contracts</span></div>
        </div>
      </div>
    </section>
  `);
}

const developer=doc.querySelector('.developer-v2');
if(developer&&!doc.querySelector('.gb-usecases')){
  developer.insertAdjacentHTML('afterend',`
    <section class="gb-usecases">
      <div class="shell gb-usecases-grid">
        <div class="gb-usecases-copy">
          <span class="kicker-v2" data-gb-en="SHIP THE PRODUCT, NOT THE PLUMBING" data-gb-cy="ADEILADWCH Y CYNNYRCH, NID Y PLYMIO">SHIP THE PRODUCT, NOT THE PLUMBING</span>
          <h2 data-gb-en="British property data should be a capability inside your product — not a data-engineering project beside it." data-gb-cy="Dylai data eiddo Prydain fod yn allu y tu mewn i’ch cynnyrch — nid prosiect peirianneg data wrth ei ymyl.">British property data should be a capability inside your product — not a data-engineering project beside it.</h2>
          <p data-gb-en="PropData handles identity, deterministic joins, source boundaries and delivery infrastructure so your team can spend its time on the customer experience that actually differentiates you." data-gb-cy="Mae PropData yn trin hunaniaeth, cysylltiadau pendant, ffiniau ffynhonnell a seilwaith dosbarthu fel y gall eich tîm ganolbwyntio ar brofiad y cwsmer sy’n eich gwahaniaethu.">PropData handles identity, deterministic joins, source boundaries and delivery infrastructure so your team can spend its time on the customer experience that actually differentiates you.</p>
          <a href="mailto:sales@proptechusa.ai" data-gb-en="Talk through your GB workflow →" data-gb-cy="Trafodwch eich llif gwaith GB →">Talk through your GB workflow →</a>
        </div>
        <div class="gb-usecase-list">
          <article><b data-gb-en="Property platforms" data-gb-cy="Platfformau eiddo">Property platforms</b><span data-gb-en="Anchor records to a canonical UPRN and enrich only when the relationship is defensible." data-gb-cy="Angorwch gofnodion i UPRN canonaidd a chyfoethogwch dim ond pan fo’r berthynas yn amddiffynadwy.">Anchor records to a canonical UPRN and enrich only when the relationship is defensible.</span></article>
          <article><b data-gb-en="Valuation & underwriting" data-gb-cy="Prisio a gwarantu">Valuation & underwriting</b><span data-gb-en="Bring transaction context and indicative market signals into internal decision workflows." data-gb-cy="Dewch â chyd-destun trafodion a signalau marchnad dangosol i lifoedd gwaith penderfynu mewnol.">Bring transaction context and indicative market signals into internal decision workflows.</span></article>
          <article><b data-gb-en="Mapping & spatial products" data-gb-cy="Mapio a chynhyrchion gofodol">Mapping & spatial products</b><span data-gb-en="Connect property identity, coordinates and registered-extent context without hiding source limits." data-gb-cy="Cysylltwch hunaniaeth eiddo, cyfesurynnau a chyd-destun estyniad cofrestredig heb guddio terfynau ffynhonnell.">Connect property identity, coordinates and registered-extent context without hiding source limits.</span></article>
          <article><b data-gb-en="Due diligence" data-gb-cy="Diwydrwydd dyladwy">Due diligence</b><span data-gb-en="Keep official transaction facts, coverage states and provenance visible to downstream users." data-gb-cy="Cadwch ffeithiau trafodion swyddogol, statws cwmpas a tharddiad yn weladwy i ddefnyddwyr i lawr y gadwyn.">Keep official transaction facts, coverage states and provenance visible to downstream users.</span></article>
          <article><b data-gb-en="AI agents & copilots" data-gb-cy="Asiantau AI a chynorthwywyr">AI agents & copilots</b><span data-gb-en="Give software a governed property identity contract instead of asking a model to guess." data-gb-cy="Rhowch gontract hunaniaeth eiddo wedi’i lywodraethu i feddalwedd yn hytrach na gofyn i fodel ddyfalu.">Give software a governed property identity contract instead of asking a model to guess.</span></article>
          <article><b data-gb-en="Data products" data-gb-cy="Cynhyrchion data">Data products</b><span data-gb-en="Use REST, MCP, bulk, webhook, white-label or custom delivery as the commercial workflow grows." data-gb-cy="Defnyddiwch REST, MCP, swmp, webhook, label gwyn neu ddosbarthu pwrpasol wrth i’r llif gwaith masnachol dyfu.">Use REST, MCP, bulk, webhook, white-label or custom delivery as the commercial workflow grows.</span></article>
        </div>
      </div>
    </section>
  `);
}

// Make the plan cards sell the actual GB capability stack.
const plans=Array.from(doc.querySelectorAll<HTMLElement>('.plan-card'));
const planLists=[
  ['GB-wide UPRN identity','Coordinates + linked OS identifiers','HMLR intelligence where linked','Coverage + provenance','REST + OAuth MCP'],
  ['Everything in Developer','50,000 monthly requests','HMLR + INSPIRE enrichment','Indicative valuation where qualified','Priority integration support'],
  ['Everything in Builder','250,000 monthly requests','High-volume production workflows','Advanced integration support','Production platform scale'],
  ['Custom volume + licensing','Bulk + webhook delivery','White-label delivery','Custom endpoint contracts','Redistribution / commercial scope']
];
plans.forEach((plan,i)=>{
  const ul=plan.querySelector('ul');
  if(ul&&planLists[i])ul.innerHTML=planLists[i].map(x=>`<li>${x}</li>`).join('');
});

// Replace the small microsite footer with a platform footer.
const footer=doc.querySelector<HTMLElement>('.footer-v2');
if(footer){
  footer.innerHTML=`
    <div class="shell footer-platform-top">
      <div class="footer-platform-brand">
        <a class="brand" href="/"><span class="brand-mark">PD</span><span><b>PropData</b><small>GREAT BRITAIN · BY PROPTECHUSA.AI</small></span></a>
        <h3 data-gb-en="Property intelligence infrastructure for Great Britain." data-gb-cy="Seilwaith gwybodaeth eiddo ar gyfer Prydain Fawr.">Property intelligence infrastructure for Great Britain.</h3>
        <p data-gb-en="UPRN-first identity, deterministic HMLR enrichment, explicit coverage and source provenance — packaged for production software." data-gb-cy="Hunaniaeth UPRN yn gyntaf, cyfoethogi HMLR pendant, cwmpas eglur a tharddiad ffynhonnell — wedi’u pecynnu ar gyfer meddalwedd cynhyrchu.">UPRN-first identity, deterministic HMLR enrichment, explicit coverage and source provenance — packaged for production software.</p>
        <div class="footer-live"><i></i><span data-gb-en="GB production API live" data-gb-cy="API cynhyrchu GB yn fyw">GB production API live</span></div>
      </div>
      <div class="footer-platform-links">
        <div><b data-gb-en="Platform" data-gb-cy="Platfform">Platform</b><a href="#platform" data-gb-en="GB intelligence" data-gb-cy="Gwybodaeth GB">GB intelligence</a><a href="#coverage" data-gb-en="Coverage" data-gb-cy="Cwmpas">Coverage</a><a href="#sources" data-gb-en="Sources" data-gb-cy="Ffynonellau">Sources</a><a href="#pricing" data-gb-en="Pricing" data-gb-cy="Prisiau">Pricing</a></div>
        <div><b data-gb-en="Developers" data-gb-cy="Datblygwyr">Developers</b><a href="/docs" data-gb-en="API documentation" data-gb-cy="Dogfennaeth API">API documentation</a><a href="/workspace" data-gb-en="Live workspace" data-gb-cy="Gweithle byw">Live workspace</a><a href="/docs#auth">OAuth MCP</a><a href="/docs#errors" data-gb-en="Errors & retries" data-gb-cy="Gwallau ac ailgeisio">Errors & retries</a></div>
        <div><b data-gb-en="PropData network" data-gb-cy="Rhwydwaith PropData">PropData network</b><a href="https://propdata.proptechusa.ai">PropData USA</a><a href="https://global.proptechusa.ai" data-gb-en="Global coverage" data-gb-cy="Cwmpas byd-eang">Global coverage</a><a href="https://data.proptechusa.ai">Data infrastructure</a><a href="https://proptechusa.ai">PropTechUSA.ai</a></div>
        <div><b data-gb-en="Company" data-gb-cy="Cwmni">Company</b><a href="mailto:sales@proptechusa.ai" data-gb-en="Sales" data-gb-cy="Gwerthiant">Sales</a><a href="mailto:sales@proptechusa.ai">sales@proptechusa.ai</a><a href="https://proptechusa.ai/privacy" data-gb-en="Privacy" data-gb-cy="Preifatrwydd">Privacy</a><a href="https://proptechusa.ai" data-gb-en="About PropTechUSA.ai" data-gb-cy="Am PropTechUSA.ai">About PropTechUSA.ai</a></div>
      </div>
    </div>
    <div class="shell footer-platform-bottom">
      <span>© 2026 PropTechUSA.ai · PropData Great Britain</span>
      <span>REST · OAuth MCP · Bulk · Webhook · White-label · Custom</span>
    </div>
  `;
}

syncGbLanguage();
doc.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setTimeout(syncGbLanguage,0)));
