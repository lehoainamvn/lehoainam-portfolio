import { MdArrowOutward, MdCopyright, MdFileDownload } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:naml75803@gmail.com" data-cursor="disable">
                naml75803@gmail.com
              </a>
            </p>
            <h4>Phone / Zalo</h4>
            <p>
              <a href="tel:+84937712338" data-cursor="disable">
                +84 937 712 338
              </a>
            </p>
            <h4>Location</h4>
            <p style={{ color: "#aaa", fontSize: "0.95rem" }}>
              Ho Chi Minh City, Vietnam
            </p>
          </div>

          <div className="contact-box">
            <h4>Social & CV</h4>
            <a
              href="https://github.com/lehoainamvn"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/lehoainamvn/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://zalo.me/0937712338"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Zalo (+84 937 712 338) <MdArrowOutward />
            </a>
            <a
              href="/LeHoaiNam_IT.pdf"
              download="LeHoaiNam_IT.pdf"
              data-cursor="disable"
              className="contact-social"
              style={{ color: "var(--accentColor)" }}
            >
              Download Curriculum Vitae (PDF) <MdFileDownload />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Software Engineer Portfolio <br /> by <span>LE HOAI NAM</span>
            </h2>
            <h5 style={{ marginTop: "1rem", color: "#aaa", fontSize: "0.85rem" }}>
              <MdCopyright /> {new Date().getFullYear()} LE HOAI NAM. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
