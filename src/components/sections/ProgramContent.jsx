import classes from "../../styles/sectionStyles/ProgramContent.module.css"
import { useNav } from '../../hooks/useNav';
import { useEffect } from "react";
import newSkillsIcon from "../../assets/images/new-skills/new-skills.png";
import programmingIcon from "../../assets/images/new-skills/programming.png";
import roboticsIcon from "../../assets/images/new-skills/robot.png";
import aiIcon from "../../assets/images/new-skills/ai.png";

import interactiveContentIcon from "../../assets/images/interactive-content/interactive-content-3.png";
import educationalContentIcon from "../../assets/images/interactive-content/educational-content-3.png";
import firstArrowIcon from "../../assets/images/interactive-content/arrow-1.png";
import secondArrowIcon from "../../assets/images/interactive-content/arrow-2.png";
import activitiesIcon from "../../assets/images/interactive-content/activity-1.png";
import workshopsIcon from "../../assets/images/interactive-content/workshop-1.png";
import code from "../../assets/images/code.json"
import robot from "../../assets/images/Robot.json"
import Ai from "../../assets/images/AI.json"
import Skilsss from "../../assets/images/Skills.json"
import inter from "../../assets/images/interactive.json"
import educa from "../../assets/images/educa.json"
import workshops from "../../assets/images/workshops.json"
import active from "../../assets/images/activity.json"
import Lottie from "lottie-web";
import i18next from "i18next";




const ProgramContent=()=> {
  const programContentRef = useNav();
  useEffect(()=>{
   const animation1= Lottie.loadAnimation({
      container: document.getElementById("coding"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: code,
    });
    const animation2= Lottie.loadAnimation({
      container: document.getElementById("robots"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: robot,
    });
    const animation3= Lottie.loadAnimation({
      container: document.getElementById("AI"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Ai,
    });
    const animation4= Lottie.loadAnimation({
      container: document.getElementById("skills"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Skilsss,
    });
    const animation5= Lottie.loadAnimation({
      container: document.getElementById("interactive"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: inter,
    });
    const animation6= Lottie.loadAnimation({
      container: document.getElementById("educ"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: educa,
    });
    const animation7= Lottie.loadAnimation({
      container: document.getElementById("workshop"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: workshops,
    });
    const animation8= Lottie.loadAnimation({
      container: document.getElementById("activity"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: active,
    });
    return(()=>{
      animation1.destroy();
      animation2.destroy();
      animation3.destroy();
      animation4.destroy();
      animation5.destroy();
      animation6.destroy();
      animation7.destroy();
      animation8.destroy();
    })
  },[])
 
  return (
    <section ref={programContentRef} id="program-content">
      <div className={classes.contentWrapper}>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1>{i18next.t("title-content")}</h1>
          <p className={classes.programContentInfo}>
           {i18next.t("title-content-desc")}
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className={classes.skillsWrapper}>
          <div className={classes.logoAndTitle}>
            <div className={classes.logo} id="skills">
            </div>
            <h2>{i18next.t("new-skills-title")}</h2>
          </div>
          <div className={classes.skills}>
          <div data-aos="fade-right" data-aos-duration="3000" className={classes.skill}>
                <div  className={classes.skillLogocode} id="coding">
                </div>
                <h3>{i18next.t("prog-title")}</h3>
                <p>{i18next.t("prog-desc")}</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className={classes.skill}>
                <div className={classes.skillLogo} id="robots">
                </div>
                <h3>{i18next.t("robo-title")}</h3>
                <p>{i18next.t("robo-desc")}</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className={classes.skill}>
                <div className={classes.skillLogoAI} id="AI">
                </div>
                <h3>{i18next.t("ai-title")}</h3>
                <p> {i18next.t("ai-desc")}</p>
              </div>
              
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-duration="3000" className={classes.interactiveContent}>
          <div className={classes.logoAndTitle}>
            <div className={classes.interacivelearn} alt="interactive content" id="interactive"></div>
            <h2>{i18next.t("content-title-interactive")}</h2>
          </div>

          <div className={classes.interactiveContentGraph}>

            <div data-aos="fade-right" data-aos-duration="3000" className={classes.interactiveContentGraphItem}>
              <div className={classes.edulogo} id="workshop"></div>
              <h3>{i18next.t("content-workshops-title")}</h3>
            </div>

            <img src={secondArrowIcon} alt="arrow" className={classes.arrow} />
            
            <div data-aos="fade-up" data-aos-duration="3000" className={classes.interactiveContentGraphItem}>
              <div className={classes.edulogo} id="activity"></div>
              <h3>{i18next.t("content-acivity-title")}</h3>
            </div>

            <img src={firstArrowIcon} alt="arrow" className={classes.arrow}/>

            <div data-aos="fade-left" data-aos-duration="3000" className={classes.interactiveContentGraphItem}>
            <div className={classes.edulogo} id="educ"></div>
              <h3>{i18next.t("contnet-edu-title")}</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProgramContent;