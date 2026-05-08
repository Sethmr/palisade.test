/* Shared bits used across all 5 concepts */

const palLogo = (variant = 'charcoal', size = 28) => {
  const isWhite = variant === 'white';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size * 1.6} height={size} viewBox="0 0 64 40" fill="none" aria-label="Palisade Roofing">
        <path d="M2 30 L18 12 L24 18 L26 14 L30 14 L32 10 L40 18 L62 30" stroke={isWhite ? '#F2EFE9' : '#1F2428'} strokeWidth="1.5" fill="none"/>
        <path d="M2 33 L18 15 L24 21 L26 17 L30 17 L32 13 L40 21 L62 33" stroke={isWhite ? '#F2EFE9' : '#1F2428'} strokeWidth="1.2" fill="none" opacity="0.6"/>
        <path d="M2 36 L18 18 L24 24 L26 20 L30 20 L32 16 L40 24 L62 36" stroke={isWhite ? '#F2EFE9' : '#1F2428'} strokeWidth="1" fill="none" opacity="0.35"/>
      </svg>
      <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: size * 0.78, letterSpacing: '-0.01em', color: isWhite ? '#F2EFE9' : '#1F2428', lineHeight: 1 }}>Palisade Roofing</span>
    </div>
  );
};

const PalNav = ({ variant = 'charcoal', dense = false }) => {
  const c = variant === 'white' ? '#F2EFE9' : '#1F2428';
  const items = ['Services', 'Process', 'Reviews', 'About', 'Contact'];
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: dense ? '14px 28px' : '20px 48px', borderBottom: `1px solid ${variant === 'white' ? 'rgba(242,239,233,0.12)' : '#D7D2C7'}` }}>
      {palLogo(variant, dense ? 22 : 26)}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {items.map(i => <span key={i} style={{ fontSize: 14, fontWeight: 500, color: c, opacity: 0.85 }}>{i}</span>)}
        <a className="num" style={{ fontSize: 14, fontWeight: 600, color: c, paddingLeft: 24, borderLeft: `1px solid ${variant === 'white' ? 'rgba(242,239,233,0.18)' : '#D7D2C7'}` }}>(423) 549-2065</a>
        <span className="btn btn-cedar" style={{ padding: '10px 16px', fontSize: 13 }}>Free Estimate →</span>
      </div>
    </nav>
  );
};

