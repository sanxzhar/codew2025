import vovan from "./assets/vovan.svg"
import zvezda from "./assets/zvezda.svg"

export const WelcomeSection = () => {
  return (
    <div className="w-full h-full p-[30px] flex flex-col justify-center items-center bg-linear-to-t from-[#201394] to-[#0A062E]">
      <div className="text-white max-h-full flex flex-col-reverse sm:flex-col items-center w-full">
        <div className="relative w-full">
            <img className="absolute w-20 left-0 top-0 sm:w-40 sm:left-1/14" src={zvezda}/>
            <h1 className="font-press2p text-[80px] sm:text-[100px] flex justify-center pt-12 text-center">
                CODEW 2024
            </h1>
        </div>

        <div className="relative pt-40 sm:pt-0">
            <div className="absolute top-2/3 left-1/2 w-96 sm:w-160 h-96 sm:h-200 rounded-full opacity-60 bg-[radial-gradient(circle,_rgba(236,43,142,1)_0%,_rgba(236,43,142,0)_50%)] -translate-x-1/2 -translate-y-1/2"></div>
            <img className="w-72 sm:w-120" src={vovan}/>
        </div>
    
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzIn915jKLyWL_clo84NhIRAuyMdrO9kfGn1ykY79H0tBwOA/viewform">
          <button className="text-white font-ubuntu text-xl px-10 py-5 mb-10 bg-[#DA3193] rounded-[15px] font-bold uppercase md:mt-11 mt-[18px]">
            REGISTER
          </button>
        </a>
    </div>
  );
};