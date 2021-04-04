import React from 'react';
import Header from '../header';
import Container from '@material-ui/core/Container';
import './index.sass';

export class Intern extends React.Component {
   render() {
      return (
         <Container className="containerBlock">
            <Header></Header>
            <section className='intern container'>
               {this.props.children}
            </section>
         </Container>
      )
   }
}
