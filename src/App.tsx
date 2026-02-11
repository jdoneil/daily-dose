import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Gallery from "./pages/Gallery";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/comic/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
