import React from 'react';

const images = {
	kingcrab: require('../assets/kingcrab.jpg'),
	lobster: require('../assets/lobster.jpg'),
	mussels: require('../assets/mussels.jpg'),
	salmon: require('../assets/salmon.jpg'),
	shrimp: require('../assets/shrimp.jpg'),
	souffle: require('../assets/souffle.jpg'),
	applepie: require('../assets/applepie.jpg'),
	fishandchips: require('../assets/fishandchips.jpg'),
	kobebeef: require('../assets/kobebeef.jpeg'),
	cheesecake: require('../assets/cheesecake.jpg')
}

const RecipeImageCards = () => {
	return (
	  <div style = {styles.container}>
		  <h2> Starters </h2>
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

			<h2> Desserts </h2>
			<div style ={styles.cardcontainer}>
			  <div style={styles.border}>
		    	<img style = {styles.img} src={images.applepie} alt="pie" />
		        <p> Gourmet Apple Pie <br />
		        <a href="https://www.google.com/"> Click for recipe </a>
				 		</p>
				</div>
			  <div style = {styles.border}>
					<img style = {styles.img} src={images.cheesecake} alt="cheesecake" />
	          <p> Assorted Cheesecake <br />
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
		height: '15em',
		objectFit: 'cover',
		borderTopLeftRadius: '3em',
		borderTopRightRadius: '3em'
	},

	border: {
		border: '0.8px solid black',
		borderRadius: '3em',
		textAlign: 'center'
	}
}

export default RecipeImageCards;
