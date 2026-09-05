const d=document;

const setBi=(el:Element|null,en:string,cy:string)=>{
  if(!el)return;
  el.setAttribute('data-gb-en',en);
  el.setAttribute('data-gb-cy',cy);
};

const sync=()=>{
  const cy=d.documentElement.lang.toLowerCase().startsWith('cy');
  d.querySelectorAll<HTMLElement>('[data-gb-en]').forEach(el=>{
    const v=el.getAttribute(cy?'data-gb-cy':'data-gb-en');
    if(v)el.textContent=v;
  });
};

// Hero: sell the graph and business outcome, not source count or implementation philosophy.
setBi(
  d.querySelector('.hero-v2 .eyebrow'),
  'GREAT BRITAIN · PRODUCTION PROPERTY INTELLIGENCE',
  'PRYDAIN FAWR · GWYBODAETH EIDDO CYNHYRCHU'
);
setBi(
  d.querySelector('.hero-v2 h1'),
  'One UPRN. The British property graph behind it.',
  'Un UPRN. Graff eiddo Prydain y tu ôl iddo.'
);
setBi(
  d.querySelector('.hero-v2-copy>p'),
  'Start with an exact Great Britain property identity and return the dossier around it: official coordinates, linked TOID and USRN identifiers, deterministic HMLR transaction history, registered-extent context, comp-backed indicative value, explicit coverage status and source provenance — already joined, normalized and ready for production.',
  'Dechreuwch gyda hunaniaeth eiddo fanwl ym Mhrydain Fawr a dychwelwch y dosier o’i hamgylch: cyfesurynnau swyddogol, dynodwyr TOID ac USRN cysylltiedig, hanes trafodion HMLR pendant, cyd-destun estyniad cofrestredig, gwerth dangosol wedi’i gefnogi gan gymariaethau, statws cwmpas eglur a tharddiad ffynhonnell — eisoes wedi’u cysylltu a’u normaleiddio ar gyfer cynhyrchu.'
);

setBi(
  d.querySelector('.dossier-card h2'),
  'Exact property identity first. Every verified intelligence layer after it.',
  'Hunaniaeth eiddo fanwl yn gyntaf. Pob haen wybodaeth wedi’i dilysu ar ei hôl.'
);

const dossierMetrics=Array.from(d.querySelectorAll<HTMLElement>('.dossier-metrics>div'));
if(dossierMetrics[2]){
  dossierMetrics[2].innerHTML='<strong>8</strong><small data-gb-en="intelligence domains" data-gb-cy="parth gwybodaeth">intelligence domains</small>';
}

const proof=Array.from(d.querySelectorAll<HTMLElement>('.proof-row span b'));
if(proof[0])setBi(proof[0],'Production property graph live','Graff eiddo cynhyrchu yn fyw');
if(proof[1])setBi(proof[1],'GB-wide UPRN identity','Hunaniaeth UPRN ledled GB');
if(proof[2])setBi(proof[2],'One call → full verified dossier','Un alwad → dosier wedi’i ddilysu');

// Turn the property-graph section into the breadth statement buyers should see.
setBi(
  d.querySelector('.graph-v2 .section-heading .kicker-v2'),
  'ONE PROPERTY · MULTIPLE INTELLIGENCE DOMAINS',
  'UN EIDDO · SAWL PARTH GWYBODAETH'
);
setBi(
  d.querySelector('.graph-v2 .section-heading h2'),
  'The source systems are only the foundation. The product is the graph.',
  'Dim ond y sylfaen yw’r systemau ffynhonnell. Y graff yw’r cynnyrch.'
);
setBi(
  d.querySelector('.graph-v2 .section-heading p'),
  'PropData resolves canonical property identity, preserves official identifiers, joins transaction history deterministically, attaches spatial and registered-extent context, calculates qualified market signals, and carries coverage and provenance through the response. Your team gets the finished intelligence contract instead of the integration project.',
  'Mae PropData yn datrys hunaniaeth eiddo ganonaidd, yn cadw dynodwyr swyddogol, yn cysylltu hanes trafodion yn bendant, yn atodi cyd-destun gofodol ac estyniad cofrestredig, yn cyfrifo signalau marchnad cymwys ac yn cario cwmpas a tharddiad drwy’r ymateb. Mae eich tîm yn cael y contract gwybodaeth gorffenedig yn lle’r prosiect integreiddio.'
);

// Strengthen the platform contract inserted by gb-sales.ts.
setBi(
  d.querySelector('.gb-platform h2'),
  'One UPRN unlocks eight production intelligence domains.',
  'Mae un UPRN yn datgloi wyth parth gwybodaeth cynhyrchu.'
);
const platformNote=d.querySelector('.gb-contract-note p');
setBi(
  platformNote,
  'This is not four feeds wrapped in JSON. PropData has already done the identity resolution, canonicalization, deterministic joins, graph construction, coverage controls and market-signal logic required to turn fragmented British property records into one usable production dossier.',
  'Nid pedwar ffrwd wedi’u lapio mewn JSON yw hwn. Mae PropData eisoes wedi gwneud y datrysiad hunaniaeth, y normaleiddio, y cysylltiadau pendant, adeiladu’r graff, rheolaethau cwmpas a rhesymeg signalau marchnad sydd eu hangen i droi cofnodion eiddo Prydain yn un dosier cynhyrchu defnyddiadwy.'
);

