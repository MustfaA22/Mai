import { useNav } from "../../hooks/useNav";
import competition from "../../assets/images/competition/competition.png";
import classes from "../../styles/sectionStyles/Contest.module.css";
import Button from "../../UI/Button";
import Lottie from "lottie-web";
import comp from "../../assets/images/comp.json"
import { useEffect } from "react";
import i18next from "i18next";


function Contest() {
  const contestRef = useNav();

  useEffect(()=>{
    const animation1= Lottie.loadAnimation({
      container: document.getElementById("comp"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: comp,
    });
    return (()=>{
      animation1.destroy();
    })
  },[])

  return (
    <section ref={contestRef} id="contest">
      <div className={classes.center}>
        <div className={classes.contentWrapper}>
          <div data-aos="fade-right" data-aos-duration="3000" className={classes.textAndButton}>
            <h1>{i18next.t("comp-title")}</h1>
            <p className="fw-bold">
              {i18next.t("comp-desc")}
            </p>
            <Button buttonText={i18next.t("register-title")} />
          </div>
           <div data-aos="fade-left" data-aos-duration="3000" id="comp"></div>
        </div>
      </div>
    </section>
  )
}

export default Contest;