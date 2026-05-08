/* Concept A — "Ridgeline" — textbook 60/40 hero, default homeowner */

const ConceptA_HeroDesktop = () => (
  <div className="pal" style={{ width: 1440, height: 900, overflow: 'hidden', background: '#F2EFE9' }}>
    <PalNav variant="charcoal" />
    <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', height: 'calc(100% - 67px)' }}>
      <div style={{ position: 'relative', backgroundImage: "url(assets/img/01-aerial-traditional.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,36,40,0.05) 0%, rgba(31,36,40,0.55) 100%)' }}></div>
        <div style={{ position: 'absolute', left: 56, bottom: 56, right: 56, color: '#F2EFE9' }}>
          <div className="caps" style={{ color: 'rgba(242,239,233,0.85)', marginBottom: 18 }}>Family-owned · Jonesborough, TN · Since 2020</div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 76, lineHeight: 1.02, fontWeight: 600, color: '#F2EFE9', maxWidth: 720, letterSpacing: '-0.02em' }}>
            A roof, replaced once.<br/>By the people whose<br/>name is on the truck.
          </h1>
          <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.5, color: 'rgba(242,239,233,0.86)', maxWidth: 540 }}>
            Asphalt, metal, and storm restoration across 14 cities in the Tri-Cities. Christian inspects every roof and signs off on every job, personally.
          </p>
        </div>
      </div>
      <div style={{ background: '#F2EFE9', padding: '48px 44px 32px', display: 'flex', flexDirection: 'column' }}>
        <div className="caps" style={{ marginBottom: 14 }}>Free, written estimate</div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 30, lineHeight: 1.1, marginBottom: 18, letterSpacing: '-0.01em' }}>Start with your ZIP.</h2>
        <p style={{ fontSize: 14, color: '#3E4A55', marginBottom: 22, lineHeight: 1.55 }}>Four short questions. We'll come measure, document, and write you a real estimate — usually within 48 hours.</p>
        <HeroForm />
      </div>
    </div>
  </div>
);

const ConceptA_StatBand = () => (
  <div className="pal" style={{ width: 1440, height: 140, background: '#1F2428', display: 'flex', alignItems: 'center' }}>
    <div style={{ width: '100%', padding: '0 56px' }}>
      <StatStrip dark />
    </div>
  </div>
);

