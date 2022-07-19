import React from 'react';

import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.B} alt="b letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Om Oss</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans' style={{ margin: '2rem 0', fontSize:'15px', textTransform:'none', opacity:'0.8', maxWidth:'30rem'}}>En unik restaurang i Norrköping & Sverige.
  Butlers är långt ifrån en vanlig restaurang. Med sin stolta över 30 åriga historia och med sitt läge på gamla rådstugugatan, ett stenkast från Louis de Geer konsert & kongress samt citygalleriorna är Butlers en naturlig mötesplats för alla dagar i veckan.</p>
  <p className='p__opensans' style={{ margin: '2rem 0', fontSize:'15px', textTransform:'none', opacity:'0.8', maxWidth:'30rem'}}>Butlers är en naturlig och intim mötesplats för dig som bara vill dricka ett gott glas vin eller testa på något mer extravagant. Från vår winebar serveras alltid 30 olika viner på glas. Varje månad hittar exklusiva viner som vi erbjudar på glas tack vare Coravin, Dessa viner hittar ni på vår svarta tavla i baren. Välkomna in för att botanisera dig i vinets värld. Självklart har ni även ett brett sortiment av öl, cocktails & avec. Östergötlands bästa utbud av Calvados hittar ni hos oss.</p>
      <button type='button' className='custom__button'>Läs Mer</button>
      </div>
      
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

        <div className='app__aboutus-content_history '>
        <h1 className='headtext__cormorant'>Star Wine List</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans' style={{ margin: '2rem 0', fontSize:'15px', textTransform:'none', opacity:'0.8', maxWidth:'30rem'}}>Vin har länge haft en framträdande roll på Butlers, och vi stoltserar med vad vi anser en av stadens bredaste och mest dynamiska vinlistor. Fokus ligger på viner från de klassiska områdena. Frankrike är väl representerat som den bistro vi är, med härligheter från Bordeaux, Bourgogne, Rhône & självklart Champagne. Även nya världen med Australien & USA har fått mer och mer spelrum i vinlistan. Vår ambition i matsalen är att erbjuda en avslappnad men kunnig vinservice, där alla som önskar ska få möjlighet att rådfråga våra sommelierer om sitt vinval.</p>
        <p className='p__opensans' style={{ margin: '2rem 0', fontSize:'15px', textTransform:'none', opacity:'0.8', maxWidth:'30rem'}}>Butlers är rekommenderade av Star Wine List som guidar till de bästa vinbarerna och vin-restaurangerna. Klicka på knappen nedan för mer info!</p>
      <button type='button' className='custom__button'><a href="https://starwinelist.com/sv/vinstallen/butlers" target='_blank' rel='noopener noreferrer'>Läs Mer</a></button>
      </div>
    </div>
  </div>
);

export default AboutUs;
