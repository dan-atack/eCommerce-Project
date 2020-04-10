import React from 'react';
import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    margin:'.5rem',
  },
});

const ModalForm = ({ cartItems }) => {

  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [creditCard, setCreditCard] = React.useState('');
  const [expiration, setExpiration] = React.useState('');

  const submitPurchase = (ev) => {
    ev.preventDefault();
    console.log('purchase attempt');
    //dispatch purchase attempt status
    const order = {
      cartItems,
      'user': {
        name,
        address,
      },
      'payment': {
        creditCard, 
        expiration,
      },
    }
    console.log('order object ', order);
    fetch('/purchase', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body:JSON.stringify({order})
    })
    .then(res => res.json())
    .then(res => {
      console.log('order id & success reply ', res);
      //dispatch some success;
      //reroute to order confirmation page?
      console.log('purchase success');
    }).catch((err) => {
      console.error('purchase error ', err);
      //dispatch error state? or do local error in modal?
    })
  };


  const classes=useStyles();
  return(
    <FormControl>
      <StyledForm
      onSubmit={(ev)=>submitPurchase(ev)}
      >
        <p>Enter user details</p>
        <TextField 
        className={classes.text} 
        required id="name" 
        name='name' 
        label="Name" 
        variant="outlined"
        onChange={(ev)=> setName(ev.target.value)}
        />
        <TextField 
        className={classes.text} 
        required id="address" 
        name='address' 
        label="Address" 
        variant="outlined"
        onChange={(ev)=> setAddress(ev.target.value)}
        />
        <p>Enter payment details</p>
        <TextField 
        className={classes.text} 
        required id="card-number" 
        name='card-number' 
        label="Credit card" 
        variant="outlined"
        onChange={(ev)=> setCreditCard(ev.target.value)}
        />
        <TextField 
        className={classes.text} 
        required id="card-exp" 
        name='card-exp' 
        label="Expiration" 
        variant="outlined"
        onChange={(ev)=> setExpiration(ev.target.value)}
        />
        <Button 
        type='submit' 
        variant="contained" 
        color="primary"
        >
          Purchase
        </Button>
      </StyledForm>
    </FormControl>
  )
};

const StyledForm = styled.form`
  margin: 0;
  background-color: lightgray;
  padding: 1rem;
  p {
    margin: .5rem .5rem 0 ;
  }
  Button {
    height: 2.5rem;
    margin: 1rem;
  }
`;

export default ModalForm;



//post object examples

// const exampleObject ={ 
//   cartItems: [ {item object}, {item object}, 'etc',],
//   user: {
//     name: 'jim',
//     address: '33 jim st',
//   },
//   payment: {
//     creditCardNumber: '23453454',
//     creditCardExp: '0109',
//   },
// };

// const simplerExampleObject2 = { 
//   cartItems: [ {item object}, {item object}, 'etc',],
//   name: 'jim',
//   address: '33 jim st',
//   creditCardNumber: '23453454',
//   creditCardExp: '0109',
// }