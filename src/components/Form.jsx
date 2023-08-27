import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdorgjwp");

  if (state.succeeded) {
    return <p>Your message was sent successfully!</p>;
  }

  return (
    <div className="contact-container">
      <h1>Contact Me:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Your message:</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
