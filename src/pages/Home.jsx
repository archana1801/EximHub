import Hero              from "../components/sections/Hero";
import TrustBar          from "../components/sections/TrustBar";
import ProductCategories from "../components/sections/ProductCategories";
import Quality           from "../components/sections/Quality";
import Shipping          from "../components/sections/Shipping";
import HowItWorks        from "../components/sections/HowItWorks";
import Certifications    from "../components/sections/Certifications";
import Testimonials      from "../components/sections/Testimonials";
import LatestInsights    from "../components/sections/LatestInsights";
import ContactForm       from "../components/sections/ContactForm";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductCategories />
      <Quality />
      <Shipping />
      <HowItWorks />
      <Certifications />
      <Testimonials />
      <LatestInsights />
      <ContactForm />
    </>
  );
}

export default Home;
