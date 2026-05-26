import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import Quality from "../components/sections/Quality";
import Certifications from "../components/sections/Certifications";
import Shipping from "../components/sections/Shipping";
import PrivateLabel from "../components/sections/PrivateLabel";
import Testimonials from "../components/sections/Testimonials";
import ContactForm from "../components/sections/ContactForm";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Quality />
      <Certifications />
      <Shipping />
      <PrivateLabel />
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default Home;