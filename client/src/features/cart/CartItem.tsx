import React from "react";
import productImg from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import Counter from "../../ui/Counter";

interface CartItemProps {
  counter?: boolean;
  productName: string;
  price: string;
}

function CartItem({ counter = true, productName, price }: CartItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 object-cover rounded-lg"
          src={productImg}
          alt="image-product"
        />
        <div className="flex flex-col">
          <span className="font-bold">{productName}</span>
          <span>{price}</span>
        </div>
      </div>
      {counter ? <Counter size={"sm"}></Counter> : <span>1x</span>}
    </div>
  );
}

export default CartItem;
