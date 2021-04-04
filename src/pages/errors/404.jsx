import React from 'react';
import logo from '~/assets/imgs/logo-01.svg';
import { Link } from 'react-router-dom';
import './errors.sass';
function page404() {
   return (
      <section className="error">
         <article>
            <img src={logo} className='logo' alt="cep LAB" />
            <h1>404</h1>
            <p>Página não encontrada.</p>
            <br clear="all" />
            <Link to="/" class="waves-effect waves-light btn">Ir para o Inicio</Link>
         </article>
      </section>
   );
}

export default page404;
