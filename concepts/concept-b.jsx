/* Concept B — "Quiet Type" — typography-led, no hero photo */

const ConceptB_HeroDesktop = () => (
  <div className="pal" style={{ width: 1440, height: 900, overflow: 'hidden', background: '#F2EFE9' }}>
    <PalNav variant="charcoal" />
    <div style={{ padding: '88px 80px 0', position: 'relative', height: 'calc(100% - 67px)' }}>
      <div className="caps num" style={{ color: '#3E4A55', marginBottom: 36 }}>§01 — Palisade Roofing · Jonesborough, TN · Est. 2020</div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 108, lineHeight: 0.98, letterSpacing: '-0.035em', color: '#1F2428', maxWidth: 1280 }}>
        Roof replacement<br/>in <span style={{ fontStyle: 'italic', fontWeight: 500, color: '#3E4A55' }}>Jonesborough,&nbsp;TN</span><br/>and 13 surrounding cities,<br/>since 2020.
      </h1>
      <hr className="hr-charcoal" style={{ margin: '56px 0 32px', maxWidth: 1280 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'start' }}>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: '#1F2428', maxWidth: 660, fontWeight: 400 }}>
          Asphalt shingle and standing-seam metal. <span className="num">$13,500–$48,000</span> typical project range. Free written estimate within 48 hours, with measurements and photos. Christian Chambers signs every job.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', alignItems: 'center' }}>
          <a className="btn btn-charcoal num" style={{ padding: '16px 22px' }}>(423) 549-2065</a>
          <a className="btn btn-cedar" style={{ padding: '16px 24px' }}>Schedule estimate →</a>
        </div>
      </div>
    </div>
  </div>
);

const ConceptB_StatStrip = () => (
  <div className="pal" style={{ width: 1440, padding: '36px 80px', background: '#F2EFE9', borderTop: '1px solid #D7D2C7', borderBottom: '1px solid #D7D2C7' }}>
    <StatStrip divided={true} />
  </div>
);

