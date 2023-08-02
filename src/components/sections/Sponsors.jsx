import { useNav } from "../../hooks/useNav";

function Sponsors() {
  const sponsorsRef = useNav();

  return (
    <section ref={sponsorsRef} id="sponsors">
      sponsors
    </section>
  )
}

export default Sponsors;