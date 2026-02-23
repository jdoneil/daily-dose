import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Gallery from "./pages/Gallery";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Gallery searchQuery={searchQuery} />} />
          <Route path="/comic/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <footer />
      </BrowserRouter>
    </>
  );
}

export default App;
