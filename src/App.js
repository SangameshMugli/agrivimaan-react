import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const NavBar = React.lazy(() => import('./components/NavBar'));
const Home = React.lazy(() => import('./components/Home'));
const Contact = React.lazy(() => import('./components/Contact'));
const About = React.lazy(() => import('./components/About'));
const Book = React.lazy(() => import('./components/Book'));
const Footer = React.lazy(() => import('./components/Footer'));
const Product = React.lazy(() => import('./components/Product'));
const Product11lhexa = React.lazy(() => import('./components/Product11lhexa'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Agriculture = React.lazy(() => import('./components/Agriculture'));
const Faqs = React.lazy(() => import('./components/Faqs'));
const Gallery=React.lazy(()=> import('./components/Gallery'))
function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Please wait, Loading.....</div>}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product11lhexa" element={<Product11lhexa />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/booknow" element={<Book />} />
          </Routes>
          <Footer />
        </Suspense>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
