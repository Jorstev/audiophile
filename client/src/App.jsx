import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import CategoryMain from "./pages/CategoryMain";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./utils/ScrollToTop";
import Checkout from "./pages/Checkout";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/:headphones" element={<CategoryMain />} />
            <Route path="/:speakers" element={<CategoryMain />} />
            <Route path="/:earphones" element={<CategoryMain />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
