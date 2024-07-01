import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "RENU",
    href: "https://renu.ac.ug/",
    image: "/images/brands/renu.png",
  },
  {
    id: 2,
    name: "SDA",
    href: "https://www.adventist.org/",
    image: "/images/brands/9.png",
  },
  {
    id: 3,
    name: "NCHE",
    href: "https://unche.or.ug/",
    image: "/images/brands/nche.png",
  },
  {
    id: 4,
    name: "Bugema University",
    href: "https://bugemauniv.ac.ug",
    image: "/images/logo/bugema.png",
  },
  {
    id: 5,
    name: "Flair ERMS",
    href: "",
    image: "/images/brands/flair1.jpg",
  },
];

const Brands = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-4 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[10px] md:px-[50px] xl:p-[20px] 2xl:py-[40px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[200px] items-center justify-center sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-14 w-28 opacity-70 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100 transition-all duration-500"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
