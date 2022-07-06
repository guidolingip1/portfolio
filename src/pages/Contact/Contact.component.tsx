import "./Contact.styles.css";
import { MdOutlineEmail } from "react-icons/md";

export const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container   contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>guidolingip1@gmail.com</h5>
            <a href="mailto:guidolingip1@gmail.com" target="_blank" rel="noopener noreferrer">
              Mail Us
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>guilherme.guidolin</h5>
            <a href="https://m.me/guilherme.guidolin" target="_blank" rel="noopener noreferrer">
              Message Us
            </a>
          </article>
        </div>
        <form action="https://formsubmit.co/855e315811bc054a1cd904cefb69fd4f" method="POST">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="youremail@email.com" />
          <textarea name="message" rows={7} placeholder="your message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
