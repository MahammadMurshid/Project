import React from 'react';
import './Home.css'
import Footer from './Footer'
import img from './Images/logo.jpg'
import img2 from './Images/Burger.png'
import imgC from './Images/Chicken.jpg'
import { Link } from 'react-router-dom';

//import Button from './MUI/AutoComplete/Myapp'

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import Phone from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Block } from '@mui/icons-material';
export default function All() {
    const buttonPressed = () => {
        const BURGER = document.getElementById("burger");
        const dep = document.getElementById("department");
        BURGER.style.display = 'Block';
        dep.style.height = '500px'



    }
    const c = () => {
        const BURGER = document.getElementById("burger");
        const dep = document.getElementById("department");
        BURGER.style.display = 'none'
        dep.style.height = '54px'
    }

    return (
        <div>
            <>
                <div className='Detail'>
                    <span>mahammadmurshid03@gmail.com  |</span>
                    <span>Free Shipping for all order of $100</span>

                    <span>
                        {/*    <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faEnvelope} />
                        
 */}
                        <p>   <TwitterIcon /></p>
                        <p><FacebookOutlinedIcon /></p>
                        <p><InstagramIcon /></p>
                        <p>  <WhatsAppIcon /> </p>


                    </   span>
                    <span> <PersonIcon />   Login</span>
                </div>

                <div className="NavBar">
                    <div className="logo">
                        <img style={{ top: '9px', width: '150px' }} src='https://t4.ftcdn.net/jpg/02/65/59/57/240_F_265595738_X1Xh7hjDLWkJR0N8hQL1WfmfTaflN5nl.jpg' alt="VEG" />
                    </div>
                    <div className="Page">
                        <ul>
                            <Link style={{ textDecoration: 'None' }} to={'/ '}>Home</Link>
                            {/*  <Link style={{ textDecoration: 'None' }} to={'/About'}>About</Link> */}
                            <Link style={{ textDecoration: 'None' }} to={'/Contact'}>Contact</Link>
                            <Link style={{ textDecoration: 'None' }} to={'/Shop'}>Shop</Link>
                            <Link style={{ textDecoration: 'None' }} to={'/Pages'}>Pages</Link>
                            <Link style={{ textDecoration: 'None' }} to={'/Blog'}>Blog</Link>
                        </ul>
                    </div>
                </div>
                <div className="header">
                    <div className="head-left">

                        <div id='department' className="department">
                            <div className="burger">
                                <img onClick={buttonPressed} src={img2} alt="s" />
                            </div>
                            <span>All Department</span>
                            <p onClick={c} className='p5'><ArrowDropDownIcon /></p>
                            <ul id='burger'>
                                <li>Fresh Meat</li>
                                <li>Vegetable</li>
                                <li>Fruits</li>
                                <li>Nuts</li>
                                <li>Ocean Food</li>
                                <li>Fresh Onion </li>
                                <li>Fresh Banana </li>
                            </ul>
                        </div>
                    </div>
                    <div className="head-right">
                        <div className="R-categary">
                            <div className="category">

                                <h3> All Category</h3>
                                <div className="searchBar">
                                    <input type="text" placeholder='Search' />
                                    <button>Search</button>
                                </div>
                                <div className="Phone">
                                    <p><Phone /></p><h2>  9323056946</h2>
                                </div>
                            </div>
                            <div className="First-Banner">


                                <img src="https://themewagon.github.io/ogani/img/hero/banner.jpg" alt="" />
                                <div className="Hero_Text">
                                    <span>Fresh Fruits</span>
                                    <h1>Vegetable </h1>
                                    <h1>100% Organic </h1>
                                    <button style={{ backgroundColor: '#7fad39' }}>Shop Now</button>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/*
                    <div className="R-categary">
                        <div className="category">

                            <h3> All Category</h3>
                            <div className="searchBar">
                                <input type="text" placeholder='Search' />
                                <button>Search</button>
                            </div>
                            <div className="Phone">
                                <p><Phone /></p><h2>  5443.14534</h2>
                            </div>
                        </div>
                        <div className="First-Banner">


                            <img src="https://themewagon.github.io/ogani/img/hero/banner.jpg" alt="" />
                            <div className="Hero_Text">
                                <span>Fresh Fruits</span>
                                <h1>Vegetable </h1>
                                <h1>100% Organic </h1>
                                <button style={{ backgroundColor: '#7fad39' }}>Shop Now</button>
                            </div>
                        </div>

                    </div> */}
                </div>

            </>
        </div>
    )
}
