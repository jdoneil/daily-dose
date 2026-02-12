import { BrowserRouter, Route, Routes } from "react-router";
import Gallery from "./pages/Gallery";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/comic/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <footer />
      </BrowserRouter>
    </>
  );
}

export default App;
