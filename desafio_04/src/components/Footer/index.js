import React from 'react'
import './style.css'
import logoCorebizblack from './../../Assets/logo-corebiz-global_black.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";





function Footer() {
  
  return (
    <footer>
      <div className='footer_left'>
        <div className='nav__footer--logo'>
            <img src={logoCorebizblack} alt="" srcset="" />
            <p>direitos reservados. corebiz 2021</p>

            <div className='footer__social'>
              <a href='https://www.facebook.com/corebiz.ag/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faFacebookF } /></a>
              <a href='https://www.instagram.com/corebizag/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
              <a href='https://www.linkedin.com/company/corebiz-brasil/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } /></a>    
            </div>

        </div>

        <div>    

          <div className='nav__footer--content'>
            <nav className='nav__footer'>
              <ul className='nav__footer--list'>
                <li className='nav__footer--list--item'><a href='https://www.corebiz.ag/pt/about/' target="_blank" rel="noreferrer">a corebiz</a></li>
                <li className='nav__footer--list--item'> <a href='https://www.corebiz.ag/pt/#framework-title' target="_blank" rel="noreferrer">serviços</a></li>
                <li className='nav__footer--list--item'><a href='https://www.corebiz.ag/pt/cases/' target="_blank" rel="noreferrer">cases</a></li>
                <li className='nav__footer--list--item'><a href='https://www.corebiz.ag/pt/contato/' target="_blank" rel="noreferrer">contato</a></li>
              </ul>
            </nav>
          </div>
                    
        </div>      
      </div>

      <div className='footer_right'>

        <div className="footer__right--locals">
          <div className='footer_locals--brasil'>
            <h2>.Brasil</h2>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
            <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
          </div>

          <div className='footer_locals--argentina'>
            <h2>.Argentina</h2>
            <p> Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
          </div>

          <div className='footer_locals--mexico'>
            <h2>.México</h2>
            <p> Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
          </div>

          <div className='footer_locals--chile'>
            <h2>.Chile</h2>
            <p>Roberto del Río 1137, Providencia.</p>
          </div>
          
        </div>

      </div>
    </footer>
  );
}

export default Footer