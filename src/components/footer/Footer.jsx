import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    This website is developed and maintained By Nitish Kumar
                    <br />
                    Connect with me on social media

                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/01nitishk?mibextid=ZbWKwL">
                            <FaFacebookF />
                        </a>
                    </span>

                    <span className="icon">
                        <a href="https://www.instagram.com/nitishksingh.__?utm_source=qr&igsh=ZXpzdHpqY3VlMzRx">
                            <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://x.com/nitishkr____?t=EfQ4LYUC-NZdisN5nXBZQQ&s=08">
                            <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/nitish-kumar-03b25621b/">
                            <FaLinkedin />
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
