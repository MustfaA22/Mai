import { useContext, useState } from "react";
import { NavContext } from "../context/NavContext";

import classes from "../styles/Navbar.module.css";
import logo from "../assets/images/logo-white.svg";
import menu from "../assets/images/burger-bar.svg";
import close from "../assets/images/close.svg";
import enimg from "../assets/images/en.png"
import arimg from "../assets/images/ar.png"

const navLinks = ["sponsors", "contest", "register-now", "program-content", "home"];
const navLinksContent = ["الرعاة", "المسابقة", "سجل الان", "محتوى البرنامج", "الصفحة الرئيسية"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const langChange = (option) => {
    localStorage.setItem("lang", option);
    window.location.reload();
  }
  const { activeLinkId } = useContext(NavContext);
  
  const handlerClickLogo = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  
  // function to render nav links
  function renderNavLink (content, i, activeLinkId) {
    const handleClickNav = () => {
      document.getElementById(content).scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
      <ul key={content}>
        
        <li>
          <button 
            onClick={handleClickNav} 
            className={activeLinkId === content ? classes.active : ""}
            > {navLinksContent[i]} </button>
        </li>
        
      </ul>
    )
  }

  return (
      <nav className={classes.navbar}>

          {localStorage.getItem("lang")=="ar"?
       <button className="d-flex" onClick={() => langChange("en")} >
       <img className={classes.flags} src={enimg} alt="" />
   </button>
   
         :  <button className="d-flex" onClick={() => langChange("ar")} >
         <img className={classes.flags} src={arimg} alt="" />
     </button>}
        <button 
          className={classes.mobileNavToggle} 
          onClick={() => setIsOpen(true)}>
            <img src={menu} alt="menu" />
        </button>
        <div className={classes.links} data-visible={isOpen ? "true" : "false"}>
          <button onClick={() => setIsOpen(false)}>
            <img src={close} className={classes.close} />
          </button>
              
              {navLinks.map((nav, i) =>
                renderNavLink(nav, i, activeLinkId)
              )}
        </div>
        
        <div className={classes.logo}>
               <img 
                 src={logo}
                 alt="logo"
                 onClick={handlerClickLogo}
               />
             </div>
      </nav>
  )
}

export default Navbar;