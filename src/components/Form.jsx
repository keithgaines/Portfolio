import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdorgjwp");

  if (state.succeeded) {
    return (
      <section className="contact-container">
        <div className="contact-card">
          <p className="section-eyebrow">Message Sent</p>
          <h2>Thanks for reaching out.</h2>
          <p>I received your message and will follow up as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-container">
      <div className="contact-card">
        <div className="section-heading">
          <p className="section-eyebrow">Contact</p>

          <h2>Let’s connect.</h2>

          <p className="section-description">
            Have a role, project, or engineering problem worth discussing? Send
            a message and I’ll follow up.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me what you’d like to discuss."
              required
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
