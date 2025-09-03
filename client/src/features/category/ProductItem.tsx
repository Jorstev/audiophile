import React from "react";
import Button from "../../ui/Button";

interface Product {
  id: number;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  name: string;
  new?: boolean;
}

interface ProductItemProps {
  product: Product;
  index: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, index }) => {
  const isEven = index % 2 === 0;
  const flexRowClass = isEven ? "lg:flex-row" : "lg:flex-row-reverse";
  const justifyClass = isEven ? "lg:justify-start" : "lg:justify-end";

  return (
    <div
      className={`pt-3 flex flex-col space-y-7 ${flexRowClass} items-center text-center w-full h-[46rem] lg:h-[35rem] xl:max-w-[1200px] xl:mx-auto px-6`}
    >
      <div
        className={`lg:w-1/2 h-[21rem] w-full flex justify-center items-center ${justifyClass}`}
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={product.categoryImage.desktop}
          />
          <source
            media="(min-width: 768px)"
            srcSet={product.categoryImage.tablet}
          />
          <img
            className="rounded-lg max-h-[21rem] lg:max-h-[30rem] lg:object-cover"
            src={product.categoryImage.mobile}
            alt="image-product"
          />
        </picture>
      </div>
      <div className="space-y-4 lg:space-y-10 lg:w-1/2 lg:text-start">
        {product.new && (
          <span className="tracking-[0.6em] text-sm text-[#D87D4A]">
            NEW PRODUCT
          </span>
        )}
        <div className="text-[28px] md:text-[2.50rem] font-800 px-10 md:px-36 lg:px-0">
          {product.name}
        </div>
        <div className="px-6 md:px-24 lg:px-0">
          <span className="text-[15px] text-gray-600 font-400">
            {product.description}
          </span>
        </div>
        <div>
          <Button
            type="primaryLink"
            text="SEE PRODUCT"
            linkTo={`/productDetails/${product.id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
