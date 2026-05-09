import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tech from "./components/Tech";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import useScroll from "./hooks/useScroll";

function App() {
  useScroll();
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tech />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;