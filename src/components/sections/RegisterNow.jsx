import { useNav } from "../../hooks/useNav"

function RegisterNow() {
  const registerNowRef = useNav();

  return (
    <section ref={registerNowRef} id="register-now">
      RegisterNow
    </section>
  )
}

export default RegisterNow