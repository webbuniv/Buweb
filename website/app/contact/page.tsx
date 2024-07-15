import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <div className="container mt-[500px]">
        <Breadcrumb
          pageName="Contact Page"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />

        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
