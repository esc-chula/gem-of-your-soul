import { useState } from "react";

import { useDebounce } from "@/utils/useDebounce";

import { userName } from "@/stores/userNameStores";

const NameInput = ({ redirectUrl }: { redirectUrl: string }) => {
  const [name, setName] = useState<string>("");
  const debouncedName = useDebounce(name);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleConfirm = () => {
    if (!debouncedName) {
      // TODO: ADD TOAST
      return;
    }
    userName.set(debouncedName);

    window.location.href = redirectUrl;
  };

  return (
    <div className="flex min-h-screen items-end justify-center">
      <div className="mb-8 flex flex-col items-center">
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
