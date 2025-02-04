import SponsorsImage from "../../assets/sponsors.svg";
import TassayImage from "../../assets/tassay.svg";
import AcmwImage from "../../assets/acm-w.svg";
import EpamImage from "../../assets/epam.svg";
import ZapisImage from "../../assets/zapis.svg";
import UmagImage from "../../assets/umag.svg";

const Sponsors = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #201394 25%, #0A062E 100%)",
      }}
      className="w-full lg:px-24 px-12 mx-auto flex justify-center text-white"
    >
      <div className="max-w-[1536px] w-full pt-44 pb-16 text-white">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full">
          <img className="w-12 sm:w-32 lg:w-44" src={SponsorsImage} />
          <div className="press-start 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl max-md:ml-2 max-lg:-ml-8 xl:ml-0">
            Our Sponsors
          </div>
        </div>
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-36 mt-16 sm:mt-24 md:mt-32 lg:mt-44">
          {/* First Row */}
          <div className="w-full flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <img 
              src={AcmwImage} 
              alt="ACM-W"
              className="w-24 sm:w-40 md:w-48 lg:w-auto object-contain"
            />
            <img 
              src={ZapisImage} 
              alt="Zapis"
              className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
            />
            <img 
              src={TassayImage} 
              alt="Tassay"
              className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
            />
          </div>
          {/* Second Row */}
          <div className="w-full flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <img 
              src={EpamImage} 
              alt="EPAM"
              className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
            />
            <img 
              src={UmagImage} 
              alt="UMAG"
              className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-36 mt-44">
            <div className="w-full flex gap-36 justify-center">
                <img src={AcmwImage} />
                <img src={ZapisImage} />
                <img src={TassayImage} />
            </div>
            <div className="w-full flex gap-36 justify-center">
                <img src={EpamImage} />
                <img src={UmagImage} />
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sponsors;
