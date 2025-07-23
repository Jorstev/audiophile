import React from "react";
import CategoryLink from "./CategoryLink";

const CategorySection: React.FC = () => {
  return (
    <section className="px-6 py-24 flex flex-col space-y-20 w-full md:flex-row md:space-x-4 md:items-center md:space-y-0">
      <CategoryLink
        image={
          "product-xx99-mark-one-headphones/mobile/image-removebg-preview.svg"
        }
        category={"HEADPHONES"}
        linkTo={"/headphones"}
      />
      <CategoryLink
        image={"product-zx9-speaker/mobile/image-removebg-preview.svg"}
        category={"SPEAKERS"}
        linkTo={"/speakers"}
      />
      <CategoryLink
        image={"product-yx1-earphones/mobile/image-removebg-preview.svg"}
        category={"EARPHONES"}
        linkTo={"/earphones"}
      />
    </section>
  );
};

export default CategorySection;
