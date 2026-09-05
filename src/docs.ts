import './site.css';
import './docs-light.css';

document.body.classList.add('docs-light-page');
const root=document.querySelector<HTMLDivElement>('#docs-root')!;

type Lang='en'|'cy';
const copy={
  en:{
    title:'PropData Great Britain API Docs',
    sub:'UPRN-first property intelligence for production applications.',
    overview:'Overview',auth:'Authentication',quick:'Quickstart',property:'GB property contract',intel:'Intelligence domains',routes:'Routes & platform surface',response:'Response contract',coverage:'Coverage semantics',graph:'Certified graph proof',delivery:'Delivery modes',errors:'Errors & retries',rights:'Rights & provenance',workspace:'Open Workspace',access:'Get API access'
  },
  cy:{
    title:'Dogfennau API PropData Prydain Fawr',
    sub:'Gwybodaeth eiddo UPRN ar gyfer cymwysiadau cynhyrchu.',
    overview:'Trosolwg',auth:'Dilysu',quick:'Cychwyn cyflym',property:'Contract eiddo GB',intel:'Parthau gwybodaeth',routes:'Llwybrau ac arwyneb y platfform',response:'Contract ymateb',coverage:'Semanteg cwmpas',graph:'Tystiolaeth graff ardystiedig',delivery:'Dulliau cyflwyno',errors:'Gwallau ac ailgeisio',rights:'Hawliau a tharddiad',workspace:'Agor y Gweithle',access:'Cael mynediad API'
  }
} as const;

