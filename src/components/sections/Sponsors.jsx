import { useNav } from "../../hooks/useNav";
import classes from "../../styles/sectionStyles/Sponsors.module.css";
import logo from "../../assets/images/mai-sticker.svg";
import iotKidsLogo from "../../assets/images/iot-kids-logo.svg";
import i18next from "i18next";

function Sponsors() {
  const sponsorsRef = useNav();

  return (
    <section ref={sponsorsRef} id="sponsors">
      <h1 className={classes.comtitle}>{i18next.t("sponsors-title")}</h1>
      <div className={classes.container}>
        <div className={classes.sponsors}>
          <div data-aos="fade-right" data-aos-duration="3000" className={classes.sponsor}>
            <img src={iotKidsLogo} alt="IoT kids" />
            <p>
             {i18next.t("sponsors-desc-2")}
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000" className={classes.sponsor}>
            <img src={logo} alt="Mai" />
            <p>
             {i18next.t("sponsors-desc")}            
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors;