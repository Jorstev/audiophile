import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartItem from "../features/cart/CartItem";
import { AnimatePresence, motion } from "framer-motion";
import CategorySection from "../features/category/CategorySection";
import Button from "./Button";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (!isCartOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) setIsCartOpen(false); // If opening menu, close cart
  };
  return (
    <div className="fixed flex flex-col items-center justify-center w-full min-w-[360px] z-50">
      <div className="bg-[#101010] flex justify-around items-center h-24 w-full min-w-[360px] top-0 left-0  lg:justify-between lg:px-10 lg:h-20 z-40">
        <IoMenuSharp
          onClick={toggleMenu}
          className="text-2xl lg:hidden"
          color="#ffffff"
        />
        <Link to={"/"} className="">
          <img
            src="/src/assets/shared/mobile/audiophile 2.svg"
            alt="audio-logo"
          />
        </Link>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Button type="LinkHeader" linkTo={"/"} text="HOME" />
          <Button type="LinkHeader" linkTo={"/headphones"} text="HEADPHONES" />
          <Button type="LinkHeader" linkTo={"/speakers"} text="SPEAKERS" />
          <Button type="LinkHeader" linkTo={"/earphones"} text="EARPHONES" />
        </div>

        <div className=" flex md:basis-[70%] lg:basis-0 items-center justify-end">
          <AiOutlineShoppingCart
            className="text-2xl"
            color="#ffffff"
            onClick={toggleCart}
          />
        </div>
      </div>
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={toggleCart}
              className="fixed top-24 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex justify-end px-4 pt-6 pb-36 lg:top-20"
            >
              <div className="bg-white w-full max-w-md h-full p-6 shadow-lg outline-none rounded-lg flex flex-col justify-around">
                <div className="flex justify-between items-center pb-4">
                  <h3 className="uppercase">cart (3)</h3>
                  <span className="text-sm text-gray-500 cursor-pointer">
                    Remove all
                  </span>
                </div>

                {/* Example cart content */}
                <div className="mt-4 flex flex-col space-y-4 overflow-y-auto h-56">
                  <CartItem price="$2999" productName="XX99 MK II" />
                  <CartItem price="$3999" productName="XX99 MK I" />
                  <CartItem price="$4999" productName="XX99 MK III" />
                  <CartItem price="$5999" productName="XX99 MK IV" />
                  <CartItem price="$6999" productName="XX99 MK V" />
                  <CartItem price="$7999" productName="XX99 MK VI" />
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
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={toggleMenu}
              className="fixed top-24 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex justify-end px-4 pt-6 pb-36 lg:hidden"
            >
              <div className="bg-white fixed top-24 left-0 right-0 bottom-0 h-[40rem] md:h-[15rem] z-50 lg:hidden">
                <CategorySection menu={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
