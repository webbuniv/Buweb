import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <div className="container mt-[150px]">
        <Breadcrumb
          pageName="Contact Us"
          description=""
        />

        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
