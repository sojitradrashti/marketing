import "./ProjectStyles.css";
import Project from "./Project";

function ProjectData(props){
        return(
            <div className="p-card">
                <div className="p-image">
                    <img src={props.image} alt="image"/>
                </div>
                
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
        )
}
export default ProjectData;