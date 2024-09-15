import { MediaButton } from "./AboutHead";
import { MailButton } from "./AboutHead";

function Contact() {
  return (
    <>
      <div
        className="contactMe"
        style={{
          width: "100%",
          marginBottom: "60px",
        }}
      >
        <div id="contactButtons">
          {MailButton("fa fa-envelope")}
          {MediaButton("https://www.linkedin.com/in/heriniaina-ramasinarivo-b94866164/", "fa fa-linkedin")}
          {MediaButton("https://github.com/AsinaRaoelison", "fa fa-github")}
        </div>
      </div>
    </>
  );
}

export default Contact;
