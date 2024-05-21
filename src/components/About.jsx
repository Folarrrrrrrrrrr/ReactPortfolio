import "../assets/style/styles.css";
import ProfileIcon from "../assets/images/User.jpeg";
const About = () => {
  return (
    <>
      <div id="about" className="section3">
        <h2 className="line-title">About Me</h2>
        <div className="sectionThreeContainer">
          <div className="firstRow">
            <div className="colOne">
              <img src={ProfileIcon} alt="" className="UserIcon" />
            </div>
            <div className="colTwo">
              <h2 className="subTitle">My profile</h2>
              <p className="profileSummary">
                {" "}
                I am a full-stack Software Developer, I posses a strong
                foundation in programming languages, frameworks and libraries
                such as C#, .Net Framwork, React Js(Typescript ,Javascript), Vue
                Js, Bootstrap, Html amongst others. I have built both Frontend
                and Backend projects in teams and personally and this has
                increased my problem-solving capabilities
              </p>
            </div>
          </div>
          <div className="subnavTitles">
            <div className="subtitles">
              <p
                className="subnavlinks active-subnavlink"
                onclick="OpenTab('skills')"
              >
                SKILLS
              </p>
              <p className="subnavlinks" onclick="OpenTab('experience')">
                EXPERIENCE
              </p>
              <p className="subnavlinks" onclick="OpenTab('education')">
                EDUCATION
              </p>
            </div>
          </div>
          <div className="contentGroup">
            <div className="subnavContents activeContent" id="skills">
              <ul>
                <li>
                  <span>Software Development</span>
                  <h5> Developing solution-specific
                  Desktop and Web Applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Cloud Computing</span> 
                  <h5> Developing cloud-based Web and API
                  applications{" "}</h5>
                </li>
              </ul>
            </div>
            <div className="subnavContents" id="experience">
              <ul>
                <li>
                  <span>Software Development</span> 
                  <h5>
                  Developing solution-specific
                  Desktop and Web Applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Cloud Computing</span> 
                <h5>
                  Developing cloud-based Web and API
                  applications{" "}
                </h5>
                </li>
                <li>
                  <span>Software Development</span>
                  <h5>
                  Developing solution-specific
                  Desktop and Web Applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Cloud Computing</span> 
                  <h5>
                  Developing cloud-based Web and API
                  applications{" "}
                  </h5>
                </li>
              </ul>
            </div>
            <div className="subnavContents" id="education">
              <ul>
                <li>
                  <span>Software Development</span> 
                  <h5>
                  Developing solution-specific
                  Desktop and Web Applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Cloud Computing</span>
                  <h5>
                  Developing cloud-based Web and API
                  applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Software Development</span> 
                  <h5>
                  Developing solution-specific
                  Desktop and Web Applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Cloud Computing</span> 
                  <h5>
                  Developing cloud-based Web and API
                  applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Software Development</span> 
                  <h5>
                  Developing solution-specific
                  Desktop and Web Applications{" "}
                  </h5>
                </li>
                <li>
                  <span>Cloud Computing</span> 
                  <h5>
                  Developing cloud-based Web and API
                  applications{" "}
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
