/* Concept E — "Reading Room" — long-form magazine-editorial */

const ConceptE_HeroDesktop = () => (
  <div className="pal" style={{ width: 1440, height: 900, overflow: 'hidden', background: '#F2EFE9' }}>
    <PalNav variant="charcoal" />
    <div style={{ padding: '64px 120px 0', height: 'calc(100% - 67px)', display: 'flex', flexDirection: 'column' }}>
      <div className="caps" style={{ color: '#3E4A55', marginBottom: 28, display: 'flex', justifyContent: 'space-between' }}>
        <span>§01 — Palisade Roofing · Vol. VI · Spring 2026</span>
        <span className="num">Tri-Cities, Tennessee</span>
      </div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 80, lineHeight: 1.0, letterSpacing: '-0.025em', color: '#1F2428', maxWidth: 1080, marginBottom: 28 }}>
        A roofing company that writes <span style={{ fontStyle: 'italic' }}>down</span> what it does.
      </h1>
      <p style={{ fontFamily: "'Fraunces', serif", fontSize: 22, lineHeight: 1.45, fontStyle: 'italic', color: '#3E4A55', maxWidth: 880, fontWeight: 400, marginBottom: 36 }}>
        "Christian was on the phone within an hour, on the roof the next day, and his estimate was the only one with photos and a real line-itemed scope." <span className="caps" style={{ fontStyle: 'normal', fontSize: 10, marginLeft: 8 }}>— D. Hensley, Johnson City · Mar 2026</span>
      </p>
      <div style={{ flex: 1, position: 'relative', borderTop: '1px solid #1F2428', marginTop: 'auto' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 240, marginTop: 28, backgroundImage: "url(assets/img/01-aerial-traditional.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center 30%' }}></div>
        <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="caps num" style={{ fontSize: 11, color: '#3E4A55', display: 'flex', gap: 24 }}>
            <span>5.0 ★ · 104 Google Reviews</span>
            <span>286 Roofs · 12 mo</span>
            <span>Atlas Platinum*</span>
            <span>10-yr Workmanship</span>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a className="btn btn-charcoal num">(423) 549-2065</a>
            <a className="btn btn-cedar">Schedule estimate →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConceptE_Editorial = () => (
  <div className="pal" style={{ width: 1440, padding: '88px 120px', background: '#FAF8F3' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 320px', gap: 56, alignItems: 'start' }}>
      <div className="caps num" style={{ color: '#3E4A55', position: 'sticky', top: 60 }}>
        <div style={{ borderTop: '1px solid #1F2428', paddingTop: 12 }}>§02</div>
        <div style={{ marginTop: 8, color: '#1F2428' }}>The Asphalt Question</div>
      </div>
      <div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 28 }}>How much does a roof replacement cost in Johnson City, TN?</h2>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 22, lineHeight: 1.5, color: '#1F2428', marginBottom: 22, fontWeight: 500 }}>Most asphalt-shingle replacements in the Tri-Cities run <span className="num">$13,500–$23,500</span>, completed in 1–2 days. Standing-seam metal runs <span className="num">$28,000–$48,000</span> over 3–5 days.</p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3A3F44', marginBottom: 18 }}>Final price depends on roof complexity (hips, valleys, dormers), shingle line (architectural, premium, designer), tear-off vs. overlay, and decking condition discovered after tear-off. We hand you a written, line-itemed estimate after a free on-site inspection — usually within 48 hours of the visit. No deposit required to receive the estimate.</p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3A3F44' }}>The Tri-Cities housing stock skews 1980s–2000s ranch and two-story; most replacements come in mid-range of the asphalt window. Premium designer shingles (Atlas Pinnacle, GAF Grand Sequoia) push to the upper end. Tear-off is standard; we do not overlay over an existing roof.</p>
      </div>
      <aside style={{ borderLeft: '1px solid #D7D2C7', paddingLeft: 28, position: 'sticky', top: 60 }}>
        <div className="caps" style={{ color: '#A66A3D', marginBottom: 12 }}>From the field</div>
        <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, color: '#1F2428', marginBottom: 16, fontWeight: 500 }}>"The estimate I got from Palisade had pictures of the actual damage. Two other companies just sent a number."</p>
        <div className="caps num" style={{ fontSize: 10, color: '#3E4A55' }}>M. Patel · Kingsport · Feb 2026</div>
      </aside>
    </div>
  </div>
);

