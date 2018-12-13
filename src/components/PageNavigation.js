import React from 'react';
import {NavLink} from 'react-router-dom';

import PageHeader from './PageHeader';

const PageNavigation = () => {
  return (
    <>
      <PageHeader />
      <nav style={styles.green} className="navbar-nav navbar-expand">
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to="/" exact>Home</NavLink>
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/recipes'> Recipes</NavLink>
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/contact'> Contact</NavLink>
        <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/testing'> Testing</NavLink>
      </nav>
      <br />
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
  },
  navbar: {
    background: 'green'
  }
}

export default PageNavigation;
