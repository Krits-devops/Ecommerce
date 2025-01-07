import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  )
};

export default App;
