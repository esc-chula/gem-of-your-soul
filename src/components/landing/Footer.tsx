import Facebook from "@/assets/landing/facebook.svg";
import InstagramBlack from "@/assets/landing/instagram_black.svg";
import LarngearLogo from "@/assets/landing/larngear_logo.svg";
import Tiktok from "@/assets/landing/tiktok.svg";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center gap-3 border-t-[2px] border-black bg-base-03">
      <img alt="larngear logo" src={LarngearLogo.src} loading="lazy" />
      <p className="text-[20px] font-semibold text-black">LarnGear Camp</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/LARNGEARCAMP"
          aria-label="Facebook"
          className="text-gray-600"
        >
          <img
            className="aspect-square w-9"
            src={Facebook.src}
            alt="Facebook logo"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/larngear_camp/"
          aria-label="Instagram"
          className="text-gray-600"
        >
          <img
            className="aspect-square w-9"
            src={InstagramBlack.src}
            alt="Instagram logo"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.tiktok.com/@larngear_camp"
          aria-label="TikTok"
          className="text-gray-600"
        >
          <img
            className="aspect-square w-9"
            src={Tiktok.src}
            alt="Tiktok logo"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
}
