import React from "react";
import Counter from "../../ui/Counter";
import currencyFormat from "../../utils/currencyFormat";

interface CartItemProps {
  counter?: boolean;
  productName: string;
  price: string;
  itemCount: number;
  image: string;
}

function CartItem({
  counter = true,
  productName,
  price,
  itemCount,
  image,
}: CartItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 object-cover rounded-lg"
          src={image}
          alt="image-product"
        />
        <div className="flex flex-col">
          <span className="font-bold">{productName}</span>
          <span>Total: {currencyFormat(itemCount * Number(price))}</span>
        </div>
      </div>
      {counter ? (
        <Counter size={"sm"} itemCount={itemCount} />
      ) : (
        <span>{itemCount}x</span>
      )}
    </div>
  );
}

export default CartItem;
