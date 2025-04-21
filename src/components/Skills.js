import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const skillsData = [
  {
    title: "Languages",
    icon: "fas fa-code",
    color: "#0ea5e9",
    description: "Robust, scalable solutions in modern and classic programming languages.",
    items: ["C#", "Python", "Java", "C", "C++", "SQL", "TypeScript", "JavaScript", "ShellScript", "MATLAB", "HTML5", "CSS"],
    detail: "5+ years in Python, C#, and SQL. Used across enterprise backend systems, automation tools, and web apps."
  },
  {
    title: "Databases",
    icon: "fas fa-database",
    color: "#16a34a",
    description: "Experienced with both relational and NoSQL data systems.",
    items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "MongoDB", "CouchDB", "Redis"],
    detail: "5+ years in Python, C#, and SQL. Used across enterprise backend systems, automation tools, and web apps."
  },
  {
    title: "Frameworks",
    icon: "fas fa-cubes",
    color: "#9333ea",
    description: "Built powerful apps using modern frameworks and libraries.",
    items: ["Angular", ".NET Core", "React", "Node.js", "Spring Boot", "Django", "FastAPI", "JUnit", "Material-UI", "Bootstrap"],
    detail: "5+ years in Python, C#, and SQL. Used across enterprise backend systems, automation tools, and web apps."
  },
  {
    title: "Cloud & Infrastructure",
    icon: "fas fa-cloud",
    color: "#2563eb",
    description: "Deploying, scaling, and maintaining apps in cloud-native environments.",
    items: ["Jenkins", "TFS", "Nginx", "IIS", "Docker", "Apache Tomcat", "Azure", "AWS"],
    detail: "5+ years in Python, C#, and SQL. Used across enterprise backend systems, automation tools, and web apps."
  },
  {
    title: "Machine Learning",
    icon: "fas fa-robot",
    color: "#f59e0b",
    description: "End-to-end ML pipelines with industry-standard libraries.",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy"],
    detail: "5+ years in Python, C#, and SQL. Used across enterprise backend systems, automation tools, and web apps."
  },
  {
    title: "Version Control & Agile",
    icon: "fas fa-project-diagram",
    color: "#ef4444",
    description: "Version control and collaborative workflows with Agile practices.",
    items: ["TFVC", "Git", "JIRA", "Azure DevOps"],
    detail: "5+ years in Python, C#, and SQL. Used across enterprise backend systems, automation tools, and web apps."
  }
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <h2><i className="fas fa-gears"></i> Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, idx) => (
          <div
            key={idx}
            className={`${styles.skillCard} ${mounted ? styles.animateIn : ""}`}
            style={{ borderColor: skill.color }}
          >
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
        ))}
      </div>
    </section>
  );
};

export default Skills;
