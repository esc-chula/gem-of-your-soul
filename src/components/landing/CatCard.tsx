import CatImage from "@/assets/landing/catcard.webp";

export default function CatCard() {
  return (
    <a className="relative mb-6 flex h-[252px] w-[358px] flex-col justify-end rounded-[15px] p-6 shadow-lg transition hover:scale-105 hover:cursor-pointer">
      <img
        src={CatImage.src}
        alt="Cat"
        className="absolute bottom-0 left-0 right-0 top-0 rounded-[15px]"
      />
      <button className="z-10 mt-4 w-full rounded-[15px] border-[4px] border-white bg-user py-2 font-bold text-black">
        เริ่มออกเดินทาง
      </button>
    </a>
  );
}
