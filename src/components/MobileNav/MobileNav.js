import React, { Component } from 'react';
import './MobileNav.css';
import logo from '../../images/main-logo.png'
import menu_bars from '../../icons/menu.png'

class MobileNav extends Component {

    render() {
        let resume_link = "https://drive.google.com/file/d/1pdUiCdqH1s_wjecRcxyPD_VkFxI9EkmD/view?usp=sharing";

        return (
            <div className="mobile-nav">
                <a href="/" className="mobile-logo"><img src={logo} className="mobile-logo"/></a>
                <span id="mobile-toggle" onClick={function () {
                    document.getElementById("sidebar").classList.toggle("active");
                }}>
                    <img src={menu_bars} alt=""/>
                </span>

                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Hoang Ha</h3>
                    </div>

                    <ul className="list-unstyled components" id="mobile-nav-bar">

                        <li><a href="#about-me-section"> About me </a></li>
                        <li><a href="#skills-section"> Skills </a></li>
                        <li><a href="#projects-section"> Projects </a></li>
                        <li><a href="#experience-section"> Experience </a></li>
                        <li><a href={resume_link} target="_blank"> Resume </a></li>
                        <li><a href="#contact-anchor"> Contact </a></li>

                    </ul>
                </nav>

            </div>
        );
    }
}

export default MobileNav;