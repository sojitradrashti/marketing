
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Service from "./Service";
import Footer from "../component/Footer";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
         cName="hero"
         heroImg="/assets/2.jpg"
         title1="Where idea"
         title2="turns into"
         title3="Reality."
         text1="Deliver superior customer experince by upgrading your business"
         text2="processes through Website & Mobile Application."
        //  buttonText1="Contact"   
        //  buttonText2="About"   
        //  buttonClass="show"
        
       />
       <Service />
       <Footer/>
        </>
    )
}
export default Home;