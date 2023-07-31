import { useNav } from "../../hooks/useNav";

function ContactUsSection() {
  const contactUsRef = useNav();

  return (
    <section ref={contactUsRef} id="contact-us">
      ContactUsSection
    </section>
  )
}

export default ContactUsSection;