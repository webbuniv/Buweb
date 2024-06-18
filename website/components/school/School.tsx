import Image from "next/image";

const School = ({
  dean,
  deanImage,
  message,
  preamble,
  goal,
  mb = "10px",
}: {
  dean: string;
  deanImage: string;
  message: string;
  preamble: string;
  goal: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div className="flex flex-col space-y-12">

      {/* Dean's Message section div */}
      <div
        className={`wow fadeInUp w-full flex flex-col justify-center items-center mx-auto`}
        data-wow-delay=".1s"
        style={{ marginBottom: mb }}
      >
        <div className=" flex flex-col justify-center items-center">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/70 dark:text-white sm:text-4xl md:text-[45px]">
            Dean
          </h2>
          <h1 className="mb-4 text-body-color">{dean}</h1>
          <Image src={deanImage} alt="dean" width={200} height={200} />
        </div>

        <div className="flex flex-col items-center text-center md:text-start mt-6 md:w-[90%] md:px-6">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/70 dark:text-white sm:text-4xl md:text-[45px]">
            Message
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {message}
          </p>
        </div>


      </div>

      {/* Preamble section div */}
      <div
        className={`wow fadeInUp w-full flex flex-col md:flex-row justify-between md:space-x-10 space-y-5 md:space-y-0 md:pl-20 ${"mx-auto"}`}
        data-wow-delay=".1s"
        style={{ marginBottom: mb }}
      >
        <div className="md:w-[60%]">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/70 dark:text-white sm:text-4xl md:text-[45px]">
            Preamble
          </h2>
          <p className=" text-body-color">{preamble}</p>
        </div>

        <div className="md:w-[40%]">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black/70 dark:text-white sm:text-4xl md:text-[45px]">
            Goal
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {goal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default School;
