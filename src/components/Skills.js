import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const skillsData = [
  {
    title: "Languages",
    icon: "fas fa-code",
    color: "#0ea5e9",
    description: "Robust, scalable solutions in modern and classic programming languages.",
    items: ["C#", "Python", "Java", "C", "C++", "SQL", "TypeScript", "JavaScript", "ShellScript", "MATLAB", "HTML5", "CSS"],
    detailHeading: "Skills Used At",
    detail: "I have 5+ years of professional working experience in developing applications in these languages. I have built application for Fintech and Insurance domains in C#, C++, Java and a investigative and case management application in Python, and the rest for database and UI/UX development."
  },
  {
    title: "Databases",
    icon: "fas fa-database",
    color: "#16a34a",
    description: "Experienced with both relational and NoSQL data systems.",
    items: ["DynamoDB", "AWS RDS", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "MongoDB", "CouchDB", "Redis"],
    detailHeading: "Skills Used At",
    detail: "I developed and maintained normalized database schemas, wrote complex SQL queries, stored procedures, and triggers for data integrity and performance in MySQL, PostgreSQL, Oracle, SQL Serve. Implemented automated backups, replication, and performance tuning for AWS RDS and DynamoDB in production environments."
  },
  {
    title: "Frameworks",
    icon: "fas fa-cubes",
    color: "#9333ea",
    description: "Built powerful apps using modern frameworks and libraries.",
    items: ["Angular", ".NET", "React", "Node.js", "Spring Boot", "Django", "FastAPI", "JUnit", "Material-UI", "Bootstrap"],
    detailHeading: "Skills Used At",
    detail: "I developed scalable applications using Angular, React, and .NET with component-based architecture and built secure RESTful APIs and microservices with Node.js, Spring Boot, Django, and FastAPI, and implemented automated testing and CI/CD integration."
  },
  {
    title: "Cloud & Infrastructure",
    icon: "fas fa-cloud",
    color: "#2563eb",
    description: "Deploying, scaling, and maintaining apps in cloud-native environments.",
    items: ["Jenkins", "TFS", "Nginx", "IIS", "Docker", "Apache Tomcat", "Azure", "AWS"],
    detailHeading: "Skills Used At",
    detail: "I implemented CI/CD pipelines with Jenkins and TFS for automated deployments, managed Dockerized applications, and configured Nginx, IIS, and Tomcat for secure web hosting. Deployed scalable infrastructure on Azure and AWS with automated monitoring and load balancing."
  },
  {
    title: "Machine Learning",
    icon: "fas fa-robot",
    color: "#f59e0b",
    description: "End-to-end ML pipelines with industry-standard libraries.",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy"],
    detailHeading: "Skills Used At",
    detail: "I have developed and deployed end-to-end machine learning pipelines using TensorFlow, PyTorch, and Keras for tasks such as image classification, NLP, and predictive analytics. Leveraging scikit-learn and SciPy, I implemented feature engineering, model selection, and hyperparameter tuning for production-grade models. For data preprocessing and analysis, I utilized Pandas and NumPy, while Matplotlib and Seaborn were used to visualize complex datasets and model performance. These tools were integral in projects like building a real-time fraud detection system, developing sentiment analysis models, and creating interactive dashboards for business intelligence."
  },
  {
    title: "Version Control & Agile",
    icon: "fas fa-project-diagram",
    color: "#ef4444",
    description: "Version control and collaborative workflows with Agile practices.",
    items: ["TFVC", "Git", "JIRA", "Azure DevOps"],
    detailHeading: "Skills Used At",
    detail: "I have managed source code using Git, TFVC, and Azure DevOps, implementing advanced branching strategies and integrating automated CI/CD pipelines for continuous delivery. I utilized JIRA and Azure Boards for Agile sprint planning, issue tracking, and release management, and enforced code review workflows to maintain high code quality and team collaboration."
  }
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [flippedIdx, setFlippedIdx] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = idx => {
    setFlippedIdx(flippedIdx === idx ? null : idx);
  };

  return (
    <section id="skills" className={styles.skills}>
      <h2><i className="fas fa-gears"></i> Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, idx) => (
          <div
            key={idx}
            className={styles.flipCard}
            onClick={() => handleCardClick(idx)}
          >
            <div
              className={`${styles.flipCardInner} ${mounted ? styles.animateIn : ""} ${(flippedIdx === idx) ? styles.flipped : ""}`}
              style={{ borderColor: skill.color }}
            >
              <div className={styles.flipCardFront}>
                <h3 style={{ color: skill.color }}>
                  <i className={skill.icon}></i> {skill.title}
                </h3>
                <p className={styles.skillDesc}>{skill.description}</p>
                <ul>
                  {skill.items.map((item, i) => (
                    <li key={i}><i className="fas fa-check-circle"></i> {item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.flipCardBack}>
                <div>
                  <h3 className={styles.detailHeading}>{skill.detailHeading}</h3>
                  <p>{skill.detail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
