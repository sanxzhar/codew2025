import InstaImage from '../../assets/insta.svg'
import Telega from '../../assets/telega.svg'
import Youtube from '../../assets/youtube.svg'

const CodeWinNetwork = () => {
  return (
    <div className="w-full lg:px-24 px-12 mx-auto flex justify-center bg-[#0A062E]">
        <div className="max-w-[1080px] text-center pt-44 pb-16 text-white flex flex-col items-center" >
            <div className="md:text-8xl text-3xl flex flex-col md:gap-11 gap-5">
                <div>code.</div>
                <div>win.</div>
                <div>network.</div>
            </div>
            <div className="bg-[#DA3193] md:text-4xl text-2xl w-fit md:py-12 py-4 md:px-20 px-8 rounded-4xl mt-16">
                REGISTER
            </div>
            <div className="montserrat md:text-3xl text-[12px] mt-32 flex md:flex-row md:gap-10 gap-5 flex-col-reverse">
                <div>
                    <div>© 2023 NU ACM-Women SC All rights reserved.</div>
                    <div>Made with ❤️ by developer designer names.</div>
                </div>
                <div className='flex gap-5 justify-center'>
                    <img className="w-8 md:w-16" src={InstaImage} />
                    <img className="w-8 md:w-16" src={Telega} />
                    <img className="w-8 md:w-16" src={Youtube} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default CodeWinNetwork;
