import { useState } from "react";
import styles from "../styles/Home.module.css";

const Projects = () => {
  const images = [
    "/vistual-assistant-project/ouput1.png",
    "/vistual-assistant-project/ouput2.png",
    "/vistual-assistant-project/ouput3.png",
    "/vistual-assistant-project/ouput4.png",
    "/vistual-assistant-project/ouput5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.projects} id="projects">
      <h2><i className="fas fa-laptop-code"></i> Projects</h2>

      <div className={styles.projectFlex}>
        {/* Image slider + audio */}
        <div className={styles.projectMedia}>
          <div className={styles.sliderWrapper}>
            <div className={styles.imageBorderWrapper}>
              <div className={styles.imageContainer}>
                <img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Project Output ${currentIndex + 1}`}
                  className={styles.sliderImage}
                />
              </div>
            </div>

            <button className={styles.leftArrow} onClick={goToPrevious}>
              &#8249;
            </button>
            <button className={styles.rightArrow} onClick={goToNext}>
              &#8250;
            </button>
          </div>

          <h4 className={styles.audioHeading}>
            <span className={styles.audioIcon}>🎧</span>
            <span className={styles.gradientText}>Narration by AI Assistant</span>
          </h4>

          <audio controls className={styles.projectAudio}>
            <source src="/vistual-assistant-project/narration.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Project description */}
        <div className={styles.projectDescription}>
          <h3 className={styles.projectTitle}>
            AI-Driven Virtual Assistant
            <a
              href="https://github.com/mohanpriya20/ai-driven-virtual-assistant-new"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewRepoButton}
            >
              <i className="fab fa-github"></i> View Repo
            </a>
          </h3>


          <p>
            The AI-Driven Virtual Assistant is a real-time vision-based system developed using TensorFlow, OpenCV, and NLP techniques 
            to detect objects and narrate scenes dynamically. It leverages a deep learning model with an F1 score of 0.72 to accurately 
            identify elements in live video streams. Context-aware narratives are generated using Hugging Face Transformers and converted 
            to speech through Google Text-to-Speech, enabling the assistant to provide audible descriptions of its surroundings. Built with 
            Django and PostgreSQL for backend and data management, and fully containerized with Docker, this assistant is designed for 
            accessibility and user engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
