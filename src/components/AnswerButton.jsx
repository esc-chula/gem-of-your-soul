import React, {useState} from "react";

const AnswerButton = ({text,score}) => {
    const [selected, setSelected] = useState(false);
    const handleClick = () => setSelected(true);
    return (
        <button onClick={handleClick} className={`w-full max-w-xs break-words text-base text-left
            text-white border-2 border-white bg-black px-6 py-3 rounded-2xl 
            hover:bg-[#FDF2BD] hover:text-black hover:border-black transition-colors duration-300`}>
          {text}
        </button>
      );
};

export default AnswerButton;