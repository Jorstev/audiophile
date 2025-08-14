import React from "react";
import Footer from "../ui/Footer";
import BestGear from "../features/category/BestGear";
import CategorySection from "../features/category/CategorySection";

import ProductInformation from "../features/productDetails/ProductInformation";

const ProductDetails: React.FC = () => {
  return (
    <div>
      <ProductInformation />
      <CategorySection />
      <BestGear />
      <Footer />
    </div>
  );
};

export default ProductDetails;
