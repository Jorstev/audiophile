import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartItem from "../features/cart/CartItem";
import { AnimatePresence, motion } from "framer-motion";
import CategorySection from "../features/category/CategorySection";
import Button from "./Button";
import currencyFormat from "../utils/currencyFormat.tsx";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [keysToRemove, setKeysToRemove] = useState([]);

  const getCartItems = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      const item = JSON.parse(localStorage.getItem(key));
      if (item && item.name && item.price) {
        items.push(item);
      }
    }
    return items;
  };

  const cartItems = getCartItems();
  const TotalCartAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.itemCount,
    0
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCartItems = getCartItems();
      console.log("Storage changed, updated cart items:", updatedCartItems);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
              className="fixed top-24 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex justify-end px-4 pt-6 pb-36 lg:top-20 "
            >
              <div
                className="bg-white w-full max-w-md p-6 shadow-lg outline-none rounded-lg flex flex-col justify-around h-[fit-content] space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center pb-4">
                  <h3 className="uppercase">cart ({cartItems.length})</h3>
                  <span
                    className="text-sm text-gray-500 cursor-pointer"
                    onClick={() => {
                      for (let i = localStorage.length - 1; i >= 0; i--) {
                        const key = localStorage.key(i);
                        if (key && key.startsWith("cart_")) {
                          setKeysToRemove((prev) => [...prev, key]);
                        }
                      }

                      keysToRemove.forEach((key) =>
                        localStorage.removeItem(key)
                      );
                      window.dispatchEvent(new Event("storage"));
                    }}
                  >
                    Remove all
                  </span>
                </div>

                {/* Example cart content */}
                {cartItems.length > 0 ? (
                  <div className="mt-4 flex flex-col space-y-4 overflow-y-auto h-56">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        price={item.price}
                        productName={item.name}
                        itemCount={item.itemCount}
                        counter={false}
                        image={item.image.mobile}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 flex flex-col items-center justify-center py-8 bg-[#fafafa] rounded-lg shadow-inner">
                    <span className="text-[#D87D4A] text-lg font-semibold mb-2">
                      Your cart is empty
                    </span>
                    <span className="text-gray-500 text-sm">
                      Add some products to see them here!
                    </span>
                  </div>
                )}
                <div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-500 uppercase">Total</span>
                    <span className="font-bold">
                      {currencyFormat(TotalCartAmount)}
                    </span>
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
