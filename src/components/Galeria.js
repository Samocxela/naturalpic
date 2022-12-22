import "../assets/css/galeria.css";
import Heart from "./Heart";
import {useContext } from "react";
import Context from "../Context";


export default function Home() {
  const {fotos,setFotos}=useContext(Context)
  const setFavorita = (id) =>{
    const fotoIndex = fotos.findIndex((eleFoto) => eleFoto.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos])
  }

  return (
    <div className="galeria grid-columns-5 p-3">
        {
          fotos.map((foto,i)=>(
            <div
              onClick={() => setFavorita(foto.id)}
              className="foto"
              style={{backgroundImage: `url(${foto.src})`}}
              key={i}>
              <Heart filled={foto.favorito}/>
              <p>{foto.desc}</p>
            </div>
          ))
        }
    </div>
  );
}
