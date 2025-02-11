import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Mohan Priya Mulagapu.Portfolio. All Rights Reserved.</p>
      <div className={styles.socials}>
        <a href="https://github.com/mohanpriya20" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/mohan-priya-mulagapu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
