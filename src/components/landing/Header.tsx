import LarngearLogo from "@/assets/landing/larngear_logo.svg";

export default function Header() {
  return (
    <header className="mb-6 rounded-b-[10px] border-b-[5px] border-t-[5px] border-intania bg-base-03 p-4 text-center shadow-lg">
      <img
        src={LarngearLogo.src}
        alt="LarnGear Camp Logo"
        className="mx-auto aspect-square w-28"
      />
      <h1 className="mt-2 text-lg font-bold text-gray-900">
        ค่ายลานเกียร์ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
      </h1>
    </header>
  );
}
