import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import Image from 'next/image';
import featuresData from "./featuresData";
import img1 from "../../public/images/features/bu.jpg";
import img2 from "../../public/images/features/bu2.jpg";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-2">
          <div className="col-6">
            <SectionTitle
              title="For ambition that can take you anywhere, get your start at Bugema University"
              paragraph=""
              // center
            />
          </div>
          <div className="col-6">
          <Image className="img1" src={img1} alt="Bugema University" width="600" height="150"/>
          {/* <Image className="img2" src={img2} alt="Bugema University" /> */}
          {/* <div className="hover-image-container">
              <div className="img-wrapper">
                <Image className="img1" src={img1} alt="Bugema University" width="200" height="100"/>
                <Image className="img2" src={img2} alt="Bugema University" />
              </div>
              
            </div> */}
          </div>
        </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
