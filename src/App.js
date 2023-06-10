import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Inspiration from "./components/Inspiration";
import Categories from "./components/Categories";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";


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
           
            <Route path="/product/:id" component={ProductPage} />
          </Routes>
        {/* ---- BODY END ----- */}
        <Footer />
      </div>
    </Router>
  );
}

