import "./HeroStyles.css"
function Hero(props) {
    return(
        <>
        <div className={props.cName}>

            <img className="hero-image"alt="heroImg" src={props.heroImg}/>
            </div>
                <div className="hero-text">
                    <h1>{props.title1}<br/>{props.title2}<br/>{props.title3}</h1>
                    <p>{props.text1}<br/>{props.text2}<br/></p>
                   
                </div>
        
        </>
    );
}
export default Hero