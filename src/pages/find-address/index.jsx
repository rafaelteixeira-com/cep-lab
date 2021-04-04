import React from 'react';
//import Header from '~/components/header';
import { Intern } from '~/components';
import './index.sass';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import ServiceFindAddress from './service';
import FindAddressResult from './result';
import Loader from '~/components/interface/loader';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const useStyles = (theme) => ({
   root: {
      '& > *': {
         textAlign: 'center',
         margin: theme.spacing(1),
         width: '60ch',
      },
   },
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const TextMaskCustom = (props) => {
   const { inputRef, ...other } = props;
   return (
      <MaskedInput
         {...other}
         placeholder="00000-000"
         mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', '-', ' ', /\d/, /\d/, /\d/]}
         placeholderChar={'\u2000'}
         guide={false}
         showMask
      />
   );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export class FindAddress extends React.Component {


   constructor() {
      super();
      this.state = {
         textmask: '',
         contextForm: {
            cep: ''
         },
         formLoader: false,
         formError: '',
         addressResult: {}
      };
      this.serviceFindAddress = new ServiceFindAddress();
      this.handleFormChange = this.handleFormChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
   }

   handleFormChange = name => event => {
      // console.log('handleChange', name, event.target.name);
      const fieldName = event.target.name ? event.target.name : name;
      this.setState({
         formError: '',
         addressResult: {},
         contextForm: {
            [fieldName]: event.target.value,
         }
      });
   };

   async handleFormSubmit(event) {
      event.preventDefault();
      if (!this.validateFormCep()) {
         this.setState({
            formLoader: false,
            formError: 'O CEP informado não está no formato válido.'
         });
         return;
      }
      this.setState({
         formLoader: true,
         formError: ''
      });
      const addressResult = await this.serviceFindAddress.getAddress(this.state.contextForm.cep).catch((error) => {
         this.setState({
            formLoader: false,
            formError: 'Não foi possível verificar o cep informado.'
         });
      });
      if (addressResult && !addressResult.hasOwnProperty('erro')) {
         this.setState({
            formError: '',
            formLoader: false,
            addressResult
         });
      } else {
         this.setState({
            formLoader: false,
            formError: 'O CEP informado não existe.'
         });
      }
   }

   validateFormCep = () => {
      return /^\d{8,8}$/.test(this.state.contextForm.cep.replace(/[^\d]/g, ''));
   }

   renderForm = () => {
      const { classes } = this.props;
      return (
         <article>
            <h1>Buscar Endereço</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
               <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                  <Grid item xs={6}>
                     <TextField
                        name="cep"
                        label="Insira um CEP"
                        placeholder=" "
                        variant="outlined"
                        InputProps={{
                           inputComponent: TextMaskCustom,
                           value: this.state.contextForm.cep,
                           onChange: this.handleFormChange('cep')
                        }}
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <Button type="submit" color="primary" variant="contained" >Buscar</Button>
                  </Grid>
               </Grid>
            </form>
         </article>

      )
   }

   renderMsgForm = () => {
      return this.state.formError ? <p className="error">{this.state.formError}</p> : <React.Fragment />
   }

   renderLoader = () => {
      return this.state.formLoader ? <Loader /> : <React.Fragment />
   }

   renderResult = () => {
      
      return <FindAddressResult result={this.state.addressResult} />
   }

   render() {
      return (
         <Intern>
            <section className="buscar-endereco">

               {this.renderForm()}

               {this.renderMsgForm()}

               {this.renderResult()}

               {this.renderLoader()}

            </section>
         </Intern>

      );
   }
}

FindAddress.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(FindAddress);
