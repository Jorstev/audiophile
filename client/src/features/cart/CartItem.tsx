import React from "react";
import productImg from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

import Counter from "../../ui/Counter";
function CartItem() {
  return (
    <div className="flex items-center justify-between">
      <img
        className="w-16 h-16 object-cover rounded-lg"
        src={productImg}
        alt="image-product"
      />
      <div className="flex flex-col">
        <span>XX99 MK II</span>
        <span>$2999</span>
      </div>
      <Counter size={"sm"}></Counter>
    </div>
  );
}

export default CartItem;
