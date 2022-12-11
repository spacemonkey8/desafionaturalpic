import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../context";



export default function Favoritos() {
  const { photos } = useContext(Context);

  return (
    <div  >
      <h1>Fotos favoritas</h1>
      <div >
        {photos &&
          photos
            .filter((photo) => photo.liked)
            .map((photo) => {
              return (
                <div>
                  <img className="graphic"
                    key={photo.id}
                    src={photo.src.landscape}
                    alt={photo.alt}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}