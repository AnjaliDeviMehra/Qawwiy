import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import "animate.css";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import dash from "../../assets/icons/dash.png";
import check from "../../assets/icons/check.png";
import office1 from "../../assets/images/office1.jpg";
import office2 from "../../assets/images/office2.jpg";
import womenworking from "../../assets/images/womenworking.jpg";
import product from "../../assets/icons/product.png";
import women from "../../assets/images/women.jpg";
import background from "../../assets/images/background.jpg";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";

import checkwhite from "../../assets/icons/checkwhite.png";
import Contact from "../Contact/Contact";
const HomePage = () => {
  return (
    <>
      <section className="hero ">
        <div className="hero__overlay">
          <div className="hero__heading-section  hero__heading   ">
            <p className="hero__tagline animate__animated animate__flash  animate__delay-1s	1s">
              Experience The Best IT Solutions
            </p>

            <h1 className="hero__heading animate__animated animate__flash  animate__delay-1s	1s">
              IT SOLUTIONS <span className="hero__and">&</span>{" "}
            </h1>

            <h1 className="hero__heading animate__animated animate__flash animate__delay-1s	1s ">
              SERVICES
            </h1>
            <HashLink
              to="/#about"
              className="hero__link  animate__animated animate__flash animate__delay-1s	1s"
            >
              LEARN MORE
            </HashLink>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about__section-one">
          <img src={about2} alt="about image" className="about__image-two" />
          <img src={about1} alt="about image" className="about__image-one" />
        </div>

        <div className="about__section-two">
          <div className="about__heading-container">
            <img src={dash} alt="dash icon" className="about__dash" />
            <p className="about__subheading">About Us</p>
          </div>

          <h2 className="about__heading">We're Partner of Your Innovations</h2>
          <p className="about__description">
            Qawwiy IT services is a provider of IT consulting and software
            development services. We have helped organizations and companies
            improve business performance & enhance their competitiveness.
          </p>

          <ul className="about__list">
            <li className="about__list-item">
              <img src={check} alt="check icon" className="about__check" />
              <p className="about__point">
                Bringing new IT solutions to the market
              </p>
            </li>
            <li className="about__list-item">
              <img src={check} alt="check icon" className="about__check" />
              <p className="about__point">
                Lorem, ipsum dolor sit amet consectetur{" "}
              </p>
            </li>
            <li className="about__list-item">
              <img src={check} alt="check icon" className="about__check" />
              <p className="about__point">
                Lorem, ipsum dolor sit amet consectetur{" "}
              </p>
            </li>
          </ul>

          <HashLink to="/#services" className="about__link">
            LEARN MORE
          </HashLink>
        </div>
      </section>

      <section className="taglines">
        <div className="taglines__section">
          <img src={office1} alt="office image" className="taglines__image" />
          <div className="taglines__card">
            <p className="taglines__text">
              Perfect solutions that business demands
            </p>
          </div>
        </div>
        <div className="taglines__section">
          <img src={womenworking} alt="" className="taglines__image" />
          <div className="taglines__card">
            <p className="taglines__text">
              Providing excellent technology solutions
            </p>
          </div>
        </div>
        <div className="taglines__section">
          <img src={office2} alt="" className="taglines__image" />
          <div className="taglines__overlay">
            <p className="taglines__text">
              We eagerly put in use new IT innovations
            </p>
          </div>
        </div>
      </section>

      <section className="offering" id="services">
        <h3 className="offering__subheading">
          <img
            src={dash}
            alt="dash icon"
            className="offering__subheading--dash"
          />

          <p className="offering__subheading--text"> What We're Offering</p>
        </h3>

        <h2 className="offering__heading">
          Dealing in all Professional IT Services
        </h2>

        <p className="offering__description">
          We offers a full-cycle software development services that meet varied
          business requirements from IT strategy consulting to the end-to-end
          development of scalable solutions.
        </p>

        <section className="service-section">
          <div className="service-card">
            <div className="service-card__icon-container">
              <img
                src={product}
                alt="service icon"
                className="service-card__icon"
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__heading">Web Development</h3>
              <p className="service-card__description">
                End-to-end web development from design to deployment
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon-container">
              <img
                src={product}
                alt="service icon"
                className="service-card__icon"
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__heading">Cloud Support</h3>
              <p className="service-card__description">
                Reliable cloud support tailored to your operational needs
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon-container">
              <img
                src={product}
                alt="service icon"
                className="service-card__icon"
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__heading">Cloud Security</h3>
              <p className="service-card__description">
                Ensuring data integrity and security in the cloud
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon-container">
              <img
                src={product}
                alt="service icon"
                className="service-card__icon"
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__heading">27/7 Technical Support</h3>
              <p className="service-card__description">
                Expert assistance for seamless issue resolution
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon-container">
              <img
                src={product}
                alt="service icon"
                className="service-card__icon"
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__heading">Product Development</h3>
              <p className="service-card__description">
                Providing the best IT solutions for non-IT businesses.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="bullet-points">
        <div className="bullet-points__overlay">
          <img src={women} alt="" className="bullet-points__image" />
          <div className="bullet-points___section-one">
            <h1 className="bullet-points__heading">
              We’re Ready To Develop Your Site!
            </h1>
            <div className="bullet-points___section-two">
              <ul className="bullet-points___list">
                <li className="bullet-points__list-item">
                  <img
                    src={checkwhite}
                    alt=""
                    className="bullet-points__check"
                  />
                  <p className="bullet-points__point">
                    IT solutions are created by top experts
                  </p>
                </li>
                <li className="bullet-points__list-item">
                  <img
                    src={checkwhite}
                    alt=""
                    className="bullet-points__check"
                  />
                  <p className="bullet-points__point">
                    Receive free consultation for any kind of IT solutions
                  </p>
                </li>
                <li className="bullet-points__list-item">
                  <img
                    src={checkwhite}
                    alt=""
                    className="bullet-points__check"
                  />
                  <p className="bullet-points__point">
                    Support 24/7 for partners during the process
                  </p>
                </li>
              </ul>
              <Link></Link>
            </div>
          </div>
        </div>
      </section>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
