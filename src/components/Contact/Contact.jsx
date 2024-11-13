import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    contactMethod: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_q58gz7o",
        "template_zf7gzpj",
        formData,
        "Yr87DZ3_YGGPwWaqs"
      )
      .then((result) => {
        alert("Email successfully sent!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          contactMethod: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-form__heading">Feel Free to Contact Us</h1>
        <div className="contact-form__input-container">
          <label className="contact-form__label">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="contact-form__input"
          />
        </div>
        <div className="contact-form__input-container">
          <label className="contact-form__label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="contact-form__input"
          />
        </div>
        <div className="contact-form__input-container">
          <label className="contact-form__label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-form__input"
          />
        </div>
        <div className="contact-form__input-container">
          <label className="contact-form__label">Phone Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="contact-form__input"
          />
        </div>
        <div className="contact-form__input-container">
          <label className="contact-form__label">
            Preffered Contact Method:
          </label>
          <div className="contact-form__radio-container">
            <label className="contact-form__label">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === "email"}
                onChange={handleChange}
                className="contact-form__radio"
              />
              Email
            </label>
            <label className="contact-form__label contact-form__radio">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === "phone"}
                onChange={handleChange}
                className="contact-form__radio"
              />
              Phone
            </label>
          </div>
        </div>
        <div className="contact-form__input-container  contact-form__message">
          <label className="contact-form__label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="8"
            columns="5"
            className="contact-form__message-input"
          />
        </div>
        <button type="submit" className="contact-form__submit">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Contact;
