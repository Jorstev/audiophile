import React from "react";
const Footer: React.FC = () => {
  return (
    <section className="relative bg-[#101010] h-[41rem] flex flex-col justify-around items-center py-5 w-full">
      <div className="absolute px-12 py-[2px] top-0 left-1/2 -translate-x-1/2 bg-[#D87D4A]"></div>
      <div>
        <img src="/src/assets/shared/desktop/logo.svg" alt="logo" />
      </div>
      <div className="text-white tracking-[0.2em] text-[13px] font-600">
        <ul className="space-y-5 text-center">
          <li>HOME</li>
          <li>HEADPHONE</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
      </div>
      <div className="px-8 text-center">
        <span className="text-gray-300 text-[15px] font-200">
          {`Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.`}
        </span>
      </div>
      <div>
        <span className="text-gray-400 text-[15px] font-600">
          Copyright 2021. All Rights Reserved
        </span>
      </div>
      <div className="flex space-x-4">
        <img
          src="/src/assets/shared/desktop/icon-facebook.svg"
          alt="facebook-icon"
        />
        <img
          src="/src/assets/shared/desktop/icon-twitter.svg"
          alt="twitter-icon"
        />
        <img
          src="/src/assets/shared/desktop/icon-instagram.svg"
          alt="instagram-icon"
        />
      </div>
    </section>
  );
};

export default Footer;
