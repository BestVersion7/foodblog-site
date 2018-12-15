import React, { useState,useEffect } from 'react';

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
