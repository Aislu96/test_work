import flag from "../../images/flag.svg";
import {Link} from "react-router-dom";
import React from "react";

function Navigater({menu}) {
    return (
        menu ?
        <div className="header__block-active">
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
        </div> : ''
    )
}

export default Navigater;
