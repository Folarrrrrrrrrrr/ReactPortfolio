import '../assets/style/styles.css'
import Resume from "../assets/docs/FOLAWE_OLUWOLE_RESUME.pdf"

const Services = () => {
  return (
    <>
      <div id="contact" className="section">
        <h2 className="line-title"> My Services</h2>
        <div className="sectionFourContainer">
          <div className="servicesList">
            <div>
              <i className="fa-solid fa-code"></i>
              <h3> API Application</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                molestias! Voluptatibus, pariatur vitae! Eius, numquam placeat?
                Ipsa omnis rerum, quaerat optio, dolore, ullam ea eius
                recusandae aut sapiente maxime minus. Quasi similique dolorem
                facilis nemo excepturi aut culpa, praesentium dolorum? A
                asperiores odio natus iure id. Odit ratione quaerat libero
                dolores atque minus exercitationem, ducimus, amet deserunt,
                ipsum ipsam corrupti!
              </p>
              <a href=""> Learn more </a>
            </div>
            <div>
              <i className="fa-solid fa-code"></i>
              <h3>Web Application</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                molestias! Voluptatibus, pariatur vitae! Eius, numquam placeat?
                Ipsa omnis rerum, quaerat optio, dolore, ullam ea eius
                recusandae aut sapiente maxime minus. Quasi similique dolorem
                facilis nemo excepturi aut culpa, praesentium dolorum? A
                asperiores odio natus iure id. Odit ratione quaerat libero
                dolores atque minus exercitationem, ducimus, amet deserunt,
                ipsum ipsam corrupti!
              </p>
              <a href=""> Learn more </a>
            </div>
            <div>
              <i className="fa-solid fa-code"></i>
              <h3>Cloud Applcation</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                molestias! Voluptatibus, pariatur vitae! Eius, numquam placeat?
                Ipsa omnis rerum, quaerat optio, dolore, ullam ea eius
                recusandae aut sapiente maxime minus. aiores tempora doloremque
                rem veritatis laboriosam aut quae neque rerum veniam omnis iure
                ut, fugiat culpa odit maxime perferendis animi eius. Commodi
                sunt quas, perspiciatis dicta expedita harum odit!
              </p>
              <a href=""> Learn more </a>
            </div>
          </div>
          <div className="contactContainer">
            <h2 className="line-title"> Contact Me</h2>
            <div className="row">
              <div className="contact-col-one">
                <p className="email">Oluwolefolawe@gmail.com</p>
                <p className="">
                  <a href="callto:+2349036800896"> +2349036800896 </a>
                </p>
                <div className="socials">
                  <a href="">
                    <i className="bx bxl-twitter" id="soch"></i>{" "}
                  </a>
                  <a href="">
                    {" "}
                    <i className="bx bxl-linkedin-square" id="soch"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bx bxl-facebook-square" id="soch"></i>
                  </a>
                </div>
                <a
                  href={Resume}
                  download
                  className="btn btn-two"
                >
                  My Resume
                </a>
              </div>
              <div className="contact-col-two">
                <form action="">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <textarea
                    name="message"
                    rows="10"
                    placeholder="Your Message"
                  ></textarea>

                  <button type="submit" className="btn form-btn">
                    {" "}
                    Submit{" "}
                  </button>
                  <br/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services