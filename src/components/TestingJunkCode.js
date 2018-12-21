1 AWAIT PROMISE
/*import React, { useState, useEffect } from 'react';
import HookLog from './HookLog';

async function TestHooks() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('inPromise'), 5000)
  });

	console.log('1');
	await HookLog(); //This Timer has to be before bottom

  let result= await promise;
	console.log(result);
	console.log('3')
}*/

2 HANDLE INPUT STATE
/*import React, { useState, useEffect } from 'react';

export const TestHooks = () => {
	const [val,setVal] = useState (0);
  const [name, setName] = useState('Jago');
  useEffect( () => {
    document.title = name
  },[val]);

  const Increment1 = () => {
    setVal(val+1)
  };
  const Decrement1 = () => {
    setVal(val-1)
  };
  const handleNameChange = e => {
    setName(e.target.value)
  }

	return (
		<div>
			<p> {val} </p>
			<button onClick = {Increment1}>Increase</button>
			<button onClick = {Decrement1}>Decrease</button>
      <br /> <br />
      <input
        value = {name}
        onChange = {handleNameChange}
      />
		</div>
	)
}
export default TestHooks;*/

3 TIMEOUTS AND INTERVALS
/*function hello() {
  console.log('yellow')
}
setTimeout(() => alert('wowiee'),1000);
setTimeout(() => console.log('bb'),3000)
setInterval (hello, 3000)
*/

4 POLL STATE
/*const [val3,setVal3] = useState ("");

useEffect(() => {
});

function handleFoodClick(e) {
  setVal3("Sweet")
}
function handleFoodClick2(e) {
  setVal3("Salty")
}
function handleNameChange(e) {
  setVal3(e.target.value)
}

return (
  <div style = {styles.container}>
    <p> What type of food are you thinking about? </p>
    <button onClick = {handleFoodClick}> Sweet </button>
    <button onClick = {handleFoodClick2}> Salty </button>
    <input
      onChange = {handleNameChange}
    />
    <br /> <br />
    <p> I clicked {val3} </p>

    <input type="submit" onClick={handleFoodClick}/>
  </div>
  */
5 API CALLS
/*
import React, { useState,useEffect } from 'react';

export default () => {
	const [user, setUser] = useState (null);

	useEffect(async() => {
		const response = await fetch('https://api.randomuser.me/');
		const data = await response.json();
		const [obj] = data.results;
		setUser(obj);
	},[]) //only runs once

	return (
		<div style = {styles.container}>
			{user && <div>{user.name.first} {user.name.last}</div>}
		</div>
	)
}

const styles = {
	container: {
		margin: '0 2.5%'
	}
}
*/

6 API OWN VERSION NO return
/* user.map(item => item)
VARIABLE DECLARE
** user.map(item => {
  const {first} = item;
  return {item}
})

import React, { useState, useEffect } from 'react';

export default () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=40&seed=fullstackio`);
    const data = await response.json();
    const obj = data.results;
    setUser(obj);
    setLoading(false);
  }
  //has to be self-invoking asynchronous
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {loading ? <p>...loading</p> :
        <div>
          {user.map((item,i) => {
            const {first, last} = item.name;
            const properFullName = `${capi(first)} ${capi(last)}`;
            const {thumbnail} = item.picture;
            return (
              <div style={styles.container}>
                <img src={thumbnail} />
                <div>
                  <p>{properFullName}</p>
                  <p> Yummy! </p>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}
*/

UNIVERSAL api
/*
import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';

const useFetch = url => {
	const [user, setUser] = useState ("");
	const [loading, setLoading] = useState (true);

	//has to be self-invoking asynchronous
	useEffect(() => {
		(async function apiCall() {
		const response = await fetch(url);
		const user = await response.json();
		//deconstruct function
		const [obj] = user.results;
		setUser(obj);
		setLoading(false);
		})();
	},[]);
	return {user, loading};
};

export default () => {
	const {user, loading} = useFetch('https://api.randomuser.me/');
	return (
		<div style = {styles.container}>
			{loading ? <div>...loading</div> : <div>hello {user.name.first} {user.name.last}</div>}
			{loading ? <div>...loading</div> : <div>hello {user.name.first} {user.name.last}</div>}
		</div>
	)
}

const styles = {
	container: {
		margin: '0 2.5%'
	}
}
*/

Carousel Hardcoded
/*
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
	)
}

const styles = {
	container: {
		display: 'grid',
		gridTemplate: 'auto auto/ 1fr',
		border: '1px solid blue'
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
}*/

CSS BUILD RESPONSIVE
/*
@media (min-width:40em) {
  .yes {
    display: grid;
    grid-area for not row start/ col start/ row end/ col end
    grid-template-areas:
      "nav nav nav"
      "main main main";
  }

  header {
    grid-area: head;
  }

  nav {
    background: green
  }

  main {
  }

  footer {
    grid-area: foot;
  }
}
*/
