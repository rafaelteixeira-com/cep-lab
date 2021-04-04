import React from 'react';
import logo from '~/assets/imgs/logo-01.svg';
import { Link } from 'react-router-dom';
import './index.sass';

const Header = () => {
   return (
      <header>
         <nav>
            <Link to="/" className="brand-logo"><img src={logo} className='logo' alt="cep LAB" /></Link>
            <Link to="/buscar-endereco" className='menu'>Buscar Endereço</Link>
         </nav>
      </header>
   );
}

export default Header;
