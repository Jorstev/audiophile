import React from "react";
import BestGear from "../features/category/BestGear";
import CategorySection from "../features/category/CategorySection";
import Footer from "../ui/Footer";
import ProductItem from "../features/category/ProductItem";
import { useOutletContext, useParams } from "react-router-dom";

interface Product {
  id: number;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  name: string;
  category: string;
  new?: boolean;
}

interface OutletContext {
  isLoading: boolean;
  isError: boolean;
  categoryProducts: Product[];
  error: null | { message: string };
}

function CategoryMain() {
  const params = useParams<{ headphones: string }>();

  const category = params.headphones || "";
  const { isLoading, isError, categoryProducts, error } =
    useOutletContext<OutletContext>();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="min-w-[360px]">
      <div className="bg-[#010101]  text-white h-24 flex items-center justify-center text-[28px] font-600 tracking-wider">
        <span className="uppercase">{category}</span>
      </div>
      {categoryProducts
        .filter((product) => product.category === category)
        .map((product, index) => (
          <ProductItem product={product} index={index} key={product.id} />
        ))}
      <CategorySection />
      <BestGear />
      <Footer />
    </div>
  );
}

export default CategoryMain;
