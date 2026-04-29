import { useState } from "react";

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section className="section">
      <div className="page-heading narrow">
        <p className="eyebrow">Reach out</p>
        <h1>Contact Us</h1>
        <p>
          Questions about stock, shipping, or custom sourcing? Send a message and the
          team will get back to you within one business day.
        </p>
      </div>

      <div className="contact-layout">
        <form className="contact-card" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Subject
            <input type="text" placeholder="How can we help?" />
          </label>
          <label>
            Message
            <textarea rows="6" placeholder="Write your message here" />
          </label>
          <button type="submit" className="primary-button">
            Send message
          </button>
          {isSubmitted && (
            <p className="form-success">
              Thanks for reaching out. This demo form is ready for a real backend next.
            </p>
          )}
        </form>

        <div className="contact-details">
          <article className="about-card">
            <h2>Studio</h2>
            <p>145 Market Studio, Johannesburg</p>
          </article>
          <article className="about-card">
            <h2>Email</h2>
            <p>hello@northstargoods.com</p>
          </article>
          <article className="about-card">
            <h2>Call us</h2>
            <p>+27 11 555 0188</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;