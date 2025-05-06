import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Subscribe Form */}
                <div className="subscribe">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>Subscribe to our newsletter &amp; get more information</h2>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div>
                                <input type="text" placeholder="Your Email" />
                                <button className="common__btn">
                                    <span>Subscribe Now</span>
                                    <img src="/icons/arrow-up-rignt-black.svg" alt />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Subscribe Form */}
                {/* -------Logo and socal icon */}
                <div className="row footer__lo_co">
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <Link to={"#"} className="d-flex align-items-center footer__logo">
                                <img src="/images/logon.png" alt />
                                
                            </Link>
                        </div>
                        <ul className="d-flex justify-content-center gap-3 footer__socal">
                            <li>
                                <Link to={"#"}>
                                    <i className="fa-brands fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <i className="fa-brands fa-pinterest-p" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <i className="fa-brands fa-instagram" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <i className="fa-brands fa-twitter" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* -------Logo and socal icon */}
                <hr className="footer__border" />
                {/* ---- Info */}
                <div className="row footer__info">
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <div className="footer__info_address">
                            <h3 className="footer__info_group">Address</h3>
                            <p>2096 New Market, New Road North West Bengal, NY, USA</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <div>
                            <h3 className="footer__info_group">Our Contact</h3>
                            <ul className="footer__info_contact">
                                <li>
                                    <img src="/icons/Frame5.svg" alt />
                                    <p>hellodigiv@gmail.com</p>
                                </li>
                                <li>
                                    <img src="/icons/Frame6.svg" alt />
                                    <p>+48 93939 0239</p>
                                </li>
                                <li>
                                    <img src="/icons/Frame7.svg" alt />
                                    <p>Mon - Fri 10:00 - 18:00</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <div>
                            <h3 className="footer__info_group">Quick Links</h3>
                            <ul>
                                <li>
                                    <Link to={"#"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Our All Services</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>About Digiv</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                        <div>
                            <h3 className="footer__info_group">Help</h3>
                            <ul>
                                <li>
                                    <Link to={"#"}>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>FAQ's</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Privacy Pllicy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ---- Info */}
                <div className="row footer__copyright">
                    <div className="col-12">
                        <hr className="footer__border" />
                        <p className="text-center">
                            © Copyright 2025 All Rights Reserved by <Link to={"#"}>digiv</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer