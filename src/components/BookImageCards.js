import React from 'react';

const BookImageCards = () => {
	return (
	 	<div style={styles.container}>
		    <h2> Develop Your Cooking Technique!  </h2>
		    <div style = {styles.cardcontainer}>
		       <img style={styles.imgbook} src="https://books.google.com/books/content/images/frontcover/IGSwLLETenMC?fife=w200-h300" alt="Gordon Ramsay" />
		       <img style={styles.imgbook} src="https://books.google.com/books/content/images/frontcover/h1z5lgji7GMC?fife=w200-h300" alt="Gordon Ramsay" />
		       <img style={styles.imgbook} src="https://books.google.com/books/content/images/frontcover/5qJKDwAAQBAJ?fife=w200-h300" alt="Gordon Ramsay" />
		       <img style={styles.imgbook} src="https://images-na.ssl-images-amazon.com/images/I/51l3mBqNdYL._SX258_BO1,204,203,200_.jpg" alt="graham" />
		      <a style = {{marginTop:'10%'}} href="https://google.com"> See More > </a>
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
