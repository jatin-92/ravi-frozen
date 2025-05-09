import Image from "next/image";

const HeroSecton = () => {
  return (
    // <div className="bg-[linear-gradient(97deg,#29E0FF_0.47%,#1FB0FF_99.65%)] ">
    <section className=" bg-[url('/assets/images/hero-bg.png')] bg-no-repeat  xl:bg-cover bg-center pt-[130px] md:pt-[140px] lg:pt-[176px] ">
      <div className="flex flex-col justify-center max-w-[1173px] w-full mx-auto px-4 sm:px-6 relative">
        <p className="text-white italic font-semibold leading-[110%] text-3xl sm:text-4xl md:text-5xl lg:text-75 lg:max-w-[873px] w-full max-lg:text-center">
          Cold Chain Service now just a Click away
        </p>
      </div>
      <div className="flex max-lg:flex-col max-w-[1173px] w-full mx-auto gap-5 mt-[10px] md:mt-[20px] pb-[61px] lg:pb-[200px] xl:pb-[293px] ">
        <div className="lg:max-w-[680px] w-full flex flex-col gap-4 sm:gap-5 lg:gap-10 max-sm:px-4 max-lg:px-6 px-4 sm:px-6">
          <p className="text-white sm:leading-[150%] text-sm sm:text-base md:text-xl font-medium max-lg:text-center">
            We provide a Plug'n'Play model for temperature-sensitive products,
            empowering our customers with the essential tools to expand their
            business while we ensure the preservation and transportation of
            perishable goods.
          </p>

          <div className="flex max-lg:justify-center gap-3.5">
            <button className=" bg-white  flex  h-[40px] lg:h-[48px] justify-center items-center rounded-4xl w-[140px] lg:w-[150px] transition-all cursor-pointer text-[#29E0FF] text-center text-base font-bold leading-[120%] z-10 border border-white relative hover:bg-transparent hover:text-white max-[320px]:h-[40px] duration-700">
              Get Started
            </button>
            <button className=" bg-transparent  flex  h-[40px] lg:h-[48px] justify-center items-center rounded-4xl w-[140px] lg:w-[150px] transition-all cursor-pointer text-white text-center text-base font-bold leading-[120%] z-10 border border-white relative hover:bg-white hover:text-[#29E0FF] max-[320px]:h-[40px] duration-700">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-end w-full ">
          <Image
            src="/assets/images/hero-img.png"
            alt="hero-img"
            className="!xl:w-[712px] w-[550px] lg:absolute right-0   "
            width={712}
            height={443}
          />
        </div>
      </div>
    </section>
    // </div>
  );
};

export default HeroSecton;
