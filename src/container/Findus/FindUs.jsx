import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='findus'>
    <div className='app__wrapper_info'>
      <SubHeading title='Kontakta Oss' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Hitta Hit</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Butlers Bistro & Winebar<br/>Gamla Rådstugugatan 48<br />602 32 Norrköping.</p>

        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Öppettider</p>

        <p className='p__opensans'><span style={{fontWeight: 'bold'}}>Måndag–Torsdag:</span> 16.00 – 22.00</p>

        <p className='p__opensans'><span style={{fontWeight: 'bold'}}>Fredag:</span> 16.00 – 23.00</p>
        <p className='p__opensans' style={{fontWeight: 'bold'}}><span>Lördag:</span> 12.00 – 23.00</p>
        <p className='p__opensans' style={{fontWeight: 'bold'}}><span>Söndag:</span> 13.00 – 21.00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}><a href="https://www.google.com/maps/place/Butlers+Bistro+%26+Winebar/@58.5867708,16.1853041,17z/data=!3m1!4b1!4m5!3m4!1s0x46593bb37b4265cf:0x6b8569b1ef91dfe!8m2!3d58.5868196!4d16.1874651" target='_blank' rel='noopener noreferrer'>Besök Oss</a></button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
