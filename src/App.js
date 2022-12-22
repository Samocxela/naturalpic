import "./styles.css";
import Context from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useState,useEffect } from "react";

export default function App() {
  const [fotos, setFotos]=useState([]);
  const endpoint = "./fotos.json";
  
  const obtenerFotos = async () => {
      const res = await fetch(endpoint)
      let { photos }  = await res.json()
      
      photos = photos.map((eleFoto)=>({
        id: eleFoto.id,
        src: eleFoto.src.tiny,
        desc: eleFoto.alt,
        favorito: false
      }));
      setFotos(photos);
  }
  
  useEffect(()=>{
    obtenerFotos();
  },[])

  return (
    <div className="App">
      <Context.Provider value={{fotos,setFotos}}>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
