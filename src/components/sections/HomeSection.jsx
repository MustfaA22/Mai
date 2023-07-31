import { useNav } from "../../hooks/useNav";

function HomeSection() {
  const homeRef = useNav()

  return (
    <section ref={homeRef} id="home">
      Home
    </section>
  )
}

export default HomeSection;