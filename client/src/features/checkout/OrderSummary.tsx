import React from "react";
import AmountItem from "../../ui/AmountItem";
import CartItem from "../cart/CartItem";
import { useCart } from "../../context/CartContext";
import currencyFormat from "../../utils/currencyFormat";

function OrderSummary() {
  const { cartItems, TotalCartAmount, IVA, shipping, grandTotal } = useCart();

  return (
    <div className="flex flex-col p-5 space-y-4 m-5 bg-white rounded-md xl:w-[30%] xl:h-[fit-content]">
      <h3 className="text-lg font-600 tracking-wide uppercase mb-4">summary</h3>
      {cartItems.map((item) => (
        <CartItem
          key={item.name}
          price={item.price}
          productName={item.name}
          itemCount={item.itemCount}
          counter={false}
          image={item.image.mobile}
        />
      ))}
      <div>
        <AmountItem
          label="Total"
          value={`${currencyFormat(TotalCartAmount)}`}
        />
        <AmountItem label="Shipping" value={`${currencyFormat(shipping)}`} />
        <AmountItem label="VAT (included)" value={`${currencyFormat(IVA)}`} />
        <AmountItem
          label="Grand Total"
          value={`${currencyFormat(grandTotal)}`}
        />
      </div>
      <div>
        <button
          type="submit"
          className={`w-full bg-[#D87D4A] text-xs tracking-widest text-white py-4 mt-4 uppercase hover:bg-[#FBAF85] ${
            cartItems.length === 0
              ? "opacity-50 pointer-events-none cursor-not-allowed"
              : ""
          }`}
          disabled={cartItems.length === 0}
        >
          {`${cartItems.length === 0 ? "Empty cart" : "Continue & pay"}`}
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
