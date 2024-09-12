import { useState } from "react";

import { useDebounce } from "@/utils/useDebounce";

import { userName } from "@/stores/userNameStores";

import { toast, Toaster } from "react-hot-toast";

import { navigate } from "astro:transitions/client";

const NameInput = ({ redirectUrl }: { redirectUrl: string }) => {
  const [name, setName] = useState<string>("");
  const debouncedName = useDebounce(name);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleConfirm = () => {
    const trimmedName = debouncedName.trim();
    if (!trimmedName) {
      toast.dismiss();
      toast.error("กรุณาใส่ชื่อของคุณ");
      return;
    }
    if (trimmedName.length > 20) {
      toast.dismiss();
      toast.error("กรุณาตั้งชื่อไม่เกิน 20 ตัวอักษร");
      return;
    }
    userName.set(trimmedName);

    setTimeout(() => {
      navigate(redirectUrl);
    }, 300);
  };

  return (
    <div className="absolute top-0 flex h-full w-full items-end justify-center">
      <div className="mb-12 flex flex-col items-center">
        <Toaster />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="โปรดใส่ชื่อของคุณ"
          className="w-80 max-w-xs rounded-xl border-2 border-white bg-[#7D7D7D] p-2 text-white placeholder-white focus:outline-none"
        />
        <div className="mt-2">
          <button
            type="submit"
            onClick={handleConfirm}
            className="w-32 max-w-xs select-none rounded-2xl bg-white p-2 text-black active:bg-black active:text-white"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameInput;
