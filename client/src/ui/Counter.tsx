import React from "react";

import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/productDetails/productSlice";

interface CounterProps {
  size?: "md" | "sm";
  itemCount?: number;
}

function Counter({ size = "md", itemCount }: CounterProps) {
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        size === "md" ? "w-32 h-12" : "w-24 h-9"
      } flex items-center justify-around bg-[#f1f1f1]`}
    >
      <div
        className=" p-3 text-[#ced6e0] hover:text-[#D87D4A] cursor-pointer"
        onClick={() => dispatch(decrement())}
      >
        <FaMinus className={`${size === "md" ? "text-xs" : "text-[10px]"} `} />
      </div>
      <div className="text-xs font-800">{itemCount}</div>
      <div
        className=" p-3 text-[#ced6e0] hover:text-[#D87D4A] cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        <FaPlus className={`${size === "md" ? "text-xs" : "text-[10px]"} `} />
      </div>
    </div>
  );
}

export default Counter;
