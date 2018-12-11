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
					 <a style = {{marginTop:'10%'}} href="https://google.com"> more -> (beta) </a>
			  </div>
				<br />
		</div>
	)
}

const styles = {
	container: {
		margin: '0 2.5%'
	},

	cardcontainer: {
		display:'grid',
		gridTemplate: '15em / auto auto auto auto 1fr',
    overflow: 'auto',
		gridColumnGap: '2%'
	},

	imgbook: {
		height: '100%',
		objectFit:'cover'
	}
}


export default BookImageCards;
