import "./ProjectStyles.css";
import ProjectData from "./ProjectData";

function Project() {
  return (
    <div className="project">
      <h1>We Provide For Your Brand</h1>
      <div className="projectcard">
        <ProjectData
          image="/assets/image1.jpg"
          heading="Web Development"
          text="We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development."
        />
        <ProjectData
          image="/assets/image5.jpg"
          heading="App Development"
          text="We deliver next-generation iOS, Android and Flutter applications to meet the most demanding customer requirements. Our skilled team design and develop custom feature-packed apps across various business segments."
        />

        <ProjectData
          image="/assets/image3.jpg"
          heading="Game Development"
          text="We focus on expanding your imagination. Our mobile game team offers art and design, user experience design, and cross-platform mobile game development services using Unity and Unreal engines."
        />
      </div>
    </div>
  );
}
export default Project;
