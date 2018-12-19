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
			<p> Learn recipes that will benefit you forever!!! In this website, I have highlighted many recipes that I have perfected from experimenting in the kitchen for over 20+ years! Go ask your loved ones/ family/ friends to help because this is not a one-person job!</p>
			<p><b> Check out Many Recipes below!!!</b> <br /> <i style={{'color':'red'}}><b> links do not work </b></i> </p>
		  <h2> Starters </h2>
			<div style ={styles.cardcontainer}>
				<img style = {styles.img} src={images.shrimp} alt="shrimp" />
				<img style = {styles.img} src={images.mussels} alt="mussels" />
				<img style = {styles.img} src={images.kingcrab} alt="kingcrab" />

				<p> Garlic Shrimp <br />
				<a href="https://www.google.com/"> Click for recipe </a>
				</p>
        <p> Savoury Mussels <br />
        <a href="https://www.google.com"> Click for recipe </a>
				</p>
				<p> Tasty Crab Legs <br />
        <a href="https://www.google.com"> Click for recipe </a>
				</p>
			</div>

			<h2> Main Courses </h2>
			<div style ={styles.cardcontainer}>
				<img style = {styles.img} src={images.salmon} alt="salmon" />
				<img style = {styles.img} src={images.kobebeef} alt="beef" />
				<img style = {styles.img} src={images.fishandchips} alt="fish" />

				<p> Fresh Salmon <br />
				<a href="https://www.google.com/"> Click for recipe </a>
				</p>
        <p> Exquisite Kobe Beef <br />
        <a href="https://www.google.com"> Click for recipe </a>
				</p>
				<p> Classic fish n' chips <br />
        <a href="https://www.google.com"> Click for recipe </a>
				</p>
			</div>

			<h2> Desserts </h2>
			<div style ={styles.cardcontainer}>
				<img style = {styles.img} src={images.applepie} alt="pie" />
				<img style = {styles.img} src={images.souffle} alt="souffle" />
				<img style = {styles.img} src={images.cheesecake} alt="cheesecake" />

				<p> Gourmet Apple Pie <br />
				<a href="https://www.google.com/"> Click for recipe </a>
				</p>
        <p> Chocolate Souffle <br />
        <a href="https://www.google.com"> Click for recipe </a>
				</p>
				<p> Assorted Cheesecake <br />
        <a href="https://www.google.com"> Click for recipe </a>
				</p>
			</div>
		</div>

  )
}

const styles = {
	container: {
		margin: '0 2.5%'
	},

	cardcontainer: {
		display: 'grid',
		gridTemplate: '1fr auto/ 1fr 1fr 1fr',
		gridColumnGap: '5%',
		justifyItems: 'center'
	},

	img: {
		width: '100%',
		border: 'solid black',
		borderRadius: '3em',
		maxWidth: '17em',
	},
}

export default RecipeImageCards;
