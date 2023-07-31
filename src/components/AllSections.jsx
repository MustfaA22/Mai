import classes from "./AllSections.module.css";

import HomeSection from "./sections/HomeSection";
import ProgramAspectsSection from "./sections/ProgramAspectsSection";
import GoalsSection from "./sections/GoalsSection";
import WhoAreWeSection from "./sections/WhoAreWeSection";
import ContactUsSection from "./sections/ContactUsSection";

function AllSections() {
  return (
    <main className={classes.AllSectionsWrapper}>
      <HomeSection />
      <ProgramAspectsSection />
      <GoalsSection />
      <WhoAreWeSection />
      <ContactUsSection />
    </main>
  )
}

export default AllSections;