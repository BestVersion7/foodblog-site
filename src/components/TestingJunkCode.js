import React, { useState } from 'react';

const TestHooks = () => {

	const [val,setVal] = useState (0);

	return (
		<div style = {styles.container}>
			<p> {val} </p>
			<button onClick = {() => setVal(val+1)}>
			Increase
			</button>

			<button onClick = {() => setVal(val-1)}>
			Decrease
			</button>
		</div>
	)
}

const styles = {
	container: {
		margin: '0 1.5%'
	}
}

export default TestHooks;
