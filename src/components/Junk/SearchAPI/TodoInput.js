import React, {useState} from 'react'

//Deconstruct AddNewItem
const TodoInput = ({AddNewItem}) => {

  const [inputVal, setInputValue] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    //use Function here
    AddNewItem(inputVal);
    setInputValue('')
  }

  function handleAddChange (e) {
    setInputValue (e.target.value)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input
        value={inputVal}
        onChange = {handleAddChange}
      />
    </form>
  )
}

export default TodoInput
