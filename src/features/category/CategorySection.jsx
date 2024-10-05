import CategoryLink from "./CategoryLink";

function CategorySection() {
  return (
    <div className="px-6 py-24 flex flex-col space-y-20">
      <CategoryLink
        image={
          "product-xx99-mark-one-headphones/mobile/image-removebg-preview.svg"
        }
        category={"HEADPHONES"}
        linkTo={""}
      />
      <CategoryLink
        image={"product-zx9-speaker/mobile/image-removebg-preview.svg"}
        category={"SPEAKERS"}
        linkTo={""}
      />
      <CategoryLink
        image={"product-yx1-earphones/mobile/image-removebg-preview.svg"}
        category={"EARPHONES"}
        linkTo={""}
      />
    </div>
  );
}

export default CategorySection;
