import {Link} from "react-router-dom";
import React, {useState} from "react";
import logo from "../../images/logo.svg";
import './Header.css';
import flag from "../../images/flag.svg";
import Menu from "../Menu/Menu";
import Navigater from "../Navigater/Navigater";


function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <header className="header">
            <div className="header__info">
                <span className="header__span">Trade Responsibly. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 73% of retail investor accounts lose money when trading
CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</span>
            </div>
            <div className="header__blocks">
                <div className="header__container">
                    <Link to="/test_work"><img src={logo} className="header__logo" alt="Логотип проекта"/></Link>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__link"><Link to="/about-us" className="header__link-text">About
                                Us</Link>
                            </li>
                            <li className="header__link"><Link to="/forex-trading" className="header__link-text">Forex
                                Trading</Link></li>
                            <li className="header__link"><Link to="/tools" className="header__link-text">Tools</Link>
                            </li>
                            <li className="header__link header__link_color"><Link to="/partner-with-us"
                                                                                  className="header__link-text">Partner
                                With Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__block">
                    <img src={flag} alt="Картинка флага" className="header__img"/>
                    <i className="header__arrow-down"></i>
                    <ul className="header__list">
                        <li className="header__btn-auth"><Link to="/register"
                                                               className="header__list-text">Register</Link></li>
                        <li className="header__btn-account"><Link to="/account" className="header__list-text">Demo
                            Account</Link></li>
                        <li className="header__btn-login"><Link to="/login"
                                                                className="header__list-text header__list-text_login">Login</Link>
                        </li>
                    </ul>
                </div>
                <Menu isSetMenu={setMenu} menu={menu}/>
            </div>
            <Navigater menu={menu}/>
        </header>
    )
}


export default Header;
