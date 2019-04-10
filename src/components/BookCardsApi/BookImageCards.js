import React from 'react';
import {BookApi} from './BookApi';

const BookImageCards = () => {
	return (
	 	<div>
			<div className="homepage-book-cards">
				{BookApi.map((item,index) => (
					<div key={index}>
						<img className="homepage-book-cards-img" src={item.image} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	)
}

export default BookImageCards;
