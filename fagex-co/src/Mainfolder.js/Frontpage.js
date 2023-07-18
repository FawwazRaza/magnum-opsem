import './Stylescss.scss';
import * as React from 'react';
import logoimage from './assets/front-logo.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FrontPage_Location()
{
    const logo=[
        {image:"./assets/front-logo.png"}
    ]
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
         <>
       <div>
      
      <Dialog open={open} onClose={handleClose}>
        <img alt="logo image..." ></img> 
        <DialogTitle>Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your Location.                                  
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="loaction"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickOpen}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
        </>
    )
}
export default FrontPage_Location;