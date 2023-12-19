import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";


class Navbar extends Component  {
    state = {clicked: false }; 
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }   
    render(){
            return(
                <nav className="navbar-items">
                   <div className="img">
                    <img alt="image" src="./assets/logo.png"/>
                    </div> {/* <h1 className="logo">Demaze Technologies</h1> */}
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => { 
                            return(
                                <li key={index}>
                                    <a className={item.cName} href="/">
                                        <i className={item.icon}></i>
                                        {item.title}
                                        </a>
                                </li>
                                
                            )
                        })}
                       <button>Contact Us</button>
                    </ul>
                </nav>
            )
        }
}

export default Navbar;

