const developerSection=document.querySelector<HTMLElement>('.developer-v2');

if(developerSection){
  developerSection.classList.add('pdx-demo-section');
  developerSection.innerHTML=`
    <div class="shell pdx-demo-wrap">
      <div class="pdx-demo-heading">
        <div>
          <span class="pdx-kicker" data-demo-en="INTERACTIVE PROPERTY PROOF" data-demo-cy="PRAWF EIDDO RHYNGWEITHIOL">INTERACTIVE PROPERTY PROOF</span>
          <h2 data-demo-en="Don’t imagine the response. Inspect the property product." data-demo-cy="Peidiwch â dychmygu'r ymateb. Archwiliwch y cynnyrch eiddo.">Don’t imagine the response. Inspect the property product.</h2>
          <p data-demo-en="The same PropData pattern used on the global platform, focused on Great Britain: one verified UPRN, a readable property dossier, explicit coverage, linked source systems and the raw contract behind it." data-demo-cy="Yr un patrwm PropData â'r platfform byd-eang, wedi'i ganolbwyntio ar Brydain Fawr: un UPRN wedi'i ddilysu, dosier eiddo darllenadwy, cwmpas eglur, systemau ffynhonnell cysylltiedig a'r contract crai y tu ôl iddo.">The same PropData pattern used on the global platform, focused on Great Britain: one verified UPRN, a readable property dossier, explicit coverage, linked source systems and the raw contract behind it.</p>
        </div>
        <div class="pdx-heading-actions">
          <a class="pdx-primary" href="/workspace" data-demo-en="Run it in the live workspace →" data-demo-cy="Rhedeg yn y gweithle byw →">Run it in the live workspace →</a>
          <a class="pdx-secondary" href="/docs" data-demo-en="View response contract" data-demo-cy="Gweld y contract ymateb">View response contract</a>
        </div>
      </div>

      <div class="pdx-browser" aria-label="PropData Great Britain response explorer">
        <div class="pdx-browser-top">
          <div class="pdx-browser-brand"><span class="pdx-dot"></span><b>PROPDATA GB</b><small>INTERACTIVE RESPONSE EXPLORER</small></div>
          <div class="pdx-browser-meta"><span class="pdx-ready">REPRESENTATIVE READY</span><button class="pdx-view is-active" data-pdx-view="parsed">PARSED</button><button class="pdx-view" data-pdx-view="json">JSON</button></div>
        </div>

        <div class="pdx-route-tabs" role="tablist" aria-label="Great Britain intelligence layers">
          <button class="is-active" data-pdx-route="property"><span>FULL PROPERTY</span><small>/v1/property</small></button>
          <button data-pdx-route="transactions"><span>TRANSACTIONS</span><small>HMLR linked</small></button>
          <button data-pdx-route="spatial"><span>SPATIAL</span><small>OS + INSPIRE</small></button>
          <button data-pdx-route="value"><span>VALUE</span><small>qualified signal</small></button>
        </div>

        <div class="pdx-request-bar">
          <div class="pdx-method">GET</div>
          <div class="pdx-url">propdata-api-worker.sales-fd3.workers.dev/v1/property?country=GB&amp;uprn=<strong>10090718379</strong></div>
          <div class="pdx-status"><i></i> 200 · VERIFIED EXAMPLE</div>
        </div>

        <div class="pdx-view-pane is-active" data-pdx-pane="parsed">
          <div class="pdx-product-grid">
            <aside class="pdx-property-card">
              <div class="pdx-property-photo">
                <div class="pdx-photo-shade"></div>
                <div class="pdx-map-wire"><span></span><span></span><span></span><i></i></div>
                <div class="pdx-country-tag">GB · VERIFIED PROPERTY IDENTITY</div>
              </div>
              <div class="pdx-property-body">
                <div class="pdx-property-title"><div><span>UPRN</span><h3>10090718379</h3></div><b>EXACT</b></div>
                <p>Official property identity resolved first. Every enrichment below remains independently source-aware.</p>
                <div class="pdx-identity-grid">
                  <div><span>Match level</span><b>uprn_exact</b></div>
                  <div><span>Confidence</span><b>100</b></div>
                  <div><span>Country</span><b>GB</b></div>
                  <div><span>Coverage</span><b>explicit</b></div>
                </div>
              </div>
            </aside>

            <section class="pdx-intel-panel">
              <div class="pdx-panel-head"><div><span id="pdx-route-label">FULL PROPERTY INTELLIGENCE</span><b id="pdx-route-title">One identity. Multiple verified domains.</b></div><span class="pdx-schema-pill">SCHEMA-AWARE · SOURCE-AWARE</span></div>
              <div class="pdx-intel-grid" id="pdx-intel-grid"></div>
              <div class="pdx-source-bar"><div><span>IDENTITY SOURCE</span><b>Ordnance Survey UPRN</b></div><div><span>TRANSACTION SOURCE</span><b>HM Land Registry</b></div><div><span>SPATIAL SOURCE</span><b>OS + INSPIRE</b></div><div><span>RULE</span><b>No supported join → no invented fact</b></div></div>
            </section>
          </div>
        </div>

        <div class="pdx-view-pane" data-pdx-pane="json">
          <div class="pdx-json-grid">
            <div class="pdx-json-side">
              <span>VERIFIED SAMPLE CONTRACT</span>
              <h3>Readable for people.<br>Structured for products.</h3>
              <p>Use Parsed to understand the product. Use JSON to see the contract engineering receives. Production keys stay server-side.</p>
              <a href="/workspace">Run the verified UPRN →</a>
            </div>
            <pre id="pdx-json"></pre>
          </div>
        </div>

        <div class="pdx-proof-footer">
          <div><b>97,163</b><span>canonical HMLR transactions</span></div>
          <div><b>176,605</b><span>transaction ↔ identifier links</span></div>
          <div><b>174,262</b><span>reusable identity nodes</span></div>
          <div><b>95.63%</b><span>deterministic July feed coverage</span></div>
          <div><b>0</b><span>semantic mismatches at launch</span></div>
        </div>
      </div>

      <div class="pdx-demo-bottom">
        <div><span>WHAT THIS PROVES</span><b>The API is not a code sample. It is the normalized property product your team would otherwise have to assemble.</b></div>
        <div class="pdx-proof-pills"><span>UPRN identity</span><span>OS links</span><span>HMLR</span><span>INSPIRE</span><span>Indicative value</span><span>Coverage</span><span>Provenance</span></div>
      </div>
    </div>`;

  const routeData={
    property:{
      label:'FULL PROPERTY INTELLIGENCE',
      title:'One identity. Multiple verified domains.',
      cards:[
        ['01','PROPERTY IDENTITY','UPRN 10090718379','Exact canonical identity','verified'],
        ['02','COORDINATES','Official point','Attached to resolved UPRN','verified'],
        ['03','OS IDENTIFIERS','TOID / USRN','Returned where published links exist','linked'],
        ['04','HMLR TRANSACTIONS','Deterministic join','Official sale facts only when linked','verified'],
        ['05','REGISTERED EXTENT','INSPIRE context','England & Wales where deterministic','coverage'],
        ['06','INDICATIVE VALUE','Qualified signal','Comp-backed only where coverage qualifies','qualified']
      ],
      json:{country_code:'GB',match_level:'uprn_exact',confidence:100,uprn:'10090718379',identity:{source:'Ordnance Survey',linked_identifiers:'where_available'},hmlr:{coverage_status:'deterministic_link_only'},spatial:{registered_extent:'where_supported'},valuation:{status:'qualified_when_supported'},provenance:'preserved_per_layer'}
    },
    transactions:{
      label:'RECORDED TRANSACTION INTELLIGENCE',
      title:'Official HMLR facts stay official.',
      cards:[
        ['01','CANONICAL PROPERTY','UPRN exact','Property identity survives missing enrichment','verified'],
        ['02','HMLR JOIN','Deterministic','No address-fuzzy sale attachment','verified'],
        ['03','SALE FACTS','Official record','Price/date fields only when source supports','linked'],
        ['04','IDENTIFIER GRAPH','176,605 links','Reusable transaction↔identifier relationships','network'],
        ['05','COVERAGE','Explicit state','Unlinked does not become no-sale','coverage'],
        ['06','PROVENANCE','HM Land Registry','Source retained in response','verified']
      ],
      json:{country_code:'GB',uprn:'10090718379',transactions:{source:'HM Land Registry',join_method:'deterministic',coverage_status:'explicit',records:'when_official_link_exists'},identity_preserved:true}
    },
    spatial:{
      label:'SPATIAL + REGISTERED EXTENT CONTEXT',
      title:'Property identity connects to geography without hiding limits.',
      cards:[
        ['01','UPRN POINT','Official coordinates','Resolved identity anchor','verified'],
        ['02','TOID','Linked OS identifier','Returned where available','linked'],
        ['03','USRN','Street relationship','Returned where available','linked'],
        ['04','INSPIRE','Registered extent','England & Wales where linked','coverage'],
        ['05','JURISDICTION','GB-aware','National identity, jurisdiction-aware depth','verified'],
        ['06','FAIL-CLOSED','No guesswork','Unavailable geometry remains unavailable','verified']
      ],
      json:{country_code:'GB',identity:{uprn:'10090718379',coordinates:'official_when_published'},os_identifiers:{toid:'where_available',usrn:'where_available'},inspire:{jurisdiction:'England & Wales',coverage_status:'deterministic_only'}}
    },
    value:{
      label:'INDICATIVE MARKET SIGNAL',
      title:'A value signal only when the evidence qualifies.',
      cards:[
        ['01','IDENTITY','UPRN exact','Valuation never replaces identity','verified'],
        ['02','TRANSACTIONS','HMLR context','Official sale records where linked','linked'],
        ['03','COMPARABLES','Qualified set','Only supported evidence enters signal','qualified'],
        ['04','INDICATIVE VALUE','PropData signal','Not represented as an official valuation','qualified'],
        ['05','COVERAGE','Explicit','Insufficient evidence stays unavailable','coverage'],
        ['06','PROVENANCE','Traceable inputs','Sources remain visible downstream','verified']
      ],
      json:{country_code:'GB',uprn:'10090718379',indicative_value:{status:'qualified_when_supported',basis:['linked_HMLR_transactions','comparable_context'],source_type:'PropData derived signal'},coverage_status:'explicit'}
    }
  } as const;

  const grid=developerSection.querySelector<HTMLElement>('#pdx-intel-grid')!;
  const label=developerSection.querySelector<HTMLElement>('#pdx-route-label')!;
  const title=developerSection.querySelector<HTMLElement>('#pdx-route-title')!;
  const json=developerSection.querySelector<HTMLElement>('#pdx-json')!;
  const render=(key:keyof typeof routeData)=>{
    const r=routeData[key];
    label.textContent=r.label;
    title.textContent=r.title;
    grid.innerHTML=r.cards.map(c=>`<article><div class="pdx-card-top"><span>${c[0]}</span><b class="state ${c[4]}">${c[4]}</b></div><small>${c[1]}</small><strong>${c[2]}</strong><p>${c[3]}</p></article>`).join('');
    json.textContent=JSON.stringify(r.json,null,2);
  };
  render('property');

  developerSection.querySelectorAll<HTMLButtonElement>('[data-pdx-route]').forEach(btn=>btn.addEventListener('click',()=>{
    developerSection.querySelectorAll('[data-pdx-route]').forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.dataset.pdxRoute as keyof typeof routeData);
  }));
  developerSection.querySelectorAll<HTMLButtonElement>('[data-pdx-view]').forEach(btn=>btn.addEventListener('click',()=>{
    developerSection.querySelectorAll('[data-pdx-view]').forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');
    developerSection.querySelectorAll('[data-pdx-pane]').forEach(p=>p.classList.toggle('is-active',(p as HTMLElement).dataset.pdxPane===btn.dataset.pdxView));
  }));

  const syncDemoLanguage=()=>{
    const cy=document.documentElement.lang.toLowerCase().startsWith('cy');
    developerSection.querySelectorAll<HTMLElement>('[data-demo-en]').forEach(el=>{
      const value=el.getAttribute(cy?'data-demo-cy':'data-demo-en');
      if(value)el.textContent=value;
    });
  };
  syncDemoLanguage();
  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setTimeout(syncDemoLanguage,0)));
}
