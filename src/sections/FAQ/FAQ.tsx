import { FAQItem } from "./components/FAQItem";
import FAQbig from "../../assets/faqbig.svg";
import FAQsmall from "../../assets/faqsmall.svg";

export const FAQ = () => {
  return (
    <section
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

        <div className="montserrat flex md:flex-row md:gap-50 gap-5 md:mt-[50px] mt-[30px] flex-col">
          <div className="w-full gap-5 flex flex-col">
            <FAQItem
              question="Who can participate?"
              answer="Every citizen of Kazakhstan older than 16 years can participate in this event both online and offline. However, please note that if you participate online, you are not eligible for prizes and coffee break."
            />
            <FAQItem
              question="What are the prizes?"
              answer="The total prize pool this year is 650.000 tenge, as well as ACM@NU merchandise."
            />
            <FAQItem
              question="I am studying at school, am I eligible for the prize?"
              answer="Yes! If you are 16+ years old and participate offline, you are eligible for the prize."
            />
            <FAQItem
              question="Who is the organizer?"
              answer="Organizer of this event is the ACM Student Chapter of Nazarbayev University’s student’s club ACM@NU."
            />
          </div>
          <div className="w-full gap-5 flex flex-col">
            <FAQItem
              question="Is participation free?"
              answer="Yes! Participation is totally free!"
            />
            <FAQItem
              question="What’s the difference between offline and online participation?"
              answer="Offline participants are eligible to enter the Nazarbayev University campus during the event day, are eligible for totally free coffee break, and are eligible for prizes. Meanwhile, if you register as an online participant, you will not be able to enter the University’s campus and you will not be eligible for prizes (both money prize pool and ACM@NU merchandise)."
            />
            <FAQItem
              question="Who is eligible for the prize?"
              answer="Every offline participant is eligible for the prize!"
            />
            <FAQItem
              question="How to be a part of NU ACM SC?"
              answer="We will open our recruitment next Spring, so please, follow us on instagram @nuacmsc to stay up to date!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
