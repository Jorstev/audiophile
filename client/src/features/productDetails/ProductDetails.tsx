import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Footer from "../../ui/Footer";
import BestGear from "../category/BestGear";
import CategorySection from "../category/CategorySection";
import Button from "../../ui/Button";

const ProductDetails: React.FC = () => {
  return (
    <div className="min-w-[360px]">
      <section className="px-6 py-16">
        <div>
          <div>
            <img
              src="/src/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
              alt="image-product"
            />
          </div>
          <div>
            <span className="tracking-[0.6em] text-sm text-[#D87D4A]">
              NEW PRODUCT
            </span>
            <h2 className="text-[28px] font-800 px-10">
              XX99 MARK II HEADPHONES
            </h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <span>$2.999</span>
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
            <div>
              <h2 className="text-[26px] font-600 px-10">FEATURES</h2>
            </div>
          </div>
        </div>
      </section>
      <CategorySection />
      <BestGear />
      <Footer />
    </div>
  );
};

export default ProductDetails;
