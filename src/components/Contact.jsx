import { useState } from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [state, handleSubmit] = useForm("mldjllwz");
  if (state.succeeded) {
    return <p>thanks</p>;
  }

  return (
    <main className="mainContact">
      <div className="contact">
        <h2>Get in touch</h2>
        <p>
          I'm open for opportunities, so I'm looking forward to your message!{" "}
        </p>
        <form onSubmit={handleSubmit} className="contactForm">
          <div className="form-1">
            <label>
              NAME
              <input
                type="text"
                name="name"
                placeholder="Hannah Montana"
                required
              ></input>
            </label>
            <label>
              EMAIL
              <input
                type="text"
                name="email"
                placeholder="youremail@gmail.com"
                required
              ></input>
            </label>
            <label>
              SUBJECT
              <input
                type="text"
                name="subject"
                placeholder="News about Miley"
              ></input>
            </label>
          </div>
          <textarea
            aria-label="Message"
            type="textarea"
            placeholder="Write you message here..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send message</button>
          <p>{status}</p>
        </form>
      </div>
    </main>
  );
}
