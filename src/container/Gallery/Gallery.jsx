import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort, } from 'react-icons/bs';

import {SubHeading} from '../../components'
import {images} from '../../constants'

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }



  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' />
      <h1 className='headtext__cormorant'>På <span style={{color: 'red', textTransform:'uppercase', letterSpacing: '10px', fontWeight: 'bold'}}>Butlers</span></h1>
      <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem', textTransform:'none'}}>Besök gärna vår instagram, och ta del av oss.</p>
      <button className='custom__button'><a href="https://www.instagram.com/butlersnorrkoping/" target='_blank' rel='noopener noreferrer'>Se Mer</a></button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className='app__gallery-images_card flex__center' key={'gallery_image-${index + 1}'}>
            <a href='https://www.instagram.com/butlersnorrkoping/' target='_blank' rel='noopener noreferrer'>
            <img src={image} alt="gallery"  />
            </a>
            
            <BsInstagram className='gallery__image-icon' />
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
      <BsArrowLeftShort className='gallery__arrow-icon' onClick={ () => scroll('left')} />
      <BsArrowRightShort className='gallery__arrow-icon' onClick={ () => scroll('right')} />

    </div>
    </div>
    
  </div>
);
}
export default Gallery;
