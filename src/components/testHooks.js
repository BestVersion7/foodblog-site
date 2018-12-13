import React, { useState, useEffect } from 'react';

export const TestHooks = () => {

	const [val,setVal] = useState (0);
  const [name, setName] = useState('Jago');

  useEffect( () => {

  });

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
		<div style = {styles.container}>
			<p> {name} </p>
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

const styles = {
	container: {
		margin: '0 2.5%'
	}
}

export default TestHooks;
