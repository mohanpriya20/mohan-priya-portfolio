import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "../styles/Home.module.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });
    
      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            console.log("SUCCESS!", result.text);
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
            console.error("FAILED...", error.text);
            alert("Failed to send message. Try again later.");
        });
        };
    
      return (
        <section className={styles.contactBackground}>
            <div className={styles.contactWrapper}>
                <div className={styles.contact} id="contact">
                    <h2>
                        <i className="fas fa-message"></i> Contact Me
                    </h2>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                        <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                        <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        />
                        <button className={styles.submitButton} type="submit">Send Message</button>
                    </form>
                </div>
                <div className={styles.contactInfoCard}>
                    <h3><i className="fas fa-address-card"></i> Get in touch</h3>
                    <p><i className="fas fa-phone-alt"></i> +1 (513) 615-1294 </p>
                    <p><i className="fas fa-envelope"></i> mohanpriyamulagapu@gmail.com</p>
                    <p>
                    <i className="fab fa-github"></i> <a href="https://github.com/mohanpriya20" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                    <p>
                    <i className="fab fa-linkedin"></i> <a href="https://linkedin.com/in/mohan-priya-mulagapu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Contact;