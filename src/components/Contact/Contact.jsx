import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jemaxmars",
      icon: "/githubIcon.png",
      description: "View my code repositories",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jemaxmars/",
      icon: "/linkedIcon.svg",
      description: "Connect with me professionally",
    },
    {
      name: "Medium",
      url: "https://medium.com/@coded_by_jessi",
      icon: "/mediumIcon.png",
      description: "Read my articles",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jemaxmars",
      icon: "/twitIcon.png",
      description: "Follow me on Twitter",
    },
  ];

  return (
    <div className="contact">
      <div className="contact__container">
        <h1>Contact Me</h1>
        <p className="contact__intro">
          Get in touch! I'd love to hear from you.
        </p>

        <div className="contact__links">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <div className="contact__icon">
                <img src={link.icon} alt={`${link.name} icon`} />
              </div>
              <div className="contact__link-content">
                <h3 className="contact__link-name">{link.name}</h3>
                <p className="contact__link-description">{link.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="contact__form-section">
          <h2 className="contact__form-title">Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
