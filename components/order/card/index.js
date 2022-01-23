export default function Card() {
  return (
    <div className="container">
      <div className="contact_message form">
        <h3>Tell us your project</h3>
        <form
          id="contact-form"
          method="POST"
          action="https://template.hasthemes.com/braga/braga/assets/mail.php"
        >
          <p>
            <label> Your Name (required)</label>
            <input name="name" placeholder="Name *" type="text" />
          </p>
          <p>
            <label> Your Email (required)</label>
            <input name="email" placeholder="Email *" type="email" />
          </p>
          <p>
            <label> Subject</label>
            <input name="subject" placeholder="Subject *" type="text" />
          </p>
          <div className="contact_textarea">
            <label> Your Message</label>
            <textarea
              placeholder="Message *"
              name="message"
              className="form-control2"
              defaultValue={""}
            />
          </div>
          <button type="submit"> Send</button>
          <p className="form-messege" />
        </form>
      </div>
    </div>
  );
}