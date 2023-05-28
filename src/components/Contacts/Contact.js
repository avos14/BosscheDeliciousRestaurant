import React from "react";
import "./Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    alert ("Massage submitted, thank you :)")
  }
  return (
    <div className="Contact">
      <div className="contact-header">
        <h1>Neem contact op</h1>
      </div>
      <form on onSubmit={sendEmail}>
        <div className="contact-info">
          <input type="text" placeholder="Uw naam" name="Your Name" />
          <input type="email" placeholder="Uw email" name="Your Email" />
        </div>
        <input type="text" name="subject" id="subject" placeholder="Onderwerp" />
        <textarea rows="5" placeholder="Uw boodschap" name="Your Message" />
        <button className="btn">Verstuur</button>
      </form>
    </div>
  );
}

export default Contact;

