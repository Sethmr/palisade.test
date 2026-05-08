/* Free Roof Estimate page (/free-roof-estimate/) — 4-step form, mobile + desktop, with post-submit Calendly state */

const FormStepper = ({ step }) => (
  <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
    {[1, 2, 3, 4].map(n => (
      <div key={n} style={{ flex: 1, height: 3, background: n <= step ? '#A66A3D' : '#D7D2C7' }}></div>
    ))}
  </div>
);

const FreeEstimateDesktop = () => (
  <div className="pal" style={{ width: 1440, height: 900, overflow: 'hidden', background: '#F2EFE9' }}>
    <PalNav variant="charcoal" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', height: 'calc(100% - 67px)' }}>
      <div style={{ padding: '64px 64px 0', borderRight: '1px solid #D7D2C7' }}>
        <div className="caps" style={{ color: '#A66A3D', marginBottom: 18 }}>Free roof estimate</div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 56, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 22, maxWidth: 480 }}>Four short questions. A real estimate within 48 hours.</h1>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: '#3A3F44', marginBottom: 36, maxWidth: 460 }}>Christian inspects, measures, and writes the estimate himself. No phone-tag, no salesperson, no commission-driven upsell.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 420 }}>
          {[
            ['Free.', 'No deposit, no obligation, no pressure.'],
            ['Documented.', 'Drone aerials + walked inspection in your file.'],
            ['Written.', 'Real measurements, real line items, real warranty.'],
          ].map(([h, b], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 18, paddingTop: 14, borderTop: '1px solid #D7D2C7' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, fontStyle: 'italic' }}>{h}</div>
              <div style={{ fontSize: 14.5, color: '#3A3F44', lineHeight: 1.55 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '64px 72px', background: '#FAF8F3', display: 'flex', flexDirection: 'column' }}>
        <FormStepper step={2} />
        <div className="caps" style={{ color: '#3E4A55', fontSize: 10, marginBottom: 8 }}>Step 2 of 4</div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 24, lineHeight: 1.1 }}>How old is the roof, and how big is the home?</h2>
        <div className="caps" style={{ fontSize: 10, marginBottom: 8, color: '#3E4A55' }}>Roof age</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 24 }}>
          {['< 10 yr', '10–20 yr', '> 20 yr', 'Not sure'].map((o, i) => (
            <label key={i} style={{ padding: '12px 10px', textAlign: 'center', border: i === 1 ? '1px solid #1F2428' : '1px solid #D7D2C7', background: i === 1 ? '#1F2428' : 'transparent', color: i === 1 ? '#F2EFE9' : '#1F2428', fontSize: 13, fontWeight: 500 }}>{o}</label>
          ))}
        </div>
        <div className="caps" style={{ fontSize: 10, marginBottom: 8, color: '#3E4A55' }}>Home size</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 28 }}>
          {['< 1500 ft²', '1500–2500', '2500–4000', '> 4000'].map((o, i) => (
            <label key={i} style={{ padding: '12px 10px', textAlign: 'center', border: '1px solid #D7D2C7', fontSize: 13, fontWeight: 500 }}>{o}</label>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
          <button className="btn btn-ghost" style={{ padding: '14px 22px' }}>← Back</button>
          <button className="btn btn-cedar" style={{ flex: 1, padding: '14px' }}>Continue →</button>
        </div>
        <p className="caps" style={{ fontSize: 10, marginTop: 14, color: '#6E7A86', textAlign: 'center', letterSpacing: '0.06em' }}>Used by 104+ Tri-Cities homeowners · Avg response under 5 min</p>
      </div>
    </div>
  </div>
);

const FreeEstimatePostSubmit = () => (
  <div className="pal" style={{ width: 1440, height: 900, overflow: 'hidden', background: '#F2EFE9' }}>
    <PalNav variant="charcoal" />
    <div style={{ padding: '56px 80px', height: 'calc(100% - 67px)' }}>
      <div className="caps" style={{ color: '#A66A3D', marginBottom: 14 }}>✓ Submitted · Confirmation sent to you@example.com</div>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 12, maxWidth: 900 }}>Pick a time — typically next-day available.</h1>
      <p style={{ fontSize: 16, color: '#3A3F44', marginBottom: 28, maxWidth: 700 }}>Christian will be on site for the inspection. The visit takes about 45 minutes; you don't need to be home if access to the roof is open.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32, height: 480 }}>
        <div style={{ background: '#FAF8F3', border: '1px solid #E7E2D8', padding: 28 }}>
          <div className="caps" style={{ marginBottom: 18 }}>May 2026</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginBottom: 16 }}>
            {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} className="caps" style={{ textAlign: 'center', fontSize: 10, color: '#6E7A86' }}>{d}</div>)}
            {Array.from({length: 35}, (_, i) => {
              const day = i - 4;
              const valid = day > 0 && day <= 31;
              const today = day === 7;
              const sel = day === 12;
              const wd = i % 7;
              const weekend = wd === 0 || wd === 6;
              return (
                <div key={i} className="num" style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: valid ? (weekend ? '#C0BBB0' : '#1F2428') : 'transparent', background: sel ? '#A66A3D' : (today ? '#E7E2D8' : 'transparent'), color: sel ? '#F2EFE9' : (valid ? (weekend ? '#C0BBB0' : '#1F2428') : 'transparent'), fontWeight: today || sel ? 600 : 400, border: today && !sel ? '1px solid #1F2428' : 'none' }}>{valid ? day : ''}</div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="caps" style={{ marginBottom: 14 }}>Tue · May 12</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['8:30 AM', '10:00 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map((t, i) => (
              <div key={i} className="num" style={{ padding: '12px 16px', border: i === 1 ? '1px solid #1F2428' : '1px solid #D7D2C7', background: i === 1 ? '#1F2428' : '#FAF8F3', color: i === 1 ? '#F2EFE9' : '#1F2428', fontSize: 14, fontWeight: 500 }}>{t}</div>
            ))}
          </div>
          <button className="btn btn-cedar" style={{ width: '100%', padding: 14, marginTop: 16 }}>Confirm 10:00 AM →</button>
        </div>
      </div>
    </div>
  </div>
);

