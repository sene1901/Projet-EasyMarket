import { useState } from "react";

const faqs = [
  {
    question: "EasyMarket est-il adapté à mon activité ?",
    answer:
      "Oui. EasyMarket est conçu pour s'adapter à différents types de commerces : boutiques de prêt-à-porter, revendeurs, marques locales, commerces multimarques ou encore entrepreneurs qui souhaitent mieux structurer leur activité. Que vous soyez seul ou avec une équipe, EasyMarket vous aide à mieux gérer et piloter votre business.",
  },
  {
    question: "Puis-je ajouter plusieurs vendeurs ?",
    answer:
      "Oui. Vous pouvez créer plusieurs comptes utilisateurs selon votre organisation. Chaque vendeur peut avoir un accès limité (enregistrement des ventes, dépenses…), tandis que le compte principal garde une vue complète sur toute l'activité.",
  },
  {
    question: "Puis-je suivre mon activité à distance ?",
    answer:
      "Oui. EasyMarket vous permet de suivre votre activité en temps réel, où que vous soyez. Vous pouvez consulter vos ventes, votre stock, vos dépenses et vos performances. Cela vous permet de garder le contrôle même en étant absent de votre boutique.",
  },
  {
    question: "EasyMarket fonctionne-t-il avec des imprimantes ?",
    answer:
      "Oui. EasyMarket est compatible avec plusieurs types d'imprimantes professionnelles : Imprimantes Bluetooth (idéales pour une utilisation simple et mobile) et imprimantes connectées par câble (USB ou réseau Ethernet). Par exemple, EasyMarket fonctionne avec des imprimantes de type Epson TM‑T82III. Vous pouvez facilement imprimer des tickets de caisse et des factures.",
  },
  {
    question: "Puis-je avoir un site e-commerce avec EasyMarket ?",
    answer:
      "Oui. EasyMarket vous permet d'avoir un site e-commerce connecté directement à votre application. Vos produits, votre stock et vos commandes sont synchronisés automatiquement, ce qui vous permet de gérer votre activité en ligne et en magasin depuis un seul outil.",
  },
  {
    question: "Combien de temps faut-il pour démarrer ?",
    answer:
      "Quelques minutes suffisent pour commencer. Vous pouvez créer votre compte, ajouter vos produits et commencer à enregistrer vos ventes. L'outil est conçu pour être simple, rapide et accessible.",
  },
  {
    question: "Puis-je changer de formule plus tard ?",
    answer:
      "Oui. Vous pouvez changer de formule à tout moment en fonction de l'évolution de votre activité. EasyMarket s'adapte à votre croissance.",
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer:
      "Oui. Vos données sont sécurisées et stockées de manière fiable. Nous mettons en place des bonnes pratiques techniques pour garantir la confidentialité et la protection de vos informations.",
  },

 {
    question: "Est-ce que je peux tester avant de payer ?",
    answer:
      "Oui. Une période d’essai est proposée pour vous permettre de découvrir EasyMarket et voir comment l’outil peut vous aider dans votre activité."
  },

  {
    question: "EasyMarket nécessite-t-il des compétences techniques ?",
    answer:
      "Non. EasyMarket est conçu pour être simple à utiliser, même sans compétences techniques.L’interface est intuitive et vous permet de prendre en main l’outil rapidement."
  },


   {
    question: "EasyMarket nécessite-t-il des compétences techniques ?",
    answer:
      "Oui. EasyMarket s’adapte à différents types de produits produits à taille unique produits avec tailles et prix variables produits avec couleurs ou variantes produits avec ou sans gestion de stock"

  },


    {
    question: "Puis-je suivre mes encaissements et mes dépenses ? ",
    answer:
      "Oui. EasyMarket vous permet de suivre précisément : vos entrées d’argent (ventes) vos sorties d’argent (dépenses) Vous avez ainsi une vision claire de votre activité financière."

  },







];

function PlusMinusIcon({ open }) {
  return (
    <span
      className={`flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0 transition-colors duration-200 ${
        open
          ? "border-orange-400 text-orange-400"
          : "border-amber-400 text-amber-400"
      }`}
    >
      {open ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="mb-3">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 rounded-full bg-white hover:bg-[#EDEEF0] transition-all duration-200"
      >
        <span className="text-[15px] font-medium text-gray-900 leading-snug">
          {item.question}
        </span>
        <PlusMinusIcon open={isOpen} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-900 leading-[1.7]">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Frequence() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-[#F5F5F5B2]">
      <div className="px-4 py-12 max-w-2xl mx-auto my-5">
        <h2 className="text-[clamp(24px,5vw,38px)] font-bold text-center text-black mb-8">
          Questions fréquemment posées
        </h2>
        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}