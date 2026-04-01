import { motion } from 'framer-motion'
import BoutiqueCard from '../components/BoutiqueCard'

/**
 * Les images sont dans /public/boutiques/
 * Remplace les chemins par les vraies images de chaque boutique.
 * On utilise ici la même image city.png pour la démo —
 * en production chaque boutique aura sa propre capture d'écran.
 */
const boutiques = [
  {
    name: 'Grandkabir',
    previewLabel: 'Grandkabir',
    image: '/boutiques/city.png',
    description:
      'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnu pour nos services informatiques.',
    link: '#',
  },
  {
    name: 'Yeksina Home',
    previewLabel: 'YEKSINA HOME',
    image: '/boutiques/city.png',
    description:
      'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques.',
    link: '#',
  },
  {
    name: 'Kazamansa',
    previewLabel: 'KAZAMANSA',
    image: '/boutiques/city.png',
    description:
      'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques.',
    link: '#',
  },
  {
    name: 'All-In-Tech',
    previewLabel: 'ALL-IN-TECH',
    image: '/boutiques/city.png',
    description:
      'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnus pour nos services informatiques.',
    link: '#',
  },
]

export default function BoutiquesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Titre ── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Visitez les{' '}
            <span style={{ color: '#F97316' }}>boutiques</span>
            {' '}de nos clients
          </h2>
          <p className="text-gray-500 text-base">
            Découvrez les boutiques de nos clients
          </p>
          <p className="text-gray-500 text-base">
            Des commerçants qui utilisent EasyMarket au quotidien
          </p>
        </motion.div>

        {/* ── Grille 4 colonnes responsive ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {boutiques.map((b, i) => (
            <BoutiqueCard
              key={b.name + i}
              {...b}
              delay={i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}