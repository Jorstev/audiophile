import Button from "../../ui/Button";

function ProductItem({ product }) {
  return (
    <div className="flex flex-col items-center justify-between text-center p-6 w-full h-[46rem]">
      <div>
        <img
          className="rounded-lg max-h-[21rem] "
          src={`${product.image.mobile}`}
          alt="image-product"
        />
      </div>

      {product.new ?? (
        <span className="tracking-[0.6em] text-sm text-[#D87D4A]">
          NEW PRODUCT
        </span>
      )}

      <div className="text-[28px] font-800 px-10">{product.name}</div>
      <div>
        <p className="text-[15px] text-gray-600 font-400">
          {product.description}
        </p>
      </div>

      <Button type="primaryLink" text="SEE PRODUCT" />
    </div>
  );
}

export default ProductItem;
