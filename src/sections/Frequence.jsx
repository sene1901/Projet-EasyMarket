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
      "Oui, vous pouvez ajouter plusieurs vendeurs et gérer leurs accès depuis votre tableau de bord.",
  },
  {
    question: "Puis-je suivre mon activité à distance ?",
    answer:
      "Absolument. EasyMarket est accessible depuis n'importe quel appareil connecté à internet.",
  },
  {
    question: "EasyMarket fonctionne-t-il avec des imprimantes ?",
    answer:
      "Oui, EasyMarket est compatible avec la plupart des imprimantes thermiques et classiques.",
  },
  {
    question: "Puis-je avoir un site e-commerce avec EasyMarket ?",
    answer:
      "Oui, EasyMarket propose une option pour créer votre boutique en ligne facilement.",
  },
  {
    question: "Combien de temps faut-il pour démarrer ?",
    answer:
      "La configuration initiale prend moins de 30 minutes. Notre équipe vous accompagne à chaque étape.",
  },
  {
    question: "Puis-je changer de formule plus tard ?",
    answer:
      "Oui, vous pouvez changer de formule à tout moment depuis votre espace client.",
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer:
      "Vos données sont chiffrées et hébergées sur des serveurs sécurisés. Nous appliquons les meilleures pratiques en matière de sécurité.",
  },
];

function PlusMinusIcon({ open }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: `2px solid ${open ? "#fb923c" : "#f1a431"}`,
        color: open ? "#fb923c" : "#f5a42a",
        flexShrink: 0,
        transition: "border-color 0.2s, color 0.2s",
      }}
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
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "12px",
        backgroundColor: "#ffffff",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          textAlign: "left",
          gap: "16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          backgroundColor: isOpen ? "#fbfaf9" : "transparent",
          transition: "background-color 0.15s",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#111827",
            lineHeight: "1.4",
          }}
        >
          {item.question}
        </span>
        <PlusMinusIcon open={isOpen} />
      </button>

      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "400px" : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        <p
          style={{
            padding: "12px 20px 20px",
            fontSize: "14px",
            color: "#6b7280",
            lineHeight: "1.7",
            borderTop: "1px solid #f3f4f6",
            margin: 0,
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Frequence() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        maxWidth: "576px",
        margin: "20px auto",
        padding: "48px 16px",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "700",
          textAlign: "center",
          color: "#111827",
          marginBottom: "32px",
        }}
      >
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
    </section>
  );
}