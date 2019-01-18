import React from 'react';

const images = {
	bountiful: require('../assets/bountiful.jpg'),
	italian: require('../assets/italian.jpg'),
	lappetito: require('../assets/lappetito.jpg'),
	loverealfood: require('../assets/loverealfood.jpg')
}

const BookImageCards = () => {
	return (
	 	<>
		    <h4> Develop Your Cooking Technique!</h4>
		    <div style = {styles.cardcontainer}>
		       <img style={styles.imgbook} src = {images.bountiful} alt="bountiful" />
		       <img style={styles.imgbook} src= {images.italian} alt="italian" />
		       <img style={styles.imgbook} src = {images.lappetito} alt = "lappetito"  />
		       <img style={styles.imgbook} src = {images.loverealfood} alt="loverealfood"/>
			  </div>
				<br />
		</>
	)
}

const styles = {
	cardcontainer: {
		display: 'grid',
		gridTemplate: '15em/ repeat(10, 1fr)',
		overflow: 'auto',
		gridColumnGap: '1em'
	},

	imgbook: {
		height: '15em',
	}
}


export default BookImageCards;
