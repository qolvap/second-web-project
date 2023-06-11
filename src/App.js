import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Inspiration from "./components/Inspiration";
import Categories from "./components/Categories";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import Abstract from "./components/categoriesComponents/Abstract";
import Nature from "./components/categoriesComponents/Nature";
import Street from "./components/categoriesComponents/Street";
import Architect from "./components/categoriesComponents/Architect";
import Popular from "./components/categoriesComponents/Popular";


function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}

  export default function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* ---- BODY START ----- */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Inspiration" element={<Inspiration />} exact />
            <Route path="/Categories" element={<Categories />} exact />
            <Route path="/Careers" element={<Careers />} exact />
            <Route path="/Categories/Abstract" element={<Abstract />} />
            <Route path="/Categories/Nature" element={<Nature />} />
            <Route path="/Categories/Street" element={<Street />} />
            <Route path="/Categories/Architect" element={<Architect />} />
            <Route path="/Categories/Popular" element={<Popular />} />
            <Route path="/product/:id" element={<ProductPage />} />

          </Routes>
        {/* ---- BODY END ----- */}
        <Footer />
      </div>
    </Router>
  );
}

