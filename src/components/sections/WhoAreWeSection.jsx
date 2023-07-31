import { useNav } from "../../hooks/useNav";

function WhoAreWeSection() {
  const whoAreWeRef = useNav();

  return (
    <section ref={whoAreWeRef} id="who-are-we">
      WhoAreWeSection
    </section>
  )
}

export default WhoAreWeSection;