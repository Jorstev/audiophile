import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  return (
    <div className="bg-[#101010] flex justify-around items-center h-24">
      <IoMenuSharp className="text-2xl" color="#ffffff" />
      <img
        className=""
        src="/src/assets/shared/mobile/audiophile 2.svg"
        alt="audio-logo"
      />
      <AiOutlineShoppingCart className="text-2xl" color="#ffffff" />
    </div>
  );
}

export default Header;
