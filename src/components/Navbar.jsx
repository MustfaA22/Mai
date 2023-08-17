import { useContext, useState } from "react";
import { NavContext } from "../context/NavContext";

import classes from "../styles/Navbar.module.css";
import logo from "../assets/images/logo-white.svg";
import menu from "../assets/images/burger-bar.svg";
import close from "../assets/images/close.svg";
import enimg from "../assets/images/en.png";
import arimg from "../assets/images/ar.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lang = localStorage.getItem("lang") || "ar";
  const { activeLinkId } = useContext(NavContext);

  const langChange = (option) => {
    localStorage.setItem("lang", option);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const handlerClickLogo = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={classes.navbar}>
      

      <button className={classes.mobileNavToggle} onClick={() => setIsOpen(true)}>
        <img src={menu} alt="menu" />
      </button>
      <div className={classes.logo}>
        <img src={logo} alt="logo" onClick={handlerClickLogo} />
      </div>
      <div className={classes.links} data-visible={isOpen ? "true" : "false"}>
        <button onClick={() => setIsOpen(false)}>
          <img src={close} className={classes.close} />
        </button>
        
        <ul className={classes.navLinksNav}>
        <li>
          {lang === "ar" ? (
        <button className={classes.notactive}  onClick={() => langChange("en")}>
         English
        </button>
      ) : (
        <button className={classes.notactive} onClick={() => langChange("ar")}>
          العربية
        </button>
      )}
          </li>
          <li>
            <button
              onClick={() => document.getElementById("sponsors").scrollIntoView({ behavior: "smooth", block: "start" })}
              className={activeLinkId === "sponsors" ? classes.active : classes.notactive}
            >
              {lang === "ar" ? "الرعاة" : "Sponsors"}
            </button>
          </li>
          <li>
            <button
              onClick={() => document.getElementById("contest").scrollIntoView({ behavior: "smooth", block: "start" })}
              className={activeLinkId === "contest" ? classes.active : classes.notactive}
            >
              {lang === "ar" ? "المسابقة" : "Competition"}
            </button>
          </li>
          <li>
            <button
              onClick={() => document.getElementById("register-now").scrollIntoView({ behavior: "smooth", block: "start" })}
              className={activeLinkId === "register-now" ? classes.active : classes.notactive}
            >
              {lang === "ar" ? "سجل الان" : "Registeration"}
            </button>
          </li>
          <li>
            <button
              onClick={() => document.getElementById("program-content").scrollIntoView({ behavior: "smooth", block: "start" })}
              className={activeLinkId === "program-content" ? classes.active : classes.notactive}
            >
              {lang === "ar" ? "محتوى البرنامج" : "Program Content"}
            </button>
          </li>
          <li>
            <button
              onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" })}
              className={activeLinkId === "home" ? classes.active : classes.notactive}
            >
              {lang === "ar" ? "الصفحة الرئيسية" : "Home"}
            </button>
          </li>
         
        </ul>

      </div>
     
      
    </nav>
  );
}

export default Navbar;
