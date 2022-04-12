import "../styles.css";
import { useEffect } from "react";
import {
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialTwitter,
} from "react-icons/ti";
import image from "../static/images/contact.svg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contactOuterContainer">
      <h1 className="contactTitle">Contact Form</h1>
      <div className="contactContainer">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact"></input>
          <div className="formSection">
            <label>First Name: </label>
            <input type="text" name="firstname" required />
          </div>
          <div className="formSection">
            <label>Last Name: </label>
            <input type="text" name="lastname" required />
          </div>
          <div className="formSection">
            <label>E-mail: </label>
            <input type="email" name="email" required />
          </div>
          <div className="formSection">
            <label>Message: </label>
            <textarea name="message" cols="20" rows="5" required></textarea>
          </div>
          <button type="submit" >Submit</button>
        </form>
        <div className="contactImageContainer">
          <img src={image} alt="" />
          <a href="https://storyset.com/idea">illustration Source</a>
        </div>
      </div>
      <div className="contactPageNoteContainer">
        <p>
          <strong>Note:</strong> The fastest way to reach me would probably be
          messaging me on social media! Please do not hesitate to say hi!{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
