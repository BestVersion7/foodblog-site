1
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

2
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
		<div style = {styles.container}>
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

const styles = {
	container: {
		margin: '0 2.5%'
	}
}

export default TestHooks;*/
