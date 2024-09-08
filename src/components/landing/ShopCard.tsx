import ComingSoon from "@/assets/landing/comingsoon.webp";
import InstagramColor from "@/assets/landing/instagram_color.svg";
import IntaniaShop from "@/assets/landing/intaniashop.webp";

export default function ShopCard() {
  return (
    <section className="mt-9 flex flex-col items-center border-t-[2px] border-intania px-3 py-4">
      <div className="flex justify-around space-x-4">
        <a className="transition hover:scale-105 hover:cursor-pointer">
          <img
            src={IntaniaShop.src}
            alt="Intania Shop"
            className="bg-gray aspect-square w-[171px] rounded-[15px]"
          />
        </a>
        <a className="transition hover:scale-105 hover:cursor-pointer">
          <img
            src={ComingSoon.src}
            alt="Coming Soon"
            className="bg-gray aspect-square w-[171px] rounded-[15px]"
          />
        </a>
      </div>
      <div className="mb-8 mt-6 flex w-fit justify-center rounded-[10px] bg-intania transition hover:scale-105">
        <a
          href="https://www.instagram.com/chulaintaniashop"
          className="flex p-2 font-bold text-white"
        >
          <img src={InstagramColor.src} className="aspect-square w-[25px]" />
          @chulaintaniashop
        </a>
      </div>
    </section>
  );
}
