import { useNav } from '../../hooks/useNav';

function ProgramContent() {
  const programContentRef = useNav();

  return (
    <section ref={programContentRef} id="program-content">
      ProgramContent
    </section>
  )
}

export default ProgramContent;