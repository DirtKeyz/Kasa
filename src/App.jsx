import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
