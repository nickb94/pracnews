import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer_wrapper">
            <div className="footer">
                <div className="footer_space">
                <div className="section_one">
                    <div id="footer_logo">
                        NewsLaundry.com
                    </div>
                    <div>Copyright © 2020 Newslaundry Media Private Limited. All Rights Reserved.</div>
                </div>
                <div className="links">
                    <div className="section_two">
                        <ul>
                            <li><a href="/#">About Us</a></li>
                            <li><a href="/#">Contact Us</a></li>
                            <li><a href="/#">Terms Of Services</a></li>
                            <li><a href="/#">Privacy Policy</a></li>
                            <li><a href="/#">Join Us</a></li>
                        </ul>
                    </div>
                </div>
        </div>
            </div>
        </div>
    )
}
