import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Gallery</h1>} />
          <Route path="/comic/:id" element={<h1>Comic Details page</h1>} />
          <Route path="/favorites" element={<h1>Favorites page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
