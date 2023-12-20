import "./AboutusStyles.css";
 
function AboutUs(){
        return(
            <div className="about-container">
                <div className="About-image">
                    <img src="/assets/about.jpeg" alt="image"/>
                </div>
                <div className="text">
                    <h2>Who Are We?</h2>
                    <p>We are a group of brilliant & helpful minds and exceptional talents who promote the value of effective communication and process transparency.</p>
                </div>
        
                <div className="about-bottom">
                <div className="text">
                    <h2>What We Do Best</h2>
                    <p>We add the value to your idea's execution</p>
                </div>
                <div className="About-image">
                    <img src="/assets/about.jpeg" alt="image"/>
                </div>
            </div>
            </div>
        )
}
export default AboutUs;