const ConceptB_PhotoStrip = () => (
  <div className="pal" style={{ width: 1440, padding: '0', background: '#F2EFE9' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 0 }}>
      <div style={{ height: 380, backgroundImage: "url(assets/img/02-aerial-wraparound.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div style={{ height: 380, backgroundImage: "url(assets/img/04-metal-roof.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div style={{ height: 380, backgroundImage: "url(assets/img/05-topdown-bristol.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '14px 80px 0', borderTop: '1px solid #D7D2C7' }}>
      <div className="caps num" style={{ padding: '14px 0', color: '#3E4A55' }}>Fig. 01 — Wraparound, Jonesborough · Asphalt</div>
      <div className="caps num" style={{ padding: '14px 16px', color: '#3E4A55' }}>Fig. 02 — Standing-seam, Jonesborough</div>
      <div className="caps num" style={{ padding: '14px 16px', color: '#3E4A55' }}>Fig. 03 — Top-down, Bristol</div>
    </div>
  </div>
);

const ConceptB_OwnerNote = () => (
  <div className="pal" style={{ width: 1440, padding: '88px 80px', background: '#F2EFE9' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 56, alignItems: 'start' }}>
      <div>
        <div style={{ aspectRatio: '4/5', backgroundImage: "url(assets/img/07-owner-christian.jpeg)", backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#1F2428' }}></div>
        <div className="caps num" style={{ marginTop: 12, fontSize: 10, color: '#3E4A55' }}>Christian Chambers · Owner · Founded 2020</div>
      </div>
      <div style={{ paddingTop: 12 }}>
        <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>A note from the owner</div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 24, maxWidth: 720 }}>I founded Palisade because I'd watched too many homeowners pay for a salesperson's commission and a roof nobody senior had inspected.</h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3A3F44', maxWidth: 700 }}>On every job I run the drone, write the estimate, and walk the finished roof before the truck leaves. There is no version of this where you don't get me on the phone.</p>
      </div>
    </div>
  </div>
);

const ConceptB_QA = () => {
  const qs = [
    { q: 'How much does a roof replacement cost in Johnson City, TN?', a: 'Most asphalt-shingle replacements in the Tri-Cities run $13,500–$23,500, completed in 1–2 days; standing-seam metal runs $28,000–$48,000 over 3–5 days. Final price depends on roof complexity (hips, valleys, dormers), shingle line (architectural, premium, designer), tear-off vs. overlay, and decking condition discovered after tear-off. We hand you a written, line-itemed estimate after a free on-site inspection — usually within 48 hours of the visit. No deposit required to receive the estimate.' },
    { q: 'Asphalt or metal — which makes sense for a Tri-Cities home?', a: 'For most homeowners staying 7–15 years, an architectural asphalt shingle (Atlas Pinnacle Pristine HP42, GAF Timberline HDZ) is the financially-correct answer: about half the upfront cost, 25–30 year manufacturer warranty, simpler repairs. Standing-seam metal is the right answer if you plan to stay 25+ years, the home has the right pitch, or the property is in heavy tree-fall territory. We will tell you which one fits your situation, on the inspection visit, before either of us writes anything down.' },
    { q: 'Do you handle insurance claims?', a: 'We document the loss and prepare the estimate your adjuster recognizes. We do not negotiate with your insurer on your behalf. Per Tenn. Code Ann. § 56-6-903(d)(3), only a licensed public adjuster or attorney can do that — and a roofer who claims to "fight your insurance company" is either misinformed or breaking state law. What we do, every single claim: drone aerials, walked inspection, photo-by-photo damage report, Xactimate-comparable line-itemed estimate, and supplements when we find unexpected scope.' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 80px', background: '#FAF8F3' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 40 }}>§02 — Honest answers</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 56, maxWidth: 1100 }}>
        {qs.map((qa, i) => (
          <div key={i}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 38, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 20, maxWidth: 920 }}>{qa.q}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3A3F44', maxWidth: 880 }}>{qa.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConceptB_CompareTable = () => {
  const rows = [
    { type: 'Architectural asphalt', range: '$13,500–$23,500', timeline: '1–2 days', warranty: '25–30 yr mfr · 10 yr workmanship', life: '20–25 yr typical' },
    { type: 'Premium / designer asphalt', range: '$18,000–$28,000', timeline: '1–2 days', warranty: '50 yr mfr · 10 yr workmanship', life: '25–30 yr typical' },
    { type: 'Standing-seam metal', range: '$28,000–$48,000', timeline: '3–5 days', warranty: '40 yr finish · 10 yr workmanship', life: '40–60 yr typical' },
    { type: 'Targeted repair', range: 'From $385', timeline: 'Same / next day', warranty: '1 yr workmanship', life: 'Buys 2–10 years' },
  ];
  return (
    <div className="pal" style={{ width: 1440, padding: '88px 80px', background: '#F2EFE9' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 22 }}>§03 — Compared, line by line</div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 52, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 40, maxWidth: 900 }}>Four ways forward, written down so you can compare us to anyone.</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
        <thead>
          <tr style={{ borderTop: '1.5px solid #1F2428', borderBottom: '1px solid #1F2428' }}>
            {['System', 'Typical range', 'Install time', 'Warranty', 'Service life'].map((h, i) => (
              <th key={i} className="caps" style={{ textAlign: 'left', padding: '14px 12px', fontWeight: 600, color: '#1F2428' }}>{h}</th>
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

const ConceptB_Reviews = () => (
  <div className="pal" style={{ width: 1440, padding: '88px 80px', background: '#FAF8F3' }}>
    <div className="caps" style={{ color: '#A66A3D', marginBottom: 22 }}>§04 — Verifiable reviews</div>
    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', maxWidth: 900, marginBottom: 28, lineHeight: 1.1 }}>The numbers, exactly as they read on Google.</h2>
    <p style={{ fontSize: 19, lineHeight: 1.65, maxWidth: 940, color: '#1F2428' }}>
      104 Google reviews, average 5.0 stars: 102 five-star, 1 four-star, 1 one-star, none filtered. Christian's first name appears in 40; "professional" in 39; "quote" in 19; "metal" in 13; "communication" in 11; "estimate" in 8.
    </p>
    <a className="caps" style={{ display: 'inline-block', marginTop: 32, color: '#1F2428', borderBottom: '1px solid #1F2428', paddingBottom: 4 }}>Read all 104 on Google →</a>
  </div>
);

const ConceptB_HeroMobile = () => (
  <div className="pal" style={{ width: 375, height: 812, overflow: 'hidden', background: '#F2EFE9', position: 'relative' }}>
    <PalNavMobile variant="charcoal" />
    <div style={{ padding: '40px 22px 0' }}>
      <div className="caps" style={{ color: '#3E4A55', marginBottom: 22, fontSize: 10 }}>§01 — Palisade Roofing · Est. 2020</div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 44, lineHeight: 1.0, letterSpacing: '-0.03em', color: '#1F2428' }}>
        Roof replacement in <span style={{ fontStyle: 'italic', color: '#3E4A55' }}>Jonesborough,&nbsp;TN</span> and 13 surrounding cities, since 2020.
      </h1>
      <hr className="hr-charcoal" style={{ margin: '28px 0 20px' }} />
      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#3A3F44', marginBottom: 22 }}>Asphalt and metal. <span className="num">$13,500–$48,000</span> typical range. Free written estimate within 48 hours.</p>
      <a className="btn btn-cedar" style={{ width: '100%', padding: 14, marginBottom: 10 }}>Schedule estimate →</a>
      <a className="btn btn-charcoal num" style={{ width: '100%', padding: 14 }}>(423) 549-2065</a>
      <hr className="hr" style={{ margin: '24px 0 16px' }} />
      <div className="caps num" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, color: '#3E4A55' }}>
        <span>5.0 ★ · 104 reviews</span>
        <span>Atlas Platinum*</span>
        <span>10-yr warranty</span>
      </div>
    </div>
    <StickyTap />
  </div>
);

Object.assign(window, { ConceptB_HeroDesktop, ConceptB_HeroMobile, ConceptB_StatStrip, ConceptB_QA, ConceptB_CompareTable, ConceptB_Reviews, ConceptB_PhotoStrip, ConceptB_OwnerNote });
