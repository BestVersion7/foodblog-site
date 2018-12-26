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
    "lemon",
    "butter",
    "cinnamon",
    "nutmeg"
  ];

  const ingredientlist = ingredients.map((item,i)=>
    <p key={i}> -{item}</p>
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
    <>
      <h4> (not from API) Gourmet Apple Pie </h4>
      <img width="300" src={images.applepie} alt="random pic" />
      <p> Time: 5hr <br /> Servings: 5-10 people </p>

      <div style = {styles.container}>
        <div style = {styles.border}>
    			<h5> Ingredients </h5>
						<div className = "ingredientcontainer">
        			{ingredientlist}
						</div>
    		</div>
				<br />
				<div style={styles.border}>
					<h5> Instructions </h5>
          <ol>{instructionlist}</ol>
        </div>

				<br />
			</div>
    </>
  )
}

const styles = {
  container: {
    display:'grid',
    gridTemplate: 'auto auto/ 1fr',
		gridColumnGap: '1%'
  },
	ingredientcontainer: {
		display: 'grid',
		gridTemplate: 'auto auto/ repeat(5, auto)',
		overflow: 'auto'
	},
  paragraph: {
    color: 'blue',
		paddingLeft: '1em'
  },
	border: {
		border: 'solid gray',
		padding: '.5em'
	}
}

export default RecipeInstructions;
