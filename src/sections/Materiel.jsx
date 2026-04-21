import React from "react";
import printer1 from "../assets/ticket.png";
import printer2 from "../assets/equipe1.png";
import MaterielCard from "../components/MaterielCard";

export default function Matériel() {
  const products = [
    { id: 1, name: "Nom du produit", price: "50.000", image: printer1 },
    { id: 2, name: "Nom du produit", price: "50.000", image: printer2 },
  ];

  return (
    <section id="equipements" className="py-16 px-6 bg-white">
      <h2 className="text-[clamp(24px,5vw,38px)] font-extrabold text-center text-[#111827] mb-10">
        Matériel &amp; équipements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {products.map((product) => (
          <MaterielCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}