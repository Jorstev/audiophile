import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/headphones" element={<Headphones />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
