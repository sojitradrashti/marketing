import "./FooterStyles.css";
// import {
//   FaFacebook,
//   FaSkype,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaPinterest,
// } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
            <div className="top">
                <div className="demaze">
                  <img src="/assets/logo.png" alt="image"/>
                   </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-pinterest-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Company</h4>
                    <a href="/">About Us</a><br/>
                    <a href="/">Services</a><br/>
                    <a href="/">Projects</a><br/>
                    <a href="/">Contact Us</a><br/>
                </div>
                <div>
                    <h4>Services</h4>
                    <a href="/">Mobile App Development</a><br/>
                    <a href="/">Website Development</a><br/>
                    <a href="/">AI Development</a><br/>
                    <a href="/">Game Development</a><br/>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <a href="/">D-814, Ganesh Glory 11, Jagatpur <br/>RoadRoad, S.G. Highway, <br/>Gota, Ahmedabad, Gujarat, 382470</a><br/>
                    <a href="/">(+91) 7016660537</a><br/>
                    <a href="/">info@demaze.in</a><br/>
                </div>
            </div>
                
        </div>
  );
};
export default Footer;
