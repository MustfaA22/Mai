import { useNav } from "../../hooks/useNav"

function GoalsSection() {
  const goalsRef = useNav();

  return (
    <section ref={goalsRef} id="goals">
      GoalsSection
    </section>
  )
}

export default GoalsSection