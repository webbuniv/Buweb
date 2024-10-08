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
            Applications are invited from suitably qualified candidates for the vacant positions at Bugema University. Please see the job details on Bugema University Website: www.bugemauniv.ac.ug  and submit seven hard copies of your application with relevant copies of your detailed CV, certified academic transcripts, certificates, and relevant appointment letters to the Department of Human Resource Management not later than 5:00 pm, Monday 21st October 2024. Those who may have applied before should not re-apply. Only shortlisted candidates shall be contacted for interviews. Impersonation of any nature is a criminal offense. Bugema University provides equal opportunities to everyone. Applicants who shall not hear from Bugema University upon completion of the selection exercise should consider themselves unsuccessful. 
            Telephone Mainline: (+256). 312 351 400, HRM Office (+256) 312 351 410

              <span>
                <Link
                  href="https://www.bugemauniv.ac.ug/"
                  className="text-blue-500 "
                >
                  {/* www.bugemauniv.ac.ug{" "} */}
                </Link>
              </span>
              {/* and submit your application through{" "} */}
              <span>
                <Link
                  href="mailto:bugemahumanresource@gmail.com"
                  className="text-blue-500 "
                >
                  {/* bugemahumanresource@gmail.com{" "} */}

                </Link>
              </span>
              {/* <span className="font-semibold">
                Not Later than on the 15, July, 2024 at 5pm. Hardcopies shall

                not be accepted.
              </span>
            </p>
            <p className="mb-2">

              All applicants must attach relevant soft copies of academic
              transcripts, certificates and relevant appointment letters. <br />
              <span className="text-red-500">
                Note: PDF copies maximum 10MB.

              </span> */}
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
                Warden for Male Students
                </span>
              </h2>
              <h2 className="font-bold">
                Vacancies: <span className=" font-medium">01</span>
              </h2>
              <h2 className="font-bold">
                Responsilbe To:{" "}
                <span className=" font-medium">The Dean of Students&apos; Affairs.</span>
              </h2>
              <h2 className="font-bold">
                Terms of Employment:{" "}
                <span className=" font-medium">
                Three years&apos; renewable contract upon satisfactory performance
                </span>
              </h2>
            </div>

            <div className="py-4">
              <div className="py-2">
                <h1 className="text-xl font-semibold">Purpose of the Job</h1>

                <ul className="list-disc ml-10 mt-2">
                  <li>
                  Exceptional welfare services for students at all times.
                  </li>
                </ul>
              </div>

              <div className="py-2">
                <h1 className="text-xl font-semibold">
                  Minimum Qualifications
                </h1>

                <ul className="list-disc ml-10 mt-2">

                  <li>A mature, vibrant person aged between 30-50.</li>

                  <li>
                  A Bachelor&apos; degree in Education/Social Sciences/ Arts/ Humanities or a closely related discipline. Computer literacy is a must.
                  </li>
                  <li>
                  Subscription to Bugema University norms and core values is a must
                  </li>
                </ul>
                <h1 className="text-xl font-semibold">
                  Key Functions
                </h1>

                The Warden shall:
1.	Regularly inform appropriate authorities about students&apos; concerns.<br/>
2.	Keep records necessary for effectively administrating students&apos; affairs and making them available to appropriate authorities.<br/>
3.	Suggest plans for repairs, maintenance, and furnishing halls of residence.<br/>
4.	Direct and supervise the work of other employees who work in the halls of residence.<br/>
5.	Correspond and counsel, through the Dean of Students&apos; Affairs, with parents or sponsors of students under their supervision.<br/>
6.	Facilitate students&apos; activities such as devotional periods, prayer bands, and personal contacts.<br/>
7.	Arrange room reservations and room assignments for students.<br/>
8.	Instruct students on proper conduct, and relation with the opposite sex, and investigate reported irregularities.<br/>
9.	Approve applications of resident students to leave campus.<br/>
10.	Advise the students and provide other essential counseling services.<br/>
11.	Work with the University Health Services in ascertaining students&apos; physical needs and in encouraging good health habits.<br/>
12.	Refer those problem students who may need more specialized help to the University Counselor.<br/>
13.	Work with the Dean of Students&apos; Affairs in handling disciplinary cases.<br/>
14.	Perform any other duties that the Dean of Student Affairs may reasonably assign.<br/>

              </div>
            </div>
          </div>

        </div>

        <div className="container text-dark/90 py-5 bg-gray-100 rounded mt-2 md:mt-5">

          {/* Single Job card */}
          <div>
            <div className="flex flex-col gap-1 mx-auto text-blue-500">
              <h2 className="font-bold">
                Job Title:{" "}
                <span className="font-medium">
                Chief Security Officer
                </span>
              </h2>
              <h2 className="font-bold">
                Vacancies: <span className=" font-medium">01</span>
              </h2>
              <h2 className="font-bold">
                Responsilbe To:{" "}
                <span className=" font-medium">DVC-Finance and Administration</span>
              </h2>
              <h2 className="font-bold">
                Terms of Employment:{" "}
                <span className=" font-medium">
                Three years renewable contract upon satisfactory performance
                </span>
              </h2>

              
            </div>

            <div className="py-4">
              <div className="py-2">
                <h1 className="text-xl font-semibold">Purpose of the Job</h1>

                <ul className="list-disc ml-10 mt-2">
                  <li>
                  To be responsible for the security and safety of staff and students as well as property of all the university campuses.
                  </li>
                </ul>
              </div>

              <div className="py-2">
                <h1 className="text-xl font-semibold">
                  Minimum Qualifications
                </h1>

                <ul className="list-disc ml-10 mt-2">

                  <li>A mature, vibrant person aged between 35-50.</li>

                  <li>
                  A Bachelor&apos;s degree preferably in management or a related qualification.
                  </li>
                  <li>
                  Hands experience of at least five years in a security-related organization or a senior administrative position. A qualification in security-related courses or a qualification in Administrative Law shall be to an added advantage.
                  Communication, organization, decision-making, creativity, emotional intelligence, swiftness at work, and being keen on details are some of the required traits. 
                  A role model to all security guards and subscription to Bugema University norms and core values is a must. 

                  </li>
                  <li>
                  Subscription to Bugema University norms and core values is a must
                  </li>
                </ul>
                <h1 className="text-xl font-semibold">
                  Key Functions
                </h1>
                The Chief Security Officer shall:
1.	Daily assign work and deploy security personnel to all strategic locations. <br/>
2.	Monitor and supervise security guards to ensure that they execute their work. <br/>
3.	Draw out the daily work schedules for security personnel. <br/>
4.	Submit requisition for supply of security utilities through the Estates Manager.<br/>
5.	Submits weekly performance reports to the Estates Manager.<br/>
6.	Coordinate with Administrators and all staff members to ensure effective security.<br/>
7.	Train and orient newly recruited security personnel into the security department.<br/>
8.	Ensure and maintain discipline among security staff.<br/>
9.	Receive daily security reports from subordinates.<br/>
10.	Carry out any other duties as may be reasonably assigned by the Administration.<br/>

              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
