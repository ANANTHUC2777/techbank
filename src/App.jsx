import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { ImgProvider } from "./Context/ImgContext";
import Cursor from "./Components/Cursor";
import ScrollToTop from "./Components/ScrollToTop";
export default function App() {
  return (
    <ImgProvider>
      <Router>
        <ScrollToTop />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <Cursor />
      </Router>
    </ImgProvider>
  );
}
