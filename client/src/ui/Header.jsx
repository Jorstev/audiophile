import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartItem from "../features/cart/CartItem";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  return (
    <div className="fixed flex flex-col items-center justify-center w-full min-w-[360px] z-50">
      <div className="bg-[#101010] flex justify-around items-center h-24 w-full min-w-[360px] top-0 left-0  lg:justify-between lg:px-10 lg:h-20 z-40">
        <IoMenuSharp className="text-2xl lg:hidden" color="#ffffff" />
        <Link to={"/"} className="">
          <img
            src="/src/assets/shared/mobile/audiophile 2.svg"
            alt="audio-logo"
          />
        </Link>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link
            to={"/"}
            className="text-white font-200 text-sm tracking-[0.3em]"
          >
            HOME
          </Link>
          <Link
            to={"/headphones"}
            className="text-white font-200 text-sm tracking-[0.3em]"
          >
            HEADPHONES
          </Link>
          <Link
            to={"/speakers"}
            className="text-white font-200 text-sm tracking-[0.3em]"
          >
            SPEAKERS
          </Link>
          <Link
            to={"/earphones"}
            className="text-white font-200 text-sm tracking-[0.3em]"
          >
            EARPHONES
          </Link>
        </div>
        <div className=" flex md:basis-[70%] lg:basis-0 items-center justify-end">
          <AiOutlineShoppingCart
            className="text-2xl"
            color="#ffffff"
            onClick={toggleCart}
          />
        </div>
      </div>
      {isCartOpen && (
        <div className="fixed top-24 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex justify-end px-4 pt-6 pb-36 lg:top-20">
          <div className="bg-white w-full max-w-md h-full p-6 shadow-lg outline-none rounded-lg flex flex-col justify-around">
            <div className="flex justify-between items-center pb-4">
              <h3 className="uppercase">cart (3)</h3>
              <span className="text-sm text-gray-500 cursor-pointer">
                Remove all
              </span>
            </div>

            {/* Example cart content */}
            <div className="mt-4 flex flex-col space-y-4 overflow-y-auto h-56">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 uppercase">Total</span>
                <span className="font-bold">$3,400.00</span>
              </div>
            </div>
            <div>
              <button className="w-full bg-[#D87D4A] text-xs tracking-widest text-white py-4 mt-4 uppercase">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
