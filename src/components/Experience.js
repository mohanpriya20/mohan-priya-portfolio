import styles from "../styles/Home.module.css";

const Experience = () => {
    return (
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
    );
};

export default Experience;