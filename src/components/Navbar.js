import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded((prev) => !prev);
  };

  const closeNavbar = (event) => {
    event.preventDefault();
    setIsExpanded(false);
  
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsExpanded(false); // Close the menu when resizing to a large screen
      }
    };

    // Add event listener to close the menu when clicking outside
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.navbar}`)) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.container}>
        <Link href="#about" className={styles.logo}>
          <h1>Mohan Priya Mulagapu</h1>
        </Link>
        <div className={styles.hamburger} onClick={toggleNavbar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={styles.menu}>
          <li><a href="#about" onClick={closeNavbar}>About</a></li>
          <li><a href="#education" onClick={closeNavbar}>Education</a></li>
          <li><a href="#experience" onClick={closeNavbar}>Experience</a></li>
          <li><a href="#projects" onClick={closeNavbar}>Projects</a></li>
          <li><a href="#skills" onClick={closeNavbar}>Skills</a></li>
          <li><a href="#contact" onClick={closeNavbar}>Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
