import { useNav } from "../../hooks/useNav";
import classes from "../../styles/sectionStyles/Home.module.css"

import header from "../../assets/images/header.svg";
import logo from "../../assets/images/logo.svg";


function HomeSection() {
  const homeRef = useNav();

  return (
    <section ref={homeRef} id="home" className={classes.home}>
      <img src={header} alt="background" className={classes.background}/>
      <div className={classes.contentWrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.titleAndParagraph}>
          <h1> برنامج مي الشواف </h1>
          <p> لتمكين الفتيات في مجال التكنولوجيا </p>
          <p className={classes.programInfo}>
            هو برنامج تدريبي يهدف إلى تمكين الفتيات في الفئة العمرية من 8 إلى 14 سنة من استخدام التكنولوجيا بشكل صحيح وزيادة وعيهن في مجال التكنولوجيا، وتشجيعهن على الاستكشاف والابتكار وبناء مستقبل واعد في مجالات العلوم والتكنولوجيا. يتم تمويل البرنامج من السيد خالد الخالدي وتنفيذه بواسطة مركز IoT KIDS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
