import Biography from "./pages/Biography";
import Eshop from "./pages/Eshop";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/eshop" element={<Eshop />} />
      </Routes>
    </Router>
  );
}

export default App;
