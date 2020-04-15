import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Spinner from '../Spinner';
import OrderSearch from './OrderSearch';
import { clearPurchase } from '../../actions';


//  EXAMPLE DATA
// data.order === {
//   cartItems: [
//     0: {
//       id: 6543, 
//       name: "Barska GB12166 Fitness Watch with Heart Rate Monitor", 
//       price: "$49.99", 
//       body_location: "Wrist", 
//       category: "Fitness", 
//       imageSrc: 'blahblah',
//       numInStock: 9,
//       companyId: 19962,
//       quantity: 1,
//     }
//     1: {
//       id: 6544, 
//       name: "Belkin GS5 Sport Fit Armband, Black F8M918B1C00", 
//       price: "$24.99", 
//       body_location: "Arms", 
//       category: "Fitness",
//       imageSrc: 'blehbleh', 
//       numInStock: 5,
//       companyId: 17452,
//       quantity: 3,
//     }
//   ],
//   user: {
//     name: "jjj"
//     address: "jjj"
//     email: "jj@jjj"
//   },
//   payment: "Payment Confirmed",
//   total: 55.67,
// }


const OrderInfo = () => {
  const {confirmId} = useParams();
  const dispatch = useDispatch();

  console.log('fetcho', confirmId);
  const [orderInfo, setOrderInfo] = React.useState(null);
  
//fetches order info and stores it in state to be used for rendering
//clearpurchase() sets the state status back to 'idle' (was on 'purchased')
//may need to add a security measure based on currentuser later?
  React.useEffect(()=> {
    //stops fetch if just order search page
    if (confirmId !== 'search')
    fetch(`/history/${confirmId}`)
    .then(data => data.json())
    .then(data => {
      console.log('data.confirmation (confirmId)', data.confirmation);
      console.log('data.order ', data.order);
      setOrderInfo(data.order);
      dispatch(clearPurchase());
    }).catch(err => {
      console.error('Caught error orderinfo: ', err);
    });
// eslint-disable-next-line
  }, [confirmId])

//if this page is rendered from the order history link; just return search input
  if (confirmId === 'search'){
    return (
      <OrderSearch/>
    )
  } else {
    return orderInfo? (
      <>
      <h2>Order # {confirmId}</h2>
      {orderInfo.cartItems.map(item => {
        return (
          <ItemCard key={item.id}>
            <img src={item.imageSrc} alt='item'/>
            <InfoDiv>
              <Title>
                <StyledLink to={`/product/${item.id}`} >{item.name}</StyledLink>
              </Title>
              <p>
                Quantity: <span>{item.quantity}</span> @ {item.price}
              </p>
            </InfoDiv>
          </ItemCard>
        )
      })}
      <UserInfo>
        <p>Name:<span>{orderInfo.user.name}</span></p>
        <p>Address:<span>{orderInfo.user.address}</span></p>
        <p>Email:<span>{orderInfo.user.email}</span></p>
        <p>Total:<span>${orderInfo.total}</span></p>
      </UserInfo>
      </>
    ) : <Spinner size={40}/>
  }
};

const StyledDiv = styled.div`
  width: 90%;
  height: 90%;
  background: whitesmoke;
  box-shadow: 2px 5px 10px 0px #0B325E;
  border-radius: 5px;
  margin: 2.5% auto;
  padding: 1rem;
`;

const UserInfo = styled.div`
  span{
    font-weight: bold;
  }
`;
const ItemCard = styled.div`
  display: flex;
  align-items: center;
  /* width: fit-content; */
  margin: .25rem 0;
  padding: .5rem;
  border-bottom: 1px solid gray;
  background: white;
  font-size: .65rem;
  img {
    max-height: 3rem;
    max-width: 3rem;
    margin-right: .5rem;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: bold;
    margin-right: .5rem;
    text-decoration: underline;
  }
`;
const Title = styled.p`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  font-size: .70rem;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default OrderInfo;