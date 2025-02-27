import BigDataImage from "../../assets/bigdata.svg";
import ZapisImage from "../../assets/zapis.svg";
import UmagImage from "../../assets/umag.svg";
import QazCode from "../../assets/qazcode.svg";
import Beeline from "../../assets/beeline.svg";

const Sponsors = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #201394 25%, #0A062E 100%)",
      }}
      className="w-full lg:px-24 px-12 mx-auto flex justify-center text-white"
    >
      <div className="max-w-[1536px] w-full pt-44 pb-16 text-white">
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-28 lg:gap-40">
          {/* General Sponsors - Larger Size */}
          <div className="w-full">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 sm:mb-14 md:mb-18 lg:mb-20 press-start">
              General Sponsors
            </h2>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
              <img
                src={UmagImage}
                alt="UMAG"
                className="w-48 sm:w-64 md:w-80 lg:w-96 object-contain"
              />
              <img
                src={ZapisImage}
                alt="Zapis"
                className="w-48 sm:w-64 md:w-80 lg:w-96 object-contain"
              />
            </div>
          </div>
          {/* Secondary Sponsors - Smaller Size */}
          <div className="w-full">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 sm:mb-14 md:mb-18 lg:mb-20 press-start">
              Other Sponsors
            </h2>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
              <img
                src={QazCode}
                alt="QazCode"
                className="w-32 sm:w-40 md:w-48 lg:w-56 object-contain"
              />
              <img
                src={Beeline}
                alt="Beeline"
                className="w-26 sm:w-34 md:w-42 lg:w-48 object-contain" // Reduced size
              />
              <img
                src={BigDataImage}
                alt="BigData"
                className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain" // Reduced size
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Sponsors = () => {
//   return (
//     <div
//       style={{
//         background: "linear-gradient(180deg, #201394 25%, #0A062E 100%)",
//       }}
//       className="w-full lg:px-24 px-12 mx-auto flex justify-center text-white"
//     >
//       <div className="max-w-[1536px] w-full pt-44 pb-16 text-white">
//         <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full">
//           <img className="w-12 sm:w-32 lg:w-44" src={SponsorsImage} />
//           <div className="press-start 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl max-md:ml-2 max-lg:-ml-8 xl:ml-0">
//             Our Sponsors
//           </div>
//         </div>
//         <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-36 mt-16 sm:mt-24 md:mt-32 lg:mt-44">
//           {/* First Row */}
//           <div className="w-full flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
//           <img
//               src={UmagImage}
//               alt="UMAG"
//               className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
//             />
//             <img
//               src={ZapisImage}
//               alt="Zapis"
//               className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
//             />
//           </div>
//           {/* Second Row */}
//           <div className="w-full flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
//             <img
//               src={QazCode}
//               alt="EPAM"
//               className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
//             />
//             <img
//               src={BigDataImage}
//               alt="BigData"
//               className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
//             />
//             <img
//               src={Beeline}
//               alt="Beeline"
//               className="w-32 sm:w-40 md:w-48 lg:w-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Sponsors;
