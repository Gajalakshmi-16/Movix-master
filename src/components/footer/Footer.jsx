import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

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
                Thank you for visiting World Movix, your gateway to discovering films from around the globe. We are dedicated to bringing you the latest and most intriguing movies from diverse cultures and genres. Connect with us on social media to stay updated on new releases, film reviews, and cinematic trends. If you have any questions or feedback, don't hesitate to reach out to us. We value your support and look forward to sharing the world of cinema with you. <br /> For more details contact:<br/> Gajalakshmi Samayadurai <br /> Contact number:9360330259<br/> Email:gajalakshmis@student.tce.edu|gajalakshmisamayadurai@gmail.com
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
