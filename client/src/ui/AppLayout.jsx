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
      <Outlet context={{ isLoading, isError, categoryProducts, error }} />
    </div>
  );
}

export default AppLayout;
