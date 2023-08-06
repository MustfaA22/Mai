import { useNav } from "../../hooks/useNav";
import competition from "../../assets/images/competition/competition.png";
import classes from "../../styles/sectionStyles/Contest.module.css";
import Button from "../../UI/Button";


function Contest() {
  const contestRef = useNav();

  return (
    <section ref={contestRef} id="contest">
      <div className={classes.center}>
        <div className={classes.contentWrapper}>
          <div className={classes.textAndButton}>
            <h1> المنافسة </h1>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص العربي هو مثال.
            </p>
            <Button buttonText={"سَجلي اﻵن"} />
          </div>
            <img src={competition} alt="competition" />
        </div>
      </div>
    </section>
  )
}

export default Contest;