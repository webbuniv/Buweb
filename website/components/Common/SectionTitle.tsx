const SectionTitle = ({
  paragraph,
  title,
  width = "700px",
  // center,
  mb = "100px",
}: {
  paragraph: string;
  title: string;
  width?: string;
  // center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${"mx-auto text-center" }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
