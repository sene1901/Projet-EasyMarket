import phone from '../assets/phone5.png';

export default function CTASection() {
  return (
    <section className="bg-[#fcfcfc] pb-0">

      <div className="bg-[#053965] px-12 pt-[70px]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 items-end">

          {/* Gauche */}
          <div className="pb-[70px]">
            <h2 className="text-[38px] font-black text-white leading-tight mb-9">
              Reprenez le contrôle de<br />
              votre <span className="text-[#FFA800]">business</span> dès<br />
              aujourd'hui
            </h2>

            {/* Boutons App Store */}
            <div className="flex gap-3.5 flex-wrap">

              {/* Google Play */}
              <div
                className="flex items-center gap-2.5 bg-white border border-[#e0e0e0] rounded-xl px-5 py-2.5 cursor-pointer min-w-[150px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.5c.32.18.68.2 1.02.06l11.7-11.7L12 8l-8.82 15.5z" fill="#EA4335"/>
                  <path d="M20.5 10.5l-2.8-1.6L13.8 12l3.9 3.9 2.8-1.6c.8-.46.8-1.74 0-2.2z" fill="#FBBC05"/>
                  <path d="M4.2.44C3.86.3 3.5.32 3.18.5L12 8l3.9-3.9L4.2.44z" fill="#4285F4"/>
                  <path d="M3.18.5C2.46.9 2 1.7 2 2.6v18.8c0 .9.46 1.7 1.18 2.1L12 12 3.18.5z" fill="#34A853"/>
                </svg>
                <div>
                  <span className="text-[9px] text-[#555] block tracking-wider">GET IT ON</span>
                  <span className="text-[15px] font-extrabold text-[#1a1a1a] block">Google Play</span>
                </div>
              </div>

              {/* App Store */}
              <div
                className="flex items-center gap-2.5 bg-white border border-[#e0e0e0] rounded-xl px-5 py-2.5 cursor-pointer min-w-[150px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 814 1000" fill="#1a1a1a">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-166.1-127.2c-50.4-74.2-91.4-189.6-91.4-299.5 0-159.5 104.4-244 206.7-244 54.8 0 100.5 36 135.1 36 33 0 84.1-38.2 146.8-38.2 23.6 0 107.8 2 167.5 76.8zm-160.6-166.3c27.2-31.7 46.6-76.1 46.6-120.5 0-6.1-.5-12.2-1.6-17.2-44.2 1.6-96.5 29.4-128.4 65.6-24.7 27.5-47.6 71.6-47.6 116.5 0 6.7 1.1 13.4 1.6 15.6 2.8.5 7.2 1.1 11.6 1.1 39.6 0 89.2-26.5 117.8-61.1z"/>
                </svg>
                <div>
                  <span className="text-[9px] text-[#555] block tracking-wider">Available on the</span>
                  <span className="text-[15px] font-extrabold text-[#1a1a1a] block">App Store</span>
                </div>
              </div>

            </div>
          </div>

          {/* Droite — téléphone incliné qui déborde */}
          <div className="flex items-center justify-center -mb-[98px]">
            <img
              src={phone}
              alt="EasyMarket App"
              className="
                w-[400px] max-w-full block
                drop-shadow-[0_32px_48px_rgba(240,229,229,0.3)]
                rotate-[6deg] -translate-y-2.5
                transition-transform duration-400 ease-in-out
                origin-bottom
                [image-rendering:crisp-edges]
                [will-change:transform]
                hover:rotate-[4deg] hover:-translate-y-[18px]
              "
            />
          </div>

        </div>
      </div>

    </section>
  );
}