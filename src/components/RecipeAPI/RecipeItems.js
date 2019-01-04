import React from 'react'

const RecipeItems = ( {item} ) => {
  const {strMeal, strMealThumb, strInstructions, strSource} = item;
  return (
    <>
      <div style = {styles.resulttext}> Top 25 Results: </div>

      <div className = "recipe-container">
        <div>
          <h4> {strMeal} </h4>
          <img style={styles.img} src={strMealThumb} alt={strMeal} />
          <br /><a target='_blank' rel='noopener noreferrer' style={styles.link} href={strSource}>Link to meal </a>
        </div>

        <div className="recipe-container-directions">
          <p>
            <b>Directions:</b>
            <span> + </span>
            <span> {strInstructions} </span>
          </p>
        </div>

      </div>
    </>
  )
}

const styles = {
  resulttext: {
    color: 'purple',
    fontWeight: 'bold'
  },
  img: {
    maxWidth: "15em"
  },
  link: {
    fontWeight: 'bold'
  }
};

export default RecipeItems