// Sources: make clear that these are provenance foundations, not the breadth of the product.
const sources=d.querySelector('#sources');
if(sources){
  setBi(
    sources.querySelector('.section-heading .kicker-v2'),
    'PROVENANCE FOUNDATIONS',
    'SYLFEINI TARDIAD'
  );
  setBi(
    sources.querySelector('.section-heading h2'),
    'Official foundations underneath. PropData intelligence on top.',
    'Sylfeini swyddogol oddi tano. Gwybodaeth PropData ar ei ben.'
  );
  setBi(
    sources.querySelector('.section-heading p'),
    'The upstream datasets tell you where facts originate. They do not describe the breadth of the finished product. PropData builds the canonical identity, relationship graph, deterministic transaction linkage, coverage semantics and qualified market intelligence above those foundations.',
    'Mae’r setiau data ffynhonnell yn dweud o ble y daw’r ffeithiau. Nid ydynt yn disgrifio ehangder y cynnyrch gorffenedig. Mae PropData yn adeiladu’r hunaniaeth ganonaidd, y graff perthnasoedd, y cysylltiad trafodion pendant, semanteg cwmpas a gwybodaeth marchnad gymwys uwchben y sylfeini hynny.'
  );

  const network=sources.querySelector('.source-network');
  if(network){
    network.innerHTML=`
      <article><span>OS</span><div><h3>OS Open UPRN</h3><p data-gb-en="Canonical Great Britain property identity and official coordinates." data-gb-cy="Hunaniaeth eiddo ganonaidd Prydain Fawr a chyfesurynnau swyddogol.">Canonical Great Britain property identity and official coordinates.</p></div><b>IDENTITY</b></article>
      <article><span>OS</span><div><h3>Open Linked Identifiers</h3><p data-gb-en="Published UPRN relationships to TOID and USRN identifiers." data-gb-cy="Perthnasoedd UPRN cyhoeddedig â dynodwyr TOID ac USRN.">Published UPRN relationships to TOID and USRN identifiers.</p></div><b>LINKAGE</b></article>
      <article><span>HMLR</span><div><h3>Price Paid Data</h3><p data-gb-en="Recorded England and Wales transaction facts used only when the official relationship qualifies." data-gb-cy="Ffeithiau trafodion cofnodedig Cymru a Lloegr a ddefnyddir dim ond pan fo’r berthynas swyddogol yn gymwys.">Recorded England and Wales transaction facts used only when the official relationship qualifies.</p></div><b>TRANSACTIONS</b></article>
      <article><span>HMLR</span><div><h3>INSPIRE registered extents</h3><p data-gb-en="Registered freehold extent context where deterministic coverage exists." data-gb-cy="Cyd-destun estyniad rhydd-ddaliad cofrestredig lle mae cwmpas pendant yn bodoli.">Registered freehold extent context where deterministic coverage exists.</p></div><b>SPATIAL</b></article>
      <article><span>PD</span><div><h3>PropData relationship graph</h3><p data-gb-en="Canonical transaction↔identifier relationships, reusable identity nodes and deterministic linkage logic." data-gb-cy="Perthnasoedd trafodyn↔dynodwr canonaidd, nodau hunaniaeth a rhesymeg cysylltu pendant.">Canonical transaction↔identifier relationships, reusable identity nodes and deterministic linkage logic.</p></div><b>GRAPH</b></article>
      <article><span>PD</span><div><h3>PropData market intelligence</h3><p data-gb-en="Comp-backed indicative valuation where linked transaction and comparable coverage qualify." data-gb-cy="Gwerth dangosol wedi’i gefnogi gan gymariaethau lle mae cwmpas trafodion a chymariaethau cysylltiedig yn gymwys.">Comp-backed indicative valuation where linked transaction and comparable coverage qualify.</p></div><b>DERIVED</b></article>
    `;
  }
}

// Use the certified graph proof as a product story, not engineering trivia.
const trustItems=Array.from(d.querySelectorAll<HTMLElement>('.trust-grid>div'));
const trustCopy=[
  ['97,163','canonical HMLR transactions','trafodion HMLR canonaidd'],
  ['176,605','deterministic transaction ↔ identifier links','cysylltiadau trafodyn ↔ dynodwr pendant'],
  ['174,262','reusable identity nodes','nodau hunaniaeth ailddefnyddiadwy'],
  ['95.63%','deterministic July feed coverage','cwmpas ffrwd Gorffennaf pendant'],
  ['0','semantic mismatches at launch','anghydweddiadau semantig wrth lansio']
];
trustItems.forEach((el,i)=>{
  const t=trustCopy[i];if(!t)return;
  el.innerHTML=`<b>${t[0]}</b><span data-gb-en="${t[1]}" data-gb-cy="${t[2]}">${t[1]}</span>`;
});

// Final conversion: reinforce avoided infrastructure work.
setBi(
  d.querySelector('.final-v2 h2'),
  'Stop rebuilding Britain source by source.',
  'Rhowch y gorau i ailadeiladu Prydain ffynhonnell wrth ffynhonnell.'
);
setBi(
  d.querySelector('.final-v2 p'),
  'UPRN identity, coordinates, linked identifiers, transaction intelligence, registered extents, indicative valuation, coverage controls and provenance — already connected behind one production PropData contract.',
  'Hunaniaeth UPRN, cyfesurynnau, dynodwyr cysylltiedig, gwybodaeth trafodion, estyniadau cofrestredig, gwerth dangosol, rheolaethau cwmpas a tharddiad — eisoes wedi’u cysylltu y tu ôl i un contract PropData cynhyrchu.'
);

// Keep bilingual overlays in sync with the existing EN/CY switch.
d.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setTimeout(sync,0)));
sync();
