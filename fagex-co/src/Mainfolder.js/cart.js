
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/base';
import { Container, ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from '@mui/icons-material/Delete';
import front from '../assets/food.jpg';
import './cart_css.scss'; 
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  "&:hover": {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300]
  }
}));


 

function CartComponent(props) {
  var countsameitem = {};
  var t = {};
  var result = [];
  let grand_total=0;
  let Deliverycharges=200;
  const [count, setCount] = useState(1);
  const [delicon, setdelicon] = useState(true);
  const navigate = useNavigate();
  const TAX_RATE = 0.17; 
  const calculateSubtotal = (item) => {
    const itemCount = countsameitem[item.id];
    return itemCount * item.price;
  };

   // Calculate Total
   const calculateTotal = () => {
    let subtotal = 0;
    uniqueItems.forEach((itemId) => {
      const currentItem = props.cartdata.find((item) => item.id === itemId);
      subtotal += calculateSubtotal(currentItem);
    });  
    const taxAmount = subtotal * TAX_RATE;
    if(subtotal==0)
    {
      grand_total = subtotal + taxAmount;
    }
    else{
      grand_total = subtotal + taxAmount+Deliverycharges;
    }
     
    return subtotal.toFixed(2);
  };

  function handleDeleteAll  () {
    setCount(0);
    props.setcityforcart([]);
    setdelicon(false);
  };
  
  const handleclickCheckout = () => {
    props.setOpenCart(false);
    navigate('/home');
  };

  const uniqueItems = [...new Set(props.cartdata.map(item => item.id))];

  return (
    <>
      {props.cartdata.forEach(function (i) {
        countsameitem[i.id] = (countsameitem[i.id] || 0) + 1;
      })}
      <div style={{ display: "none" }}>
        {
          t = Object.keys(countsameitem)
        }
      </div>
      <div className='container_slide_left'>
        <div className='upper_container'>
          <p>Your Cart</p>
          <DeleteIcon className='delete_icon' onClick={handleDeleteAll} />
        </div>

        <div className='middle_container'>
          {delicon && uniqueItems.map((itemId, index) => {
            const currentItem = props.cartdata.find(item => item.id === itemId);
            const itemCount = countsameitem[itemId];

            return (
              <div className='middle_container_flex' key={itemId}>
                <div className='image_middle_container_around'>
                  <img src={front} className='image_middle_container' />
                  <div className='image_top_left'>{itemCount}</div>
                </div>
                <p>
                  <div className='middle_container_inner'>
                    <strong>{currentItem.cat}</strong>
                    {currentItem.item_name}
                    <Container style={{ marginTop: '10px' }}>
                      <ButtonGroup>
                        <StyledButton
                          onClick={() => setCount((prev) => prev - 1)}
                          disabled={count === 1}
                        >
                          <RemoveIcon fontSize="small" />
                        </StyledButton>
                        <StyledButton onClick={() => setCount((prev) => prev + 1)}>
                          <AddIcon fontSize="small" />
                        </StyledButton>
                      </ButtonGroup>
                    </Container>
                  </div>
                </p>
              </div>
            );
          })}
        </div>
        <div className='lower_container'>
          <div className='lowercontainer_upper'>
            <p>Subtotal</p>
            <p>{"Rs. " + calculateTotal()+"$"}</p>
          </div>
          <div className='lowercontainer_mid'>
            <p>Delivery Charges</p>
            <p>{"Rs. "+Deliverycharges+"$"}</p>
          </div>
          <div className='lowercontainer_low'>
            <strong><p>Grand Total</p></strong>
            <strong><p>{"Rs."+grand_total.toFixed(2)+"$"}</p></strong>
          </div>
          <button className='checkout_button' onClick={handleclickCheckout}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CartComponent;
