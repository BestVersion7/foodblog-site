import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export default() => {
  //Scroll to top of screen on route change
  useEffect(() => window.scrollTo(0,0))
  return (
    <div>
      <nav className = "topnavbar-container">
        <div className="topnavbar-blankspace"></div>
        <NavLink
          className="topnavbar-link"
          style = {styles.link}
          activeStyle = {styles.activelink}
          to="/" exact
        > Home </NavLink>

        <NavLink
          className="topnavbar-link"
          style = {styles.link}
          activeStyle = {styles.activelink}
          to='/recipes'
        > Recipes</NavLink>

        <NavLink
          className="topnavbar-link"
          style = {styles.link}
          activeStyle = {styles.activelink}
          to='/videos'
        > Videos</NavLink>

        <NavLink
          className="topnavbar-link"
          style = {styles.link}
          activeStyle = {styles.activelink}
          to='/contact'> Contact</NavLink>
{   /*     <NavLink className="topnavbar-link" style = {styles.link} activeStyle = {styles.activelink} to='/testing'> Testing</NavLink>
        <NavLink className="topnavbar-link" style = {styles.link} activeStyle = {styles.activelink} to='/secretpath'> Secret </NavLink>
  */  }  </nav>
    </div>
  )
}

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: '1.2em',
    padding: '.08em 1em'
  },
  activelink: {
    background: 'black'
  }
}
