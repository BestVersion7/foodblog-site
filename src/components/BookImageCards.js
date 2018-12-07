import React from 'react';

const images = {
	bountiful: require('../assets/bountiful.jpg'),
	italian: require('../assets/italian.jpg'),
	lappetito: require('../assets/lappetito.jpg'),
	loverealfood: require('../assets/loverealfood.jpg')
}

const BookImageCards = () => {
	return (
	 	<div style={styles.container}>
		    <h2> Develop Your Cooking Technique!</h2>
		    <div style = {styles.cardcontainer}>
		       <img style={styles.imgbook} src = {images.bountiful} alt="bountiful" />
		       <img style={styles.imgbook} src= {images.italian} alt="italian" />
		       <img style={styles.imgbook} src = {images.lappetito} alt = "lappetito"  />
		       <img style={styles.imgbook} src = {images.loverealfood} alt="loverealfood"/>
		      <a style = {{marginTop:'50%'}} href="https://google.com"> See More> </a>
			  </div>
				<br />
		</div>
	)
}

const styles = {
	container: {
		margin: '0 1.5%'
	},

	cardcontainer: {
		display:'grid',
		gridTemplate: '300px/220px 220px 220px 220px 1fr',
    overflow: 'auto',
		gridGap: '1.5%'
	},

	imgbook: {
		height: '300px',
		width: '200px',
		objectFit:'cover'
	}
}


export default BookImageCards;
