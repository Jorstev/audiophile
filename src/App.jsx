import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import CategoryMain from "./pages/CategoryMain";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/:headphones" element={<CategoryMain />}></Route>
            <Route path="/:speakers" element={<CategoryMain />}></Route>
            <Route path="/:earphones" element={<CategoryMain />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
