import React, { useState } from 'react'
import './style.css'
import logoCorebiz from './../../Assets/logo-corebiz-global.svg'


function Navbar() {
  const [ active, setMode ] = useState(false);

  const toggleMode = () => {
    setMode(!active);
  }

  return (
    <header>
      <nav className='nav'> 
        <div className='nav__logo'>
          <img src={logoCorebiz} alt="" srcset="" />        
        </div>

        <div className={ active ? 'icon iconInactive':'icon' } onClick={ toggleMode }>
            <div classname='hamburger hamburgerIcon'></div>
        </div>  

        <div className={active ? 'menuOpen' : 'menuClose'}>
          <ul className='nav__menu--list'>
            <li className='nav__menu--list--item'><a href='https://www.corebiz.ag/pt/about/' target="_blank" rel="noreferrer">a corebiz</a></li>
            <li className='nav__menu--list--item'> <a href='https://www.corebiz.ag/pt/#framework-title' target="_blank" rel="noreferrer">serviços</a></li>
            <li className='nav__menu--list--item'><a href='https://www.corebiz.ag/pt/cases/' target="_blank" rel="noreferrer">cases</a></li>
            <li className='nav__menu--list--item'><a href='https://www.corebiz.ag/pt/contato/' target="_blank" rel="noreferrer">contato</a></li>
          </ul>
        </div>

      </nav>
    </header>  
  );
}

export default Navbar