root.innerHTML=`
<header class="sub-header">
  <div class="sub-nav">
    <a class="brand" href="/" aria-label="PropData Great Britain home"><span class="brandmark"><span></span></span><span><b>PropData</b><small>GREAT BRITAIN · DEVELOPER DOCS</small></span></a>
    <a href="/">Product</a><a href="/#platform">Platform</a><a href="/workspace">Workspace</a><a href="/#pricing">Pricing</a>
    <div class="lang-switch"><button class="lang-btn active" data-lang="en">EN</button><button class="lang-btn" data-lang="cy">CY</button></div>
  </div>
</header>

<div class="docs-shell-v2">
  <aside class="docs-nav-v2" aria-label="Documentation navigation">
    <div class="docs-nav-title"><strong>Documentation</strong><span>GB LIVE</span></div>
    <div class="docs-search">⌕ <span>Search docs</span></div>
    <div class="docs-nav-group">Start</div>
    <a class="primary-link" href="#overview" data-k="overview">Overview</a>
    <a href="#auth" data-k="auth">Authentication</a>
    <a href="#quick" data-k="quick">Quickstart</a>
    <div class="docs-nav-group">Great Britain</div>
    <a href="#property"><code>GET</code><span data-k="property">GB property contract</span></a>
    <a href="#intelligence" data-k="intel">Intelligence domains</a>
    <a href="#response" data-k="response">Response contract</a>
    <a href="#coverage" data-k="coverage">Coverage semantics</a>
    <a href="#graph" data-k="graph">Certified graph proof</a>
    <div class="docs-nav-group">Platform</div>
    <a href="#routes" data-k="routes">Routes & platform surface</a>
    <a href="#delivery" data-k="delivery">Delivery modes</a>
    <a href="#errors" data-k="errors">Errors & retries</a>
    <a href="#rights" data-k="rights">Rights & provenance</a>
    <div class="docs-help"><b>Need integration help?</b><p>Bring us the workflow. PropData can deliver through REST, MCP, bulk, webhook, white-label or a custom response contract.</p><a href="mailto:sales@proptechusa.ai">sales@proptechusa.ai →</a></div>
  </aside>

  <main class="docs-main-v2">
    <section class="docs-hero-v2" id="overview">
      <div class="docs-breadcrumb">PropData / Great Britain / Docs</div>
      <h1 data-k="title">PropData Great Britain API Docs</h1>
      <p data-k="sub">UPRN-first property intelligence for production applications.</p>
      <p>Start with an exact Great Britain property identity, then expand into official coordinates, linked OS identifiers, deterministic HMLR transaction intelligence, registered-extent context, indicative valuation, explicit coverage states and source provenance. PropData does the normalization and joins so your application receives a governed property dossier instead of a collection of raw feeds.</p>
      <div class="docs-hero-actions"><a class="docs-btn primary" href="/workspace" data-k="workspace">Open Workspace</a><a class="docs-btn" href="/#pricing" data-k="access">Get API access</a><a class="docs-btn" href="#quick">View quickstart</a></div>
      <div class="docs-proof"><div><b>97,163</b><span>canonical HMLR transactions in the certified launch graph</span></div><div><b>176,605</b><span>deterministic transaction ↔ identifier relationships</span></div><div><b>174,262</b><span>reusable identity nodes</span></div><div><b>95.63%</b><span>deterministic July feed coverage in launch certification</span></div><div><b>0</b><span>semantic mismatches at certified launch</span></div></div>
    </section>

    <article class="docs-content-v2">
      <section class="doc-section-v2">
        <span class="doc-kicker">THE GB CONTRACT</span>
        <h2>The source systems are the foundation. The product is the property graph.</h2>
        <div class="gb-contract-card"><div><h3>One UPRN → a production property dossier</h3><p>The certified GB-native property flow is deliberately simple at the application boundary: resolve an official UPRN and let PropData perform the source-aware joins behind it. The number of upstream datasets is not the product surface.</p></div><div class="gb-contract-points"><span><i></i>Canonical property identity</span><span><i></i>Deterministic source joins</span><span><i></i>Explicit coverage states</span><span><i></i>Transparent provenance</span><span><i></i>Fail-open enrichment</span></div></div>
      </section>

      <section class="doc-section-v2" id="auth">
        <span class="doc-kicker">AUTHENTICATION</span><h2>Keep credentials server-side.</h2>
        <p>Direct REST requests use your PropData credential in the <span class="inline-code">x-api-key</span> header. Never place a production key in a URL, browser bundle, repository, screenshot, client analytics event or public log.</p>
        <div class="doc-code-label"><span>REST credential</span><span>server-side only</span></div><pre class="doc-code-v2">x-api-key: $PROPDATA_API_KEY</pre>
        <p>For usage and account limits, new integrations should prefer <span class="inline-code">GET /v1/auth/usage</span>. PropData MCP uses OAuth and is a separate authorization flow; do not reuse static REST-key instructions for MCP.</p>
      </section>

      <section class="doc-section-v2" id="quick">
        <span class="doc-kicker">QUICKSTART</span><h2>Resolve a Great Britain property in one call.</h2>
        <p>The certified GB launch contract centers on <span class="inline-code">GET /v1/property</span> with <span class="inline-code">country=GB</span> and an official UPRN. A successful base identity result remains valid even when an optional enrichment layer is unavailable.</p>
        <div class="doc-code-label"><span>cURL</span><span>verified GB route shape</span></div><pre class="doc-code-v2">curl -G 'https://propdata-api-worker.sales-fd3.workers.dev/v1/property' \
  -H 'x-api-key: $PROPDATA_API_KEY' \
  --data-urlencode 'country=GB' \
  --data-urlencode 'uprn=10090718379'</pre>
        <div class="callout-v2">The Workspace lets you exercise this production contract interactively while keeping the country scope locked to Great Britain.</div>
      </section>

      <section class="doc-section-v2" id="property">
        <span class="doc-kicker">GB-NATIVE PROPERTY RESOLVER</span><h2><span class="inline-code">GET /v1/property</span></h2>
        <p>This is the certified Great Britain property resolver. It anchors the record to official UPRN identity first, then attaches only the intelligence layers supported by the returned coverage and provenance.</p>
        <table class="param-table-v2"><thead><tr><th>Parameter</th><th>Required</th><th>Great Britain semantics</th></tr></thead><tbody><tr><td><span class="mono">country</span></td><td>Yes</td><td>Use <span class="inline-code">GB</span>.</td></tr><tr><td><span class="mono">uprn</span></td><td>Yes for the certified launch resolver</td><td>Official Unique Property Reference Number.</td></tr><tr><td><span class="mono">enrich</span></td><td>Optional</td><td><span class="inline-code">standard</span> is supported in the certified GB property resolver. Read the returned coverage object before relying on optional layers.</td></tr></tbody></table>
        <h3>Verified examples</h3>
        <table class="param-table-v2"><tbody><tr><td>Wales · <span class="mono">10090718379</span></td><td>Exact property identity with transaction + registered extent + indicative value coverage in the verified example.</td></tr><tr><td>London · <span class="mono">100021809877</span></td><td>Transaction + indicative value; registered extent may remain unavailable.</td></tr><tr><td>Birmingham · <span class="mono">100070359270</span></td><td>Leasehold example with linked HMLR transaction context.</td></tr><tr><td>Scotland · <span class="mono">10025270278</span></td><td>Exact UPRN identity while HMLR-specific England & Wales layers correctly remain unavailable.</td></tr></tbody></table>
      </section>

      <section class="doc-section-v2" id="intelligence">
        <span class="doc-kicker">EIGHT INTELLIGENCE DOMAINS</span><h2>What one exact property identity can unlock.</h2>
        <p>The GB product should be understood by the intelligence it returns, not by the number of upstream source names.</p>
        <div class="intel-grid"><article class="intel-card"><span>01 · IDENTITY</span><h3>Exact UPRN resolution</h3><p>Canonical property identity with explicit match level and confidence.</p></article><article class="intel-card"><span>02 · COORDINATES</span><h3>Official location</h3><p>Latitude and longitude attached to the resolved property identity where published.</p></article><article class="intel-card"><span>03 · LINKED IDS</span><h3>TOID + USRN relationships</h3><p>Published OS identifier relationships remain visible instead of being flattened away.</p></article><article class="intel-card"><span>04 · TRANSACTIONS</span><h3>HMLR recorded sales</h3><p>Recorded transaction facts appear only when the official relationship supports the join.</p></article><article class="intel-card"><span>05 · REGISTERED EXTENT</span><h3>INSPIRE context</h3><p>Registered freehold extent context where deterministic coverage exists.</p></article><article class="intel-card"><span>06 · VALUE</span><h3>Indicative valuation</h3><p>A PropData market signal where linked transaction and comparable coverage qualify.</p></article><article class="intel-card"><span>07 · COVERAGE</span><h3>Explicit availability state</h3><p>Identity, transaction, extent and valuation coverage remain independently interpretable.</p></article><article class="intel-card"><span>08 · PROVENANCE</span><h3>Source-aware facts</h3><p>Downstream applications can retain where each fact originated and how it was joined.</p></article></div>
      </section>

      <section class="doc-section-v2" id="response">
        <span class="doc-kicker">RESPONSE CONTRACT</span><h2>Keep identity, enrichment and provenance distinct.</h2>
        <p>A successful exact UPRN response can include the fields below. Optional intelligence is coverage-dependent and must never be treated as guaranteed merely because the property identity resolved.</p>
        <div class="doc-code-label"><span>illustrative response envelope</span><span>coverage-aware</span></div><pre class="doc-code-v2">{
  "country_code": "GB",
  "match_level": "uprn_exact",
  "confidence": 100,
  "property_id_type": "UPRN",
  "property_id": "10090718379",
  "coordinates": { "latitude": 51.50, "longitude": -3.14 },
  "source_ids": { "uprn": "...", "toids": [], "usrns": [] },
  "coverage": {
    "property_identity": "available",
    "transactions": "available",
    "registered_extent": "available",
    "indicative_valuation": "available"
  },
  "transactions": [ ... ],
  "registered_extent_polygons": [ ... ],
  "indicative_valuation": { ... },
  "provenance": [ ... ]
}</pre>
        <div class="callout-v2 blue"><b>Valuation semantics:</b> the indicative valuation is a PropData market signal. It should not be presented as an official valuation, legal valuation or lender-grade appraisal.</div>
      </section>

      <section class="doc-section-v2" id="coverage">
        <span class="doc-kicker">COVERAGE SEMANTICS</span><h2>Great Britain identity is broader than HMLR enrichment.</h2>
        <p>GB-wide property identity is anchored to the loaded OS Open UPRN layer. HM Land Registry Price Paid and INSPIRE depth is specific to England & Wales and appears only when deterministic official links support it.</p>
        <div class="coverage-matrix"><article class="coverage-card-v2"><small>GREAT BRITAIN</small><b>UPRN property identity</b><p>National identity foundation with official coordinates and linked identifiers where published.</p></article><article class="coverage-card-v2"><small>ENGLAND + WALES</small><b>HMLR transaction intelligence</b><p>Price Paid facts attach only where the official transaction relationship qualifies.</p></article><article class="coverage-card-v2"><small>ENGLAND + WALES</small><b>INSPIRE extent context</b><p>Registered extent context is independently coverage-aware and should not be treated as a legal title boundary.</p></article><article class="coverage-card-v2"><small>QUALIFIED COVERAGE</small><b>Indicative value</b><p>Requires underlying linked transaction and comparable coverage to qualify.</p></article><article class="coverage-card-v2"><small>FAIL-OPEN</small><b>Base property identity survives</b><p>A downstream optional-layer failure must not convert a valid UPRN match into an error.</p></article><article class="coverage-card-v2"><small>FAIL-CLOSED FACTS</small><b>Unavailable stays unavailable</b><p>Missing source truth is not a negative finding and is never manufactured.</p></article></div>
      </section>

      <section class="doc-section-v2" id="graph">
        <span class="doc-kicker">CERTIFIED LAUNCH GRAPH</span><h2>The join infrastructure is part of the product.</h2>
        <p>Great Britain launch certification completed with exact rollback/replay digests and zero semantic mismatches. The certification produced 97,163 canonical HMLR transactions, 176,605 deterministic transaction-identifier relationships and 174,262 reusable identity nodes.</p>
        <div class="callout-v2">Those counts describe the canonical relationship graph underneath the API. They are not a claim that every GB property has HMLR transaction or INSPIRE coverage.</div>
      </section>

      <section class="doc-section-v2" id="routes">
        <span class="doc-kicker">ROUTES & PLATFORM SURFACE</span><h2>One GB-native resolver, plus the wider PropData control plane.</h2>
        <p>The GB-native launch contract centers on the property resolver. The broader PropData platform also exposes account, health, statistics and changelog routes, plus a much wider property-intelligence route catalog across supported markets. Do not assume a global route has Great Britain-specific enrichment unless the country contract or returned coverage explicitly supports it.</p>
        <div class="endpoint-grid-v2"><article class="endpoint-card-v2"><div class="endpoint-head"><span class="method-get">GET</span><code>/v1/property?country=GB&amp;uprn=…</code></div><p>Certified GB-native property identity and enrichment contract.</p><span class="route-badge gb">GB CERTIFIED</span></article><article class="endpoint-card-v2"><div class="endpoint-head"><span class="method-get">GET</span><code>/v1/auth/usage</code></div><p>Authoritative account usage and limits for quota-aware applications.</p><span class="route-badge platform">PLATFORM</span></article><article class="endpoint-card-v2"><div class="endpoint-head"><span class="method-get">GET</span><code>/v1/health</code></div><p>Public production service health for operational checks.</p><span class="route-badge platform">PLATFORM</span></article><article class="endpoint-card-v2"><div class="endpoint-head"><span class="method-get">GET</span><code>/v1/stats</code></div><p>Public platform statistics and proof points. Do not substitute global stats for GB property-level coverage.</p><span class="route-badge platform">PLATFORM</span></article><article class="endpoint-card-v2"><div class="endpoint-head"><span class="method-get">GET</span><code>/v1/changelog</code></div><p>Production API and data-platform changes for integration teams.</p><span class="route-badge platform">PLATFORM</span></article><article class="endpoint-card-v2"><div class="endpoint-head"><span class="method-get">GET</span><code>/v1/countries</code></div><p>Country-aware capability context across the PropData network where exposed by the live platform.</p><span class="route-badge platform">PLATFORM</span></article></div>
        <h3>Wider PropData route families</h3>
        <p>Across the full PropData platform, route families include market and rent intelligence, value estimates, comparable properties, listing intelligence, ZIP/state/neighborhood intelligence, coordinate resolution, geocoding, parcel geometry, property deltas, preforeclosure workflows and more. Great Britain support for any specific family must be verified independently rather than inferred from the global catalog.</p>
        <div class="callout-v2 warn"><b>Country rule:</b> route existence is not the same as country coverage. The Great Britain docs will promote a route as GB-native only after its country contract, source semantics and live behavior are certified.</div>
      </section>

      <section class="doc-section-v2" id="delivery">
        <span class="doc-kicker">DELIVERY</span><h2>The API route is only one delivery shape.</h2>
        <p>PropData is built to remove customer-owned integration plumbing. The same governed intelligence can be packaged for the workload rather than forcing every team into one REST pattern.</p>
        <div class="delivery-grid"><article class="delivery-card"><b>REST API</b><p>Direct production requests through the PropData edge with server-side API-key authentication.</p></article><article class="delivery-card"><b>OAuth MCP</b><p>Customer-safe AI/client access through the separate OAuth-protected MCP authorization flow.</p></article><article class="delivery-card"><b>Bulk</b><p>Enterprise data delivery for workflows that should not make one request per property.</p></article><article class="delivery-card"><b>Webhook</b><p>Event-oriented delivery for contracted workflows where push semantics are appropriate.</p></article><article class="delivery-card"><b>White-label</b><p>Embed PropData capability behind the customer’s own product experience and brand.</p></article><article class="delivery-card"><b>Custom contracts</b><p>Workflow-specific response shapes, commercial scope and integration support.</p></article></div>
      </section>

      <section class="doc-section-v2" id="errors">
        <span class="doc-kicker">ERRORS & RETRIES</span><h2>Separate auth, quota, no-match and enrichment failures.</h2>
        <table class="param-table-v2"><thead><tr><th>Status / state</th><th>Meaning</th><th>Recommended behavior</th></tr></thead><tbody><tr><td>401</td><td>Missing or invalid API key.</td><td>Fix credentials; do not retry indefinitely.</td></tr><tr><td>403</td><td>Entitlement or access restriction.</td><td>Verify plan / contract scope before retrying.</td></tr><tr><td>429</td><td>Rate limit or quota state.</td><td>Back off and inspect authoritative usage.</td></tr><tr><td>5xx</td><td>Transient resolver/upstream failure.</td><td>Use bounded exponential backoff.</td></tr><tr><td>200 + no match</td><td>No verified property for the requested identifier.</td><td>Do not invent a candidate match.</td></tr><tr><td>200 + unavailable enrichment</td><td>Base identity may still be valid.</td><td>Preserve the property result and handle the optional layer independently.</td></tr></tbody></table>
      </section>

      <section class="doc-section-v2" id="rights">
        <span class="doc-kicker">RIGHTS & PROVENANCE</span><h2>Source-aware delivery without flattening the rights model.</h2>
        <p>The GB stack uses Ordnance Survey OS Open UPRN and linked identifier sources, HM Land Registry Price Paid data, official transaction lookup relationships and INSPIRE registered-extent sources. PropData builds the canonical identity and relationship layer above those foundations while retaining provenance in the API.</p>
        <div class="callout-v2 warn"><b>HMLR restrictions:</b> Price Paid address fields carry separate third-party restrictions. The certified canonical transaction graph intentionally excludes those restricted address fields. INSPIRE geometry is indicative registered freehold extent context and is not a legal title boundary.</div>
      </section>

      <section class="docs-footer-card"><span class="doc-kicker">SHIP THE PRODUCT</span><h2>Stop rebuilding Great Britain source by source.</h2><p>Use the GB Workspace for live property testing, or talk to us about a higher-volume, MCP, bulk, webhook, white-label or custom delivery contract.</p><div class="docs-footer-actions"><a class="docs-btn primary" href="/workspace">Open GB Workspace</a><a class="docs-btn" href="mailto:sales@proptechusa.ai">Talk to sales</a><a class="docs-btn" href="/#pricing">View pricing</a></div></section>
    </article>
  </main>
</div>`;

function lang(x:Lang){
  document.documentElement.lang=x==='cy'?'cy-GB':'en-GB';
  document.querySelectorAll<HTMLElement>('[data-k]').forEach(el=>{
    const k=el.dataset.k as keyof typeof copy.en;
    const v=copy[x][k];
    if(v)el.textContent=v;
  });
  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===x));
  localStorage.setItem('propdata-gb-lang',x);
}
const saved=(localStorage.getItem('propdata-gb-lang')||'en') as Lang;
lang(saved==='cy'?'cy':'en');
document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(b=>b.addEventListener('click',()=>lang((b.dataset.lang||'en') as Lang)));
