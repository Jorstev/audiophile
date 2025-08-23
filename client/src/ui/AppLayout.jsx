import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useQuery } from "react-query";
import { getAllProducts } from "../services/products";

function AppLayout() {
  const {
    isLoading,
    isError,
    data: categoryProducts,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <div>
      <Header />
      <main className="pt-24 lg:pt-20 ">
        <Outlet context={{ isLoading, isError, categoryProducts, error }} />
      </main>
    </div>
  );
}

export default AppLayout;
