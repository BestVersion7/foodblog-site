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
        >  Chicken </button>
        <button
          value = "beef"
          onClick = {handleInputChange}
        > Beef </button>
        <button
          value = "fish"
          onClick = {handleInputChange}
        > Fish </button>
        <input
          value = {inputVal}
          onChange = {handleInputChange2}
          placeholder = 'Search Here'
        />
      </div>
      <div style = {styles.resulttext}> Top 25 Results: </div>
    </>
  )
}

const styles = {
  container: {
    display: 'grid',
    gridTemplate: 'auto/ repeat(6, auto) 1fr',
    gridGap: '.5em'
  },
  resulttext: {
    color: 'purple',
    fontWeight: 'bold'
  },

}

export default RecipeForm
