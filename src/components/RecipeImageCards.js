import React from 'react';

const RecipeImageCards = () => {
	return (
			<div style = {styles.container}>
			  <div style={styles.border}>
		        <img style = {styles.img} src="https://previews.123rf.com/images/greenartphotography/greenartphotography1510/greenartphotography151000056/47426754-homemade-gourmet-apple-pie-baked-sweet-traditional-dessert-with-cinnamon-and-apples-on-vintage-backg.jpg" alt="random pic" />
		        <p> Gourmet Apple Pie <br />
		        <a href="https://www.google.com/"> Click for recipe </a>
				 		</p>
				 </div>
				 <div style = {styles.border}>
						<img style = {styles.img} src="http://www.kobeclassicbeef.com/wp-content/uploads/2012/08/image.jpeg" alt="random pic" />
		          <p> Exquisite Kobe Beef <br />
		          <a href="https://www.google.com"> Click for recipe </a>
							</p>
				</div>
				<div style = {styles.border}>
					  <img style = {styles.img} src="http://foodnessgracious.com/wp-content/uploads/2016/10/beer-battered-tilapia-04.jpg" alt="random pic" />
		          <p> Classic fish n' chips <br />
		          <a href="https://www.google.com/"> Click for recipe </a>
							</p>
				</div>
			</div>
    )
}

const styles = {
	container: {
		display: "grid",
		gridTemplate: '1fr 30px/ 1fr 1fr 1fr',
		margin: '0 1.5%',
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
