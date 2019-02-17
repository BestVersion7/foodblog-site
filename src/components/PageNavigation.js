import React, {useState} from 'react';
import iconbar from '../assets/iconbar.png';
import PageNavigationLinks from './PageNavigationLinks';

const PageNavigation = () => {
  const [openNav, setOpenNav] = useState(true)
  //set State navbar toggle
  const handleClick = () => {
    setOpenNav(!openNav)
  }

  return (
    <div>
      <img
        className="topnavbar-button"
        onClick = {handleClick}
        src={iconbar}
        width='40'
        alt="hamburger"
      />
      {/*have this rather than empty div because once toggled on and off in mobile, web navbar will not show*/}
      
      {openNav ? <div className="topnavbar-hidden"><PageNavigationLinks /></div>: <PageNavigationLinks />}
    </div >
  )
}

export default PageNavigation
