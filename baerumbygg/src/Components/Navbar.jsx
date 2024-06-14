import React, { useState } from "react";
import '../Styles/style';
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png"


const Navbar = () => {
const [isOpen, setisOpen] = useState(false)
console.log(isOpen)
return ( 
    <>
        <div className="navbar-container">
            <div className="navbar-inner-container">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="menu-elements">
                    <div className="mobile-nav">
                        <div className="burger" onClick={() => setisOpen(!isOpen)}>
                        ☰
                        </div>
                        <div className={isOpen ? 'open-nav' : 'hidden-nav'}>
                            <div className="close-menu" onClick={() => setisOpen(!isOpen)}>✖</div>
                            <div className="mobile-logo-container">
                                <img className="mobile-logo" src={logo} alt="Logo" />
                            </div>
                            <div className="links">
                                <div className="inner-mobile-nav-container">
                                    <NavLink to="/" onClick={() => setisOpen(!isOpen)} className="nav-link">Hjem</NavLink>
                                    <NavLink to="/about" onClick={() => setisOpen(!isOpen)} className="nav-link">Om oss</NavLink>
                                    <NavLink to="/tjenester" onClick={() => setisOpen(!isOpen)} className="nav-link">Tjenester</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="desktop-nav">
                        <div className="links">
                            <NavLink to="/" className="nav-link">Hjem</NavLink>
                            <NavLink to="/about" className="nav-link">Om oss</NavLink>
                            <NavLink to="/tjenester" className="nav-link">Tjenester</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Navbar