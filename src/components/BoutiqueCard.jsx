import { motion } from 'framer-motion'

/**
 * BoutiqueCard — carte boutique avec vraie image
 * Props :
 *   name        : string  — nom de la boutique
 *   description : string  — texte descriptif
 *   image       : string  — chemin vers l'image (ex: /boutiques/grandkabir.png)
 *   previewLabel: string  — nom affiché en overlay sur l'image
 *   link        : string  — URL de la boutique
 *   delay       : number  — délai animation
 */
export default function BoutiqueCard({
  name,
  description,
  image,
  previewLabel,
  link = '#',
  delay = 0,
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* ── Zone image preview ── */}
      <div className="relative overflow-hidden" style={{ height: 160 }}>

        {/* Image réelle */}
        {image ? (
          <img
            src={image}
            alt={`Aperçu de ${name}`}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          /* Fallback gradient si pas d'image */
          <div
            className="w-full h-full"
            style={{ background: 'linear-gradient(135deg, #1a2e4a, #2a4a6e)' }}
          />
        )}

        {/* Overlay sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Barre navigateur simulée en haut */}
        <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-3 py-1.5"
             style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <div className="w-2 h-2 rounded-full bg-white/50" />
          </div>
          <div className="flex-1 bg-white/25 rounded" style={{ height: 10 }} />
        </div>

        {/* Nom de la boutique en overlay centré */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white font-bold tracking-widest uppercase text-lg"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            {previewLabel || name}
          </span>
        </div>
      </div>

      {/* ── Contenu texte ── */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-2">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>
        <a
          href={link}
          className="text-sm font-semibold inline-flex items-center gap-1 group"
          style={{ color: '#F97316' }}
        >
          Visiter la boutique
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  )
}