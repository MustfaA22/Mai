import { useNav } from "../../hooks/useNav";
import classes from "../../styles/sectionStyles/Home.module.css"

import header from "../../assets/images/header.svg";
import logo from "../../assets/images/logo.svg";
import i18next from "i18next";


function HomeSection() {
  const homeRef = useNav();

  return (
    <section ref={homeRef} id="home" className={classes.home}>
      <img src={header} alt="background" className={classes.background}/>
      <div className={classes.contentWrapper}>
        <div data-aos="fade-right" data-aos-duration="3000" className={classes.logo}>
          <img src={logo} alt="logo" className={classes.navbarLogo} />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className={classes.titleAndParagraph}>
          <h1>{i18next.t("title")}</h1>
          <p className={classes.secondaryTitle}>{i18next.t("title-desc")}</p>
          <p className={classes.programInfo}>
           {i18next.t("titel-desc-1")}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
