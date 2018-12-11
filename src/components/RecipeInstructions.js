import React from 'react';

const images = {
	applepie: require('../assets/applepie.jpg'),
	fishandchips: require('../assets/fishandchips.jpg'),
	kobebeef: require('../assets/kobebeef.jpeg')
}

const RecipeInstructions = () => {
  const ingredients = [
    "flour",
    "sugar",
    "salt",
    "eggs",
    "lemon juice",
    "butter",
    "cinnamon",
    "nutmeg"
  ];

  const ingredientlist = ingredients.map((x,i)=>
    <li key={i}>{x}</li>
  );

  const instruction = [
    "Mix dry ingredients to form a pie crust.",
    "Mix filling ingredients and pour in crust.",
    "Top pie with apple filling.",
    "Seal top with second crust.",
    "Create your own design.",
    "Bake uncovered for 45 minutes in 200C oven."
  ];

  const instructionlist = instruction.map((x,i)=>
    <li key={i}>{x}</li>
  );

  return (
    <div style = {styles.container}>
      <h2> Gourmet Apple Pie </h2>
      <img className="rounded img-fluid" width="300" src={images.applepie} alt="random pic" />
      <p> Time: 5hr <br /> Servings: 5-10 people </p>
      <div style = {styles.instructioncontainer}>
        <div style = {styles.border}>
    			<h3> Ingredients </h3>
          <ul>{ingredientlist}</ul>
    		</div>
        <div style = {styles.border}>
    			<h3> Instructions </h3>
          <ol style={styles.paragraph}>{instructionlist}</ol>
        </div>
      </div>
			<br />
    </div>
  )
}

const styles = {
  container: {
    margin: '0 2.5%'
  },

  instructioncontainer: {
    display:'grid',
    gridTemplate: 'auto/ auto auto 1fr',
		gridColumnGap: '1%'
  },
  paragraph: {
    fontSize: '1.5em',
    color: 'red',
  },
	border: {
		border: '.2em solid gray'
	}
}

export default RecipeInstructions;
