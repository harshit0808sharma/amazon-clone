import { NavLink } from 'react-router-dom';
import amazonLogo from '../assets/Images/amazonlog.jpg';

const Footer = () => {
  return (
    <>
        <div className="footer-component">
            <div className="footer-signin-option">
                <div className="footer-signin-container">
                    <p>See personalized recommendations</p>
                    <NavLink to="/signin">Sign in</NavLink>
                    <h5>New customer? <span style={{color: 'blue'}}>Start here</span></h5>
                </div>
            </div>
            <button>Back To Top</button>
            <div className="footer-center">
                <div className="footer-content">
                    <div className="footer-text">
                        <h4>Get to Know Us</h4>
                        <span>About Us</span>
                        <span>Careers</span>
                        <span>Press Releases</span>
                        <span>Amazon Science</span>
                    </div>
                    <div className="footer-text">
                        <h4>Connect with Us</h4>
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Instagram</span>
                    </div>
                    <div className="footer-text">
                    <   h4>Make MOney with Us</h4>
                        <span>Sell on Amazon</span>
                        <span>Sell under Amazon Accelerator</span>
                        <span>Protect and build Your Brand</span>
                        <span>Amazon Global Selling</span>
                        <span>Becomde an Affiliate</span>
                        <span>Fulfilment by Amazon</span>
                        <span>Advertise Your Products</span>
                        <span>Amazon Pay on Merchants</span>
                    </div>
                    <div className="footer-text">
                        <h4>Let Us Help You</h4>
                        <span>COVID-19 and Amazon</span>
                        <span>Your Account</span>
                        <span>Returns Centre</span>
                        <span>100% Purchase Protection</span>
                        <span>Amazon App Download</span>
                        <span>Help</span>
                    </div>
                </div>
                <hr />
                <div className="footer-amazon-logo">
                    <img src={amazonLogo} alt="logo" width="100px" height="25px"/>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="first-bottom">
                        <p>AbeBooks</p>
                        <span>Books, art</span>
                        <span>& collectibles</span>
                    </div>
                    <div className="first-bottom">
                        <p>Amazon Web Services</p>
                        <span>Scalable Cloud</span>
                        <span>Computing</span>
                    </div>
                    <div className="first-bottom">
                        <p>Audible</p>
                        <span>Download</span>
                        <span>Audio Books</span>
                    </div>
                    <div className="first-bottom">
                        <p>IMDb</p>
                        <span>Movies, Tv</span>
                        <span>& Celevrities</span>
                    </div>
                    <div className="first-bottom">
                        <p>Shopbop</p>
                        <span>Designer</span>
                        <span>Fashion Brands</span>
                    </div>
                    <div className="first-bottom">
                        <p>Amazon Business</p>
                        <span>Everything For</span>
                        <span>Your Business</span>
                    </div>
                    <div className="first-bottom">
                        <p>Prime Now</p>
                        <span>2-Hour Delivery</span>
                        <span>on Everyday Items</span>
                    </div>
                    <div className="first-bottom">
                        <p>Amazon Prime Music</p>
                        <span>100 million songs, ad-free</span>
                        <span>Over 15 million podcast episodes</span>
                    </div>
                </div>
                <div className="footer-copyrights-details">
                    <div className="privacy">
                        <span>Conditins of Use & Sale</span>
                        <span>Privacy Notice</span>
                        <span>Interest-Based Ads</span>
                    </div>
                    <p>&#169; 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;