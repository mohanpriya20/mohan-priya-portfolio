import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
    <section className={styles.home} id="home">
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
          <h2>Hello! I am..</h2>
          <p>
            Mohan Priya Mulagapu and I am from Visakhapatnam, India. I am a passionate and skilled Software Developer with extensive experience in full-stack development, cloud technologies, and machine learning. I am currently pursuing my Master of Engineering in Computer Science at the University of Cincinnati, expecting to graduate in May 2025. I hold a Bachelor of Technology in Computer Science and Engineering from Raghu Engineering College, India.
          </p>

          <p>
            I have professional experience as a Software Developer, where I excelled in designing and implementing scalable web applications, AI-powered platforms, and ETL workflows. At AI For All LLC, I built a CJIS-compliant AI-powered investigation platform that processes multimedia content and deployed the solution on AWS GovCloud. At Cognizant, I optimized ETL processes, reducing data processing time by 40%, and at Infosys, I implemented a secure payment gateway that increased transaction speed by 25%.
          </p>

          <p>
            I am dedicated to delivering high-quality, innovative solutions and I am always eager to tackle complex challenges and collaborate with teams to create impactful projects.
          </p>

        </div>
      </div>
    </section>

    {/* Education Section */}
    <section className={styles.education} id="education">
      <h2>
        <i className="fas fa-graduation-cap"></i> Education
      </h2>
      <div className={styles.educationContainer}>

        {/* University of Cincinnati */}
        <div className={`${styles.educationItem} ${styles.leftAligned}`}>
          <img
            src="/uc.jpeg"
            alt="University of Cincinnati"
            className={styles.educationImage}
          />
          <div className={styles.educationContent}>
            <h3>University of Cincinnati</h3>
            <p>
              Pursuing <b>Master of Engineering in Computer Science</b> at the <b>University of Cincinnati</b>, located in <b>Cincinnati, Ohio</b>. 
              My expected graduation is <b>May 2025</b>, and my <b>CGPA</b> is <b>3.75/4.0</b>.
            </p>
          </div>
        </div>

        {/* Raghu Engineering College */}
        <div className={`${styles.educationItem} ${styles.rightAligned}`}>
          <div className={styles.educationContent}>
            <h3>Raghu Engineering College</h3>
            <p>
              Completed <b>Bachelor of Technology in Computer Science and Engineering</b> at <b>Raghu Engineering College</b>, located in <b>Visakhapatnam, Andhra Pradesh, India</b>. 
              I graduated in <b>July 2021</b> with a <b>CGPA of 3.85/4.0</b>.
            </p>
          </div>
          <img
            src="/raghu.png"
            alt="Raghu Engineering College"
            className={styles.educationImage}
          />
        </div>

      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className={styles.experience}>
      <h2>
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className={styles.experienceContainer}>
        {/* Company 1 */}
        <div className={styles.experienceItem}>
          <div className={styles.logoAndTitle}>
            <img
              src="/ai_owl_logo.jpeg"
              alt="AI For All LLC"
              className={styles.companyLogo}
            />
            <div>
              <h3>Software Development Engineer</h3>
              <h4>AI For All LLC</h4>
            </div>
          </div>
          <div className={styles.experienceContent}>
            <h5><b>Columbus, OH | November 2024 - Present</b></h5>
            <p>
            Led the development of a web-based interactive AI Tools learning platform from scratch with ten dynamic 
            game modules using Unity (WebGL), integrated with Angular and .NET framework. Implemented secure authentication via Google SSO, OAuth 2.0, and Firebase phone authentication, deployed the modules on AWS S3 and integrated Stripe for secure payment processing and DynamoDB for seamless data storage. The modules are now being utilized as a single credit course in high school. 
            </p>
            <p>
              Developing a web game with 9 interactive modules using Unity(WebGL), integrated with Angular and .NET
              framework. Added Google SSO, OAuth 2.0, and Firebase phone authentication for secure access. Deployed modules
              on AWS S3 with CloudFront for static hosting. The modules are now being utilized as part of a single-credit high
              school course.
            </p>
          </div>
        </div>

        {/* Company 2 */}
        <div className={styles.experienceItem}>
          <div className={styles.logoAndTitle}>
            <img
              src="/infosys.png"
              alt="Infosys Limited"
              className={styles.companyLogo}
            />
            <div>
              <h3>Digital Specialist Engineer</h3>
              <h4>Infosys Limited</h4>
            </div>
          </div>
          <div className={styles.experienceContent}>
            <h5><b>Hyderabad, India | August 2021 - July 2023</b></h5>
            <p>
            Developed full-stack web applications using ASP.NET Core, C#, Angular, JavaScript, and SQL Server,
            contributing to 8 major and 2 minor releases for a leading Canadian Insurance/Mortgage firm.
            </p>
            <p>
            Applied Factory Design Pattern to create modular, reusable components, enhancing maintainability and scalability
            across the application and configured CI/CD pipelines in Azure DevOps, utilizing Azure Pipelines and YAML
            </p>
            <p>
            Established NPS payment gateway in the application using technologies such as Stripe and RESTful APIs, allowing
            secure and efficient processing of multiple payment methods (cheque, wire, electronic), which elevated transaction
            speed and reduced payment errors by 25%
            </p>
          </div>
        </div>

        {/* Company 3 */}
        <div className={styles.experienceItem}>
          <div className={styles.logoAndTitle}>
            <img
              src="/uc_logo.png"
              alt="University of Cincinnati"
              className={styles.companyLogo}
            />
            <div>
              <h3>Front Desk Assistant</h3>
              <h4>University of Cincinnati</h4>
            </div>
          </div>
          <div className={styles.experienceContent}>
            <h5><b>Cincinnati, OH | January 2024 - Present</b></h5>
            <p>
            Created personalized post-event feedback surveys in Qualtrics using branching logic and piped text. Automated
            synchronization between StarRez and SIS for real-time updates on student records and housing assignments.
            </p>
          </div>
        </div>

        {/* Company 4 */}
        <div className={styles.experienceItem}>
          <div className={styles.logoAndTitle}>
            <img
              src="/cognizant.jpeg"
              alt="Cognizant Technology Solutions"
              className={styles.companyLogo}
            />
            <div>
              <h3>Program Analyst</h3>
              <h4>Cognizant Technology Solutions</h4>
            </div>
          </div>
          <div className={styles.experienceContent}>
            <h5><b>Hyderabad, India | March 2021 - August 2021</b></h5>
            <p>
            Utilized SSIS, SSRS, and SSAS to optimize ETL workflows, reducing data processing time by 40%, crafted OLAP
            cubes for in-depth multidimensional analysis, while using Azure Data Factory for cloud-based ETL solutions.
            </p>
            <p>
            Designed interactive Power BI dashboards with custom KPIs using DAX, providing stakeholders with real-time
            insights and data-driven recommendations that improved decision-making speed by 30%.
            </p>
          </div>
        </div>

        {/* Company 5 */}
        <div className={styles.experienceItem}>
          <div className={styles.logoAndTitle}>
            <img
              src="/mitraya.jpeg"
              alt="Mitraya Infologic Services"
              className={styles.companyLogo}
            />
            <div>
              <h3>Freelance Software Developer</h3>
              <h4>Mitraya Infologic Services</h4>
            </div>
          </div>
          <div className={styles.experienceContent}>
            <h5><b>Visakhapatnam, India | Aug 2019 - March 2021</b></h5>
            <p>
            Configured scalable RESTful APIs and microservices using Java, Spring Boot, and Hibernate, integrating with a
            PostgreSQL database, reducing response time by 40%.
            </p>
            <p>
            Incorporated Spring Security and OAuth 2.0 for authentication, Redis for distributed caching, and RabbitMQ for
            asynchronous messaging, while automating CI/CD pipelines with Jenkins and Docker.
            </p>
          </div>
        </div>

      </div>
    </section>
  </>
  );
};

export default Home;
