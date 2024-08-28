import { useState } from "react";

import { userName } from "../../stores/nameStore";

const Name = () => {
  const [name, setName] = useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log({ name });
  };
  const handleConfirm = () => {
    userName.set(name);
    console.log("confirm name is:", userName.get());
  };
  return (
    <div className="flex min-h-screen items-end justify-center">
      <div className="mb-8 flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="โปรดใส่ชื่อของคุณ"
          className="w-half max-w-xs rounded-2xl border-2 border-white bg-[#7D7D7D] p-2 text-white placeholder-white focus:outline-none"
        />
        <div className="mt-2">
          <button
            type="submit"
            onClick={handleConfirm}
            className="w-32 max-w-xs rounded-2xl bg-white p-2 text-black active:bg-black active:text-white"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
};

export default Name;
