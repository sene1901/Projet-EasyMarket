import logoOFII       from '../assets/OFII.png';
import logoVolkeno    from '../assets/volkeno.png';
import logoMVP        from '../assets/mvp.png';
import logoKPC        from '../assets/kpc.png';
import logoImpactHub  from '../assets/hub.png';
import logoPitchPalabre from '../assets/pp.png';
import logoOrange from '../assets/Orange.png';
const PARTNERS = [
  { src: logoOFII,         alt: 'OFII',              },
  { src: logoVolkeno,      alt: 'Volkeno',            },
  { src: logoMVP,          alt: 'MVP Lab 221',       },
  { src: logoKPC,          alt: 'KPC Consortium',    },
  { src: logoImpactHub,    alt: 'Impact HUB Dakar',   },
  { src: logoPitchPalabre, alt: 'Pitch Palabre',      },
    { src: logoOrange, alt: 'orange',     },
];

export default function PartenairesSection() {
  return (
    <section className="bg-white py-[85px] px-6 mt-[60px]">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-[30px] font-black text-[#1a1a1a] mb-[10px]">
          Nos Partenaires Institutionnels
        </h2>
        <p className="text-[15px] font-normal text-[#1a1a1a] leading-[1.6]">
          Ils nous accompagnent dans notre mission de digitalisation du commerce
        </p>
      </div>

      {/* Logos */}
      <div className="flex items-center justify-center gap-8 flex-wrap max-w-[1100px] mx-auto">
        {PARTNERS.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-center opacity-85 transition-all duration-200 cursor-pointer bg-white rounded-lg px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:opacity-100 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]"
          >
           <img
  src={p.src}
  alt={p.alt}
  className="w-[100px] h-[60px] object-contain block"
/>
          </div>
        ))}
      </div>

    </section>
  );
}