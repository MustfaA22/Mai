import classes from "../styles/Navbar.module.css";
import logo from "../assets/images/logo.svg";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";

// const navLinks = ["home", "program-aspects", "goals", "who-are-we", "contact-us"];
// const navLinksContent = [, "جوانب البرنامج", "الاهداف", "من نحن", "تواصل معنا"];

const navLinks = ["sponsors", "contest", "register-now", "program-content", "home"];
const navLinksContent = ["الرعاة", "المسابقة", "سجل الان", "محتوى البرنامج", "الصفحة الرئيسية"];

function Navbar() {

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
            style={{width: "70px", objectFit: "contain", objectPosition: "center"}} 
            alt="logo"
            onClick={handlerClickLogo}
          />
        </div>
        <div className={classes.links}>
              {navLinks.map((nav, i) => 
                renderNavLink(nav, i, activeLinkId)
              )}
        </div>
      </nav>
  )
}

export default Navbar;