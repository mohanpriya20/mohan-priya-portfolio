import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsExpanded(false);
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
        <Link href="/" className={styles.logo}>
          <h1>Mohan Priya Mulagapu</h1>
        </Link>
        <div className={styles.hamburger} onClick={toggleNavbar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={styles.menu} onClick={closeNavbar}>
          <li><Link href="#home">About</Link></li>
          <li><Link href="#education">Education</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#contact">Contact Me</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
