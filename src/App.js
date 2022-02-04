import react from "react";
import About from "./components/about/About";
import Developers from "./components/Developers/Developer";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Subcribe from "./components/subscibe/Subcribe";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developers />    
      <Subcribe />   
      <Footer />                       
    </div>
  );
}

export default App;
