import React from "react";
import CategoryLink from "./CategoryLink";

interface CategorySectionProps {
  menu?: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ menu = false }) => {
  return (
    <section
      className={`${
        menu ? "py-14 md:py-20" : "py-24"
      } px-6 flex flex-col space-y-20 w-full md:flex-row md:space-x-4 md:items-center md:space-y-0 min-w-[360px]`}
    >
      <CategoryLink
        image={
          "product-xx99-mark-one-headphones/mobile/image-removebg-preview.svg"
        }
        category={"HEADPHONES"}
        linkTo={"/headphones"}
        menu={menu}
      />
      <CategoryLink
        image={"product-zx9-speaker/mobile/image-removebg-preview.svg"}
        category={"SPEAKERS"}
        linkTo={"/speakers"}
        menu={menu}
      />
      <CategoryLink
        image={"product-yx1-earphones/mobile/image-removebg-preview.svg"}
        category={"EARPHONES"}
        linkTo={"/earphones"}
        menu={menu}
      />
    </section>
  );
};

export default CategorySection;
