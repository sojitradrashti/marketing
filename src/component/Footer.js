import './FooterStyles.css'
import {FaFacebook, FaSkype, FaTwitter, FaInstagram,FaLinkedin, FaPinterest,} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="logo">
          <img alt="logoimage" src="/assets/logo1.png"/>
        
            <div className="icons">
                <FaFacebook size={20}/>
                <FaTwitter size={20}/>
                <FaSkype size={20} />
                <FaLinkedin size={20}/>
                <FaInstagram size={20}/>
                <FaPinterest size={20} /> 
            </div>
            </div>
          <div>
          <h4>Company</h4>
            <p>About Us</p>
            <p>Service</p>
            <p>Contact Us</p>
          </div>

            <div>
            <h4>Services</h4>
              <p>Mobile App Development</p>
              <p>Website Development</p>
              <p>AI Development</p>
              <p>Game Developmente</p>
            </div>

            <div>
            <h4>Contact Us</h4>
                <p>D-814,Ganesh Glory 11,jagatpur </p><p>Road,S.G.Highway,Gota,</p><p>Ahmedabad,Gujarat,382470</p>
                 <p>(+91) 7016660537</p>
                <p>info@demaze.in</p>
            </div>
          </div>
          </div>

  
  );
};
export default Footer;
