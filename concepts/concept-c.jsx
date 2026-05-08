/* Concept C — "The Protocol" — 50/50 hero, 4-step protocol prominent + form */

const PROTOCOL = [
  { n: '01', title: 'Inspect', body: 'Drone aerial + walked inspection. We climb the roof, not just look at photos.' },
  { n: '02', title: 'Document', body: 'Photo-by-photo report of every defect, with dates and locations. You keep the file.' },
  { n: '03', title: 'Estimate', body: 'Written, line-itemed estimate within 48 hours. Comparable to any other quote you receive.' },
  { n: '04', title: 'Restore', body: 'One crew, full tear-off, dry-in same day. Christian signs off before we leave.' },
];

const ConceptC_HeroDesktop = () => (
  <div className="pal" style={{ width: 1440, height: 900, overflow: 'hidden', background: '#F2EFE9' }}>
    <PalNav variant="charcoal" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'calc(100% - 67px)' }}>
      <div style={{ position: 'relative', backgroundImage: "url(assets/img/02-aerial-wraparound.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,36,40,0.55) 0%, rgba(31,36,40,0.45) 35%, rgba(31,36,40,0.85) 100%)' }}></div>
        <div style={{ position: 'absolute', left: 48, top: 56, color: '#F2EFE9' }}>
          <div className="caps" style={{ color: '#F2EFE9' }}>§01 — How we work</div>
        </div>
        <div style={{ position: 'absolute', left: 48, bottom: 48, right: 48, color: '#FFFFFF', textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 64, lineHeight: 1.02, fontWeight: 600, letterSpacing: '-0.02em', maxWidth: 540, color: '#FFFFFF' }}>The same four steps, on every single roof.</h1>
          <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.55, color: '#F2EFE9', maxWidth: 460 }}>
            No drama. No fire-station urgency. The work, in the order it gets done.
          </p>
        </div>
      </div>
      <div style={{ background: '#FAF8F3', padding: '56px 48px 40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 24 }}>
          {PROTOCOL.map((p, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 16, padding: '14px 0', borderTop: i === 0 ? '1px solid #1F2428' : '1px solid #D7D2C7', borderBottom: i === PROTOCOL.length - 1 ? '1px solid #1F2428' : 'none' }}>
              <div className="num" style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 600, color: '#A66A3D', letterSpacing: '-0.01em' }}>{p.n}</div>
              <div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 2 }}>{p.title}</div>
                <p style={{ fontSize: 14, color: '#3A3F44', lineHeight: 1.5 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: '#F2EFE9', padding: 22, border: '1px solid #E7E2D8' }}>
          <div className="caps" style={{ color: '#A66A3D', fontSize: 10, marginBottom: 8 }}>Step 1 of 4 · Free</div>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, marginBottom: 14 }}>What's going on with your roof?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
            {['Full replacement', 'Leak / damage', 'Storm damage', 'Not sure yet'].map((o, i) => (
              <div key={i} style={{ padding: '11px 12px', border: i === 0 ? '1px solid #1F2428' : '1px solid #D7D2C7', background: i === 0 ? '#1F2428' : 'transparent', color: i === 0 ? '#F2EFE9' : '#1F2428', fontSize: 13, fontWeight: 500 }}>{o}</div>
            ))}
          </div>
          <button className="btn btn-cedar" style={{ width: '100%', padding: '13px', fontSize: 14 }}>Continue →</button>
        </div>
        <p style={{ marginTop: 16, fontSize: 11, color: '#6E7A86', lineHeight: 1.55, fontStyle: 'italic' }}>We document the loss and prepare the estimate your adjuster recognizes. Per Tenn. Code Ann. § 56-6-903(d)(3).</p>
      </div>
    </div>
  </div>
);

const ConceptC_StatBand = () => (
  <div className="pal" style={{ width: 1440, padding: '0 56px', background: '#F2EFE9', borderBottom: '1px solid #D7D2C7' }}>
    <StatStrip />
  </div>
);

