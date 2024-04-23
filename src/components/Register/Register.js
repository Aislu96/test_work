import {Link} from "react-router-dom";
import './Register.css';
import logoGoogle from "../../images/logoGoogle.svg";
import logoFacebook from "../../images/logoFacebook.svg";
import logoApple from "../../images/logoApple.svg";
import React from "react";
import useFormValidation from "../../hooks/useFormValidation";

function Register({onSignup}) {
    const {values, errors, handleChange, setValues, resetValidation, isValid} = useFormValidation({});
    React.useEffect(() => {
        resetValidation();
        const values = {};
        setValues(values);
    }, [setValues, resetValidation]);


    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(values);
    }
    return (
        <main className="image-container">
            <div className="main">
                <div className="main__block">
                    <h1 className="main__title">Trade with a broker Who is Fair and Reputable</h1>
                    <h2 className="main__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s.</h2>
                </div>
                <div className='main__auth'>
                    <h3 className="main__auth-title">Open New Account</h3>
                    <form className="main__from" name="from-register" onSubmit={handleSubmit}>
                        <input name="email" className="main__input"
                               type="email" placeholder="Enter e-mail" minLength="2"
                               maxLength="40" value={values.email || ''} required onChange={handleChange}/>
                        <span id="email-error"
                              className={`main__input-error ${errors.email}`}>{errors.email || ''}</span>
                        <input name="fullname" className="main__input"
                               type="text" placeholder="Enter your full name" minLength="2"
                               maxLength="40" value={values.fullname || ''} required onChange={handleChange}/>
                        <span id="password-error"
                              className={`main__input-error ${errors.fullname}`}>{errors.fullname || ''}</span>
                        <button type="submit"
                                className={isValid ? "main__button" : "main__button main__button_color"}
                                onSubmit={handleSubmit}>Register
                        </button>
                    </form>
                    <div className="main__container">
                        <span>Or register via</span>
                    </div>
                    <div className="main__img-block">
                        <a href="https://google.com" target="_blank" rel="noreferrer" className="main__img-link"><img
                            src={logoGoogle} alt="Картинка логотипа Google" className="main__logo-img"/></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="main__img-link"><img
                            src={logoFacebook} alt="Картинка логотипа Facebook" className="main__logo-img"/></a>
                        <a href="https://apple.com" target="_blank" rel="noreferrer" className="main__img-link"><img
                            src={logoApple} alt="Картинка логотипа Apple" className="main__logo-img"/></a>
                    </div>
                    <p className="main__text">Already have an account? <Link to="/login"
                                                                             className="main__text-link">Log
                        In</Link><br/>By registreting you agree to our privacy policy</p>
                </div>
            </div>
        </main>

    );
}

export default Register;
