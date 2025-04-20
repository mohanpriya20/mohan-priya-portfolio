import styles from "../styles/Home.module.css";

const Education = () => {
    return (
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
    );
};

export default Education;