const ConceptC_DuringInstall = () => (
  <div className="pal" style={{ width: 1440, padding: '88px 56px', background: '#FAF8F3' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
      <div>
        <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>During the install</div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 22 }}>One crew. One day. The same standard, every time.</h2>
        <p style={{ fontSize: 16, color: '#3A3F44', lineHeight: 1.65, marginBottom: 16 }}>Most asphalt replacements are tear-off, dry-in, and shingle in a single day. The same crew that starts the morning finishes the afternoon. Christian is on site for the dry-in.</p>
        <p style={{ fontSize: 16, color: '#3A3F44', lineHeight: 1.65 }}>Tarps go down before the dump trailer. Magnetic sweep happens twice — once in the yard, once at the curb. The chalk-marker tool you'll see on the ridge is how we keep our courses straight.</p>
      </div>
      <div style={{ aspectRatio: '4/5', backgroundImage: "url(assets/img/06-topdown-install.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    </div>
  </div>
);

const ConceptC_Services = () => {
  const items = [
    { kind: 'ASPHALT', range: '$13,500–$23,500', body: 'Architectural and premium shingles. Atlas, GAF, CertainTeed.' },
    { kind: 'METAL', range: '$28,000–$48,000', body: 'Standing-seam and snap-lock systems. 40-yr finish warranty.' },
    { kind: 'REPAIR', range: 'From $385', body: 'Leaks, missing shingles, hail and wind damage.' },
    { kind: 'INSPECTION', range: 'Free', body: 'Drone aerial + walked report. Yours to keep.' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 56px', background: '#F2EFE9' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>§02 — Services</div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 36, maxWidth: 800 }}>Priced in plain ranges. Estimates in writing.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #1F2428', borderBottom: '1px solid #1F2428' }}>
        {items.map((s, i) => (
          <div key={i} style={{ padding: '28px 24px', borderRight: i < items.length - 1 ? '1px solid #D7D2C7' : 'none' }}>
            <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>{s.kind}</div>
            <div className="num" style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 12 }}>{s.range}</div>
            <p style={{ fontSize: 13.5, color: '#3A3F44', lineHeight: 1.55 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConceptC_HeroMobile = () => (
  <div className="pal" style={{ width: 375, height: 812, overflow: 'hidden', background: '#F2EFE9', position: 'relative' }}>
    <PalNavMobile variant="white" />
    <div style={{ position: 'absolute', top: 51, left: 0, right: 0, height: 230, backgroundImage: "url(assets/img/02-aerial-wraparound.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,36,40,0.25), rgba(31,36,40,0.65))' }}></div>
      <div style={{ position: 'absolute', left: 22, bottom: 22, right: 22, color: '#F2EFE9' }}>
        <div className="caps" style={{ fontSize: 10, color: 'rgba(242,239,233,0.8)', marginBottom: 8 }}>§01 — How we work</div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.02em' }}>The same four steps, on every roof.</h1>
      </div>
    </div>
    <div style={{ position: 'absolute', top: 281, left: 0, right: 0, bottom: 56, padding: '22px 18px', overflowY: 'hidden' }}>
      {PROTOCOL.map((p, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 12, padding: '11px 0', borderTop: '1px solid #D7D2C7' }}>
          <div className="num" style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, color: '#A66A3D' }}>{p.n}</div>
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600 }}>{p.title}</div>
            <p style={{ fontSize: 12.5, color: '#3A3F44', lineHeight: 1.5 }}>{p.body}</p>
          </div>
        </div>
      ))}
      <a className="btn btn-cedar" style={{ width: '100%', marginTop: 16, padding: 13, fontSize: 14 }}>Get my free estimate →</a>
    </div>
    <StickyTap />
  </div>
);

Object.assign(window, { ConceptC_HeroDesktop, ConceptC_HeroMobile, ConceptC_StatBand, ConceptC_Services, ConceptC_DuringInstall });
