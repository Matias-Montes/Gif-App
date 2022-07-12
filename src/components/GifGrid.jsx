
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({category, quantity}) => {

  const {imagenes, loading} = useFetchGif(category, quantity);
 
  return (
    <>
        <h3 className="titulo">{category}</h3>     
        
        {/* Desplegar Listado */}
        <div className="card-grid gifGrid">
          {
            loading ? <h2>Cargando...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
          }
        </div>            
    </>
  )
}


