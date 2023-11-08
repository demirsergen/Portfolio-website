import '../styles.css';
import { useEffect } from 'react';
import {
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialTwitter,
} from 'react-icons/ti';
import image from '../static/images/contact.svg';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contactOuterContainer">
      <h1 className="contactTitle">Contact</h1>
      <div className="contactContainer">
        <form name="contact" method="post">
          <input
            type="hidden"
            name="form-name"
            value="contact"
          ></input>
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
            <textarea
              name="message"
              cols="20"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contactImageContainer">
          <img src={image} alt="" />
          <a href="https://storyset.com/idea">illustration Source</a>
        </div>
      </div>
      <div className="contactPageNoteContainer">
        <p>
          <strong>Note:</strong> The fastest way to reach me is via
          social media! Let's connect!
        </p>
        <div className="contactIconContainer">
          <a
            href="https://www.linkedin.com/in/sergendemir/"
            rel="noreferrer"
            target="_blank"
          >
            <TiSocialLinkedin className="contact-icon" />
          </a>
          <a
            href="https://github.com/demirsergen"
            rel="noreferrer"
            target="_blank"
          >
            <TiSocialGithub className="contact-icon" />
          </a>
          <a
            href="https://twitter.com/sergenddemir"
            rel="noreferrer"
            target="_blank"
          >
            <TiSocialTwitter className="contact-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
