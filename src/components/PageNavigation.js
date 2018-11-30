import React from 'react';
import {NavLink} from 'react-router-dom';

import PageHeader from './PageHeader';

const PageNavigation = () => {
  return (
    <>
      <PageHeader />
      <div style = {styles.navbar}>
      <NavLink style = {styles.link} activeStyle = {styles.activelink} to="/" exact>Home</NavLink>
      <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/recipes'> Recipes </NavLink>
      <NavLink style = {styles.link} activeStyle = {styles.activelink} to='/contact'> Contact </NavLink>
      </div>
      <br />
    </>
  )
}

const styles = {
  link: {
    color: 'white',
    fontSize: '1.5em',
    textDecoration: 'none',
    padding: '0 1em 0 1em'
  },
  activelink: {
    color: 'white',
    background: 'black'
  },
  navbar: {
    background: 'green',
  }
}

export default PageNavigation;
