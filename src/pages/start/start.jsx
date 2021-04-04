import React from 'react';
import logo from '~/assets/imgs/logo-01.svg';
import { Link } from 'react-router-dom';
import './start.sass';
import { Button } from '@material-ui/core';
function Start() {
   return (
      <section className="start">
         <article>
            <img src={logo} className='logo' alt="cep LAB" />
            <p>O objetivo deste lab é explorar recursos em react usando create-react-app, customizando o webpack.</p>
            <p>Como prova de conceito, foi desenvolvido uma busca usando viacep para resgatar o endereço a partir de um cep.</p>
            <p>Além do react, foi usado Material UI, Text Mask e SASS para o desenvolvimento de estilos. </p>

            <br clear="all" />
            <Link to="/buscar-endereco">
               <Button color="primary" variant="contained" >Avançar</Button>
            </Link>
         </article>
      </section>
   );
}

export default Start;
