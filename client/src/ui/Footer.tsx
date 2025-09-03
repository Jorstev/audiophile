import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const Footer: React.FC = () => {
  return (
    <section className="relative bg-[#101010] h-[41rem] md:h-[25rem] flex flex-col justify-around items-center py-5 w-full min-w-[360px]">
      <div className="absolute px-12 py-[2px] top-0 left-1/2 -translate-x-1/2 bg-[#D87D4A]"></div>
      <div className="flex flex-col justify-center items-center space-y-10  md:justify-between md:w-full lg:flex-row lg:space-y-0 lg:px-28">
        <div className="md:w-full md:px-8 lg:px-0">
          <img src="/src/assets/shared/desktop/logo.svg" alt="logo" />
        </div>
        <div className="text-white tracking-[0.2em] text-[13px] font-600 md:w-full md:px-8 lg:px-0">
          <ul className="space-y-5 text-center flex flex-col md:flex-row md:w-full md:space-y-0 md:space-x-8 lg:justify-end">
            <Button type="LinkFooter" linkTo={"/"} text="HOME" />
            <Button type="LinkFooter" linkTo={"/headphones"} text="HEADPHONE" />
            <Button type="LinkFooter" linkTo={"/speakers"} text="SPEAKERS" />
            <Button type="LinkFooter" linkTo={"/earphones"} text="EARPHONES" />
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-10 md:flex-row md:justify-between md:w-full md:space-y-0 lg:space-x-20 lg:items-start">
        <div className="px-8 lg:px-28 text-center md:w-full md:text-start lg:w-1/2 lg:flex lg:justify-start">
          <span className="text-gray-300 text-[15px] font-200 ">
            {`Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.`}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:w-full md:px-8 lg:px-28 md:space-y-0">
        <div>
          <span className="text-gray-400 text-[15px] font-600">
            Copyright 2021. All Rights Reserved
          </span>
        </div>
        <div className="flex space-x-4 ">
          <img
            className="hover:scale-110 transition-transform duration-200"
            src="/src/assets/shared/desktop/icon-facebook.svg"
            alt="facebook-icon"
          />
          <img
            className="hover:scale-110 transition-transform duration-200"
            src="/src/assets/shared/desktop/icon-twitter.svg"
            alt="twitter-icon"
          />
          <img
            className="hover:scale-110 transition-transform duration-200"
            src="/src/assets/shared/desktop/icon-instagram.svg"
            alt="instagram-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
