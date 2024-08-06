import { Link } from 'react-router-dom';
import amazonLogo from '../assets/Images/amazonwhitelogo.jpg';
const SignIn = () => {
  return (
    <>
        <div className="signin-page">
            <div className="signin-page-container">
                <Link to='/'>
                    <img src={amazonLogo} alt="amazon logo" width="150px" height="40px"/>
                </Link>
                <div className="form-container">
                    <h2>Sign in</h2>
                    <div>
                        <h5>Email or mobile phone number</h5>
                        <input type="text" required/><br />
                    </div>
                    <button>Continue</button>
                    <p>By continuing, you to Amazon&#39;s <span className='blue-link'>Conditions of Use</span> and <span className='blue-link'>Privacy Notice</span></p>
                    <p>&#8895; <span className='blue-link'>Need help?</span></p>
                    <br />
                    <hr />
                    <div>
                        <h5>Buying for work?</h5>
                        <span className='blue-link'>Shop on Amazon Business</span>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <hr/>
                    <span style={{color: "#8d8d8d"}}>New to Amazon?</span>
                    <hr/>
                </div>
                <div className="create-account">
                    <p>Create your Amazon account</p>
                </div>
            </div>
            <div className="privacy-policy-container">
                <div className="privacy-policy">
                    <span>Condition of Use</span>
                    <span>Privacy Notice</span>
                    <span>Help</span>
                </div>
                <p>&#169; 1996-2024, Amazon.com, Inc. or its affillates</p>
            </div>
        </div>
    </>
  )
}

export default SignIn;