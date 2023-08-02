import classes from "../styles/AllSections.module.css";

import Home from "./sections/Home";
import ProgramContent from "./sections/ProgramContent";
import RegisterNow from "./sections/RegisterNow";
import Contest from "./sections/Contest";
import Sponsors from "./sections/Sponsors";

function AllSections() {
  return (
    <main className={classes.AllSectionsWrapper}>
      <Home />
      <ProgramContent />
      <RegisterNow />
      <Contest />
      <Sponsors />
    </main>
  )
}

export default AllSections;