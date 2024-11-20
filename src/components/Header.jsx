import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { BiSolidBadgeCheck } from "react-icons/bi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleLinkClick = () => {
        setShowNavbar(false);
    };

    return (
        <>
            {/* Header icon section  */}
            <div class="top-bar d-flex justify-content-between">
                <div class="left-content">
                    <PiEnvelopeSimpleLight size={'20'} />
                    <span className="mx-2 fw-bold">Reg No. S/1119/2012</span>
                </div>
                <div class="right-content">
                    {/* <i class="fas fa-shield-alt"></i> */}
                    <BiSolidBadgeCheck size={'20'} />
                    <span className="mx-2 fw-bold">100% Secure & Govt. Approved (Since:2012)</span>
                    <FaFacebookF size={'15'} className="mx-1" />
                    <FaYoutube size={'15'} className="mx-1" />
                    <FaTwitter size={'15'} className="mx-1" />
                    <FaInstagram size={'15'} className="mx-1" />
                </div>
            </div>

            {/* Navbar section */}
            <nav className="navbar px-4 navbarHero">
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="" height={'50'} width={'50'} />
                    </Link>
                    <span className="ms-1 logotext">
                        Sai Balika Vikas Kalyan Society
                    </span>

                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger toggled={showNavbar} toggle={setShowNavbar} />
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Investment" onClick={handleLinkClick}>Investments</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Causes" onClick={handleLinkClick}>Our Causes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/Login" onClick={handleLinkClick}>Login</NavLink>
                        </li> */}
                        {/* <li>
                            <NavLink to="/Registration" onClick={handleLinkClick}>Registration</NavLink>
                        </li> */}
                        
                        <li>
                        <Link to="/Login">
                            <button className="btn btn-primary" onClick={handleLinkClick}>
                                Login
                            </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
