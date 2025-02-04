import { FC, useState } from "react";
import arrowImg from "../assets/arrow.svg";

type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#221C5A] p-[14.4px] rounded-xl text-white"
    >
      <div className="flex items-center gap-6">
        <div className="w-[7.5px] h-[7.5px] bg-custom-red shrink-0 " />
        <div className="grow font-ubuntu text-[24px]">
          {question}
        </div>
        <img
          src={arrowImg}
          className={`cursor-pointer ${isOpen && "rotate-180"}`}
        />
      </div>

      {isOpen && (
        <div className=" font-ubuntu text-[16px] mt-[24px] ml-[30px]">
          {answer}
        </div>
      )}
    </div>
  );
};
