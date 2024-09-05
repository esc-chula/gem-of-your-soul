import { userAnswer } from "@/stores/userAnswerStores";

const AnswerButton = ({
  text,
  attribute,
  redirectUrl,
}: {
  text: string;
  attribute: string;
  redirectUrl: string;
}) => {
  const handleClick = () => {
    const currentScoreStr = userAnswer.get()[attribute] || "0";
    const currentScore = parseInt(currentScoreStr, 10);
    userAnswer.setKey(attribute, (currentScore + 1).toString());

    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full max-w-xs break-words rounded-2xl border-2 border-white bg-black px-6 py-3 text-left text-base text-white transition-colors duration-300 hover:border-black hover:bg-[#FDF2BD] hover:text-black`}
    >
      {text}
    </button>
  );
};

export default AnswerButton;
