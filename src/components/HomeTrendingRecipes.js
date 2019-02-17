
import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
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
	autoplay: false,
	centerMode: false,
  slidesToScroll: 1,
	initialSlide: 5,
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
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDrinks = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/latest.php');
    const data = await response.json();
    const obj = data.meals;
    setMeal(obj);
    setLoading(false);
  }

  useEffect(() => {fetchDrinks()}, [])

  return (
    <>
      {loading ? <p>Loading...</p> :
				<div>
  				<h4> Trending! </h4>
  				<div style={{'margin': '0 1em'}}>
  	        <Slider {...settings}>
  	          {meal.map((item,i) => {
  	            const {strMeal, strMealThumb, strYoutube} = item;
  	            return (
    							<div key={i}>
                    <a href={strYoutube} target="_blank" rel="noopener noreferrer">
    		              <div style={styles.container}>
    		                <div style={styles.imgcontainer}>
    											<img style={styles.img} src={strMealThumb} alt={strMeal} />
    										</div>
    										<div style={styles.textcontainer}>
    									 		<span> {strMeal} </span>
    										</div>
    		              </div>
                    </a>
    							</div>
  	            )
  	          })}
  	        </Slider>
				  </div>
				</div>
      }
    </>
  )
}

const styles = {
	container: {
		display: 'grid',
		gridTemplate: 'auto auto/ 1fr',
		border: 'none',
    paddingLeft: '5%',
		paddingRight: '5%'
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
    color: 'white',
    background: 'rgb(165, 4, 93)',
    opacity: '.9',
		borderLeft: 'solid blue',
		borderRight: 'solid blue',
		marginBottom: '1em'
  }
}
