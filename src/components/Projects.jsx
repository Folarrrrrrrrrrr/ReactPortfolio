import "../assets/style/styles.css";
import todoImg from "../assets/images/image.png"
import Bluehaise from "../assets/images/image.png"
import TodoApp from "../assets/images/TodoApp.jpg"
const Projects = () => {

  return (
    <>
      <div>
        <div id="projects" className="section">
          <h2 className="line-title">Projects</h2>
          <div className="projectList">
            <div className="project">
              <img src={TodoApp} alt="" />
              <div className="projectDetails">
                <h4 className="title">Reactjs Task Manager App</h4>
                <p className="description">
                  This application aids task mangement for its users
                </p>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project">
              <img src={Bluehaise} alt=""/>
              <div className="projectDetails">
                <h4 className="title"> Kapital Realty</h4>
                <p className="description">
                 
                  This is a front end real estate application that allows vendor
                  to list properties for prospective customers.
                </p>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project">
              <img src={todoImg} alt=""/>
              <div className="projectDetails">
                <h4 className="title">BlueHais HMS</h4>
                <p className="description">
                  BlueHaise is a c# and .NET project that manages room
                  reservation, it implements validated forms, user and admin
                  roles
                </p>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See More
          </a>
          {/* <div className=" game-div owl-carousel custom-carousel owl-theme">
            <div
              className="cards active"
              // style="background-image: url(./assets/images/KapitalRealty.jpg);
              // background-size:cover;  ; background-repeat:no-repeat"
            >
              <div className="item-desc">
                <h3> BlueHaise HMS</h3>
                <p>
                  BlueHaise is a c# and .NET project that manages room
                  reservation, it implements validated forms, user and admin
                  roles
                </p>
                <div className="repoBtn">
                  <a href=" ">
                    {" "}
                    <button className="gitubBtn">View Repo</button>{" "}
                  </a>
                  <a href="">
                    {" "}
                    <button className="gitubBtn">
                      View Live Application
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards"
              // style="background-image: url(./assets/images/KapitalRealty.jpg);  background-size:cover;  ; background-repeat:no-repeat"
            >
              <div className="item-desc">
                <h3>Kapital Realty</h3>
                <p>
                  This is a front end real estate application that allows vendor
                  to list properties for prospective customers.
                </p>
                <div className="repoBtn">
                  <a href=" ">
                    {" "}
                    <button className="gitubBtn">View Repo</button>{" "}
                  </a>
                  <a href="">
                    {" "}
                    <button className="gitubBtn">
                      View Live Application
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="cards"
              // style="background-image: url(./assets/images/KapitalRealty.jpg);  background-size:cover; background-repeat:no-repeat"
            >
              <div className="item-desc">
                <h3>TodoApp</h3>
                <p>This application aids task mangement for its users</p>
                <div className="repoBtn">
                  <a href=" ">
                    {" "}
                    <button className="gitubBtn">View Repo</button>{" "}
                  </a>
                  <a href="">
                    {" "}
                    <button className="gitubBtn">
                      View Live Application
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
