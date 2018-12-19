import React from 'react';

const images = {
	facebook: require('../assets/facebook.png'),
	instagram: require('../assets/instagram.png'),
	twitter: require('../assets/twitter.png')
}

export default() => {
	return (
	  <footer className="bg-dark text-light text-center">
	    <div>
	      Follow me! <br />
				<a href="https://www.facebook.com">
	    	  <img src={images.facebook} alt="facebook" width="40" />
	      </a>
	      <a href="https://www.instagram.com/?hl=en">
	      	<img src={images.instagram} alt="instagram" width="40" />
	      </a>
	      <a href="https://www.twitter.com">
	      	<img src={images.twitter} alt="twitter symbol" width="40" />
	      </a>
	      <br />
	      <span> Created by BestVersion7 on Github.com</span>
	    </div>
	  </footer>
	 );
}
