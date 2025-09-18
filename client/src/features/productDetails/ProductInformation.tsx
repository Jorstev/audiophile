import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import Button from "../../ui/Button";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Loader from "../../ui/Loader";
import Counter from "../../ui/Counter";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./productSlice";
import currencyFormat from "../../utils/currencyFormat";
import toast, { Toaster } from "react-hot-toast";

interface IncludeItem {
  quantity: number;
  item: string;
}
interface GalleryItem {
  first: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  second: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  third: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

interface OthersItem {
  image: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  name: string;
  slug: string;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  features: string;
  new?: boolean;
  includes: IncludeItem[];
  gallery: GalleryItem;
  others: OthersItem[];
}

interface OutletContext {
  isLoading: boolean;
  isError: boolean;
  categoryProducts: Product[];
  error: null | { message: string };
}

const ProductInformation: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const { isLoading, isError, categoryProducts, error } =
    useOutletContext<OutletContext>();

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (isError) return <div>Error: {error?.message}</div>;
  const product = categoryProducts?.find(
    (product) => product.id === Number(id)
  );
  const othersProducts = product?.others.map((other) =>
    categoryProducts?.find((prod) => prod.slug === other.slug)
  );
  const itemCount = useSelector((state: any) => state.product.counter);
  const OnAddToCart = () => {
    localStorage.setItem(
      `cart_${product?.id}`,
      JSON.stringify({ ...product, itemCount })
    );
    toast.success("Successfully added to cart!");
    window.dispatchEvent(new Event("cart-updated"));
    dispatch(reset());
  };

  return (
    <section className="min-w-[360px] pt-16 px-6 py-16 flex flex-col mx-auto xl:max-w-[1200px] xl:mx-auto xl:px-0">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-10 md:flex-row gap-10 md:items-center md:space-y-0 md:h-[33rem] xl:h-[38rem]">
          <div className="flex lg:justify-start justify-center md:w-1/2 h-full">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={product?.image?.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product?.image?.tablet}
              />
              <img
                className="w-full h-full object-cover"
                src={product?.image?.mobile}
                alt="image-product"
              />
            </picture>
          </div>
          {/* Product details section */}
          <div className="flex flex-col space-y-5 md:w-1/2 md:space-y-10">
            <span className="tracking-[0.6em] text-sm text-[#D87D4A] ">
              {product?.new ? "NEW PRODUCT" : ""}
            </span>
            <h2 className="text-[28px] font-600 pr-28">{product?.name}</h2>
            <p className="opacity-50 text-[15px] font-400 pr-14">
              {product?.description}
            </p>
            <span className="text-lg font-600 tracking-wider">
              {currencyFormat(product?.price ?? 0)}
            </span>
            <div className="flex space-x-5">
              <Counter itemCount={itemCount} />
              <Button
                type="primaryBtn"
                text="ADD TO CART"
                linkTo="#"
                onClick={OnAddToCart}
                disabled={itemCount === 0}
              />
            </div>
          </div>
        </div>
        <div className="space-y-10 lg:flex lg:flex-row lg:items-baseline lg:space-x-24">
          {/* Features section */}
          <div className="flex flex-col space-y-5 lg:w-1/2">
            <h2 className="text-[24px] md:text-[32px] font-600 tracking-wider">
              FEATURES
            </h2>
            <p className="text-[15px] font-400 opacity-50">
              {product?.features}
            </p>
          </div>
          {/*  In the Box section */}
          <div className="md:flex md:flex-row md:items-baseline md:gap-10 lg:w-1/2 lg:flex-col lg:gap-0">
            <h2 className="text-[24px] md:text-[32px] font-600 tracking-wider md:w-1/2">
              IN THE BOX
            </h2>
            <ul className=" text-[15px] font-400 opacity-50 flex flex-col space-y-2 mt-4 md:w-1/2 ">
              {product?.includes.map((item, index) => (
                <div key={index} className="flex space-x-6">
                  <p className="text-[#D87D4A] font-800">{item.quantity}x</p>
                  <li>{item.item}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        {/* Gallery section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mt-4">
            {/* First column, first row */}
            <img
              src={product?.gallery?.first?.mobile}
              alt="gallery-image-1"
              className="w-full h-auto object-cover md:row-start-1 md:col-start-1"
            />
            {/* First column, second row */}
            <img
              src={product?.gallery?.second?.mobile}
              alt="gallery-image-2"
              className="w-full h-auto object-cover md:row-start-2 md:col-start-1"
            />
            {/* Second column, spanning both rows */}
            <img
              src={product?.gallery?.third?.mobile}
              alt="gallery-image-3"
              className="w-full h-auto object-cover md:row-span-2 md:col-start-2 md:row-start-1"
            />
          </div>
        </div>
        {/* You may also like section */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[24px] md:text-[32px] font-600 tracking-wider w-full text-start">
            YOU MAY ALSO LIKE
          </h2>
          <div className="px-6 py-24 flex flex-col space-y-20 w-full md:flex-row md:space-x-4 items-center md:space-y-0 min-w-[360px] xl:px-0">
            {/* Example product card */}
            {othersProducts?.map((othersProduct, index) => (
              <div className="flex flex-col items-center space-y-5" key={index}>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={othersProduct?.image?.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={othersProduct?.image?.tablet}
                  />
                  <img
                    src={othersProduct?.image?.mobile}
                    alt="other-product-image"
                    className="w-full h-auto object-cover mb-4"
                  />
                </picture>

                <h3 className="text-lg font-semibold">{othersProduct?.name}</h3>
                <Button
                  type="primaryBtn"
                  text="SEE PRODUCT"
                  linkTo={`/productDetails/${othersProduct?.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
