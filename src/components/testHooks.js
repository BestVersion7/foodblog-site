import React from 'react';
import Slider from 'react-slick';

import kingcrab from '../assets/kingcrab.jpg';
import lobster from '../assets/lobster.jpg';
import mussels from '../assets/mussels.jpg';
import salmon from '../assets/salmon.jpg';
import shrimp from '../assets/shrimp.jpg';
import cheesecake from '../assets/cheesecake.jpg';

const settings = {
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	dots: true,
	autoplay: false,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
}

export default() => {
	return (
		<div style={{'margin': '1em 0 2em'}}>
			<Slider {...settings}>
				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={kingcrab} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <p> es </p> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={lobster} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <p> Lobster <br /> To perfection made from fresh farmed lobster to you door </p> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={mussels} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <p> es </p> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={salmon} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <p> es </p> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={shrimp} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <p> es </p> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={cheesecake} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <p> es </p> </div>
					</div>
				</>


			</Slider>
		</div>
	)
}

const styles = {
	container: {
		display: 'grid',
		gridTemplate: 'auto auto/ 1fr',
		border: '1px solid blue',
	},
	imgcontainer: {
		gridArea: '1/1/3/2'
	},
	img: {
		width: '100%'
	},
  textcontainer: {
    textAlign: 'center',
    gridArea: '2/1/3/2',
    color: 'blue',
    background: 'rgb(230, 255, 247)',
    opacity: '.8'
  }
}
