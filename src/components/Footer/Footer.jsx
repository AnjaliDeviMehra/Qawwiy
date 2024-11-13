import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.jpg";
import phone from "../../assets/icons/call.png";
import email from "../../assets/icons/email.png";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer__section-one">
        <img src={logo} alt="logo" className="footer__logo" />
        <p className="footer__tagline">
          We work with a passion of taking challenges and creating new ones in
          advertising sector.
        </p>
      </section>

      <section className="contact">
        <p className="contact__heading">Contact</p>
        <div className="contact__container">
          <img src={phone} alt="" className="contact__icon" />
          <p className="contact__text">+1-204-295-2954</p>
        </div>
        <div className="contact__container">
          <img src={email} alt="" className="contact__icon" />
          <p className="contact__text">contact@alqawwiy.com</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
