import classes from "../../styles/sectionStyles/RegisterNow.module.css";

import { useNav } from "../../hooks/useNav";
import Button from "../../UI/Button";

import likeImg from "../../assets/images/positive-vote-1.png";
import registerNowImg from "../../assets/images/register-1.png";
import i18next from "i18next";


function RegisterNow() {
  const registerNowRef = useNav();

  return (
    <section data-aos="fade-up" data-aos-duration="3000" ref={registerNowRef} id="register-now">
      <div className={classes.contentWrapper}>
        <img src={likeImg} className={classes.likeImg} alt="" />
        <img src={registerNowImg} className={classes.registerNowImg} alt="" />
        <h1>{i18next.t("register-title")}</h1>
        <p>{i18next.t("register-desc")}</p>
        <Button buttonText={i18next.t("register-title")} />
      </div>
    </section>
  )
}

export default RegisterNow;