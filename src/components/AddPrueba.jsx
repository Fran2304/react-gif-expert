import { useState } from "react"

export const AddPrueba = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState()

  const onInputChange = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if(inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <>
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" placeholder="Buscar gifs" onChange={e =>onInputChange(e)}  value = {inputValue || ''}/>
        </form>
    </>
  )
}
