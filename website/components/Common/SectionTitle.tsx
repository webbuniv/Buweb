const SectionTitle = ({
  paragraph,
  title,
  width = "1000px",
  // center,
  mb = "10px",
}: {
  paragraph: string;
  title: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => { 
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${"mx-auto text-center" }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb}}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/80 dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
