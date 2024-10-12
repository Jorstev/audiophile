import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useQuery } from "react-query";
import { getProductByCategory } from "../services/products";

function AppLayout() {
  const {
    isLoading,
    isError,
    data: categoryProducts,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductByCategory,
  });
  return (
    <div>
      <Header />
      <Outlet context={{ isLoading, isError, categoryProducts, error }} />
    </div>
  );
}

export default AppLayout;
