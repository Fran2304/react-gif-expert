import { useState } from "react"
//barrel exports, el AddCategoy se hace diferente al ser un export default
import {GifGridCustomHook, AddCategory} from "./components"

export const GifExpertApp = () => {
  // si el pasamos [] , siempre va a ser un array
  //Nunca pone hook dentro de if, se pierde referencia 1,2,3, que es por posicion
  const [categories, setCategories] = useState(['Naruto'])

 const onAddCategory = (newCategory) => {
  //setCategorie(() => catgeories.push) -> nop porque muta

  // si la categoria existe en la categories, no hacer nada
  if(categories.includes(newCategory.toLowerCase())) return
  setCategories([newCategory, ...categories]) // es como hace una copia, sin modificar el primer valor categories
  // setCategories(c => ([...c, 'inuyasha'])) solo si hacemos callback podemos usar cualqueir name
}

    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          // ⚠️ como es un solo arg dentro de una misma funcion, se puede reducir a onNewCategory = {onAddCategory}
          onNewCategory = {value => onAddCategory(value)}
        />
          {/* 👀 No usar nunca el indice del array como key (error si se elian, eso traeria mala info) */}
          {/* {
            categories.map(category => 
             (
                <div key = {category}>
                  <h3>{category}</h3>
                  <li>{category} </li>
                </div>
              )
            )
          } */}
          {/* Reemplaza lo de ⬆️ */}
          {
            categories.map(category => (
              // <GifGrid 
              //   key = {category } 
              //   category = {category}/>
              <GifGridCustomHook 
                key = {category } 
                category = {category}/>
            ))
          }
    </>
  )
}
