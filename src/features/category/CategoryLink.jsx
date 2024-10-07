import Button from "../../ui/Button";

function CategoryLink({ image, linkTo, category }) {
  return (
    <div className="relative bg-[#f1f1f1] h-44 w-full rounded-lg">
      <img
        className="z-20 absolute w-[96px] -top-14 left-1/2 -translate-x-1/2"
        src={`/src/assets/${image}`}
        alt="image-category"
      />
      <div className="h-full w-full flex flex-col justify-end items-center space-y-3 pb-5">
        <h3 className="font-800 tracking-wider">{category}</h3>
        <Button type={"secondaryLink"} text={"SHOP"} linkTo={linkTo} />
      </div>
      <div className="absolute bg-gray-400 border border-black left-1/2 -translate-y-1/2 top-1/3 -translate-x-1/2 w-28 h-8 z-10 blur-xl"></div>
    </div>
  );
}

export default CategoryLink;
