import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Button({ type, linkTo, text, onClick }) {
  const buttonType = {
    primaryBtn: (
      <button
        to={linkTo}
        className="px-7 py-4 font-600 bg-[#D87D4A] text-xs tracking-widest text-white"
      >
        {text}
      </button>
    ),
    primaryLink: (
      <Link
        to={linkTo}
        className="px-7 py-4 font-600 bg-[#D87D4A] text-xs tracking-widest text-white"
      >
        {text}
      </Link>
    ),
    secondaryLink: (
      <Link to={linkTo} className="flex items-center space-x-2 cursor-pointer">
        <span className="tracking-wider font-600 text-sm">{text}</span>
        <IoIosArrowForward color="#D87D4A" />
      </Link>
    ),
    tertiaryLink: (
      <Link
        to={linkTo}
        className="border border-black font-600 px-7 py-4 bg-transparent text-black text-xs tracking-widest"
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
  };
  return buttonType[type];
}

export default Button;
