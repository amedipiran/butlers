import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logo} alt="logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Vår Mat</a></li>
      <li className='p__opensans'><a href="#menu">dryckesMeny</a></li>
      <li className='p__opensans'><a href="#about">Om Oss</a></li>
      <li className='p__opensans'><a href="#findus">Hitta Hit</a></li>
      <li className='p__opensans'><a href="#contact">Kontakta Oss</a></li>
    </ul>
    <div className='app__navbar-login'>
      <div />
      <a href="https://app.waiteraid.com/reservation/?hash=18af799ff74b7687394ae990c9ff8a88&version=new" target={'_blank'} className='p__opensans'>Boka Bord</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu className='app__navbar-hamburger' color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />


      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />

        <ul className='app__navbar-smallscreen_links'>
          <li className='p__opensans'><a href="#home">Vår mat</a></li>
          <li className='p__opensans'><a href="#menu">dryckesmeny</a></li>
          <li className='p__opensans'><a href="#about">Om Oss</a></li>
          <li className='p__opensans'><a href="#findus">Hitta Hit</a></li>
          <li className='p__opensans'><a href="#contact">Kontakta Oss</a></li>
          <li className='p__opensans'><a href="https://app.waiteraid.com/reservation/?hash=18af799ff74b7687394ae990c9ff8a88&version=new" target={'_blank'}>Boka Bord</a></li>
      </ul>
      </div>
      )};
     
    </div>
  </nav>
)};

export default Navbar;
