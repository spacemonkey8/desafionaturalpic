import Context from "./context";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import "./styles.css";




function App() {
  const endpoint = "/fotos.json";
  const [photos, setPhotos] = useState([]);
  const sharedData = { photos, setPhotos };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(endpoint);
      const data = await res.json();
      setPhotos(data.photos);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="App">
      <Context.Provider value={sharedData}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos  />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;