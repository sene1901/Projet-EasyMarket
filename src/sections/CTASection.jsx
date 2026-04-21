import phone from '../assets/phone5.png';
import google from '../assets/google1.png';
import apple from '../assets/APPLE.png';

export default function CTASection() {
  return (
    <section className="bg-[#053965] pb-0">
      <div className="pt-[70px]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

          {/* Gauche — Texte + boutons */}
          <div className="pb-0 md:pb-[70px] flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[clamp(24px,5vw,38px)] font-black text-white leading-tight mb-9">
              Reprenez le contrôle de<br />
              votre <span className="text-[#FFA800]">business</span> dès<br />
              aujourd'hui
            </h2>

            {/* Boutons */}
            {/* Boutons */}
<div className="flex flex-row gap-3 justify-center md:justify-start">

  {/* Google Play */}
  <div className="flex items-center justify-center w-[140px] md:w-[200px] h-[50px] md:h-[70px] bg-white rounded-lg px-3 md:px-7 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1">
    <img
      src={google}
      alt="Get it on Google Play"
      className="h-[30px] md:h-[40px] w-full object-contain"
    />
  </div>

  {/* App Store */}
  <div className="flex items-center justify-center w-[140px] md:w-[200px] h-[50px] md:h-[70px] bg-white rounded-lg px-3 md:px-7 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1">
    <img
      src={apple}
      alt="Download on App Store"
      className="h-[30px] md:h-[40px] w-full object-contain"
    />
  </div>

</div>
          </div>

          {/* Droite — téléphone */}
          <div className="flex items-end justify-center -mb-[98px] md:-mb-[98px] mt-8 md:mt-0">
            <img
              src={phone}
              alt="EasyMarket App"
              className="
                w-[300px] md:w-[400px] max-w-full block
                drop-shadow-[0_32px_48px_rgba(240,229,229,0.3)]
                rotate-[6deg] -translate-y-2.5
                transition-transform duration-400 ease-in-out
                origin-bottom
                hover:rotate-[4deg] hover:-translate-y-[18px]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}