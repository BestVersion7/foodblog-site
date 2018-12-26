import React from 'react';
import Slider from 'react-slick';
import a from '../assets/italian.jpg';

export default () => {

	const settings = {
		slidesToShow: 2,
		centerMode: true,
		centerPadding: '4em'
	}
	return (
		<Slider {...settings}>
		<div> <img style={img} src={a} alt='fd'/> </div>
		<div> <img style={img} src={a} alt='fd'/> </div>
		<div> <img style={img} src={a} alt='fd'/> </div>
		<div> <img style={img} src={a} alt='fd'/> </div>
		<div> <img style={img} src={a} alt='fd'/> </div>
		<div> <img style={img} src={a} alt='fd'/> </div>

		</Slider>
	)
}

const img = {
}
