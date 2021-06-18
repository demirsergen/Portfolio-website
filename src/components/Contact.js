import '../styles.css';
import image from '../static/images/contact.svg';

const Contact = () => {
    return (
        <div className="contactOuterContainer">
            <div className="contactContainer">
            <form name="contact" method="post" netlify action="/contact">
            <input type="hidden" name="form-name" value="contact"></input>
            <div className="formSection">
               <label>Your Name:  </label>  
               <input type="text" name="name" />
            </div>
            <div className="formSection">
               <label>Your Email:  </label>  
               <input type="email" name="email" />
            </div>
            <div className="formSection">
               <label>Subject: </label>  
               <input type="text" name="subject" />
            </div>
            <div className="formSection">
               <label>Message: </label>  
                <textarea name="message" cols="29" rows="5"></textarea>
            </div>
                <button type="submit">Submit</button>
            </form>
                <div className="contactImageContainer">
                    <img src={image} alt="" />
                    <a href="https://storyset.com/idea">illustration Source</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
