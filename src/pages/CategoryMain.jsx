import BestGear from "../features/category/BestGear";
import CategorySection from "../features/category/CategorySection";
import Footer from "../ui/Footer";
import ProductItem from "../features/category/ProductItem";
import { useOutletContext, useParams } from "react-router-dom";

function CategoryMain() {
  let category = useParams();
  console.log(category);
  category = Object.values(category).at(0);
  console.log(category);

  const { isLoading, isError, categoryProducts, error } = useOutletContext();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="min-w-[360px]">
      <div className="bg-[#010101] text-white h-24 flex items-center justify-center text-[28px] font-600 tracking-wider">
        <span className="uppercase">{category}</span>
      </div>
      {categoryProducts
        .filter((product) => product.category === category)
        .map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      <CategorySection />
      <BestGear />
      <Footer />
    </div>
  );
}

export default CategoryMain;
