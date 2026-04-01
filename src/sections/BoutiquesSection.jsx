import elkabir   from '../assets/02965cea803fb31494295861577549206fc817ff.png';
import yeksina   from '../assets/073f92e4f539820977f47cb63752cbd1dc22a925.png';
import kazamansa from '../assets/904b6457b2e81c71953014b2a3bb66572e07a2fb.png';

const CLIENTS = [
  {
    img: elkabir,
    name: 'El Kabir Sénégal',
    desc: 'Carreaux, peintures, parfums d\'ambiance & divers — tout ce qu\'il vous faut, au bon moment.',
    tag: 'E-commerce',
    href: '#',
  },
  {
    img: yeksina,
    name: 'Yeksina Home',
    desc: 'La déco qui nous rassemble — carrelage au design africain pour sublimer vos espaces.',
    tag: 'Décoration',
    href: '#',
  },
    {
    img: yeksina,
    name: 'Yeksina Home',
    desc: 'La déco qui nous rassemble — carrelage au design africain pour sublimer vos espaces.',
    tag: 'Décoration',
    href: '#',
  },
  {
    img: kazamansa,
    name: 'Kazamansa',
    desc: 'Inspiration & innovation — mobilier et décoration intérieure au style africain contemporain.',
    tag: 'Mobilier',
    href: '#',
  },
];

export default function ClientsSection() {
  return (
    <section id='clients' style={{ background: '#F7F8FA', padding: '80px 24px', fontFamily: 'Nunito, sans-serif' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#1a1a1a', marginBottom: '10px' }}>
          Ils nous font confiance
        </h2>
        <p style={{ fontSize: '15px', fontWeight: 400, color: '#999', lineHeight: 1.6 }}>
          Découvrez les commerçants qui gèrent leur activité avec EasyMarket
        </p>
      </div>

      {/* Grid */}
      <div
        className="clients-grid"
        style={{
          maxWidth: '970px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px',
        }}
      >
        {CLIENTS.map((c, i) => (
          <div
            key={i}
            style={{
              background: '#fff', borderRadius: '16px', overflow: 'hidden',
              border: '1px solid #f0f0f0', boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
            }}
          >
            {/* Image */}
            <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
              <img
                src={c.img} alt={c.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top',
                  display: 'block', transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Body */}
            <div style={{ padding: '18px 20px 22px' }}>
              <p style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a', marginBottom: '6px' }}>
                {c.name}
              </p>
              <p style={{ fontSize: '13px', fontWeight: 400, color: '#888', lineHeight: 1.5, marginBottom: '14px' }}>
                {c.desc}
              </p>
              <span style={{
                display: 'inline-block', background: '#FFF3E8', color: '#FF6B00',
                fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px',
              }}>
                {c.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}