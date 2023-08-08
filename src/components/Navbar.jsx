import { useContext, useState } from "react";
import { NavContext } from "../context/NavContext";

import classes from "../styles/Navbar.module.css";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/burger-bar.svg";
import close from "../assets/images/close.svg";

const navLinks = ["sponsors", "contest", "register-now", "program-content", "home"];
const navLinksContent = ["الرعاة", "المسابقة", "سجل الان", "محتوى البرنامج", "الصفحة الرئيسية"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className={classes.logo}>
          <img 
            src={logo}
            alt="logo"
            onClick={handlerClickLogo}
          />
        </div>
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
              
      </nav>
  )
}

export default Navbar;