import styles from "../styles/Home.module.css";
import About from "./About"
import Education from "./Education";
import Experience from "./Experience"
import Projects from "./Projects";

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
    </>
  );
};

export default Home;
