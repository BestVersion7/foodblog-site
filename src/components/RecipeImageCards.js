import React from 'react';

const images = {
	applepie: require('../assets/applepie.jpg'),
	fishandchips: require('../assets/fishandchips.jpg'),
	kobebeef: require('../assets/kobebeef.jpeg')
}

const RecipeImageCards = () => {
	return (
	  <div style = {styles.container}>
		  <h2> Main Courses </h2>
			<div style ={styles.cardcontainer}>
			  <div style={styles.border}>
		    	<img style = {styles.img} src={images.applepie} alt="pie" />
		        <p> Gourmet Apple Pie <br />
		        <a href="https://www.google.com/"> Click for recipe </a>
				 		</p>
				</div>
			  <div style = {styles.border}>
					<img style = {styles.img} src={images.kobebeef} alt="beef" />
	          <p> Exquisite Kobe Beef <br />
	          <a href="https://www.google.com"> Click for recipe </a>
						</p>
				</div>
		  	<div style = {styles.border}>
				  <img style = {styles.img} src={images.fishandchips} alt="beef" />
	          <p> Classic fish n' chips <br />
	          <a href="https://www.google.com/"> Click for recipe </a>
						</p>
			  </div>
		  </div>
    </div>
  )
}

const styles = {
	container: {
		margin: '0 1.5%'
	},

	cardcontainer: {
		display: "grid",
		gridTemplate: '1fr 30px/ 1fr 1fr 1fr',
		gridGap: '3%'
	},

	img: {
		width: '100%',
		height: '17em',
		objectFit: 'cover'
	},

	border: {
		border: '0.8px solid black'
	}
}

export default RecipeImageCards;
