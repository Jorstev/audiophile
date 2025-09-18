import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useQuery } from "react-query";
import { getAllProducts } from "../services/products";
import { CartProvider } from "../context/CartContext";
import { Toaster } from "react-hot-toast";

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
    <CartProvider>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />

        <Header />
        <main className="pt-24 lg:pt-20 ">
          <Outlet context={{ isLoading, isError, categoryProducts, error }} />
        </main>
      </div>
    </CartProvider>
  );
}

export default AppLayout;
