import styles from "../styles/Home.module.css";
import About from "./About"
import Education from "./Education";
import Experience from "./Experience"
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* About Section */}
      <About/>

      {/* Education Section */}
      <Education/>

      {/* Experience Section */}
      <Experience/>

      {/* Projects Section */}
      <Projects/>

      {/* Skills Section */}
      <Skills/>

      {/*Contact Section*/}
      <Contact/>
    </>
  );
};

export default Home;
