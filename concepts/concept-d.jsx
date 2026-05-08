/* Concept D — "Owner Portrait" — Christian as primary hero element */

const ConceptD_HeroDesktop = () => (
  <div className="pal" style={{ width: 1440, height: 900, overflow: 'hidden', background: '#F2EFE9' }}>
    <PalNav variant="charcoal" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'calc(100% - 67px)' }}>
      <div style={{ position: 'relative', backgroundImage: "url(assets/img/07-owner-christian.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#1F2428' }}>
        <div style={{ position: 'absolute', left: 36, bottom: 36, color: '#F2EFE9' }}>
          <div className="caps" style={{ color: 'rgba(242,239,233,0.78)', fontSize: 10, marginBottom: 6 }}>The owner</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>Christian Chambers</div>
          <div style={{ fontSize: 13, color: 'rgba(242,239,233,0.78)' }}>Founder · On every estimate</div>
        </div>
      </div>
      <div style={{ background: '#F2EFE9', padding: '72px 56px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div className="caps" style={{ color: '#A66A3D', marginBottom: 18 }}>§01 — Who you'll meet</div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 56, lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.02em', maxWidth: 540 }}>
            "The roof you'll get is the roof <span style={{ fontStyle: 'italic' }}>I</span> sign off on."
          </h1>
          <div style={{ marginTop: 18, fontSize: 15, color: '#3E4A55' }}>— Christian Chambers, Owner</div>
          <hr className="hr" style={{ margin: '32px 0' }} />
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#1F2428', maxWidth: 520, marginBottom: 16 }}>
            I founded Palisade in 2020 because I'd watched too many homeowners pay for a salesperson's commission, three layers of subs, and a roof nobody senior had actually inspected.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#1F2428', maxWidth: 520 }}>
            On every job I run the drone, write the estimate, and walk the finished roof before the truck leaves. There is no version of this where you don't get me on the phone.
          </p>
        </div>
        <div>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <a className="btn btn-cedar" style={{ flex: 1, padding: '16px' }}>Schedule with Christian →</a>
            <a className="btn btn-charcoal num" style={{ padding: '16px 22px' }}>(423) 549-2065</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConceptD_StatBand = () => (
  <div className="pal" style={{ width: 1440, padding: '0 56px', background: '#F2EFE9', borderTop: '1px solid #D7D2C7', borderBottom: '1px solid #D7D2C7' }}>
    <StatStrip />
  </div>
);

const ConceptD_Promise = () => {
  const rows = [
    { c: 'Christian inspects every roof.', body: 'No "estimator" who has never held a hammer. The owner is on the ladder.' },
    { c: 'One signed estimate, in writing.', body: 'Measurements, photos, line items. Comparable to any other quote you receive.' },
    { c: 'One crew, no rotating subs.', body: 'The same crew tears off, dries-in, and installs. Christian is on site for the dry-in.' },
    { c: 'Final walkthrough before we leave.', body: 'Christian signs off on every job. If something is wrong, it is fixed before payment.' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 56px', background: '#FAF8F3' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>§02 — What I sign off on</div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 40, maxWidth: 900 }}>Four commitments. Each one signed, in writing, on every job.</h2>
      <div style={{ borderTop: '1.5px solid #1F2428' }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 1.4fr', gap: 32, padding: '24px 0', borderBottom: '1px solid #D7D2C7', alignItems: 'baseline' }}>
            <div className="num mono" style={{ fontSize: 12, color: '#A66A3D' }}>0{i+1}</div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{r.c}</h3>
            <p style={{ fontSize: 16, color: '#3A3F44', lineHeight: 1.6 }}>{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConceptD_Reviews = () => {
  const tiles = [
    { city: 'Greeneville, TN', date: 'Mar 2026', quote: "Christian himself came out within two days of my call. He didn't try to sell me a thing — just measured, took photos, and emailed a written estimate that night.", name: 'L. Hammond' },
    { city: 'Bristol, TN', date: 'Feb 2026', quote: "He answered the phone the first time I called. That alone made him different from the four other companies I tried.", name: 'A. Goss' },
    { city: 'Elizabethton, TN', date: 'Jan 2026', quote: "Crew showed up early both days. Christian came back at the end to walk the roof with me. The cleanup was so thorough I couldn't tell they'd been there.", name: 'P. Riley' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 56px', background: '#3E4A55', color: '#F2EFE9' }}>
      <div className="caps" style={{ color: '#B8945A', marginBottom: 14 }}>§03 — Verifiable reviews</div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 14, color: '#F2EFE9', maxWidth: 700 }}>Christian's name appears in 40 of our 104 Google reviews.</h2>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(242,239,233,0.78)', maxWidth: 760, marginBottom: 40 }}>104 Google reviews, average 5.0 stars: 102 five-star, 1 four-star, 1 one-star, none filtered. "Professional" appears in 39; "communication" in 11; "estimate" in 8.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {tiles.map((t, i) => (
          <div key={i} style={{ background: 'rgba(242,239,233,0.05)', border: '1px solid rgba(242,239,233,0.18)', padding: 24 }}>
            <div className="caps num" style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(242,239,233,0.6)', marginBottom: 14 }}>
              <span>{t.city}</span><span>{t.date}</span>
            </div>
            <div style={{ color: '#B8945A', marginBottom: 14, letterSpacing: '0.05em' }}>★★★★★</div>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: 17, lineHeight: 1.5, fontWeight: 500, color: '#F2EFE9' }}>"{t.quote}"</p>
            <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(242,239,233,0.6)' }}>— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConceptD_HeroMobile = () => (
  <div className="pal" style={{ width: 375, height: 812, overflow: 'hidden', background: '#F2EFE9', position: 'relative' }}>
    <PalNavMobile variant="charcoal" />
    <div style={{ height: 380, backgroundImage: "url(assets/img/07-owner-christian.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#1F2428', position: 'relative' }}>
      <div style={{ position: 'absolute', left: 18, bottom: 18, color: '#F2EFE9' }}>
        <div className="caps" style={{ fontSize: 9.5, color: 'rgba(242,239,233,0.78)', marginBottom: 4 }}>The owner</div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600 }}>Christian Chambers</div>
      </div>
    </div>
    <div style={{ padding: '24px 22px 76px' }}>
      <div className="caps" style={{ color: '#A66A3D', fontSize: 10, marginBottom: 12 }}>§01 — Who you'll meet</div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, lineHeight: 1.1, fontWeight: 500, letterSpacing: '-0.02em' }}>"The roof you'll get is the roof <span style={{ fontStyle: 'italic' }}>I</span> sign off on."</h1>
      <div style={{ marginTop: 12, fontSize: 13, color: '#3E4A55' }}>— Christian Chambers, Owner</div>
      <p style={{ marginTop: 16, fontSize: 14, color: '#3A3F44', lineHeight: 1.6 }}>Founded 2020. On every estimate. Signs every job before the truck leaves.</p>
      <a className="btn btn-cedar" style={{ width: '100%', marginTop: 18, padding: 14 }}>Schedule with Christian →</a>
    </div>
    <StickyTap />
  </div>
);

Object.assign(window, { ConceptD_HeroDesktop, ConceptD_HeroMobile, ConceptD_StatBand, ConceptD_Promise, ConceptD_Reviews });
