import React, {useState} from 'react';
import {BookApi} from './BookApi';

const BookImageCards = () => {
	return (
	 	<div style={styles.cardcontainer}>
			{BookApi.map((item,index) => (
				<div key={index}>
					<img src={item.image} alt={item.name} />
				</div>
			))}
		</div>
	)
}

const styles = {
	cardcontainer: {
		display: 'grid',
		gridTemplate: 'auto/ repeat(10, 1fr)',
		overflow: 'auto',
		gridColumnGap: '1em'
	},

	imgbook: {
		maxHeight: '100%',
	}
}


export default BookImageCards;
