import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <section className="footerlinks">
        <a href="">Home</a>|<a href="">Terms and Conditions</a>|
        <a href="">Privacy Policy</a>|<a href="">Collection statement</a>|
        <a href="">Help</a>|<a href="">Manage Account</a>
      </section>
      <section className="copyright">
        Copyright® 2023 DEMO Streaming. All Rights Reserved
      </section>
      <section className="socialapps">
        <div className="sociallinks">
          <a href="">
            <img src="/assets/social/facebook-white.svg" alt="Facebook" />
          </a>
          <a href="">
            <img src="/assets/social/twitter-white.svg" alt="Twitter" />
          </a>
          <a href="">
            <img src="/assets/social/instagram-white.svg" alt="Instagram" />
          </a>
        </div>
        <div className="applinks">
          <a href="">
            <img src="/assets/store/app-store.svg" alt="AppStore" />
          </a>
          <a href="">
            <img src="/assets/store/play-store.svg" alt="PlayStore" />
          </a>
          <a href="">
            <img src="/assets/store/windows-store.svg" alt="WindowsStore" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
