import React from 'react';

const RecipeImageLayout = ({item}) => {
	return (
		<div>
			<img
			 	src = {item.image}
				alt = {item.name}
				style = {styles.image}
				title = {item.name}
			/>
			<p> {item.name} </p>
		</div>
	)
}

const styles = {
	image: {
		maxWidth: '100%',
		border: '.05em solid black',
		borderRadius: '5em',
	}
}

export default RecipeImageLayout
