import '../assets/style/styles.css'
import csharpImg from  "../assets/images/skillsLogos/csharp logo.png"
import jsImg from "../assets/images/skillsLogos/JavaScript-logo.png"

import vueImg from  "../assets/images/skillsLogos/vue-js-logo-png.png"
import tscImg from  "../assets/images/skillsLogos/typescript-logo.png"
import profileImg from  "../assets/images/20240305_083654.jpg"
const Home = () => {
  return (
    <>
      <div id="home" class="intro-area section">
        <div class="name-skillslogo">
          <div>
            <div class="profileData">
              <p>
                {" "}
                Hi, I am <span> Folawe Oluwole </span>{" "}
              </p>
            </div>
            <div class="profileData">
              <h2 class="Fname">Software</h2>
              <h4 class="Sname"> Engineer</h4>
            </div>
          </div>
          <div class="dropping-texts">
            <div>
              <img
                src={csharpImg}
                alt=""
                class="logo-img"
              />
            </div>
            <div>
              <img
                src="./assets/images/skillsLogos/csharp logo.png"
                alt=""
                class="logo-img"
              />
            </div>
            <div>
              <img
                src={jsImg}     
                alt=""
                class="logo-img"
              />
            </div>
            <div>
              <img
                src={vueImg}
                alt=""
                class="logo-img"
              />
            </div>
            <div>
              <img
                src={tscImg}
                alt=""
                class="logo-img"
              />
            </div>
            <div>
              <img
                src={tscImg}
                alt=""
                class="logo-img"
              />
            </div>
            <div>
              <img
                src={tscImg}
                alt=""
                class="logo-img"
              />
            </div>
          </div>
        </div>

        <div class="profileCards">
          <div class="box">
            <div class=" imgBox pictureCard">
              <img
                src={profileImg}
                class="profilePicture"
              />
            </div>
            <div class="content">
              <h2>
                Folawe Oluwole
                <br />
                <span>Software Engineer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home 
