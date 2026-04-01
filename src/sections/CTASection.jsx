import phone from '../assets/phone.png'; // ← votre image

export default function CTASection() {
  return (
    <section style={{ padding: '60px 24px', background: '#F7F8FA' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        background: '#FF6B00', borderRadius: '24px',
        padding: '60px 56px 0',
        display: 'grid', gridTemplateColumns: '1fr 340px',
        gap: '40px', alignItems: 'flex-end',
        overflow: 'hidden', position: 'relative',
      }}
        className="cta-inner"
      >
        {/* Cercles décoratifs */}
        <div style={{ position:'absolute', width:'320px', height:'320px', borderRadius:'50%', background:'rgba(255,255,255,0.06)', top:'-100px', right:'360px', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:'180px', height:'180px', borderRadius:'50%', background:'rgba(255,255,255,0.04)', bottom:'-40px', left:'40px', pointerEvents:'none' }} />

        {/* Contenu gauche */}
        <div style={{ paddingBottom: '60px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '18px' }}>
            Prêt à mieux piloter<br />votre commerce ?
          </h2>
          <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '430px' }}>
            Rejoignez les commerçants qui utilisent EasyMarket pour suivre leurs chiffres,
            mieux contrôler leur activité et prendre de meilleures décisions.
          </p>

          {/* Boutons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <button style={{ background: '#fff', color: '#053965', border: 'none', padding: '13px 26px', borderRadius: '30px', fontSize: '14px', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >Demander une démo</button>
            <button style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.65)', padding: '13px 26px', borderRadius: '30px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Commencer maintenant</button>
          </div>

          {/* Store badges */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { sub: 'GET IT ON', name: 'Google Play' },
              { sub: 'Available on the', name: 'App Store' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgba(0,0,0,0.22)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '10px', padding: '9px 16px', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.38)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.22)'; }}
              >
                <div>
                  <span style={{ fontSize: '9px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.6px', display: 'block' }}>{s.sub}</span>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff', display: 'block' }}>{s.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone — aligné en bas */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <img src={phone} alt="EasyMarket App"
            style={{  width: '370px',
                minHeight: '500px', maxWidth: '100%', display: 'block', transition: 'transform 0.4s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04) rotate(-1deg)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
          />
        </div>
      </div>
    </section>
  );
}