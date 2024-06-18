import SectionTitle from "@/components/Common/SectionTitle";
import School from "@/components/school/School";
import React from "react";

export default function SchoolOfGraduate() {
  return (
    <div>
      <section className="my-20 mt-36 mx-10">
        <School
          dean="PROF. ISRAEL KIBIRIGE"
          deanImage={"/images/blog/author-03.png"}
          message="School of Graduate Studies at Bugema University offers advanced education and research in a novel process that creates knowledge looking at the bigger picture and probing the importance of discovering something new or facts chosen in the field of study. We are a self-sustaining graduate school producing skilled manpower for diverse development. And this runs along with the reason of your being here. At this level we expect you to gain higher level skills and more specialized understanding of your subject area. Graduate students are the keystones of a vibrant, research active university, threading together all aspects of campus life. Every day of graduate life is diverse and full of challenges, including teaching, conducting research, performing, writing, serving, and, yes, recreating. Graduate students are expected to be self-reliant, responsible for what you do and for insuring that you do the work that will be required of you. While we expect you to assume a new level of responsibility, please realize that you are not alone. If you find things difficult do not run away; please seek help. We encourage the faculty and the students to engage in social and scientific research aimed to enhance the development of society and its institutions. We reach out to the community, through direct and indirect communication, to disseminate information acquired by means of instruction and research through seminars, conferences, workshops, and different community service and spiritual programs. With the above obligation, I imagined a situation where graduate students display their skills to carry out quality research in order to meet their objectives. Thank you for your interest in graduate education at Bugema University. We hope that you will enjoy the opportunities to broaden your knowledge and grow with us. Best wishes, Dr. Rosette Kabuye Dean, School of Graduate Studies Bugema University."
          preamble="Bugema University prides itself in offering relevant accredited and chartered graduate programs. The graduate courses offered at the university are well selected to meet the demands of students, and the satisfaction of stakeholders and society. Many of the activities of the graduate school are research based. Students are motivated to be creative enough to initiate research-based activities which are geared towards finding solutions to challenges of the community.
        "
          goal="Provide access to post graduate studies to the community."
        />
      </section>

      <div className="flex flex-col items-start mx-auto md:pl-28">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className='md:pl-2 mx-auto md:mx-0'>
          <ul className='flex flex-col space-y-5 text-body-color'>
            <li>Currently One Department In The faculty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