const ConceptA_Services = () => {
  const items = [
    { kind: 'ASPHALT SHINGLES', range: '$13,500–$23,500', body: 'Atlas Pinnacle Pristine HP42, GAF, CertainTeed. Most replacements 1–2 days, full crew, full tear-off.', img: 'assets/img/03-aerial-suburban.jpeg' },
    { kind: 'METAL ROOFING', range: '$28,000–$48,000', body: 'Standing-seam metal, exposed-fastener and snap-lock systems. 3–5 days. 30+ year service life.', img: 'assets/img/04-metal-roof.jpeg' },
    { kind: 'STORM & REPAIR', range: 'From $385', body: 'Leaks, missing shingles, hail and wind damage. Documented inspection, photo-by-photo report.', img: 'assets/img/06-topdown-install.jpeg' },
    { kind: 'FREE INSPECTION', range: 'No charge', body: 'Drone aerial + walked inspection. Photo-by-photo report you keep, whether or not you hire us.', img: 'assets/img/05-topdown-bristol.jpeg' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 56px 72px', background: '#F2EFE9' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <div className="caps" style={{ color: '#A66A3D', marginBottom: 12 }}>§01 — Services</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 56, fontWeight: 600, letterSpacing: '-0.02em', maxWidth: 800, lineHeight: 1.05 }}>Four things, done by the same crew, with the same standards.</h2>
        </div>
        <a className="caps" style={{ color: '#1F2428', borderBottom: '1px solid #1F2428', paddingBottom: 4 }}>All services →</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {items.map((s, i) => (
          <div key={i} style={{ background: '#FAF8F3', border: '1px solid #E7E2D8' }}>
            <div style={{ height: 200, backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: 24 }}>
              <div className="caps" style={{ marginBottom: 10 }}>{s.kind}</div>
              <div className="num" style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 12 }}>{s.range}</div>
              <p style={{ fontSize: 14, color: '#3A3F44', lineHeight: 1.55 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConceptA_Reviews = () => {
  const tiles = [
    { city: 'Johnson City, TN', date: 'Mar 2026', stars: 5, quote: 'Christian was on the phone within an hour, on the roof the next day, and his estimate was the only one with photos and a real line-itemed scope. We picked Palisade.', name: 'D. Hensley' },
    { city: 'Kingsport, TN', date: 'Feb 2026', stars: 5, quote: 'Quoted three companies. Two showed up late and tried to upsell us. Christian measured, took drone photos, and sent a written estimate the same evening. Communication was clear the whole way.', name: 'M. Patel' },
    { city: 'Bristol, TN', date: 'Jan 2026', stars: 5, quote: "Crew tarped everything, did the tear-off and install in a single day, and cleaned up so well I couldn't find a nail in the yard. Professional from the first call.", name: 'R. Whitaker' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 56px', background: '#FAF8F3' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64 }}>
        <div>
          <div className="caps" style={{ color: '#A66A3D', marginBottom: 12 }}>§02 — Verifiable reviews</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 22 }}>104 reviews. 5.0 stars. Read every one.</h2>
          <p style={{ fontSize: 15, color: '#3A3F44', lineHeight: 1.65 }}>104 Google reviews, average 5.0 stars: 102 five-star, 1 four-star, 1 one-star, none filtered. Christian's first name appears in 40; "professional" in 39; "quote" in 19; "metal" in 13; "communication" in 11; "estimate" in 8.</p>
          <a className="caps" style={{ display: 'inline-block', marginTop: 20, color: '#1F2428', borderBottom: '1px solid #1F2428', paddingBottom: 4 }}>Read on Google →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {tiles.map((t, i) => (
            <div key={i} style={{ background: '#F2EFE9', border: '1px solid #E7E2D8', padding: 22, display: 'flex', flexDirection: 'column' }}>
              <div className="caps num" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                <span>{t.city}</span><span>{t.date}</span>
              </div>
              <div className="stars" style={{ fontSize: 16, marginBottom: 14 }}>★★★★★</div>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: 17, lineHeight: 1.45, fontWeight: 500, color: '#1F2428', flex: 1 }}>"{t.quote}"</p>
              <div style={{ marginTop: 16, fontSize: 13, color: '#3E4A55' }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ConceptA_Why = () => {
  const rows = [
    { n: '01', title: 'Christian inspects every roof himself.', body: 'Not a salesperson, not a subcontractor. The owner climbs the ladder, runs the drone, and writes the estimate.' },
    { n: '02', title: 'Written estimates with photos and scope.', body: 'Real measurements, real line items, real warranty terms. Side-by-side comparable to any other quote you receive.' },
    { n: '03', title: 'One crew, no rotating subs.', body: 'The same crew tears off, dries-in, and installs. We do not pass the job between three teams to lower our cost.' },
    { n: '04', title: 'Documented from start to finish.', body: 'Pre-, mid-, and post-install drone photos in your file. The estimate your adjuster recognizes, on paper.' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 56px', background: '#3E4A55', color: '#F2EFE9' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 60 }}>
          <div className="caps" style={{ color: '#B8945A', marginBottom: 12 }}>§03 — Why Palisade</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 56, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#F2EFE9' }}>Substance, not performance.</h2>
          <p style={{ marginTop: 22, fontSize: 16, color: 'rgba(242,239,233,0.78)', lineHeight: 1.65, maxWidth: 460 }}>We document the loss and prepare the estimate your adjuster recognizes. <span style={{ fontStyle: 'italic', color: 'rgba(242,239,233,0.6)' }}>Per Tenn. Code Ann. § 56-6-903(d)(3).</span></p>
        </div>
        <div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, padding: '28px 0', borderTop: i === 0 ? '1px solid rgba(242,239,233,0.18)' : '1px solid rgba(242,239,233,0.18)', borderBottom: i === rows.length - 1 ? '1px solid rgba(242,239,233,0.18)' : 'none' }}>
              <div className="num" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#B8945A', paddingTop: 6 }}>{r.n}</div>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: '#F2EFE9', marginBottom: 8, letterSpacing: '-0.01em' }}>{r.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(242,239,233,0.72)', lineHeight: 1.6 }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ConceptA_HeroMobile = () => (
  <div className="pal" style={{ width: 375, height: 812, overflow: 'hidden', background: '#F2EFE9', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 480, backgroundImage: "url(assets/img/01-aerial-traditional.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,36,40,0.30) 0%, rgba(31,36,40,0.88) 100%)' }}></div>
    </div>
    <div style={{ position: 'relative', zIndex: 2 }}><PalNavMobile variant="white" /></div>
    <div style={{ position: 'absolute', top: 56, left: 0, right: 0, height: 424, padding: '40px 22px 0', color: '#F2EFE9', zIndex: 2 }}>
      <div className="caps" style={{ color: 'rgba(242,239,233,0.85)', marginBottom: 14, fontSize: 10 }}>Jonesborough, TN · Since 2020</div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 38, lineHeight: 1.04, fontWeight: 600, color: '#F2EFE9', letterSpacing: '-0.02em' }}>A roof, replaced once. By the people whose name is on the truck.</h1>
      <p style={{ marginTop: 14, fontSize: 14, color: 'rgba(242,239,233,0.85)', lineHeight: 1.5 }}>14 cities across the Tri-Cities. Free, written estimate within 48 hours.</p>
    </div>
    <div style={{ position: 'absolute', top: 480, left: 0, right: 0, bottom: 56, padding: '24px 18px', background: '#F2EFE9', overflowY: 'hidden' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 8, fontSize: 10 }}>Step 1 of 4</div>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Tell us about your roof.</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 12 }}>
        {['Full replacement', 'Leak / damage', 'Storm damage', 'Not sure'].map((o, i) => (
          <div key={i} style={{ padding: '12px 10px', border: i === 0 ? '1px solid #1F2428' : '1px solid #D7D2C7', background: i === 0 ? '#1F2428' : 'transparent', color: i === 0 ? '#F2EFE9' : '#1F2428', fontSize: 12, fontWeight: 500 }}>{o}</div>
        ))}
      </div>
      <button className="btn btn-cedar" style={{ width: '100%', padding: 14, fontSize: 14 }}>Continue →</button>
    </div>
    <StickyTap />
  </div>
);

Object.assign(window, { ConceptA_HeroDesktop, ConceptA_HeroMobile, ConceptA_StatBand, ConceptA_Services, ConceptA_Reviews, ConceptA_Why });
