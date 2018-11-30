import React from 'react';

const PageHeader = () => {
	return (
		<>
			<div style = {styles.container}>
				<button style={styles.headerTitle}> Gourmet Meals </button>
			</div>
		</>
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
		background: "url(http://headerart.weebly.com/uploads/5/7/5/7/5757212/4697981_orig.jpg)",
		height: '3em',
		opacity: '0.8'
	}
}

export default PageHeader;
