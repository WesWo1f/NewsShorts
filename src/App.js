import Navbar from "./Navbar";
import Entertainment from "./pages/Entertainment";
import Home from "./pages/Home";
import AllNews from "./pages/AllNews";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import World from "./pages/World";
import Technology  from "./pages/Technology";
import Automobile from "./pages/Automobile";
import Startup from "./pages/Startup";
import Miscellaneous from "./pages/Miscellaneous";
import Science from "./pages/Science";
import BuyMeCoffee from "./pages/BuyMeCoffee";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/allNews" element={<AllNews />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/world" element={<World />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
        <Route path="/science" element={<Science />} />
        <Route path="/automobile" element={<Automobile />} />
        <Route path="/entertainment" element={<Entertainment />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/buyMeCoffee" element={<BuyMeCoffee />} />
      </Routes>
    </div>
    </>

  )
}

export default App
 