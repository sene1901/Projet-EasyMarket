import { motion } from 'framer-motion';

export default function BoutiqueCard({ name, description, image, url = '', link = '#', delay = 0 }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden flex flex-col h-full"
      style={{ border: '1px solid #eee', boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
    >
      {/* ── Preview navigateur ── */}
      <div style={{ height: 160, position: 'relative', overflow: 'hidden', background: '#f5f5f5' }}>
        {/* Barre navigateur */}
        <div style={{ background: '#f0f0f0', borderBottom: '1px solid #e0e0e0', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840' }} />
          </div>
          <div style={{ flex: 1, background: '#fff', borderRadius: 4, height: 16, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
            <span style={{ fontSize: 9, color: '#999', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {url || `${name.toLowerCase().replace(/\s/g, '')}.easymarket.sn`}
            </span>
          </div>
        </div>

        {/* Screenshot ou placeholder */}
        {image ? (
          <img src={image} alt={`Aperçu ${name}`}
            style={{ width: '100%', height: 'calc(160px - 29px)', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        ) : (
          <div style={{ width: '100%', height: 'calc(160px - 29px)', background: 'linear-gradient(135deg,#1a2e4a,#2a4a6e)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 18, fontWeight: 900, letterSpacing: 2, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{name.toUpperCase()}</span>
          </div>
        )}
      </div>

      {/* ── Texte ── */}
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a1a', marginBottom: 8 }}>{name}</h3>
        <p style={{ fontSize: 13, color: '#888', lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{description}</p>
        <a href={link} style={{ fontSize: 13, fontWeight: 700, color: '#FF6B00', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          Visiter la boutique <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}