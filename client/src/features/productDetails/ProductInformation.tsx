import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Footer from "../../ui/Footer";
import BestGear from "../category/BestGear";
import CategorySection from "../category/CategorySection";
import Button from "../../ui/Button";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Loader from "../../ui/Loader";

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
}

interface Product {
  id: number;
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
  console.log(id);
  const { isLoading, isError, categoryProducts, error } =
    useOutletContext<OutletContext>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  return (
    <section className="min-w-[360px]">
      <div className="px-6 py-16">
        <div>
          <img src={product?.image?.mobile} alt="image-product" />
        </div>
        <div className="flex flex-col space-y-16">
          {/* Product details section */}
          <div className="flex flex-col space-y-5 mt-10">
            <span className="tracking-[0.6em] text-sm text-[#D87D4A]">
              {product?.new ? "NEW PRODUCT" : ""}
            </span>
            <h2 className="text-[28px] font-600">{product?.name}</h2>
            <p className="opacity-50 text-[15px] font-400">
              {product?.description}
            </p>
            <span className="text-lg font-600 tracking-wider">
              ${product?.price}
            </span>
            <div className="flex space-x-5">
              <div className=" w-32 h-12 flex items-center justify-around bg-[#f1f1f1]">
                <div className=" p-3 text-[#ced6e0] hover:text-[#D87D4A] cursor-pointer">
                  <FaMinus className="text-xs" />
                </div>
                <div className="text-xs font-800">1</div>
                <div className=" p-3 text-[#ced6e0] hover:text-[#D87D4A] cursor-pointer">
                  <FaPlus className="text-xs" />
                </div>
              </div>
              <Button type="primaryBtn" text="ADD TO CART" linkTo="#" />
            </div>
          </div>
          {/* Features section */}
          <div className="flex flex-col space-y-5 ">
            <h2 className="text-[24px] font-600 tracking-wider">FEATURES</h2>
            <p className="text-[15px] font-400 opacity-50">
              {product?.features}
            </p>
          </div>
          {/*  In the Box section */}
          <div>
            <h2 className="text-[24px] font-600 tracking-wider">IN THE BOX</h2>
            <ul className=" text-[15px] font-400 opacity-50 flex flex-col space-y-2 mt-4">
              {product?.includes.map((item, index) => (
                <div key={index} className="flex space-x-6">
                  <p className="text-[#D87D4A] font-800">{item.quantity}x</p>
                  <li>{item.item}</li>
                </div>
              ))}
            </ul>
          </div>
          {/* Gallery section */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <img
                src={product?.gallery?.first?.mobile}
                alt="gallery-image-1"
                className="w-full h-auto object-cover"
              />
              <img
                src={product?.gallery?.second?.mobile}
                alt="gallery-image-2"
                className="w-full h-auto object-cover"
              />
              <img
                src={product?.gallery?.third?.mobile}
                alt="gallery-image-3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* You may also like section */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-[24px] font-600 tracking-wider w-full text-start">
              YOU MAY ALSO LIKE
            </h2>
            <div className="px-6 py-24 flex flex-col space-y-20 w-full md:flex-row md:space-x-4 items-center md:space-y-0 min-w-[360px]">
              {/* Example product card */}
              {product?.others.map((other, index) => (
                <div
                  className="flex flex-col items-center space-y-5"
                  key={index}
                >
                  <img
                    src={other?.image?.mobile}
                    alt="other-product-image"
                    className="w-full h-auto object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{other?.name}</h3>
                  <Button
                    key={product.id}
                    type="primaryBtn"
                    text="SEE PRODUCT"
                    linkTo={`/productDetails/${product.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
