import React, { Component } from 'react'

class FindAddressResult extends Component {

   constructor(props) {
      super(props);
      this.state = {
         classShow:'hide'
      }
   }

   show = () => {
      this.setState({
         classShow: 'show'
      });
   }

   render() {
      const resultLen = Object.keys(this.props.result).length;
      if ( resultLen <= 1) return <React.Fragment />;
      return (
         <React.Fragment>
            <h2>Resultado</h2>
            <ul id="resultList" className={resultLen > 1 ? 'show':'hide' }>
               {
                  Object.keys(this.props.result).map((itemName, index) => {
                     return <li key={index}>
                        <b className={ itemName.length < 5 ? 'initials' : ''}>{itemName}:</b> { this.props.result[itemName] ? this.props.result[itemName] : '—' }
                     </li>
                  })
               }
            </ul>
         </React.Fragment>
      )
   }

}

export default FindAddressResult;