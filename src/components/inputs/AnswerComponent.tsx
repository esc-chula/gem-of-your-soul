import AnswerButton from "./AnswerButton";

import type IAnswer from "@/types/answer";

const AnswerComponent = ({
  answers,
  redirectUrl,
}: {
  answers: IAnswer[];
  redirectUrl: string;
}) => {
  return (
    <div className="absolute bottom-10 flex w-full justify-center">
      <div className="flex flex-col gap-y-2">
        {answers.map((answer: IAnswer, idx: number) => (
          <AnswerButton
            key={idx}
            text={answer.text}
            attribute={answer.attribute}
            redirectUrl={redirectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswerComponent;
