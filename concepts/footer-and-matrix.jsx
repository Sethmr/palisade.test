/* Footer + comparison matrix + sticky bar mockup */

const PalFooter = () => {
  const cities = ['Jonesborough', 'Johnson City', 'Kingsport', 'Bristol TN', 'Greeneville', 'Elizabethton', 'Erwin', 'Blountville', 'Bluff City', 'Telford', 'Gray', 'Piney Flats', 'Fall Branch', 'Unicoi'];
  return (
    <footer className="pal" style={{ width: 1440, padding: '64px 56px 36px', background: '#1F2428', color: '#F2EFE9' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 56, paddingBottom: 48, borderBottom: '1px solid rgba(242,239,233,0.18)' }}>
        <div>
          {palLogo('white', 28)}
          <p style={{ marginTop: 22, fontSize: 14, lineHeight: 1.65, color: 'rgba(242,239,233,0.7)', maxWidth: 360 }}>Family-owned roofing in the Tri-Cities. Asphalt, metal, repair, and storm restoration. Christian Chambers, Owner.</p>
          <div className="caps num" style={{ marginTop: 22, color: 'rgba(242,239,233,0.6)', fontSize: 10, lineHeight: 1.7 }}>
            154 Old Turnpike Rd<br/>Jonesborough, TN 37659<br/>(423) 549-2065<br/>Mon–Fri 8 AM – 5 PM
          </div>
        </div>
        <div>
          <div className="caps" style={{ color: '#B8945A', marginBottom: 16, fontSize: 10 }}>Services</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'rgba(242,239,233,0.85)' }}>
            <span>Asphalt roofing</span>
            <span>Metal roofing</span>
            <span>Storm & repair</span>
            <span>Free inspection</span>
            <span>Insurance documentation</span>
          </div>
        </div>
        <div>
          <div className="caps" style={{ color: '#B8945A', marginBottom: 16, fontSize: 10 }}>Cities served</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px', fontSize: 13.5, color: 'rgba(242,239,233,0.85)' }}>
            {cities.map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
        <div>
          <div className="caps" style={{ color: '#B8945A', marginBottom: 16, fontSize: 10 }}>This week on the roof</div>
          <div className="stripe-ph" style={{ aspectRatio: '16/9', background: 'rgba(242,239,233,0.06)', border: '1px solid rgba(242,239,233,0.18)', color: 'rgba(242,239,233,0.5)' }}>
            VIDEO MODULE — weekly YT
          </div>
          <p style={{ fontSize: 12, color: 'rgba(242,239,233,0.55)', marginTop: 10, lineHeight: 1.55 }}>Christian walks one job per week. New episode every Friday.</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 11, color: 'rgba(242,239,233,0.5)', lineHeight: 1.65 }}>
        <div className="caps num" style={{ letterSpacing: '0.06em' }}>© 2026 Palisade Roofing LLC · Lic. #TN-REG</div>
        <div style={{ maxWidth: 720, textAlign: 'right', fontStyle: 'italic' }}>Atlas Pro+ application in progress, Q2 2026. An Independent Roofing Contractor, not an Employee or Agent of Atlas Roofing Corporation.</div>
      </div>
    </footer>
  );
};

const StickyBarShowcase = () => (
  <div className="pal" style={{ width: 750, height: 220, background: '#E7E2D8', position: 'relative', overflow: 'hidden', padding: 32 }}>
    <div style={{ position: 'absolute', left: 32, top: 32 }} className="caps">Mid-scroll · mobile sticky tap-to-call</div>
    <div style={{ position: 'absolute', bottom: 32, left: 32 }}>
      <div style={{ width: 320, height: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#1F2428', color: '#F2EFE9' }}>
        <a className="num" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 14, fontWeight: 600, borderRight: '1px solid rgba(242,239,233,0.15)' }}>📞 (423) 549-2065</a>
        <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 13, fontWeight: 600, background: '#A66A3D', color: '#F2EFE9' }}>Free Estimate →</a>
      </div>
      <div className="caps" style={{ marginTop: 14, fontSize: 10, color: '#3E4A55' }}>56pt · iOS safe-area-inset-bottom · every page except /free-roof-estimate/</div>
    </div>
  </div>
);

const ComparisonMatrix = () => {
  const criteria = [
    'Hero pattern',
    'Photo prominence',
    'Form prominence',
    'Reading load',
    'Resembles current site',
    'Best-suited buyer',
    'AI-citation density',
    'Risk if photography slips',
  ];
  const data = {
    A: ['60/40 photo + form', 'High', 'High (in hero)', 'Medium', '◐ Familiar', 'Default homeowner', 'Medium', 'Low'],
    B: ['Typography only', 'Low (deep scroll)', 'CTA → page', 'High', '◔ Quietly different', 'Considered shopper', 'Highest', 'Very low'],
    C: ['50/50 photo + protocol', 'Medium', 'Highest (in hero)', 'Low–Medium', '◐ Familiar+', 'Damage / mid-decision', 'Medium-high', 'Low'],
    D: ['50/50 portrait + content', 'Highest (portrait)', 'CTA → page', 'Medium', '◐ Familiar', 'Burned-before homeowner', 'Medium', 'High'],
    E: ['Editorial · slow scroll', 'Medium', 'CTA → page', 'Highest', '◐ Familiar', 'Older / literate', 'Highest', 'Medium'],
  };
  return (
    <div className="pal" style={{ width: 1440, padding: '64px 56px', background: '#FAF8F3' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>Comparison matrix</div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', maxWidth: 900, lineHeight: 1.05, marginBottom: 32 }}>Five executions of one direction. Pick the one that fits.</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
        <thead>
          <tr style={{ borderTop: '1.5px solid #1F2428', borderBottom: '1px solid #1F2428' }}>
            <th className="caps" style={{ textAlign: 'left', padding: '16px 14px', width: 220 }}>Criterion</th>
            {['A · Ridgeline', 'B · Quiet Type', 'C · The Protocol', 'D · Owner Portrait', 'E · Reading Room'].map(h => (
              <th key={h} className="caps" style={{ textAlign: 'left', padding: '16px 14px', fontWeight: 600 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((c, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #D7D2C7' }}>
              <td style={{ padding: '16px 14px', color: '#3E4A55', fontWeight: 500 }}>{c}</td>
              {['A','B','C','D','E'].map(k => (
                <td key={k} style={{ padding: '16px 14px', color: '#1F2428' }}>{data[k][i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
        <div>
          <div className="caps" style={{ color: '#A66A3D', marginBottom: 12 }}>Top recommendation</div>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 16 }}>C — The Protocol.</h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#3A3F44' }}>It carries the structure the owners already chose (Concept 5's 4-step Protocol, ZIP-first form, stat strip), drops the dispatch-board urgency they didn't want, and keeps the form at highest prominence — the live site's measurable strength. The photo is supportive, not decorative; the typography is the locked Fraunces direction; the page reads like a small, careful company.</p>
        </div>
        <div>
          <div className="caps" style={{ color: '#A66A3D', marginBottom: 12 }}>If Christian's on-roof portrait doesn't land in 30 days</div>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 16 }}>Recommendation holds. D drops to a tie with B.</h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#3A3F44' }}>C does not depend on the pending portrait — its hero photo is one of the existing aerials. D, by contrast, is hero-photo-bound: the studio headshot works, but the on-roof-with-Atlas-sample variant would be stronger. If that shot slips, recommend B as the typography-led alternative — same restraint, no portrait dependency, highest AI-citation density of the five.</p>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { PalFooter, StickyBarShowcase, ComparisonMatrix });
