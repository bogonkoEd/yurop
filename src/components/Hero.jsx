import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div className="border-4 h-auto mt-16 mb-6">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-6xl text-[#6e477b] font-semibold mb-2">
            Come and stay awhile
          </p>
          <p className="text-xl ">
            A place that&apos;s as cozy and comfortable as your home{" "}
          </p>
          <button className="bg-[#fdbb37] text-[#6e477b] px-4 py-2 rounded-lg mt-4 mb-4">
            Book Now
          </button>
          {/* <img src="src/assets/herobanner.jpg" alt="hero" className=" pt-2 aspect-video h-[640px] " /> */}
          <Carousel images={["src/assets/herobanner.jpg", "src/assets/herobanner.jpg", "src/assets/herobanner.jpg"]} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
