import React from "react";

const BestGear: React.FC = () => {
  return (
    <section className="px-6 py-24 flex flex-col space-y-6 text-center w-full items-center min-w-[360px] lg:flex-row ">
      <div className="lg:w-1/2 lg:order-2">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/src/assets/shared/desktop/image-best-gear.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/src/assets/shared/tablet/image-best-gear.jpg"
          />
          <img
            className="rounded-lg w-full"
            src="/src/assets/shared/mobile/image-best-gear.jpg"
            alt="image-best"
          />
        </picture>
      </div>
      <div className="md:px-14 lg:pl-0 lg:pr-32 flex flex-col space-y-6 lg:order-1 lg:w-1/2 lg:text-left lg:items-start">
        <h3 className="text-[28px] md:text-[40px] tracking-wide font-800">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h3>

        <span className="text-gray-500 text-[15px] ">
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
