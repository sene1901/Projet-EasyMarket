import React from "react";
import phone from "../assets/phone2.png";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/google-play.png";

export default function Hero() {
  return (
    <section
      className="relative bg-[#053965] flex flex-col items-center justify-start overflow-hidden"
      style={{ paddingTop: "60px" }}
    >
      {/* Glow */}
      <div className="absolute w-[900px] h-[900px] top-[80px] left-1/2 -translate-x-1/2 rounded-full 
        bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(5,57,101,0)_70%)]" />

      {/* TEXT */}
     <h1
  className="text-center z-10 px-4 text-white"
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 800,
    fontSize: "clamp(22px, 4.5vw, 35px)",
    lineHeight: "1.2",
    letterSpacing: "-0.5px",
    marginTop: "30px"
  }}
>
  Votre commerce,{" "}
  <span style={{ color: "#F59E0B" }}>sous contrôle</span>{" "}
  24h/24.
</h1>

    <p
  className="text-center z-10 px-4 text-white"
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "clamp(16px, 2vw, 20px)",
    lineHeight: "1.6",
    maxWidth: "600px",
    marginTop: "16px",
    opacity: 0.9
  }}
>
  Stock, caisse, ventes, tout en temps réel depuis votre téléphone.
</p>

      {/* PHONE + BADGES */}
      <div
        className="relative z-10"
        style={{ marginTop: "52px", width: "100%", maxWidth: "860px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}
      >
        {/* GOOGLE PLAY */}
        <img
          src={googlePlay}
          alt="Google Play"
          className="hidden md:block"
          style={{
            width: "250px",
            position: "absolute",
            left: "0",
            top: "120px",
          
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />

        {/* PHONE — centré, dépasse en bas */}
        <img
          src={phone}
          alt="phone"
          style={{
            width: "250px",
            display: "block",
            marginBottom: "-120px",  /* coupe le bas du téléphone */
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
            position: "relative",
            zIndex: 2,
          }}
        />

        {/* APP STORE */}
        <img
          src={appStore}
          alt="App Store"
          className="hidden md:block"
          style={{
            width: "220px",
            position: "absolute",
            right: "0",
            top: "120px",
          
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
}