import React, {useState} from 'react'

const RecipeLayout = ( {item} ) => {
  //deconstruct api here
  const {strMeal, strMealThumb, strInstructions, strSource} = item;
  const [showInstructions, setShowInstructions] = useState(true)
  const [buttonText, setButtonText] = useState('Expand Recipe')
  //this toggles
  const handleClick = () => {
    setShowInstructions(!showInstructions)
    buttonText === 'Expand Recipe' ? setButtonText('Shrink Recipe') : setButtonText('Expand Recipe')
  }
  return (
    <>
      <div className = "recipe-container">
        <div>
          <h4> {strMeal} </h4>
          <img style={styles.img} src={strMealThumb} alt={strMeal} />
          <br /><a target='_blank' rel='noopener noreferrer' style={styles.link} href={strSource}>Link to meal </a>
        </div>

        <div className="recipe-container-directions">
          <p>
            <b>Directions: </b>
            <button
              onClick = {handleClick}
              className ="recipe-container-button"
              > {buttonText} </button>
            {showInstructions ?
            <span className = "recipe-directions"> {strInstructions} </span>:
            <span>{strInstructions}</span>}
          </p>
        </div>
      </div>
    </>
  )
}

const styles = {
  img: {
    maxWidth: "15em",
  },
  link: {
    fontWeight: 'bold'
  }
};

export default RecipeLayout
