import React from 'react';
import Slider from 'react-slick';

import a from '../assets/alicia/IMG_2154.JPG';
import b from '../assets/alicia/IMG_2155.JPG';
import c from '../assets/alicia/IMG_2156.JPG';
import d from '../assets/alicia/IMG_2157.JPG';
import e from '../assets/alicia/IMG_2159.JPG';
import f from '../assets/alicia/IMG_2160.JPG';
import g from '../assets/alicia/IMG_2162.JPG';
import h from '../assets/alicia/IMG_2163.JPG';
import i from '../assets/alicia/amelias.jpg';

import Rightarrow from '../assets/rightarrow.png';
import Leftarrow from '../assets/leftarrow.png';

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src = {Leftarrow}
      className={className}
      onClick={onClick}
      alt='left'
    />
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src = {Rightarrow}
      className={className}
      onClick={onClick}
      alt='right'
    />
  );
}

const settings = {
	slidesToShow: 4,
	dots: true,
	autoplay: false,
	centerMode: false,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
  ]
}

export default() => {
	return (
		<div style={{'margin': '1em 2em 2em 2em'}}>
			<Slider {...settings}>
				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={a} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> Irene </span> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={i} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> Amelia </span> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={b} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> Irene </span></div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={c} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> Irene </span> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={d} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> Irene </span> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={e} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> Dog </span> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={f} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> felicia </span> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={g} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> dog </span> </div>
					</div>
				</>

				<>
					<div style={styles.container}>
						<div style={styles.imgcontainer}> <img src={h} style={styles.img} alt="king" /> </div>
						<div style={styles.textcontainer}> <span> Dog </span> </div>
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
		border: 'none',
    padding: '5%'
	},
	imgcontainer: {
		gridArea: '1/1/3/2',
	},
	img: {
		width: '100%',
		border: 'solid blue'
	},
  textcontainer: {
    textAlign: 'center',
    gridArea: '2/1/3/2',
    color: 'blue',
    background: 'rgb(230, 225, 247)',
    opacity: '.8',
		marginBottom: '1em'
  }
}
