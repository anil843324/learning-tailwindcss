import "./App.css";
import About from "./components/About";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div>
     

      <Navbar/>
      <Hero/>
      <About/>
     <Developer/>
     <Subscribe/>
     <Footer/>

    </div>
  );
}

export default App;
