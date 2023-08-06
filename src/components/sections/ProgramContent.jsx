import classes from "../../styles/sectionStyles/ProgramContent.module.css"
import { useNav } from '../../hooks/useNav';

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


const skills = [
  {
    logo: aiIcon,
    header: "الذكاء الاصطناعي",
    skillDetails: "مقدمة الى الذكاء الاصطناعي وكيفية استخدامه في مشاريع",
  },
  {
    logo: roboticsIcon,
    header: "الروبوتيكس",
    skillDetails: "تعليم الفتيات كيفية برمجة الروبوتات على منصات مثل Arduino",
  },
  {
    logo: programmingIcon,
    header: "البرمجة",
    skillDetails: "تعليم لغات برمجة مبسطة مثل Scratch",
  },
];

function ProgramContent() {
  const programContentRef = useNav();

  return (
    <section ref={programContentRef} id="program-content">
      <div className={classes.contentWrapper}>
        <div>
          <h1>مُحتوى البرنامج</h1>
          <p className={classes.programContentInfo}>
            يهدف البرنامج الى تعليم الفتيات مهارات جديدة وزيادة قدراتهن في مجال التكنولوجيا
          </p>
        </div>
        <div className={classes.skillsWrapper}>
          <div className={classes.logoAndTitle}>
            <div className={classes.logo}>
              <img src={newSkillsIcon} alt="new skills" />
            </div>
            <h2>مهارات جديدة</h2>
          </div>
          <div className={classes.skills}>
            {skills.map((skill, index) => (
              <div className={classes.skill} key={index}>
                <div className={classes.skillLogo}>
                  <img src={skill.logo} alt={skill.header} />
                </div>
                <h3> {skill.header} </h3>
                <p> {skill.skillDetails} </p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.interactiveContent}>
          <div className={classes.logoAndTitle}>
            <img src={interactiveContentIcon} alt="interactive content" />
            <h2> مُحتوى تفاعُلي </h2>
          </div>

          <div className={classes.interactiveContentGraph}>

            <div className={classes.interactiveContentGraphItem}>
              <img src={workshopsIcon} alt="workshops" />
              <h3> ورش عمل </h3>
            </div>

            <img src={secondArrowIcon} alt="arrow" className={classes.arrow} />
            
            <div className={classes.interactiveContentGraphItem}>
              <img src={activitiesIcon} alt="activities" />
              <h3> انشطة تفاعلية </h3>
            </div>

            <img src={firstArrowIcon} alt="arrow" className={classes.arrow}/>

            <div className={classes.interactiveContentGraphItem}>
              <img src={educationalContentIcon} alt="educational content"  />
              <h3>مُحتوى تعليمي</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProgramContent;