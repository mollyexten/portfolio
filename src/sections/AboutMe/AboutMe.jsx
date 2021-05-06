import "./AboutMe.css";

export default function AboutMe({ windowDimension }) {
  
  const downloadFile = () => {
    window.location.href = "https://drive.google.com/file/d/1vZQORmskiYkhHhFr6h7Ti01gmHmcvEHy/view?usp=sharing"
  }

  const isDesktop = windowDimension >= 1200;
  
  return (
    <section className="about-section">
      <h2>
        <span id="about-me"> &nbsp; </span>
        About me
      </h2>
        {isDesktop ? (
          <div className="about-container-desktop">
            <div className="desktop-nested">
              <p className="about-description">
                My passion for coding stems from my lifelong love of languages, and, through my background in teaching, I have gained valuable experience working in diverse settings and listening to others. I apply a thorough, reflective, and creative approach to my projects and thrive in collaborative work environments. I recently completed a three-month bootcamp in software engineering and hope to bring my skills in communication, organization, and problem-solving to work!
              </p>
              <div className="about-details">
                <button
                  onClick={downloadFile}
                  className="resume-button"
                >
                  download resume
                </button>
                <h4 className="tech-stack">Tech Stack:</h4>
                <p className="tech-stack">HTML | CSS | Javascript | React | Express | MongoDB | Ruby | Rails | Python | PostgreSQL </p>
              </div>
            </div>
            <img
              src="/assets/portfolio-photo.jpg"
              alt="molly exten"
              className="profile-pic"
            />
          </div>
      ) : (
        <div className="about-container-mobile-tablet">
          <p className="about-description">
              My passion for coding stems from my lifelong love of languages, and, through my background in teaching, I have gained valuable experience working in diverse environments and listening to others. I apply a thorough, reflective, and creative approach to my projects and thrive in collaborative work environments. I recently completed a three-month bootcamp in software engineering and hope to bring my skills in communication, organization, and problem-solving to work!
          </p>
          <div className="mobile-tablet-nested">
            <div className="about-details">
              <button
                onClick={downloadFile}
                className="resume-button"
              >
                download resume
              </button>
              <h4 className="tech-stack">Tech Stack:</h4>
              <p className="tech-stack">HTML | CSS | Javascript | React | Express | MongoDB | Ruby | Rails | Python | PostgreSQL </p>
            </div>
            <img
              src="/assets/portfolio-photo.jpg"
              alt="molly exten"
              className="profile-pic"
            />
          </div>
        </div>
      )}
    </section>
  )
}