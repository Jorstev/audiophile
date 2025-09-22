import React from "react";
import Button from "../../ui/Button";

interface CategoryLinkProps {
  image: string;
  linkTo: string;
  category: string;
  menu?: boolean;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({
  image,
  linkTo,
  category,
  menu = false,
}) => {
  return (
    <div
      className={`${
        menu ? "h-32 w-[290px]" : "h-44 w-[315px] lg:w-[325px] "
      } relative bg-[#f1f1f1] rounded-lg `}
    >
      <img
        className={`${
          menu ? "w-[60px]" : "w-[80px]"
        } z-20 absolute -top-12 left-1/2 -translate-x-1/2`}
        src={`/assets/${image}`}
        alt="image-category"
      />
      <div className="h-full flex flex-col justify-end items-center space-y-3 pb-5">
        <h3 className="font-800 tracking-wider">{category}</h3>
        <Button type="secondaryLink" text="SHOP" linkTo={linkTo} />
      </div>
      <div
        className={`absolute bg-gray-400 border border-black left-1/2 -translate-y-1/2 -translate-x-1/2 ${
          menu ? "w-20 h-6 top-1/4" : "w-28 h-8 top-1/2"
        }  z-10 blur-xl`}
      ></div>
    </div>
  );
};

export default CategoryLink;
