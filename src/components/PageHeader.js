import React from 'react';
import Logo from '../assets/headerbackground.jpg';

const handleRefresh = () => {
	window.location.reload()
}

export default () => {
	return (
		<div style = {styles.container}>
			<button onClick = {handleRefresh} style={styles.headerTitle}> Gourmet Meals </button>
		</div>
	)
}

const styles = {
	headerTitle: {
		background: 'none',
		border: 'none',
		color: 'black',
		fontWeight: 'bold',
		fontSize: '1.5em',
	},

	container: {
		background: `url(${Logo})`,
		height: '3em',
		opacity: '0.8'
	}
}
