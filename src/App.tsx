import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Gallery from "./pages/Gallery/Gallery";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

//TODO
// Add Skeleton
// Search for duped logic and use hooks
// Add animations
// Add backend
// Should search exist on routes other than main?
// infinite scroll?

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Gallery searchQuery={searchQuery} />} />
            <Route path="/comic/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