const FreeEstimateMobile = () => (
  <div className="pal" style={{ width: 375, height: 812, overflow: 'hidden', background: '#FAF8F3', position: 'relative' }}>
    <PalNavMobile variant="charcoal" />
    <div style={{ padding: '24px 22px' }}>
      <FormStepper step={3} />
      <div className="caps" style={{ color: '#A66A3D', fontSize: 10, marginBottom: 6 }}>Step 3 of 4</div>
      <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 6 }}>What's the ZIP?</h2>
      <p style={{ fontSize: 13.5, color: '#3A3F44', marginBottom: 20 }}>So we know the city, drive time, and which crew leader is closest.</p>
      <input className="num" defaultValue="37659" style={{ width: '100%', padding: '18px 16px', border: '1.5px solid #1F2428', background: '#FFF', fontSize: 22, fontFamily: 'inherit', letterSpacing: '0.1em', fontWeight: 600 }} />
      <div className="caps num" style={{ marginTop: 12, fontSize: 11, color: '#A66A3D' }}>✓ We serve Jonesborough — drive time ~6 min</div>
      <div style={{ marginTop: 28, padding: 16, background: '#F2EFE9', border: '1px solid #E7E2D8' }}>
        <div className="caps" style={{ fontSize: 9.5, marginBottom: 6, color: '#3E4A55' }}>14 cities served</div>
        <div style={{ fontSize: 12.5, lineHeight: 1.55, color: '#3A3F44' }}>Jonesborough · Johnson City · Kingsport · Bristol · Greeneville · Elizabethton · Erwin · Blountville · Bluff City · Telford · Gray · Piney Flats · Fall Branch · Unicoi</div>
      </div>
      <button className="btn btn-cedar" style={{ width: '100%', marginTop: 20, padding: 14 }}>Continue →</button>
    </div>
  </div>
);

Object.assign(window, { FreeEstimateDesktop, FreeEstimateMobile, FreeEstimatePostSubmit });
