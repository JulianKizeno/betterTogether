import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <h1 className='header__title'>BetterTogether</h1>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='https://i.imgur.com/IwDfg37.png' alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

);

export default Header;
