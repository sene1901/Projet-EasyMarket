import React from "react";
import printer1 from "../assets/ticket.png";
import printer2 from "../assets/equipe1.png";
import MaterielCard from "../components/MaterielCard";

export default function Materiel() {
  const products = [
    {
      id: 1,
      name: "Nom du produit",
      price: "50.000",
      image: printer1,
    },
    {
      id: 2,
      name: "Nom du produit",
      price: "50.000",
      image: printer2,
    },
  ];

  return (
    <section  id='equipements' style={{ padding: "64px 24px", backgroundColor: "#ffffff" }}>

      {/* Title */}
      <h2 style={{
        fontSize: "38px",
        fontWeight: "800",
        textAlign: "center",
        color: "#111827",
        marginBottom: "40px",
      }}>
        Matériel &amp; équipements
      </h2>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "24px",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {products.map((product) => (
          <MaterielCard key={product.id} {...product} />
        ))}
      </div>

    </section>
  );
}