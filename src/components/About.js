import styles from "../styles/Home.module.css"

const About = () => {
    return (
        <section className={styles.about} id="about">
          <div className={styles.glassCard}>
            <div className={styles.flexContainer}>
              <div className={styles.profileSection}>
                
                <div className={styles.profilePic}>
                  <img
                    src="/profile.jpg"
                    alt="Profile Picture"
                  />
                </div>

                {/* Designation */}
                <h1 className={styles.name}>Mohan Priya Mulagapu</h1>
                <p className={styles.designation}>
                Software Developer | Data Analyst | Machine Learning Engineer
                </p>

                {/* Links Section */}

                <div className={styles.links}>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mohan-priya-mulagapu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.linkedin}`}
                  >
                    <i className="fab fa-linkedin"></i> 
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/mohanpriya20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.github}`}
                  >
                    <i className="fab fa-github"></i> 
                  </a>

                  {/* Mail */}
                    <a href="mailto:mohanpriyamulagapu@gmail.com" 
                    className={`${styles.link} ${styles.mail}`}
                  >
                    <i className="fas fa-envelope"></i> 
                  </a>
                </div>

                {/* Resume*/}
                <div className={styles.resume}>
                  {/* View & Download Resume Button */}
                  <button
                    className={styles.resumeButton}
                    onClick={() => {
                      // Open resume in a new tab
                      window.open('/Mohan_Priya_Resume.pdf', '_blank');

                      // Trigger resume download
                      const link = document.createElement('a');
                      link.href = '/Mohan_Priya_Resume.pdf';
                      link.download = 'Mohan_Priya_Resume.pdf'; 
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <i className="fas fa-eye"></i>  Resume
                  </button>
                </div>

              </div>

              {/* About Section */}
              <div className={styles.aboutSection}>
                <h2 className={styles.animatedTitle}>Hello! I am..</h2>
                <p className={`${styles.animatedPara} ${styles.animatedPara1}`}>
                  Mohan Priya Mulagapu and I am from Visakhapatnam, India. I am a passionate and skilled Software Developer with extensive experience in full-stack development, cloud technologies, and machine learning. I am currently pursuing my Master of Engineering in Computer Science at the University of Cincinnati, expecting to graduate in May 2025. I hold a Bachelor of Technology in Computer Science and Engineering from Raghu Engineering College, India.
                </p>
                <p className={`${styles.animatedPara} ${styles.animatedPara2}`}>
                  I have professional experience as a Software Developer, where I excelled in designing and implementing scalable web applications, AI-powered platforms, and ETL workflows. At AI For All LLC, I built a CJIS-compliant AI-powered investigation platform that processes multimedia content and deployed the solution on AWS GovCloud. At Cognizant, I optimized ETL processes, reducing data processing time by 40%, and at Infosys, I implemented a secure payment gateway that increased transaction speed by 25%.
                </p>
                <p className={`${styles.animatedPara} ${styles.animatedPara3}`}>
                  I am dedicated to delivering high-quality, innovative solutions and I am always eager to tackle complex challenges and collaborate with teams to create impactful projects.
                </p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default About;