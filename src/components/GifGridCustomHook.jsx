import { GifItem } from "./GifItem"
import {useFetchGifts} from "./../hooks/useFetchGifts"


export const GifGridCustomHook = ({category}) => {
const {images, isLoading} = useFetchGifts(category)

console.log('isloading',{isLoading})
// NULL nunca se renderiza

  return (
    <>
    <h3>{category}</h3>
    {/* para que h2 aparez y desaparezca*/}
    {/* <h2>Cargando..</h2> */}
    {/* {
      isLoading
      ?<h2>Cargando..</h2> 
      : null 
    } */}
    {isLoading && (<h2>Cargando..</h2>)}
    <div className="card-grid">
        {images.map((image) => (
            <GifItem key={image.id} {...image}/>
        ))}
    </div>
    {/* <img src={gifs.url.url} alt="" /> */}
    </>
  )
}
