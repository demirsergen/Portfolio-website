import '../styles.css';
import image from '../static/images/contact.svg';

const Contact = () => {
    return (
        <div className="contactOuterContainer">
            <div className="contactContainer">
            <form name="contact" method="POST" action="/success">
            <input type="hidden" name="form-name" value="contact"></input>
            <div className="formSection">
               <label>Your Name:  </label>  
               <input type="text" name="name" required/>
            </div>
            <div className="formSection">
               <label>Your Email:  </label>  
               <input  type="email" name="email" required/>
            </div>
            <div className="formSection">
               <label>Subject: </label>  
               <input type="text" name="subject" required/>
            </div>
            <div className="formSection">
               <label>Message: </label>  
                <textarea name="message" cols="20" rows="5" required></textarea>
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
