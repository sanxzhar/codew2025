import InstaImage from '../../assets/insta.svg'
import Telega from '../../assets/telega.svg'
import Youtube from '../../assets/youtube.svg'

const CodeWinNetwork = () => {
  return (
    <div className="w-full lg:px-24 px-12 mx-auto flex justify-center bg-[#0A062E]">
        <div className="max-w-[1080px] text-center pt-44 pb-16 text-white flex flex-col items-center" >
            <div className="md:text-7xl text-2xl flex flex-col md:gap-9 gap-4">
                    <div className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] filter">code.</div>
                    <div className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] filter">win.</div>
                    <div className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] filter">network.</div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScKzTVn6kJ9rUulafQfiNo_Z3MnnWyXIOyX4WsBGDNqKXev3Q/viewform">
                <div className="bg-[#DA3193] md:text-3xl text-xl w-fit md:py-10 py-3 md:px-16 px-6 rounded-4xl mt-14">
                    REGISTER
                </div>
            </a>
            <div className="montserrat md:text-2xl text-[10px] mt-28 flex md:flex-row md:gap-10 gap-5 flex-col-reverse">
                <div>
                    <div>© 2025 NU ACM-Women SC All rights reserved.</div>
                    <div>Made with ❤️ by developers team.</div>
                </div>
                <div className='flex gap-5 justify-center'>
                    <a href="https://www.instagram.com/nuacm_wsc/"> <img className="w-8 md:w-16" src={InstaImage} /> </a>
                    <a href="https://t.me/nu_acm_w"> <img className="w-8 md:w-16" src={Telega} /> </a>
                    <a href="https://www.youtube.com/watch?v=H2HUSqHp_zw&list=PL71s7KOHU4EpMVgH_C0klBQamfVzYdJ2i"> <img className="w-8 md:w-16" src={Youtube} /> </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CodeWinNetwork;
