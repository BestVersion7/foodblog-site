import React from 'react';
import Logo from '../assets/headerbackground.jpg';

const handleRefresh = () => {
	window.location.reload()
}

export default () => {
	return (
		<>
			<div className="fixed-header" style = {styles.container}>
				<button onClick = {handleRefresh} style={styles.headerTitle}> Gourmet Meals </button>
			</div>
			<div style={{'height':'2.9em'}}> </div>
		</>
	)
}

const styles = {
	headerTitle: {
		border: 'none',
		color: 'black',
		fontWeight: 'bold',
		fontSize: '1.5em',
		background: 'none'
	},

	container: {
		background: `url(${Logo})`,
		height: '3em',
		borderTop: 'solid black',
		borderBottom: 'solid black',
	},

	navbutton: {
		float: 'right',
		zIndex: '3',
		background: 'red'
	}
}
