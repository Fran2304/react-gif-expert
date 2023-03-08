import { useState } from "react"

export default function AddCategory({onNewCategory}) {
// cada componente puede tener sus propios estados
const [inputValue, setInputValue] = useState()

const onInputChange = (event) => {
  // console.log('event.target.value------->',event.target.value)
  // esto solo sobrescibre el valor g, go, gok, goku
  setInputValue(event.target.value)
}


const onSubmit = (event) => {
    // console.log('event.target.value', event.target.value) // aqui es undefined, 
    //  usar el inputValue, este tiene el valor
    event.preventDefault()
    if(inputValue.trim().length <= 1) return
    // necesario hacer lo con  callback
    setInputValue('') //limpiar el submit se hace al terminar todo el onSubmit 
    onNewCategory(inputValue.trim())
}
// ojito react recien renderiza, al terminar todo el onSubmit

  return (
    <>
    {/* <form onSubmit={(event) => onSubmit(event)}>  como se le manda solo el evento -> e, se puede resumir a lo de abajo*/} 
    <form onSubmit={onSubmit}>
    {/* el form solito hace un refresh */}
         <input 
            type="text"
            placeholder="Buscar gifs"
            value = {inputValue || ''}
            onChange = {onInputChange}
          />
    </form>
    </>
   
  )
}
