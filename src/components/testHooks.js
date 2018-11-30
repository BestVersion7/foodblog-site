import React, {useState} from 'react';

//INCREAMENT BUTTON
export function Counter () {
	const [value, setValue] = useState (0);
	return (
		<div> 
			<p> {value} </p>
			<button onClick = {() => setValue(value+1)}>
				increase
			</button>
			<button onClick = {() => setValue(value-1)}>
				decrease
			</button>
		</div>
	)
};

//INPUT BOX
export function Greeting(props) {
	const [name, setName] = useState('Default');

	function handleNameChange(e) {
		setName(e.target.placeholder);
	}

	return (
		<div>
			<p> hey </p>
			<input 
				placeholder={name}
				onChange = {handleNameChange}
			/>
			<button className="btn btn-primary"> hello </button>	
		</div>
	);
};


//CLASS COMPONENT INTO A FUNCTION
export function LupinChars() {
	const chars = ["Lupin","Fujiko","Jigen","Goemon"];
	const mapNames = chars.map((x,i)=> <li key={i}> {x} </li>);
	return (
		<div style = {{border:'2px solid black'}}> 
			<h5> Lupin III Cast </h5>
			<ul>{mapNames}</ul>
		</div>
	)
}
