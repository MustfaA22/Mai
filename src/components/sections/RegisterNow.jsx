import classes from "../../styles/sectionStyles/RegisterNow.module.css";

import { useNav } from "../../hooks/useNav";
import Button from "../../UI/Button";

import likeImg from "../../assets/images/positive-vote-1.png";
import registerNowImg from "../../assets/images/register-1.png";


function RegisterNow() {
  const registerNowRef = useNav();

  return (
    <section data-aos="fade-up" data-aos-duration="3000" ref={registerNowRef} id="register-now">
      <div className={classes.contentWrapper}>
        <img src={likeImg} className={classes.likeImg} alt="" />
        <img src={registerNowImg} className={classes.registerNowImg} alt="" />
        <h1> سَجلي اﻵن! </h1>
        <p> وأبدئي رحلتكِ في مجال التكنولوجيا </p>
        <Button buttonText={"سَجلي اﻵن"} />
      </div>
    </section>
  )
}

export default RegisterNow;