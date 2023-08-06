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
          className={classes.logo}
        />

        <a href="https://iotkidsiq.com/" target="_blank" rel="noreferrer">
          <img 
            src={iotKidsLogo} 
            alt="iot kids logo" 
            className={`${classes.logo} ${classes.iotLogo}`}
          />
        </a>

        <div className={classes.social}

        >
          <a href="https://www.facebook.com/IoTKIDS/" target="_blank" rel="noreferrer">
            <BiLogoFacebookCircle className={classes.socialsIcon} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <IoLogoWhatsapp className={classes.socialsIcon} />
          </a>
          <a href="https://www.instagram.com/iotkids/" target="_blank" rel="noreferrer">
            <AiFillInstagram className={classes.socialsIcon} />
          </a>
        </div>

      </div>

      <p className={classes.rightsReservedText}> All right reserved 2023 </p>
    </footer>
  )
}

export default Footer;