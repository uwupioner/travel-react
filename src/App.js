import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Search from "./components/Search"
import Selects from "./components/Selects";
import Slider from "./components/Slider";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>  
      <Slider/> 
      <Footer/>
    </div>
  );
}

export default App;
