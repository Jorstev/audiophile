import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import CategoryMain from "./pages/CategoryMain";
import ProductDetails from "./features/productDetails/ProductDetails";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/:headphones" element={<CategoryMain />} />
            <Route path="/:speakers" element={<CategoryMain />} />
            <Route path="/:earphones" element={<CategoryMain />} />
            <Route path="/productDetails" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
