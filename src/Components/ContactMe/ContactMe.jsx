import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-container" id="contact">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="../../../public/Asserts/email.png"
            text="shaikmuhammed2192000@gmail.com"
          />
          <ContactInfoCard
            iconUrl="../../../public/Asserts/github.png"
            text="https://https://github.com/shaikmuhammed5"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
