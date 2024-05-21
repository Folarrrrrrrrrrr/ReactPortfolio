import { useState } from "react";
import "../assets/style/styles.css";

const NavBar = () => {
 
 const [openNav, setOpenNav] =useState(false);
 const [btnDisplay, setBtnDisplay] =useState(true);


 const sideNavHandler =()=>{
  setOpenNav(!openNav);
  setBtnDisplay(!btnDisplay);

 }
  

  const navList = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "contact", link: "#contact" },
  ];
  return (
    <>
      <div className="container navBox fixed  left-0 z-[999]">
        <nav className=" site-navbar nav">
          <a href="#">
            <h2 className="site-logo text-lg  text-white font-medium mt-1"> F.O. </h2>{" "}
          </a>
          <div className=" navlinks">
            <ul>
              {navList.map((list, i) => (
                <li key={i} >
                  <a href={list.link}>
                    {" "}
                    <h4 >
                      {list?.name}
                    </h4>{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div> 
          <button className="nav-toggler" onClick={sideNavHandler} >
            {
              btnDisplay===true ? <span></span> : <h1 className="closeBtn"> <ion-icon name="close-outline" ></ion-icon></ h1>
            }
          </button>
          {
            openNav === false ? <> </>:  <div className="sideNav text-grey-900">
            <div className=" flex flex-col justify-center py-2 gap-10
            text-lg ">
              {
                navList.map((list, i )=>(
                  <div key={i} className="px-6">
                    <a href={list?.link}>
                      <h4 className=" text-white hover:text-cyan-600"> {list?.name}</h4>
                    </a>
                  </div>
                ))
              }
            </div>
        </div>
          }
         
        </nav>
      </div>
    </>
  );
};

export default NavBar;
