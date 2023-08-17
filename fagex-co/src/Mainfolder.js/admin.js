import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Home from './homePage';
import FrontPage_Location from './frontpage';
import Footer from './footer';
import Signin_page from './signinPage';
import SliderComponent from './slider';
import HeaderForAdmin from './filesforadmin/headerForAdmin';
import HomeAdmin from './filesforadmin/homeForAdmin';
import FrontPageAdmin from './filesforadmin/frontPageForAdmin';
import FooterForAdmin from './filesforadmin/footerForAdmin';
import SignInForAdmin from './filesforadmin/signInForAdmin';
import SliderForAdmin from './filesforadmin/sliderForAdmin';
import './admin_css.scss';
function Admin() {
    const navigate=useNavigate();
    const [headers, setHeader] = useState(false);
    const [homes, setHome] = useState(false);
    const [FrontPageAdmins, setFrontPageAdmin] = useState(false);
    const [FooterForAdmins, setFooterForAdmin] = useState(false);
    const [SignInForAdmins, setSignInForAdmin] = useState(false);
    const [SliderForAdmins, setSliderForAdmin] = useState(false);

    function handleHeader() {
        setHeader(true);
        setHome(false);
        setFrontPageAdmin(false);
        setFooterForAdmin(false);
        setSignInForAdmin(false);
        setSliderForAdmin(false);
    }

    function handleFrontPageAdmin() {
        setHeader(false);
        setHome(false);
        setFrontPageAdmin(true);
        setFooterForAdmin(false);
        setSignInForAdmin(false);
        setSliderForAdmin(false);
    }

    function handleFooterForAdmin() {
        setHeader(false);
        setHome(false);
        setFrontPageAdmin(false);
        setFooterForAdmin(true);
        setSignInForAdmin(false);
        setSliderForAdmin(false);
    }

    function handleSignInForAdmin() {
        setHeader(false);
        setHome(false);
        setFrontPageAdmin(false);
        setFooterForAdmin(false);
        setSignInForAdmin(true);
        setSliderForAdmin(false);
    }

    function handleSliderForAdmin() {
        setHeader(false);
        setHome(false);
        setFrontPageAdmin(false);
        setFooterForAdmin(false);
        setSignInForAdmin(false);
        setSliderForAdmin(true);
    }

    function handleHome() {
        setHome(true);
        setHeader(false);
        setFrontPageAdmin(false);
        setFooterForAdmin(false);
        setSignInForAdmin(false);
        setSliderForAdmin(false);
    }

    return (
        <>
            <div className='buttonS_admin'>
                <button className='admin_btn' onClick={handleHeader}>Header</button>
                <button className='admin_btn' onClick={handleHome}>Home</button>
                <button className='admin_btn' onClick={handleFrontPageAdmin}>FrontPage_Location</button>
                <button className='admin_btn' onClick={handleFooterForAdmin}>Footer</button>
                <button className='admin_btn' onClick={handleSignInForAdmin}>Signin_page</button>
                <button className='admin_btn' onClick={handleSliderForAdmin}>SliderComponent</button>
            </div>
            <div className="admin_page">
                <div>
                    {headers && <HeaderForAdmin />}
                    {homes && <HomeAdmin />}
                    {FrontPageAdmins && <FrontPageAdmin/>}
                    {FooterForAdmins && <FooterForAdmin />}
                    {SignInForAdmins && <SignInForAdmin />}
                    {SliderForAdmins && <SliderForAdmin />}
                </div>
                <div className='right_admin_section'>
                    {headers && <Header />}
                </div>
                <div>{homes && <Home />}</div>
                <div>{FrontPageAdmins && <FrontPage_Location />}</div>
                <div>{FooterForAdmins && <Footer />}</div>
                <div>{SignInForAdmins && <Signin_page />}</div>
                <div>{SliderForAdmins }</div>
            </div>
            <button className='admin_btn' onClick={() => window.location.reload(false)}>Click for change!</button><br></br>
            <button className='admin_btn' onClick={() => navigate('/home') }>Home</button>
        </>
    );
}

export default Admin;
