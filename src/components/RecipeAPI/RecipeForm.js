import React, {useState} from 'react'

const RecipeForm = ( {ChangeOption}) => {
  const [inputVal, setInputVal] = useState('')

  function handleInputChange (e) {
    ChangeOption(e.target.value);
    setInputVal('')
  }

  function handleInputChange2 (e) {
    setInputVal(e.target.value)
    ChangeOption(inputVal);
  }

  return (
    <>
      Click on option or type below
      <div style={styles.container}>
        <button
          value = "chicken"
          onClick = {handleInputChange}
          className = "recipe-input-button"
        >  Chicken </button>
        <button
          value = "beef"
          onClick = {handleInputChange}
          className = "recipe-input-button"
        > Beef </button>
        <button
          value = "fish"
          onClick = {handleInputChange}
          className = "recipe-input-button"
        > Fish </button>
        <input
          value = {inputVal}
          onChange = {handleInputChange2}
          style = {styles.input}
          placeholder = 'Search Here'
        />
      </div>
      <div style = {styles.resulttext}> Top 25 Results: </div>
    </>
  )
}

const styles = {
  resulttext: {
    color: 'purple',
    fontWeight: 'bold'
  },
  input: {
    marginLeft: '.3em',
    maxWidth: '10em'
  }
}

export default RecipeForm
