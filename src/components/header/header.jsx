import React, { useState } from 'react'
import TopHeader from './topHeader'
import Navbar from './navbar'
import { Link } from 'react-router-dom'

const Header = () => {
    const [activeNavbar, setActiveNavebar] = useState(false)

    return (
        <header style={{backgroundColor:"white"}} className="header header__1">
            <TopHeader />
            <div style={{backgroundColor:"white"}} className="header__bottom">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <Link to="/" className="d-flex align-items-center header__bottom_logo">
                                <img src="/images/logo.svg" alt />
                                <h5>Digiv</h5>
                            </Link>
                        </div>
                        <Navbar activeNavbar={activeNavbar} />
                        <div className="d-xl-block d-none">
                            <Link to={"contact"} className="common__btn">
                                <span> Get Started Now</span>
                                <img src="/icons/arrow-up-right.svg" alt />
                            </Link>
                        </div>
                        <div className="menu__icon d-block d-xl-none"
                            onClick={() => setActiveNavebar(!activeNavbar)}
                        >
                            <i className="bi bi-list" />
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header