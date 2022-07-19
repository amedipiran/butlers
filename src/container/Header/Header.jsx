import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__bg app__header app__wrapper section__padding ' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Klassiska Svenska & Franska Bistrorätter' />
      <h1 className='app__header-h1'>Nyckeln till vår <span style={{ color: '#b11226' }}>goda</span> mat</h1>
      <p className='p__opensans' style={{ margin: '2rem 0', fontSize:'15px', textTransform:'none', opacity:'0.8', maxWidth:'30rem'}}>Butlers är en traditionstung men modern krogklassiker som alltid visar stor respekt till vårt svenska matarv. En restaurant för alla som tycker om att umgås, ha trevligt och äta förstklassiga råvaror tillagade utan krångel, men med små medel och stor kunskap. Klassiska svenska & franska bistrorätter, precis som vi vill ha det. Varmt Välkomna till oss på <span style={{color: 'red', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px'}}>Butlers</span>!</p>


      <p className='p__opensans' style={{ margin: '2rem 0', fontSize:'15px', textTransform:'none', opacity:'0.8', maxWidth:'30rem'}}>Klicka på knappen nedan för att ta del av vår meny!</p>

      <button type='button' className='custom__button'><a href="https://butlersnorrkoping.se/wp-content/uploads/Butlers-meny-2022.pdf" target='_blank' rel="noopener noreferrer">Meny</a></button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;
