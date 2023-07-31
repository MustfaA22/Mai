import classes from "./Navbar.module.css";
import logo from "../assets/images/logo.svg";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";

const navLinks = ["home", "program-aspects", "goals", "who-are-we", "contact-us"];
const navLinksContent = [" الصفحة الرئيسية", "جوانب البرنامج", "الاهداف", "من نحن", "تواصل معنا"];

function renderNavLink (content, i, activeLinkId) {
  
  const handleClickNav = () => {
    document.getElementById(content).scrollIntoView({behavior: "smooth", block: "center" });
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

function Navbar() {
  const { activeLinkId } = useContext(NavContext);

  return (
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <img src={logo} style={{width: "70px", objectFit: "contain", objectPosition: "center"}} alt="" />
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