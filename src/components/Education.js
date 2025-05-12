import { useState } from "react";
import styles from "../styles/Home.module.css";

const courseworkUC = [
  "Cloud Computing", 
  "Requirements Engineering", 
  "Operating Systems", 
  "Software Testing and QA", 
  "Advanced Algorithms", 
  "Advanced Database Management Systems",
  "Software Architecture"
];
const courseworkRaghu = [
  "Data Structures and Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Database Management Systems",
  "Software Engineering",
  "Object-Oriented Programming",
  "OOPS through C++",
  "Java Programming",
  "Python Programming",
  "C Programming",
  "Shell Scripting",
  "Advanced Computer Networks",
  "Advance Database Management Systems",
  "Advance Datastructures",
  "Design of Algorithms and Analysis",
  "Data Warehousing and Data Mining",
  "Distributed Systems",
  "Cryptography and Network Security",
  "Software Project Management",
  "Software Architecture and Design Patterns"
];

const Education = () => {
  const [cardState, setCardState] = useState([
    { paused: false, flipped: false },
    { paused: false, flipped: false }
  ]);

  return (
    <section className={styles.education} id="education">
      <h2>
        <i className="fas fa-graduation-cap"></i> Education
      </h2>
      <div>
        {/* University of Cincinnati */}
        <div className={`${styles.eduCard3DWrapper} ${styles.eduCard3DWrapperFirst}`}>
          <div
            className={
              `${styles.eduCard3D} ${cardState[0].paused ? styles.paused : ""} ${cardState[0].flipped ? styles.flipped : ""}`
            }
            onClick={() =>
              setCardState(state =>
                state.map((s, idx) =>
                  idx === 0 ? { ...s, paused: !s.paused } : s
                )
              )
            }
          >
            <div className={styles.eduCard3DInner}>
              {/* Front */}
              <div className={styles.eduCard3DFront}>
                <img
                  src="/uc.jpeg"
                  alt="University of Cincinnati"
                  className={styles.eduCard3DImage}
                />
                <div className={styles.eduCard3DContent}>
                  <div className={styles.eduCard3DTitleFront}>University of Cincinnati</div>
                  <p>
                    Graduted from the <b>University of Cincinnati</b> located in <b>Cincinnati, Ohio</b>, with a <b>Master of Engineering in Computer Science</b> degree in <b>May 2025</b>.
                  </p>
                    <div className={styles.eduCardButton}>
                        <span className={styles.eduCard3DBadge}>CGPA: 3.75/4.0</span>
                        <span className={styles.eduCard3DBadge}>2023–2025</span>
                        <button
                            className={styles.viewCourseworkBtn}
                            onClick={e => {
                            e.stopPropagation();
                            setCardState(state =>
                                state.map((s, idx) =>
                                idx === 0 ? { ...s, paused: true, flipped: true } : s
                                )
                            );
                            }}
                        >
                            <i className="fa-solid fa-book-open-reader"></i>
                        </button>
                    </div>
                </div>
              </div>
              {/* Back */}
              <div className={styles.eduCard3DBack}>
                <div className={styles.eduCard3DBackHeader}>
                  <div className={styles.eduCard3DTitleBack}>Coursework</div>
                  <button
                    className={styles.backBtn}
                    onClick={e => {
                      e.stopPropagation();
                      setCardState(state =>
                        state.map((s, idx) =>
                          idx === 0 ? { ...s, flipped: false, paused: false } : s
                        )
                      );
                    }}
                  >
                    <i className="fa-solid fa-rotate"></i>
                  </button>
                </div>
                <div className={styles.eduCard3DBackContent}>
                  <div className={styles.courseworkTags}>
                    {courseworkUC.map((c, i) => (
                      <span className={styles.courseworkTag} key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Raghu Engineering College */}
        <div className={styles.eduCard3DWrapper}>
          <div
            className={
              `${styles.eduCard3D} ${styles.reverse} ${cardState[1].paused ? styles.paused : ""} ${cardState[1].flipped ? styles.flipped : ""}`
            }
            onClick={() =>
              setCardState(state =>
                state.map((s, idx) =>
                  idx === 1 ? { ...s, paused: !s.paused } : s
                )
              )
            }
          >
            <div className={styles.eduCard3DInner}>
              {/* Front */}
              <div className={styles.eduCard3DFront}>
                <div className={styles.eduCard3DContent}>
                  <div className={styles.eduCard3DTitleFront}>Raghu Engineering College</div>
                  <p>
                    Completed <b>Bachelor of Technology in Computer Science and Engineering</b> at <b>Raghu Engineering College</b>, located in <b>Visakhapatnam, Andhra Pradesh, India</b>. Graduated in <b>July 2021</b>.
                  </p>
                  <div className={styles.eduCardButton}>
                    <span className={styles.eduCard3DBadge}>CGPA: 3.85/4.0</span>
                    <span className={styles.eduCard3DBadge}>2017–2021</span>
                    <button
                        className={styles.viewCourseworkBtn}
                        onClick={e => {
                        e.stopPropagation();
                        setCardState(state =>
                            state.map((s, idx) =>
                            idx === 1 ? { ...s, paused: true, flipped: true } : s
                            )
                        );
                        }}
                    >
                        <i className="fa-solid fa-book-open-reader"></i>
                    </button>
                  </div>
                </div>
                <img
                  src="/raghu.png"
                  alt="Raghu Engineering College"
                  className={styles.eduCard3DImage}
                />
              </div>
              {/* Back */}
              <div className={styles.eduCard3DBack}>
                <div className={styles.eduCard3DBackHeader}>
                  <div className={styles.eduCard3DTitleBack}>Coursework</div>
                  <button
                    className={styles.backBtn}
                    onClick={e => {
                      e.stopPropagation();
                      setCardState(state =>
                        state.map((s, idx) =>
                          idx === 1 ? { ...s, flipped: false, paused: false } : s
                        )
                      );
                    }}
                  >
                    <i className="fa-solid fa-rotate"></i>
                  </button>
                </div>
                <div className={styles.eduCard3DBackContent}>
                  <div className={styles.courseworkTags}>
                    {courseworkRaghu.map((c, i) => (
                      <span className={styles.courseworkTag} key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;