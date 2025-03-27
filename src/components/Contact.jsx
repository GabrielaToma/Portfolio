import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [buttonState, setButtonState] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mldjllwz", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      setStatus("Your message was delivered!");
      form.reset();
      setButtonState(true);
    } else {
      setStatus("Something went wrong, please try again later.");
    }
  };

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
          <button type="submit" className={buttonState && "messageSent"}>
            {buttonState ? "Message sent!" : "Send message"}
          </button>
          <p className="emailResponse">{status}</p>
        </form>
      </div>
    </main>
  );
}