const PalNavMobile = ({ variant = 'charcoal' }) => {
  const c = variant === 'white' ? '#F2EFE9' : '#1F2428';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${variant === 'white' ? 'rgba(242,239,233,0.12)' : '#D7D2C7'}` }}>
      {palLogo(variant, 20)}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 6 }}>
        <span style={{ width: 20, height: 1.5, background: c }}></span>
        <span style={{ width: 20, height: 1.5, background: c }}></span>
      </div>
    </div>
  );
};

/* The Trust Triplet — exactly 3, ALL CAPS Inter caption */
const TrustTriplet = ({ dark = false, compact = false }) => {
  const c = dark ? 'rgba(242,239,233,0.78)' : '#3E4A55';
  const sep = dark ? 'rgba(242,239,233,0.22)' : '#D7D2C7';
  return (
    <div className="caps num" style={{ display: 'flex', alignItems: 'center', gap: compact ? 14 : 22, color: c, fontSize: compact ? 10 : 11 }}>
      <span>Atlas Platinum<sup style={{ fontSize: '0.7em' }}>★</sup></span>
      <span style={{ width: 1, height: 12, background: sep }}></span>
      <span>5.0 ★ · 104 Google Reviews</span>
      <span style={{ width: 1, height: 12, background: sep }}></span>
      <span>10-Year Workmanship Warranty</span>
    </div>
  );
};

/* 4-stat strip — used across most concepts */
const StatStrip = ({ dark = false, divided = true }) => {
  const stats = [
    { num: '5.0', unit: '★', label: '104 Google Reviews' },
    { num: '286', unit: '', label: 'Roofs / 12 mo' },
    { num: '10', unit: 'yr', label: 'Workmanship Warranty' },
    { num: '14', unit: '', label: 'Tri-Cities Cities' },
  ];
  const fg = dark ? '#F2EFE9' : '#1F2428';
  const muted = dark ? 'rgba(242,239,233,0.65)' : '#3E4A55';
  const sep = dark ? 'rgba(242,239,233,0.18)' : '#D7D2C7';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, color: fg }}>
      {stats.map((s, i) => (
        <div key={i} style={{ padding: '20px 24px', borderLeft: divided && i > 0 ? `1px solid ${sep}` : 'none' }}>
          <div className="num" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 38, lineHeight: 1, letterSpacing: '-0.02em' }}>
            {s.num}<span style={{ fontSize: 22, color: 'var(--brass)', marginLeft: 2 }}>{s.unit}</span>
          </div>
          <div className="caps" style={{ fontSize: 10, marginTop: 8, color: muted }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
};

/* The 4-step ZIP-first form. Compact variant for hero, full for /free-roof-estimate/ */
const HeroForm = ({ tone = 'bone' }) => {
  const card = tone === 'bone' ? '#FAF8F3' : '#F2EFE9';
  return (
    <div style={{ background: card, padding: 28, border: '1px solid #E7E2D8' }}>
      <div className="caps" style={{ color: '#A66A3D', fontSize: 10, marginBottom: 10 }}>Step 1 of 4 · Free, no-pressure</div>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 600, marginBottom: 6, letterSpacing: '-0.01em' }}>Tell us about your roof.</h3>
      <p style={{ fontSize: 14, color: '#3E4A55', marginBottom: 18 }}>Most homeowners get a written estimate within 48 hours. No phone-tag.</p>
      <div className="caps" style={{ fontSize: 10, marginBottom: 8, color: '#3E4A55' }}>What's going on?</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        {['Full replacement', 'Leak or damage', 'Storm damage', 'Not sure yet'].map((o, i) => (
          <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', border: i === 0 ? '1px solid #1F2428' : '1px solid #D7D2C7', background: i === 0 ? '#1F2428' : 'transparent', color: i === 0 ? '#F2EFE9' : '#1F2428', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
            <span style={{ width: 14, height: 14, borderRadius: '50%', border: i === 0 ? '4px solid #A66A3D' : '1px solid #6E7A86', background: i === 0 ? '#F2EFE9' : 'transparent', boxSizing: 'border-box' }}></span>
            {o}
          </label>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
        <input className="num" placeholder="ZIP" style={{ flex: 1, padding: '14px 16px', border: '1px solid #D7D2C7', background: '#FFF', fontSize: 16, fontFamily: 'inherit', letterSpacing: '0.05em' }} defaultValue="37659" />
        <span className="caps" style={{ fontSize: 10, color: '#3E4A55' }}>✓ We serve Jonesborough</span>
      </div>
      <button className="btn btn-cedar" style={{ width: '100%', padding: '16px', fontSize: 15 }}>Get My Free Estimate →</button>
      <p className="caps" style={{ fontSize: 10, marginTop: 12, color: '#6E7A86', textAlign: 'center', letterSpacing: '0.06em' }}>Used by 104+ Tri-Cities homeowners · Avg response under 5 min</p>
    </div>
  );
};

/* Mobile sticky tap-to-call */
const StickyTap = () => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid #D7D2C7', background: '#1F2428', color: '#F2EFE9', zIndex: 5 }}>
    <a className="num" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 15, fontWeight: 600, borderRight: '1px solid rgba(242,239,233,0.15)' }}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 3.5c0-.83.67-1.5 1.5-1.5h2.13c.45 0 .85.3.97.74l.85 2.95c.1.36-.02.74-.32.97L5.5 7.86c1.04 1.97 2.66 3.59 4.64 4.63l1.2-1.62c.22-.3.6-.42.96-.32l2.95.85c.44.12.74.52.74.97v2.13c0 .83-.67 1.5-1.5 1.5C7.16 16 0 8.84 0 .5 0 .22.22 0 .5 0z" fill="currentColor"/></svg>
      (423) 549-2065
    </a>
    <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 600, background: '#A66A3D', color: '#F2EFE9' }}>Free Estimate →</a>
  </div>
);

/* A small artboard label component used inside cards */
const ArtboardCaption = ({ children }) => (
  <div style={{ position: 'absolute', top: -28, left: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6E7A86', letterSpacing: '0.04em' }}>{children}</div>
);

Object.assign(window, { palLogo, PalNav, PalNavMobile, TrustTriplet, StatStrip, HeroForm, StickyTap, ArtboardCaption });
