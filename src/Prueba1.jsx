import { useState } from "react"
import { AddPrueba } from "./components/AddPrueba"

export const Prueba1 = () => {
   const [categories, setCategories] = useState(['Drangon Ball', 'Naruto'])
   const onAddCategory = (newCategroy) => {
    setCategories([...categories, newCategroy])
   }
   return (
    <>
        <h1>GifExpertApp</h1>
        <AddPrueba onNewCategory = {value => onAddCategory(value)}>
        </AddPrueba>
        <ol>
            {categories.map(category => {
                return <li key={category}>{category}</li>
            })}
        </ol>
        {/* <button onClick={onAddCategory}> Add</button> */}
    </>
  )
}
