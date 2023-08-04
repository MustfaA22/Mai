import { useNav } from "../../hooks/useNav";
import classes from "../../styles/sectionStyles/RegisterNow.module.css";

function RegisterNow() {
  const registerNowRef = useNav();

  return (
    <section ref={registerNowRef} id="register-now">
      <div className={classes.contentWrapper}>
        <h1> سَجلي اﻵن! </h1>
        <p> وأبدئي رحلتكِ في مجال التكنولوجيا </p>
        <button className={classes.registerNowBtn}>
          <span className={classes.shadow}></span>
          <span className={classes.edge}></span>
          <span className={`${classes.front} ${classes.text}`}>  سَجلي اﻵن </span>
        </button>
      </div>
    </section>
  )
}

export default RegisterNow;