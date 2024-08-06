import { Link } from 'react-router-dom';
import amazonLogo from '../assets/Images/amazonwhitelogo.jpg';
const ContactPage = () => {
  return (
    <>
        <div className="contact-page">
            <Link to='/'>
                <img src={amazonLogo} alt="amazon logo" width="150px" height="40px"/>
            </Link>
            <form className="form-container">
                <h2>Contact Us</h2>
                <div>
                    <p>Your Name</p>
                    <input type="text" name='name'  placeholder='Enter Name' required/><br />
                </div>
                <div>
                    <p>Enter Your Email</p>
                    <input type="email" name="email" placeholder='Enter Email' required/><br />
                </div>
                <div>
                    <p>Enter Your Message</p>
                    <textarea name="message" id="" placeholder='Enter Your Message' required></textarea>
                </div>
                <button type='submit' style={{cursor: 'pointer'}}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default ContactPage;