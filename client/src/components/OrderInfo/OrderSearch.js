import React from 'react';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';


const OrderSearch = () => {
  const [orderNum, setOrderNum] = React.useState('');
  const history = useHistory();

  //function just redirects to OrderInfo page with new url params
  const submitHandle = (ev) => {
    ev.preventDefault();
    console.log('submit ', orderNum);
    history.push(`/order-confirm/${orderNum}`);
  }

  return (
    <StyledDiv>
        <h3>Order Search</h3>
        Please input the id number for the order you wish to retrieve:
        <form onSubmit={(ev) => {submitHandle(ev)} } >
          <input 
            type='text'
            required
            placeholder='#'
            onChange={(ev) => setOrderNum(ev.target.value)}
          />
        <button type='submit'>Submit</button>
        </form>
      </StyledDiv>
  )
};

const StyledDiv = styled.div`
  width: 90%;
  height: 90%;
  background: whitesmoke;
  box-shadow: 2px 5px 10px 0px #0B325E;
  border-radius: 5px;
  margin: 2.5% auto;
  padding: 1rem;
  h3 {
    margin-bottom: 1rem;
  }
  form {
    margin: .5rem 0;
  }
  input{
    border-radius: 5px;
  }
  button {
    border-radius: 5px;
    font-weight: bold;
    padding: .25rem .5rem;
    margin: 0 .5rem;
    color: whitesmoke;
    background: maroon;
    border: none;
    &:hover{
      cursor: pointer;
    }
  }
`;

export default OrderSearch;
