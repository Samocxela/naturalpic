import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const {fotos,setFotos}= useContext(Context);
  const fotosFavoritas = (fotos.filter((foto)=> foto.favorito)).length;
  
  return (
    <div>
      <h1>Fotos Favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
       {
         fotosFavoritas == 0?
         <p >No existen fotos favoritas</p>:
         fotos.filter((foto)=>foto.favorito).map((foto,i)=>(
          <div
            className="foto"
            style={{backgroundImage: `url(${foto.src})`}}
            key={i}>
            <p>{foto.desc}</p>
          </div>
         ))
       }
      </div>
    </div>
  );
}
