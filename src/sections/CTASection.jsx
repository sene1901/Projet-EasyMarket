import phone from '../assets/phone.png';

export default function CTASection() {
  return (
    
    <section style={{ background: '#F7F8FA', paddingBottom: 0 }}>
      <div style={{ background: '#FF6B00', padding: '70px 48px 0' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px', alignItems: 'flex-end',   
        }} className="cta-inner">

          {/* Gauche — padding bas pour espacer du bord orange */}
          <div style={{ paddingBottom: '70px' }}>
            <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Prêt à mieux piloter votre<br />commerce ?
            </h2>
            <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '420px' }}>
              Rejoignez les commerçants qui utilisent EasyMarket pour suivre leurs chiffres,
              mieux contrôler leur activité et prendre de meilleures décisions.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <button style={{ background: '#fff', color: '#1a1a1a', border: '2px solid #fff', padding: '13px 26px', borderRadius: '30px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >Demander une démo</button>
              <button style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.8)', padding: '13px 26px', borderRadius: '30px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >Commencer maintenant</button>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { sub: 'GET IT ON', name: 'Google Play', icon: 'gplay' },
                { sub: 'Available on the', name: 'App Store', icon: 'apple' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#111', borderRadius: '10px', padding: '10px 18px', cursor: 'pointer', minWidth: '150px' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#222'}
                  onMouseLeave={e => e.currentTarget.style.background = '#111'}
                >
                  <div>
                    <span style={{ fontSize: '9px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>{s.sub}</span>
                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#fff', display: 'block' }}>{s.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone — margin-bottom négatif = déborde sous l'orange */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '-60px' }}>
            <img src={phone} alt="EasyMarket App"
              style={{
                width: '360px', maxWidth: '100%', display: 'block',
                filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.25))',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

        </div>
      </div>
    </section>
  );
}