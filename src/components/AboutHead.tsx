import cv_file from "../files/cv_luca_nyckees.pdf";
import profile_pic from "../images/Asina.jfif";

function MailButton(icon: string) {
  return (
    <>
      <a target="_blank">
        <button
          type="button"
          className={icon}
          onClick={() =>
            (window.location.href = "mailto:luca.nyckees99@gmail.com")
          }
        ></button>
      </a>
    </>
  );
}

function MediaButton(href: string, icon: string) {
  return (
    <>
      <a href={href} target="_blank">
        <button type="button" className={icon}></button>
      </a>
    </>
  );
}

function MediaButtonBlocked(href: string, icon: string) {
  return (
    <>
      <a>
        <button type="button" className={icon} id="media-btn-blocked"></button>
      </a>
    </>
  );
}

function AboutHead() {
  return (
    <>
      <div className="about-section-header">
        <h1>ABOUT</h1>
        <h2>Profile and work experience</h2>
      </div>
      <div className="about-container">
        <div className="about-image-and-buttons">
          <div className="about-image">
            <img src={profile_pic} id="profileImage"></img>
          </div>
          <div id="aboutButtons">
            <a href={cv_file} target="_blank" id="cv-button">
              <button type="button">CV</button>
            </a>
            <a href="https://www.linkedin.com/in/heriniaina-ramasinarivo-b94866164/" target="_blank">
              <button type="button" className="fa fa-linkedin"></button>
            </a>
            <a href="https://github.com/AsinaRaoelison" target="_blank">
              <button type="button" className="fa fa-github"></button>
            </a>
          </div>
        </div>

        <p className="about-description">
          Hey there, I'm Asina Raoelison. I am a data scientist, mathematician and software enthusiast.
          <br></br>
          <br></br>
          xsdbnm'ffmn
          <br></br>
          <br></br>
          I hold both a Bachelor's and Master's degree in Mathematics from EPFL. My academic focus included statistical data analysis, topological data analysis, and statistical machine learning, equipping me with the analytical skills necessary for tackling complex data challenges.
          In parallel to my studies, I worked for the Laboratory of Topology and Neuroscience at EPFL on data science projects.
        </p>
      </div>
    </>
  );
}

export { AboutHead, MediaButton, MailButton, MediaButtonBlocked };
