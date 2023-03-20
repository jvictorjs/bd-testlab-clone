import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-col">
          <a href="https://bairesdev.com/" target="_blank">
            BairesDev®
          </a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer-content-col">
          <div className="social">
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/bairesdev" target="_blank">
                <LinkedIn className="social-icon" />
              </a>
              <a href="https://www.facebook.com/bairesdev/" target="_blank">
                <Facebook className="social-icon" />
              </a>
              <a href="https://twitter.com/bairesdev" target="_blank">
                <Twitter className="social-icon" />
              </a>
              <a href="https://www.instagram.com/bairesdev/" target="_blank">
                <Instagram className="social-icon" />
              </a>
              <a href="http://www.youtube.com/BairesDevSolutions" target="_blank">
                <YouTube className="social-icon" />
              </a>
            </div>
            <p>
              Need help? Please send a message to <a href="mailto:jobs@bairesdev.com">jobs@bairesdev.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