const ConceptE_CompareTable = () => {
  const rows = [
    { type: 'Architectural asphalt', range: '$13,500–$23,500', timeline: '1–2 days', warranty: '25–30 yr mfr · 10 yr work', life: '20–25 yr' },
    { type: 'Premium asphalt', range: '$18,000–$28,000', timeline: '1–2 days', warranty: '50 yr mfr · 10 yr work', life: '25–30 yr' },
    { type: 'Standing-seam metal', range: '$28,000–$48,000', timeline: '3–5 days', warranty: '40 yr finish · 10 yr work', life: '40–60 yr' },
    { type: 'Targeted repair', range: 'From $385', timeline: 'Same / next day', warranty: '1 yr work', life: 'Buys 2–10 yr' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 120px', background: '#F2EFE9' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>§03 — Compared</div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 36, maxWidth: 720, lineHeight: 1.1 }}>Four ways forward, side-by-side.</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
        <thead>
          <tr style={{ borderTop: '1.5px solid #1F2428', borderBottom: '1px solid #1F2428' }}>
            {['System', 'Typical range', 'Install time', 'Warranty', 'Service life'].map((h, i) => (
              <th key={i} className="caps" style={{ textAlign: 'left', padding: '14px 12px', fontWeight: 600 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #D7D2C7' }}>
              <td style={{ padding: '20px 12px', fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600 }}>{r.type}</td>
              <td className="num" style={{ padding: '20px 12px', color: '#3E4A55' }}>{r.range}</td>
              <td className="num" style={{ padding: '20px 12px', color: '#3E4A55' }}>{r.timeline}</td>
              <td className="num" style={{ padding: '20px 12px', color: '#3E4A55' }}>{r.warranty}</td>
              <td className="num" style={{ padding: '20px 12px', color: '#3E4A55' }}>{r.life}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ConceptE_HeroMobile = () => (
  <div className="pal" style={{ width: 375, height: 812, overflow: 'hidden', background: '#F2EFE9', position: 'relative' }}>
    <PalNavMobile variant="charcoal" />
    <div style={{ padding: '28px 22px 76px' }}>
      <div className="caps num" style={{ color: '#3E4A55', fontSize: 9.5, marginBottom: 18, display: 'flex', justifyContent: 'space-between' }}>
        <span>§01 · Vol. VI</span><span>Spring 2026</span>
      </div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 38, fontWeight: 500, lineHeight: 1.0, letterSpacing: '-0.025em', color: '#1F2428' }}>A roofing company that writes <span style={{ fontStyle: 'italic' }}>down</span> what it does.</h1>
      <p style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontStyle: 'italic', color: '#3E4A55', lineHeight: 1.45, marginTop: 18 }}>"Christian was on the phone within an hour, on the roof the next day."</p>
      <div className="caps num" style={{ fontSize: 9.5, marginTop: 6, color: '#3E4A55' }}>D. Hensley · Johnson City · Mar 2026</div>
      <div style={{ height: 200, marginTop: 22, backgroundImage: "url(assets/img/01-aerial-traditional.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center 30%' }}></div>
      <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
        <a className="btn btn-charcoal num" style={{ flex: 1, padding: 12, fontSize: 13 }}>(423) 549-2065</a>
        <a className="btn btn-cedar" style={{ flex: 1, padding: 12, fontSize: 13 }}>Schedule →</a>
      </div>
    </div>
    <StickyTap />
  </div>
);

Object.assign(window, { ConceptE_HeroDesktop, ConceptE_HeroMobile, ConceptE_Editorial, ConceptE_CompareTable });
