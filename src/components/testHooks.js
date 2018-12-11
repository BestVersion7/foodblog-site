import React from 'react';

const TestHooks = () => {

	console.log('first');
	const x = () => {
		console.log('third')
	};
	console.log('second');

	setTimeout(x,2000);

	const prom = new Promise((resolve, reject) => {
	  resolve('Yay!');
	});

	const handleSuccess = (resolvedValue) => {
	  console.log(resolvedValue);
	};

	prom.then(handleSuccess);


	return (
		<div>
		hdy
		</div>
	)
};

const styles = {
	container: {
		margin: '0 2.5%'
	}
}
