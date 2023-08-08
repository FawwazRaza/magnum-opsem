import './footer_css.scss';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer()
{
  const Bottom_block_color_footer_var=localStorage.getItem('Bottom_block_color_footer');
  const text_color_footer_var=localStorage.getItem('text_color_footer');
  const background_color_footer_var=localStorage.getItem('background_color_footer');
  const Border_Radius_footer_var=localStorage.getItem('Border_Radius_footer');
    return(
        <>
        <div className='margin_above_space'>
       <MDBFooter className='bg-light text-center text-white' >
      <MDBContainer className='p-4 pb-0'  >
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/adaxiomtech/'
            role='button'
          >
            <FacebookOutlinedIcon style={{marginTop:"6px"}}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <TwitterIcon style={{marginTop:"6px"}} />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://www.google.com/'
            role='button'
          >
            <GoogleIcon style={{marginTop:"6px"}}/>
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <InstagramIcon style={{marginTop:"6px"}}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/company/adaxiom/mycompany/'
            role='button'
          >
           <LinkedInIcon style={{marginTop:"6px"}}/>
           </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Fawwaz-rz/magnum-opsem/tree/main/fagex-co/src/Mainfolder.js'
            role='button'
          >
        <GitHubIcon style={{marginTop:"6px"}} />
          </MDBBtn>
        </section>
      </MDBContainer >

      <div className='text-center p-3' style={{ backgroundColor: Bottom_block_color_footer_var ,color:text_color_footer_var,borderRadius:Border_Radius_footer_var}}>
        © 2023 Copyright:
        <a className='text-red' href='http://localhost:3000/home'>
          Fagex-co.com
        </a>
      </div>
    </MDBFooter>
    </div>
        </>
    )
}
export default Footer;