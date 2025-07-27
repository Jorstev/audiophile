import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#101010] flex justify-around items-center h-24 min-w-[360px]">
      <IoMenuSharp className="text-2xl" color="#ffffff" />
      <Link to={"/"}>
        <img
          src="/src/assets/shared/mobile/audiophile 2.svg"
          alt="audio-logo"
        />
      </Link>
      <AiOutlineShoppingCart className="text-2xl" color="#ffffff" />
    </div>
  );
}

export default Header;
