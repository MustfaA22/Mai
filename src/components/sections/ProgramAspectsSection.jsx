import { useNav } from '../../hooks/useNav';

function ProgramAspectsSection() {
  const programAspectsRef = useNav();

  return (
    <section ref={programAspectsRef} id="program-aspects">
      ProgramAspectsSection
    </section>
  )
}

export default ProgramAspectsSection;