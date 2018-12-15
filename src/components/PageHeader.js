import React from 'react';
import Logo from '../assets/headerbackground.jpg';

export default () => {
	return (
		<div style = {styles.container}>
			<button style={styles.headerTitle}> Gourmet Meals </button>
		</div>
	)
}

const styles = {
	headerTitle: {
		background: 'none',
		border: 'none',
		fontSize: '2em',
		color: 'black',
		fontWeight: 'bold'
	},

	container: {
		background: `url(${Logo})`,
		height: '3em',
		opacity: '0.8',
		position: 'sticky'
	}
}
