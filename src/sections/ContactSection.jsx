import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({
    nom: '', email: '', tel: '', formule: '', source: '', message: '', consent: false
  });

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const inputClass = "w-full bg-white border-none rounded-[10px] px-4 py-3 text-[13px] font-medium text-[#1a1a1a] outline-none appearance-none font-[Montserrat]";
  const labelClass = "text-[13px] font-semibold text-white mb-[6px] block";

  return (
    <section className="bg-white py-[80px] px-6 font-[Montserrat]">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-[clamp(24px,5vw,38px)] font-black text-[#1a1a1a] mb-2">
          Contactez-nous
        </h2>
        <p className="text-[15px] text-[#888] font-normal">
          Notre équipe est là pour vous aider
        </p>
      </div>

      {/* Card */}
      <div className="max-w-[600px] mx-auto bg-gradient-to-br from-[#105088] to-[#053965] rounded-[20px] p-8 md:p-10">

        {/* Nom + Email — 1 colonne mobile, 2 colonnes desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Nom</label>
            <input name="nom" value={form.nom} onChange={handle} className={inputClass} type="text" />
          </div>
          <div>
            <label className={labelClass}>E-mail (optionnel)</label>
            <input name="email" value={form.email} onChange={handle} className={inputClass} type="email" />
          </div>
        </div>

        {/* Téléphone */}
        <div className="mb-4">
          <label className={labelClass}>Numéro sur lequel on peut vous joindre *</label>
          <input name="tel" value={form.tel} onChange={handle} className={inputClass} type="tel" />
        </div>

        {/* Formule */}
        <div className="mb-4">
          <label className={labelClass}>Sur quelle formule souhaitez-vous partir ? *</label>
          <div className="relative">
            <select
              name="formule"
              value={form.formule}
              onChange={handle}
              className={`${inputClass} cursor-pointer ${!form.formule ? 'text-[#aaa]' : 'text-[#1a1a1a]'}`}
            >
              <option value="" disabled>Sélectionnez</option>
              <option>Formule Starter</option>
              <option>Formule Pro</option>
              <option>Formule Enterprise</option>
            </select>
            <span className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-[#888]">▼</span>
          </div>
        </div>

        {/* Source */}
        <div className="mb-4">
          <label className={labelClass}>Comment vous nous avez connu ? *</label>
          <div className="relative">
            <select
              name="source"
              value={form.source}
              onChange={handle}
              className={`${inputClass} cursor-pointer ${!form.source ? 'text-[#aaa]' : 'text-[#1a1a1a]'}`}
            >
              <option value="" disabled>Sélectionnez</option>
              <option>Réseaux sociaux</option>
              <option>Bouche à oreille</option>
              <option>Google</option>
              <option>Événement</option>
              <option>Autre</option>
            </select>
            <span className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-[#888]">▼</span>
          </div>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className={labelClass}>
            Pourriez-vous nous expliquer brièvement votre business ? ou nous dire vos attentes par rapport à EASYMARKET. *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            className={`${inputClass} resize-none h-[100px] leading-[1.5]`}
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-[10px] mb-6">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={form.consent}
            onChange={handle}
            className="w-4 h-4 mt-[2px] shrink-0 cursor-pointer accent-[#053965]"
          />
          <label htmlFor="consent" className="text-[12px] font-medium text-white/90 leading-[1.5] cursor-pointer">
            En remplissant ce formulaire, j'autorise l'équipe EasyMarket à me contacter pour d'éventuelles discussions.
          </label>
        </div>

        {/* Bouton */}
        <button
          onClick={() => {}}
          className="w-full bg-[#FFA800] hover:bg-[#eb8614] text-white border-none rounded-[10px] py-[15px] text-[14px] font-extrabold tracking-[1.5px] uppercase cursor-pointer transition-colors duration-200"
        >
          Envoyer
        </button>

      </div>
    </section>
  );
}