import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Archana's pages
import Home from "./pages/Home";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import CertificationDetails from "./pages/CertificationDetails";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";

// Anjali's pages
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import RequestQuote from "./pages/RequestQuote";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/certifications/:id" element={<CertificationDetails />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
