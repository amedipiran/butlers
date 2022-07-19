import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">


    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kontakta Oss</h1>
        <p className="p__opensans">Butlers Bistro & Winebar, 
Gamla Rådstugugatan 48, 
602 32 Norrköping.</p>
        <p className="p__opensans">info@butlersnorrkoping.se</p>
        <p className="p__opensans">tel: 011 – 18 29 69</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Jättegod mat och trevlig personal. Vi kunde inte fått ett bättre omhändertagande. Hela teamet verkade glada och positiva - och dessutom synnerligen uppmärksamma.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/butlersnorrkoping" target='_blank' rel='noopener noreferrer'><FiFacebook /></a>
          <a href="https://www.instagram.com/butlersnorrkoping/" target='_blank' rel='noopener noreferrer'><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Fakturering</h1>
        <p className="p__opensans">JAAM AB / Butlers Bistro & Winebar<br/>Org nr: 556792-3064</p>
        <p className="p__opensans">Gamla rådstugugatan 48<br/>602 32 Norrköping</p>
        <p className="p__opensans">Organisation<br/>
VD & Sommelier: Mikael Solmanson<br/>
Kökschef: Daniel Stolt</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Butlers. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;