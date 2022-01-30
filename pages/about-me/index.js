import AboutMeSection from "@components/About-Me/aboutMeSection/aboutMeSection";
import ServicesSection from "@components/About-Me/servicesSection";
import  Testimonials  from "@components/About-Me/testimonials";
import { BaseLayout } from "@components/layout";
import { Breadcrumb } from "@components/shared";

export default function AboutMe() {
  return (
    <>
      <Breadcrumb />
      <AboutMeSection />
      <ServicesSection />
      <Testimonials />
    </>
  );
}

AboutMe.Layout = BaseLayout;
