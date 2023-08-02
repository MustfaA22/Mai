import { useNav } from "../../hooks/useNav";

function Contest() {
  const contestRef = useNav();

  return (
    <section ref={contestRef} id="contest">
      Contest
    </section>
  )
}

export default Contest;