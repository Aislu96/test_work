import fonts from '../../images/Rectangle 4.jpg';
import {Link} from "react-router-dom";
import './Register.css';

function Register() {
    return (
        <main className="main">
            <div className="main__block">
                <h1 className="main__title">Trade with a broker Who is Fair and Reputable</h1>
                <h2 className="main__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.</h2>
            </div>
            <div className='main__auth'>
                    <h3 className="main__auth-title">Open New Account</h3>
                    <form className="main__from" name="from-register" >
                        <input name="email" className="main__email"
                               type="email" placeholder="Enter e-mail" minLength="2"
                               maxLength="40" value="" required/>
                        <input name="password" className="main__password"
                               type="password" placeholder="Enter your full name" minLength="2"
                               maxLength="40"  value="" required/>
                        <button type="submit" className="main__button" >Register</button>
                    </form>
                    <Link to="/login" className="auth__text">Already have an account? Log In By registreting you agree to our privacy policy</Link>
            </div>
        </main>

    );
}

export default Register;
