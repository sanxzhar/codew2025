import { FAQItem } from "./components/FAQItem";
import FAQbig from "../../assets/faqbig.svg";
import FAQsmall from "../../assets/faqsmall.svg";

export const FAQ = () => {
  return (
    <section
      id="faq"
      className={
        "lg:px-24 px-12 mx-auto text-white pt-32 lg:pt-24 pb-32 bg-[#0A062E]"
      }
    >
      <div className={"mx-auto 2xl:container"}>
        <div className={"flex justify-center items-center md:justify-start"}>
          <div>
            <img
              className={"aboutus_codew md:hidden"}
              src={FAQsmall}
              alt="CODEW"
            />{" "}
            <img
              className={"max-md:hidden max-xl:scale-75 max-lg:scale-50"}
              src={FAQbig}
            />
          </div>
          <span className="press-start 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl max-md:ml-2 max-lg:-ml-8 xl:ml-0">
            FAQs
          </span>
        </div>

        <div className="montserrat flex md:flex-row md:gap-45 gap-5 md:mt-[50px] mt-[30px] flex-col">
          <div className="w-full gap-5 flex flex-col">
            <FAQItem
              question="Who can participate in codeW2025?"
              answer="All female undergraduate students of universities and female high school students can apply to participate in codeW2025."
            />
            <FAQItem
              question="What if I am not from Astana?"
              answer="Unfortunately, you cannot participate online in the main contest, so if you want to participate, you should travel to Astana."
            />
            <FAQItem
              question="What if I am a complete beginner?"
              answer="It is great! codeW2025 is a great opportunity for you to discover the world of competitive programming and get hands-on experience."
            />
            <FAQItem
              question="If I competed before, does it affect my track this year?"
              answer="Yes, if you won 1st, 2nd or 3rd place in certain track of previous years codeW, you will compete only in tracks higher this year."
            />
            <FAQItem
              question="What is the format of codeW2025?"
              answer="Contest will be held offline in Nazarbayev University, Astana, Kazakhstan."
            />
          </div>
          <div className="w-full gap-5 flex flex-col">
            <FAQItem
              question="Is it free?"
              answer="Yes, it is absolutely free of charge"
            />
            <FAQItem
              question="What is the qualification round?"
              answer="It is a set of competitive programming tasks similar to the actual contest for us to identify the most suitable track for you and for you to practice."
            />
            <FAQItem
              question="Which track do I get?"
              answer="We identify your track based on your qualification round results, so make sure to take it in time."
            />
            <FAQItem
              question="Do I have to know English?"
              answer="Not at all, tasks will be given in 3 languages: English, Kazakh and Russian languages"
            />
            <FAQItem
              question="What programming languages are available?"
              answer="The contest will be held on Codeforces, and the accepted programming languages are those accepted by the platform."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
