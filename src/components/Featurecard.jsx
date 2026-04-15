export default function FeatureCard({ title, logo }) {
  return (
    <div
      className="
        bg-white border rounded-[16px]
        px-[16px] py-[14px]
        flex items-center gap-[12px]
        relative
        hover:shadow-md
        transition
      "
    >
      {/* Barre orange */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[60%] bg-[#E47000] rounded-r-full" />

      {/* Icon */}
      <img
        src={logo}
        alt=""
        className="w-[26px] h-[26px]"
      />

      {/* Title */}
      <span className="text-[14px] font-semibold text-black leading-[20px]">
        {title}
      </span>
    </div>
  );
}