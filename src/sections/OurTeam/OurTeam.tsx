import ourTeamImage from "../../assets/ourteamimage.jpeg";
import ourTeamSvg from "../../assets/ourteamsvg.svg";
import ourTeamSvgBig from "../../assets/ourteamsvgbig.svg";
import "./ourTeam.css";

const OurTeam = () => {
  return (
    <section
      id="team"
      className={
        "lg:px-24 px-12 mx-auto text-white pt-32 lg:pt-24 pb-32 bg-[#0A062E]"
      }
    >
      <div className={"mx-auto 2xl:container"}>
        <div className={"flex justify-center items-center md:justify-start"}>
          <div>
            <img
              className={"aboutus_codew md:hidden"}
              src={ourTeamSvg}
              alt="CODEW"
            />{" "}
            <img
              className={"max-md:hidden max-xl:scale-75 max-lg:scale-50"}
              src={ourTeamSvgBig}
            />
          </div>
          <span
            className={
              "press-start 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl max-md:ml-2 max-lg:-ml-8 xl:ml-0"
            }
          >
            Our team
          </span>
        </div>
        <div
          className={
            "flex flex-col md:flex-row items-center gap-x-28 max-2xl:gap-x-20 max-xl:gap-x-12 max-lg:gap-x-8 max-md:gap-x-4 mt-14 max-2xl:mt-10 justify-between"
          }
        >
          <p
            className={
              "montserrat text-left max-w-full max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm  max-2xl:max-w-md text-4xl pt-12 max-2xl:pt-8"
            }
          >
            <span className={"text-[#D12C87]"}>NU ACM-W Student Chapter</span>{" "}
            is the first and only branch of ACM-Women in Kazakhstan and Central
            Asia.
            <br className={"max-md:hidden"} />
            <br className={"max-md:hidden"} />
            <span className={"md:hidden"}>&nbsp;</span>
            Our mission is to{" "}
            <span className={"text-[#D12C87]"}>support women</span> in computer
            science, technology, and engineering through social, professional,
            and technical growth initiatives.
          </p>
          <div
            className={"max-w-[970px] mt-8 flex items-center justify-center"}
          >
            <img
              src={ourTeamImage}
              className={"md:rounded-[50px]"}
              alt="team image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
