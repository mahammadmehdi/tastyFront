import React from "react";
import "./index.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div className="top">
          <div className="tasty">
            <h3>Tasty</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="opening">
            <h3>Opening Hours</h3>
            <ul>
              <li>Monday-08:00-22:00</li>
              <li>Tuesday-08:00-22:00</li>
              <li>Wednesday-08:00-22:00</li>
              <li>Thursday-08:00-22:00</li>
              <li>Friday-08:00-22:00</li>
              <li>Saturday-08:00-22:00</li>
              <li>Sunday-08:00-22:00</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact Information</h3>
            <div className="street">198 West 21th Street, Suite 721 New York NY 10016</div>
            <div className="number">+23424523524</div>
            <div className="email">email@gmail.com</div>
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>ar far away, behind the word mountains, far from the countries</p>
            <div className="input"><input type="text" placeholder="Subscribe" /> <i className="fa-brands fa-telegram"></i> </div>
          </div>
        </div>
        <div className="bottom">
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </div>
      </div>
    </div>
  );
}

export default Footer;
