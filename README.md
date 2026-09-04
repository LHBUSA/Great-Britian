# PropData Great Britain

Production launch site for `gb.proptechusa.ai`.

## Product contract

- Great Britain property identity anchored by OS Open UPRN.
- Linked OS identifiers (TOID / USRN) where available.
- HM Land Registry Price Paid transaction enrichment for England & Wales where official transaction-to-UPRN links exist.
- HM Land Registry INSPIRE registered-extent enrichment where deterministic links exist.
- PropData Indicative Value where linked HMLR sales and comparable coverage qualify.
- Explicit coverage states; unavailable enrichment never invalidates a verified UPRN identity.

## Stack

Static Vite + TypeScript site. No client-side PropData API key and no backend secrets.

```bash
npm install
npm run build
```

Vercel settings: framework `Vite`, build command `npm run build`, output directory `dist`.

## Domain

Production: `https://gb.proptechusa.ai/`

## Launch certification

GB global transaction graph certification was completed 2026-09-04 with exact rollback/replay digests, 97,163 canonical HMLR transactions, 176,605 deterministic transaction-identifier relationships, and zero semantic mismatches in the certified launch revision.
