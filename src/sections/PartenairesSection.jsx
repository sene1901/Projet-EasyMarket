// imports des logos
import logoOFII       from '../assets/OFII.png';
import logoVolkeno    from '../assets/volkeno.png';
import logoMVP        from '../assets/mvp.png';
import logoKPC        from '../assets/kpc.png';
import logoImpactHub  from '../assets/hub.png';
import logoPitchPalabre from '../assets/pp.png';

const PARTNERS = [
  { src: logoOFII,         alt: 'OFII',             height: '60px' },
  { src: logoVolkeno,      alt: 'Volkeno',           height: '60px' },
  { src: logoMVP,          alt: 'MVP Lab 221',       height: '44px', dark: true },
  { src: logoKPC,          alt: 'KPC Consortium',    height: '56px' },
  { src: logoImpactHub,    alt: 'Impact HUB Dakar',  height: '44px' },
  { src: logoPitchPalabre, alt: 'Pitch Palabre',     height: '60px' },
];

export default function PartenairesSection() {
  return (
    <section style={{ background: '#fff', padding: '80px 24px',marginTop: '30px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#1a1a1a', marginBottom: '10px' }}>
          Nos Partenaires Institutionnels
        </h2>
        <p style={{ fontSize: '15px', fontWeight: 400, color: '#999', lineHeight: 1.6 }}>
          Ils nous accompagnent dans notre mission de digitalisation du commerce
        </p>
      </div>

      {/* Logos */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '48px',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {PARTNERS.map((p, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.85,
              transition: 'opacity 0.2s, transform 0.2s',
              cursor: 'pointer',
              // fond noir pour MVP Lab qui a un logo sur fond sombre
              ...(p.dark && {
                background: '#000',
                borderRadius: '8px',
                padding: '8px 12px',
              }),
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '0.85';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={p.src}
              alt={p.alt}
              style={{
                height: p.height,
                width: 'auto',
                maxWidth: '140px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}