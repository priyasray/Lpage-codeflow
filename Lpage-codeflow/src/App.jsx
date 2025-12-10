import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  function handleScroll() {
    setScrolled(window.scrollY > 50 );
  }

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <Navbar scrolled={scrolled}/>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
