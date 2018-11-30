import React from 'react';

const books = {
	bountiful: require('../assets/bountiful.jpg'),
	italian: require('../assets/italian.jpg'),
	lappetito: require('../assets/lappetito.jpg'),
	loverealfood: require('../assets/loverealfood.jpg')
}

const BookImageCards = () => {
	return (
	 	<div style={styles.container}>
		    <h2> Cookbooks  </h2>
		    <div style = {styles.cardcontainer}>
		       <img style={styles.imgbook} src={books.bountiful} alt="bountiful" />
		       <img style={styles.imgbook} src={books.italian} alt="italian" />
		       <img style={styles.imgbook} src={books.lappetito} alt = "lappetito"/>
		       <img style={styles.imgbook} src={books.loverealfood} alt="loverealfood" />
		      <a style = {{marginTop:'20%'}} href="https://google.com">See More></a>
			  </div>
		</div>
	)
}

const styles = {
	container: {
		margin: '0 1.5%'
	},

	cardcontainer: {
		display:'grid',
		gridTemplate: '300px/220px 220px 220px 220px auto',
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
