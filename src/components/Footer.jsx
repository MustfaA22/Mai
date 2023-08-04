import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai"
import maiWhiteLogo from "../assets/images/logo-white.svg";
import iotKidsLogo from "../assets/images/iot-kids-logo.svg";

import classes from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logos}>

        <img 
          src={maiWhiteLogo} 
          alt="mai logo" 
          style={{ width: "160px", height: "auto", margin: "0 15px", display: "block", objectFit: "contain" }}
        />

        <a href="https://iotkidsiq.com/" target="_blank" rel="noreferrer">
          <img 
            src={iotKidsLogo} 
            alt="iot kids logo" 
            style={{ width: "160px", height: "auto", margin: "0 15px", display: "block", objectFit: "contain" }}
          />
        </a>

        <div className="social" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1em" }}>
          <a href="https://www.facebook.com/IoTKIDS/" target="_blank" rel="noreferrer">
            <BiLogoFacebookCircle style={{ width: "56px", height: "auto", color: "#fff" }} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <IoLogoWhatsapp style={{ width: "56px", height: "auto", color: "#fff" }} />
          </a>
          <a href="https://www.instagram.com/iotkids/" target="_blank" rel="noreferrer">
            <AiFillInstagram style={{ width: "56px", height: "auto", color: "#fff" }} />
          </a>
        </div>

      </div>

      <p className={classes.rightsReservedText}> All right reserved 2023 </p>
    </footer>
  )
}

export default Footer;