import "./AboutUsStyles.css";
 
function AboutUs(){
        return(
            <div className="about-container">
                <div className="head">
                    <h2>A Little</h2>
                    <h1>About Us</h1>
                    </div>
                <div className="slide">
                <div className="about-image1">
                    <img src="/assets/about.jpeg" alt="image"/>
                </div>
                
                
                <div className="text">
                    <h2>Who Are We?</h2>
                    <p>We are a group of brilliant & helpful minds and exceptional talents who promote the value of effective communication and process transparency.</p>
                </div>
                </div>
                
        
                <div className="about-bottom">
                         <div className="text1">
                            <h2>What We Do Best?</h2>
                            <p>We add the value to your idea's execution.</p>
                        </div>
                        
                    
                </div>
            </div>
        )
}
export default AboutUs;