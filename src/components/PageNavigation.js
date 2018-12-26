import React from 'react';
import {NavLink} from 'react-router-dom';

export default() => {
  return (
    <>
      <nav className = "navbar-nav navbar-expand">
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to="/" exact>Home</NavLink>
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/recipes'> Recipes</NavLink>
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/contact'> Contact</NavLink>
{/*        <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/testing'> Testing</NavLink>
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/alicia'> Alicia</NavLink>
*/}      </nav>
    </>
  )
}

const styles = {
  green: {
    background: 'green'
  },
  link: {
    color: 'white',
    fontSize: '1.2em',
    textDecoration: 'none',
    padding: '0 1em'
  },
  activelink: {
    color: 'white',
    background: 'black'
  }
}
