import React from 'react';
import RecipeImageLayout from './RecipeImageLayout'
import {RecipeAPI} from './RecipeAPI'

const RecipeImageCards = () => {
	const starters = RecipeAPI.filter(item => item.type===1)
	const main = RecipeAPI.filter(item => item.type===2)
	const desserts = RecipeAPI.filter(item => item.type===3)

	return (
		<>
			<h3>Starters</h3>
			<div className = "homepage-recipe-cards">
				{starters.map((item, index) => (
					<RecipeImageLayout
						item = {item}
						key = {index}
					/>
				))}
			</div>

			<h3>Main Courses</h3>
			<div className = "homepage-recipe-cards">
				{main.map((item, index) => (
					<RecipeImageLayout
						item = {item}
						key = {index}
					/>
				))}
			</div>

			<h3>Desserts</h3>
		 	<div className = "homepage-recipe-cards">
				{desserts.map((item, index) => (
					<RecipeImageLayout
						item = {item}
						key = {index}
					/>
				))}
			</div>

		</>
  )
}

export default RecipeImageCards;
