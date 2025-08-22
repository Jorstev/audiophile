import React from "react";

const BestGear: React.FC = () => {
  return (
    <section className="px-6 py-24 flex flex-col space-y-6 text-center w-full items-center min-w-[360px]">
      <div className="w-full">
        <img
          className="rounded-lg w-full"
          src="/src/assets/shared/mobile/image-best-gear.jpg"
          alt="image-best"
        />
      </div>
      <div>
        <h3 className="text-[28px] tracking-wide font-800">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h3>
      </div>
      <div>
        <span className="text-gray-500 text-[15px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </span>
      </div>
    </section>
  );
};

export default BestGear;
