// import Image from "next/image";
// import React from "react";
// import HeroOverlay from "../HeroOverlay/HeroOverlay";
// import { string } from "zod";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const HeroSlide = ({ media }) => {
//   return (
//     <div className="relative w-full h-[70%]    -mb-4 z-10">
//       {media.type === "video" ? (
//         // Render video with overlay
//         <div>
//           <video className="w-full h-full object-cover" autoPlay muted loop>
//             <source src={media.src} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <HeroOverlay
//             title={media.title}
//             link={media.link}
//             description={media.description}
//             linkText={media.linkText}
//           />
//         </div>
//       ) : media.type === "image" ? (
//         // Render image with overlay
//         <div className="bg-dark h-[50%] md:h-screen w-screen relative " >
//           <Image
//             src={media.src}
//             alt="Hero Slide"
//             className="w-fit h-screen object-fill lg:w-full zoom-fade-image "
//             width={1000}
//             height={800}
            
//           />
//           <div >
//           <HeroOverlay
//               title={media.title }
//               description={media.description}
//               link={media.link}
//               linkText={media.linkText}
//             />
        
//           </div>
//         </div>
//       ) : (
//         // Render third type (no overlay)
//         <div>
//           <Image
//             src={media.src}
//             alt="Hero Slide without overlay"
//             className="w-fit h-[650px] object-fill lg:w-full"
//             width={1000}
//             height={800}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSlide;
