"use client";

import Link from "next/link";
import React from "react";

export default function EmploymentOpportunities() {
  return (
    <>
      <section className="pt-[120px] pb-[50px]">
        <div className="container my-2 bg-gray-100 rounded">
          <div className="pt-5 text-start border-b border-body-color border-opacity-10 pb-2 md:pb-5 mb-2 md:mb-5">
            <h1 className="text-xl md:text-2xl text-green-500">
              EMPLOYMENT OPPORTUNITIES
            </h1>

            <h2 className="text-xl text-blue-500">External Advert June 2024</h2>

          </div>

          <div className=" text-dark/90 border-b border-body-color border-opacity-10 pb-5">
            <p className="mb-2">
              Applications are invited from suitably qualified candidates for
              the following vacant positions at Bugema University. Please see
              the job details on Bugema University Website:{" "}
              <span>
                <Link
                  href="https://www.bugemauniv.ac.ug/"
                  className="text-blue-500 "
                >
                  www.bugemauniv.ac.ug{" "}
                </Link>
              </span>
              and submit your application through{" "}
              <span>
                <Link
                  href="mailto:bugemahumanresource@gmail.com"
                  className="text-blue-500 "
                >
                  bugemahumanresource@gmail.com{" "}

                </Link>
              </span>
              <span className="font-semibold">
                Not Later than on the 15, July, 2024 at 5pm. Hardcopies shall

                not be accepted.
              </span>
            </p>
            <p className="mb-2">

              All applicants must attach relevant soft copies of academic
              transcripts, certificates and relevant appointment letters. <br />
              <span className="text-red-500">
                Note: PDF copies maximum 10MB.

              </span>
            </p>
            <p className="mb-2 font-medium">
              Only shortlisted candidates shall be contacted for interviews. All
              documents tendered in shall be verified with the relevant

              authorities. Bugema University provides equal opportunities to

              everyone. Applicants who shall not hear from Bugema University on
              completion of the selection exercise should consider themselves as
              unsuccessful.
            </p>
            <p>
              Bugema University is located 32 Kilometers north of Kampala{"'"}s
              along Gayaza – Zirobwe Road. <br />
              <div className="mt-2">
                <span className="font-semibold">Telephone:</span>
                <br />
                <div className="ml-5">
                  <span>
                    <span className="font-semibold">Mainline: </span>
                    <span className=" font-medium">
                      <Link href="tel:+256 312 351 400">+256 312 351 400</Link>
                    </span>
                    <br />
                    <span className="font-semibold">HRM: </span>
                    <span className="font-medium">
                      <Link href="tel:+256 312 351 410">+256 312 351 410</Link>
                    </span>
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>

        <div className="container text-dark/90 py-5 bg-gray-100 rounded mt-2 md:mt-5">

          {/* Single Job card */}
          <div>
            <div className="flex flex-col gap-1 mx-auto text-blue-500">
              <h2 className="font-bold">
                Job Title:{" "}
                <span className="font-medium">
                  REGISTRAR OF ADMISSIONS AND RECORDS
                </span>
              </h2>
              <h2 className="font-bold">
                Vacancies: <span className=" font-medium">01</span>
              </h2>
              <h2 className="font-bold">
                Responsilbe To:{" "}
                <span className=" font-medium">The DVC-Academics</span>
              </h2>
              <h2 className="font-bold">
                Terms of Employment:{" "}
                <span className=" font-medium">
                  Five years performance contract renewable once upon
                  satisfactory performance.
                </span>
              </h2>
            </div>

            <div className="py-4">
              <div className="py-2">
                <h1 className="text-xl font-semibold">Purpose of the Job</h1>

                <ul className="list-disc ml-10 mt-2">
                  <li>
                    An officer responsible for the Admission, registration,
                    enrollment, and academic grades of students.
                  </li>
                </ul>
              </div>

              <div className="py-2">
                <h1 className="text-xl font-semibold">
                  Minimum Qualifications
                </h1>

                <ul className="list-disc ml-10 mt-2">

                  <li>Mature, vibrant person aged between 35-55</li>

                  <li>
                    Masters Degree in Education Management or curriculum
                    development, and computer knowledge is a must. A post
                    graduate qualification in education management, public
                    administration or a related field if the Masters field is
                    from other fields other than Education.
                  </li>
                  <li>
                    At least 5 years of actual academic administrative
                    experience in students records in an academic or institution
                    of higher learning. Or Having served in the position of
                    Deputy registrar for three years or Senior Assistant
                    registrar for five years in a recognised Higher Education
                    Institution or University. Subscription to Bugema University
                    norms and core values is a must
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
