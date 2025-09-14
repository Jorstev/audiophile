import React from "react";
import AmountItem from "../../ui/AmountItem";
import CartItem from "../cart/CartItem";

function OrderSummary() {
  return (
    <div className="flex flex-col p-5 space-y-4 m-5 bg-white rounded-md xl:w-[30%] xl:h-[fit-content]">
      <h3 className="text-lg font-600 tracking-wide uppercase mb-4">summary</h3>
      <CartItem productName="XX99 MK II" price="$2999" counter={false} />
      <div>
        <AmountItem label="Total" value="$3,400.00" />
        <AmountItem label="Shipping" value="$50.00" />
        <AmountItem label="VAT (included)" value="$680.00" />
        <AmountItem label="Grand Total" value="$3,400.00" />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-[#D87D4A] text-xs tracking-widest text-white py-4 mt-4 uppercase hover:bg-[#FBAF85]"
        >
          Continue & pay
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
