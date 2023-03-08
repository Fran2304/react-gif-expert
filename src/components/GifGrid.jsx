// 🟣 buena practica, funcion getgifs definida  fuera del functional component, xq componente no va a estar volviendo a asignar un espacio en memoria, cada vez que nuestro componenete se vuelve a dibujar(cambio de estadp)
// 🚩  NUNCA COLOCAR FUNCTION dentro de component
import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ({category}) => {
// 🟣 necesario tener estado local, para mantener las images y ese estado se mantiene, cuando se redibuja el componente
// podemo inicializarlos como  [] , para cuando espera ser renderizado, hacer loading
const [images, setImages] = useState([])
  
// 🟣 buena practica, nunca colocar la ejecucion de una funcion directamente en un functional component, sino cada vez que se 
//redibuja el componente se estar haciendo un llamado, y nosotros solo queremos que getImages se llame una vez, 1 solicitud http. se debe hacer en useEffect

// 🟣 UseEffect: sirve para disparar un efecto secundario, efecto (callbacck) y lista de dpencencia (lista de condiciones). le digo a react solo lo ejecute 1 vez, asi se redibuje el componente
//Si dejo dependencias vacias -> [], quiere decir que ese hook solo se va a disparar la primera vez que se renderiza componente. Asi cambia mill veces el estado, no se vuelve a llamar getgifs
// 🚩  NUNCA usar async en use effect, porque lo transfomra como promise y useEffect siempre espera una funcion como rpta no promise
// OPCIONES:
//  1-. Usar then
//  2-. Definir una afnyn funcion y mandarle llamar dentro del useEffect

const getImages = async() => {
    const newImages = await getGifs(category)
    setImages(newImages) // 2️⃣
}

// hace que getImages solo se ejecute 1 vez, cuando se crea compronente -> se pasa nuevo nombre de categoria de gif (se anade input + submit) y solo traer un fetch sobre ese elemento
useEffect(() => {
    // getGifs(category)
    // .then(newImages => setImages(newImages)) 1️⃣
    getImages() // 2️⃣ haciendo el async y guardando en una funcion  const getImages 🔼

 }, []) // el array vacio es el que dice que se ejecute solo la primera vez (cuando se crea este componente)


  return (
    <>
    <h3>{category}</h3>
    <div className="card-grid">
        {images.map((image) => (
          // 🟣 <GifItem key={image.id} {...image}/> se esparcen todas las propiedades d eimage ( title, url),
          //  que pueden ser varias para poderlas usar directo en el componente. es muy comun, se tiene muchas propiedades
            <GifItem key={image.id} {...image}/> 
        ))}
    </div>
    {/* <img src={gifs.url.url} alt="" /> */}
    </>
  )
}

//Nota, si queremos anadir la carga, ya seria mucha logica, podemos usar un custom hook