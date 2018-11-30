import React from 'react';

const ContactForm = () => {
	return (
		<div>
		    <div style = {styles.container}>
		      <h1> Send me your recipes </h1>
		        <label> First Name </label> <br />
		        <input type="text" id="firstName" required/> <br />
		        <label> Last Name </label> <br />
		        <input type="text" id="lastName" required/> <br />
		        <label> Email </label> <br />
		        <input type="email" id="email" required/> <br />
		        <label> Recipe </label> <br />
		        <input type="text" id="recipe" /> <br />
						<input type="submit" value="Send Message"  />
		    </div>
		  <h2 className="bg-info">  To be continued... </h2>
		</div>
  )
}

const styles = {
	container: {
		margin: '0 1.5%'
	}
}

export default ContactForm;
