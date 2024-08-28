import AnswerButton from "./AnswerButton";

import type IAnswer from "@/types/answer";

const AnswerComponent = ({ answers }: { answers: IAnswer[] }) => {
  return (
    <>
      {answers.map((answer: IAnswer, idx: number) => (
        <AnswerButton
          key={idx}
          text={answer.text}
          attribute={answer.attribute}
        />
      ))}
    </>
  );
};

export default AnswerComponent;
