import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function MaterielCard({ image, name, price }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative rounded-2xl bg-[#f3f4f6] p-[30px] flex flex-col sm:flex-row items-center sm:items-start gap-4">

      {/* Image */}
      <div className="flex-shrink-0 flex items-center justify-center w-[130px]">
        <img
          src={image}
          alt={name}
          className="w-[130px] h-[130px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 w-full">

        <h3 className="text-[18px] font-bold text-[#111827] m-0 text-center sm:text-left">
          {name}
        </h3>

        <p className="text-[14px] text-[#777b85] mt-1 text-center sm:text-left">
          Catégories / air frayer
        </p>

        <p className="text-[14px] text-[#a1a2a5] mt-2 leading-[1.5] text-center sm:text-left">
          Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem upsum
        </p>

        {/* Prix */}
        <p className="mt-3 text-[13px] text-[#374151] text-center sm:text-left">
          Prix :{" "}
          <span className="font-extrabold text-[20px] text-[#111827]">
            {price} FCFA
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white py-[9px] rounded-full text-[13px] font-semibold border-none cursor-pointer transition-colors duration-200">
            Acheter maintenant
          </button>
          <button className="w-full bg-transparent text-[#374151] py-[8px] rounded-full text-[13px] font-medium border-[1.5px] border-[#d1d5db] cursor-pointer hover:bg-gray-100 transition-colors duration-200">
            Ajouter au panier
          </button>
        </div>

      </div>

      {/* Heart */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute bottom-4 right-4 bg-none border-none cursor-pointer p-0"
      >
        <Heart
          size={18}
          style={{ color: liked ? "#ef4444" : "#9ca3af", fill: liked ? "#ef4444" : "none" }}
        />
      </button>

    </div>
  );
}