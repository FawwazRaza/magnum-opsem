import * as React from 'react'; 
import { useState } from 'react';
import './cart_css.scss';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/base';
import front from '../assets/food.jpg';
import { Container, ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[50]),
    backgroundColor: blueGrey[50],
    borderColor: blueGrey[200],
    "&:hover": {
      backgroundColor: blueGrey[100],
      borderColor: blueGrey[300]
    }
  }));
  
  const StyledInput = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0,
        borderColor: blueGrey[200]
      },
      "&:hover fieldset": {
        borderColor: blueGrey[300]
      },
      "&.Mui-focused fieldset": {
        borderColor: blueGrey[500]
      },
      "& input": {
        textAlign: "center",
        width: 60,
        color: blueGrey[700]
      }
    }
  });

function CartComponent(props)
{
  var countsameitem={};
  var t={};
    const [count, setCount] = useState(1);
    const[keyforitem,setkeyforitem]=useState([]);
    const[valueforitem,setvalueforitem]=useState([]);
    const handleChange = (event) => {
      setCount(Math.max(Number(event.target.value), 1));
    };
    const navigate=useNavigate();
    console.log(props.city)
   const handleclickCheckout =()=>
    {
        props.setOpenCart(false);
        navigate('/home');
    };
    return(
        <>
        <div className='container_slide_left' >
        <div  className='upper_container'>
     <p>Your Cart</p>
   {  props.cartdata.forEach(function(i) {
  countsameitem[i.id] = (countsameitem[i.id]||0) + 1;
  
})}
<div style={{display:"none"}}>
{
t=Object.keys(countsameitem)
}
</div>


            <a href='#'><u>Clear Cart</u></a>
           
        </div>
    
        <div className='middle_container'>
      
        {  props.cartdata.map((anObjectMapped,index) => {
    return (
        <>
        <div className='middle_container_flex'>
        <div className='image_middle_container_around' >
        <img  src={front} className='image_middle_container' />
        <div className='image_top_left' >
        {countsameitem[t[index]]}
        </div>
        </div>
        <p key={`${anObjectMapped.cat}`}>
          <div className='middle_container_inner'> 
         <strong> {anObjectMapped.cat}</strong>
           {anObjectMapped.item_name}
           
           <Container style={{marginTop:"10px"}}>
      <ButtonGroup>
        <StyledButton
          onClick={() => setCount((prev) => prev - 1)}
           disabled={count === 1}
        >
          <RemoveIcon fontSize="small"  />
        </StyledButton>
        <StyledInput size="small" onChange={handleChange} value={count} />
        <StyledButton onClick={() => setCount((prev) => prev + 1)}>
          <AddIcon fontSize="small" />
        </StyledButton>
      </ButtonGroup>
    </Container>
    </div>
        </p>
     
    </div>
        </>
    );
})}
        </div>
        <div className='lower_container'>
           <div className='lowercontainer_upper'> 
            <p>Subtotal</p>
            <p>Subtotal</p>
            </div>
            
            <div className='lowercontainer_mid'>
            <p>Delivery Charges</p>
            <p>Delivery Charges</p>
            </div>
           <div className='lowercontainer_low'>
             <strong><p >Grand Total</p></strong>
            <strong><p>Grand Total</p></strong>
            </div>
            <button className='checkout_button' onClick={handleclickCheckout}>Checkout</button>
        </div>
       
      
        </div>
        </>
    )
}
export default CartComponent;