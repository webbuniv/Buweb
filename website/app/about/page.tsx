import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="
          Welcome to AgricHub, your trusted partner in the digital transformation of 
          agriculture. At AgricHub, we are dedicated to reshaping the landscape of 
          agricultural marketing by providing an innovative online platform that connects 
          farmers, producers, and consumers in a seamless and efficient manner.
        "
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
