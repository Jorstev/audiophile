import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface ButtonProps {
  type: string;
  linkTo: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  linkTo,
  text,
  onClick,
  disabled = false,
}): JSX.Element | null => {
  const buttonType: Record<string, JSX.Element> = {
    primaryBtn: (
      <Link
        to={linkTo}
        onClick={disabled ? undefined : onClick}
        className={`px-7 py-4 font-600 bg-[#D87D4A] text-xs tracking-widest text-white${
          disabled ? " opacity-50 pointer-events-none cursor-not-allowed" : ""
        }`}
      >
        {text}
      </Link>
    ),
    primaryLink: (
      <Link
        to={linkTo}
        className="inline-block px-7 py-4 font-600 bg-[#D87D4A] text-xs tracking-widest text-white hover:bg-[#FBAF85]"
      >
        {text}
      </Link>
    ),
    secondaryLink: (
      <Link
        to={linkTo}
        onClick={() =>
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className="flex items-center space-x-2 cursor-pointer"
      >
        <span className="tracking-wider font-600 text-sm hover:text-[#D87D4A]">
          {text}
        </span>
        <IoIosArrowForward color="#D87D4A" />
      </Link>
    ),
    tertiaryLink: (
      <Link
        to={linkTo}
        className="border border-black font-600 px-7 py-4 bg-transparent text-black text-xs tracking-widest hover:bg-black hover:text-white"
      >
        {text}
      </Link>
    ),

    quaternaryLink: (
      <Link
        to={linkTo}
        className="px-7 py-4 font-600 bg-black text-xs tracking-widest"
      >
        {text}
      </Link>
    ),
    LinkHeader: (
      <Link
        to={linkTo}
        className="text-white font-200 text-sm tracking-[0.3em] hover:text-[#D87D4A]"
      >
        {text}
      </Link>
    ),
    LinkFooter: (
      <Link to={linkTo} className="hover:text-[#D87D4A] ">
        {text}
      </Link>
    ),
  };
  return buttonType[type];
};

export default Button;
