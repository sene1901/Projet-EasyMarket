import { useState } from 'react';

const inputStyle = {
  width: '100%', background: '#fff', border: 'none', borderRadius: '10px',
  padding: '12px 16px', fontSize: '13px', fontWeight: 500, color: '#1a1a1a',
  fontFamily: 'inherit', outline: 'none', appearance: 'none',
};

const labelStyle = { fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '6px', display: 'block' };

export default function ContactSection() {
  const [form, setForm] = useState({ nom:'', email:'', tel:'', formule:'', source:'', message:'', consent: false });

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <section id="contact" style={{ background: '#F7F8FA', padding: '80px 24px', fontFamily: 'Nunito, sans-serif' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#1a1a1a', marginBottom: '8px' }}>Contactez-nous</h2>
        <p style={{ fontSize: '15px', color: '#888', fontWeight: 400 }}>Notre équipe est là pour vous aider</p>
      </div>

      {/* Card */}
      <div style={{
        maxWidth: '600px', margin: '0 auto',
        background: 'linear-gradient(145deg, #105088, #053965)',
        borderRadius: '20px', padding: '40px 40px 44px',
      }}>

        {/* Nom + Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>Nom</label>
            <input name="nom" value={form.nom} onChange={handle} style={inputStyle} type="text" />
          </div>
          <div>
            <label style={labelStyle}>E-mail (optionnel)</label>
            <input name="email" value={form.email} onChange={handle} style={inputStyle} type="email" />
          </div>
        </div>

        {/* Téléphone */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Numéro sur lequel on peut vous joindre *</label>
          <input name="tel" value={form.tel} onChange={handle} style={inputStyle} type="tel" />
        </div>

        {/* Formule */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Sur quelle formule souhaitez-vous partir ? *</label>
          <div style={{ position: 'relative' }}>
            <select name="formule" value={form.formule} onChange={handle}
              style={{ ...inputStyle, cursor: 'pointer', color: form.formule ? '#1a1a1a' : '#aaa' }}>
              <option value="" disabled>Sélectionnez</option>
              <option>Formule Starter</option>
              <option>Formule Pro</option>
              <option>Formule Enterprise</option>
            </select>
            <span style={{ position:'absolute', right:'14px', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', fontSize:'10px', color:'#888' }}>▼</span>
          </div>
        </div>

        {/* Source */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Comment vous nous avez connu ? *</label>
          <div style={{ position: 'relative' }}>
            <select name="source" value={form.source} onChange={handle}
              style={{ ...inputStyle, cursor: 'pointer', color: form.source ? '#1a1a1a' : '#aaa' }}>
              <option value="" disabled>Sélectionnez</option>
              <option>Réseaux sociaux</option>
              <option>Bouche à oreille</option>
              <option>Google</option>
              <option>Événement</option>
              <option>Autre</option>
            </select>
            <span style={{ position:'absolute', right:'14px', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', fontSize:'10px', color:'#888' }}>▼</span>
          </div>
        </div>

        {/* Message */}
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>
            Pourriez-vous nous expliquer brièvement votre business ? ou nous dire vos attentes par rapport à EASYMARKET. *
          </label>
          <textarea name="message" value={form.message} onChange={handle}
            style={{ ...inputStyle, resize: 'none', height: '100px', lineHeight: 1.5 }} />
        </div>

        {/* Checkbox */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
          <input type="checkbox" name="consent" id="consent" checked={form.consent} onChange={handle}
            style={{ width: '16px', height: '16px', marginTop: '2px', flexShrink: 0, accentColor: '#053965', cursor: 'pointer' }} />
          <label htmlFor="consent" style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, cursor: 'pointer' }}>
            En remplissant ce formulaire, j'autorise l'équipe EasyMarket à me contacter pour d'éventuelles discussions.
          </label>
        </div>

        {/* Bouton */}
        <button
          style={{ width: '100%', background: '#FFA800', color: '#fff', border: 'none', borderRadius: '10px', padding: '15px', fontSize: '14px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#eb8614'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#ec9a1f'; }}
          onClick={() => { /* votre logique d'envoi */ }}
        >
          Envoyer
        </button>
      </div>
    </section>
  );
}