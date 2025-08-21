"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SectionTitle from "@/components/Common/SectionTitle"
import School from "@/components/school/School"
import {getDeanBySchool} from "@/lib/actions/staff.actions"
import { staffItem } from "@/lib/types"



export default function SchoolOfSocialSciences() {
  const [activeTab, setActiveTab] = useState("social")

  const [dean, setDean] = useState<staffItem | null>(null);

        useEffect(()=>{
                const fetchDean = async () => {
                        const deanData = await getDeanBySchool("School of Social sciences");
                        setDean(deanData);
                }
                fetchDean();
        }, [])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    document.getElementById(tab)?.classList.remove("hidden")
    document.getElementById(`${tab}handler`)?.classList.add("active2")
    const otherTab = tab === "social" ? "education" : "social"
    document.getElementById(otherTab)?.classList.add("hidden")
    document.getElementById(`${otherTab}handler`)?.classList.remove("active2")
  }

  return (
    <div className="container-fluid">
      <School
        title="School of Social Sciences"
        subtitle="Impart in student-teachers knowledge and skills that will make them effective and efficient teachers in various levels of education."
        topImg={["/images/schools/ss-hero.jpg"]}
        dean={dean?.name}
        deanImage={dean?.photoUrl || "/blank/blank.jpg"}
        message="Having made a choice to join the school of education Bugema University, I take this opportunity to welcome you and assure you that you have made the best decision. As school of education, we look forward to serving you with a complete package."
        preamble="The School of Education believes that a true teacher is one that is mentally, physically and spiritually sound to impart the same virtues in his/her learners making them best suited for service to God and mankind in this world and in the world to come."
        goal="1. Train educators in the light of the Seventh day Adventist philosophy of education, which places emphasis on restoring the image of God in mankind through a harmonious development of the physical, mental, spiritual and social powers."
      />

      <div className="flex flex-col gap-2 justify-center mx-4">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className="flex flex-col gap-2  md:flex-row md:justify-center md:gap-[35%]">
          <div>
            <h1
              className="active2 text-xs font-bold text-body-color md:text-xl"
              id="socialhandler"
              style={{ cursor: "pointer" }}
              onClick={() => handleTabChange("social")}
            >
              Department Of Social development And Humanitarian Studies
            </h1>
          </div>
          <div>
            <h1
              className="text-body-color text-xs font-bold md:text-xl"
              id="educationhandler"
              style={{ cursor: "pointer" }}
              onClick={() => handleTabChange("education")}
            >
              Department Of Social Work And Counselling
            </h1>
          </div>
        </div>

        <DepartmentContent
          id="social"
          description="As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems."
          programs={[
            "Bachelor of Journalism and Mass Communication",
            "Bachelor of Arts in Community Development",
            "Diploma in Public Administration",
            "Bachelor of Humanitarian Emergency and Disaster Management",
            "Bachelor of Arts in Development Studies",
            "Diploma in Social Work and Social Administration",
            "Bachelor of Public Administration and Management",
          ]}
          image="/images/nav/labs.jpg"
        />

        <DepartmentContent
          id="education"
          description="As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems."
          programs={[
            "Diploma in Counselling",
            "Bachelor of Science in Psychology and Counselling",
            "Bachelor of Social Work and Social Administration",
            "Certificate in Counselling (UBTEB)",
          ]}
          image="/images/nav/labs.jpg"
          hidden={true}
        />
      </div>
    </div>
  )
}

function DepartmentContent({ id, description, programs, image, hidden = false }) {
  return (
    <div className={`my-5 px-1 flex flex-col md:flex-row justify-center gap-[5%] ${hidden ? "hidden" : ""}`} id={id}>
      <div className="bg-blue-100">
        <h1 className="px-2 py-5">{description}</h1>
        <h3
          className="mb-5 text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          style={{ color: "blue" }}
        >
          Programmes
        </h3>
        <div className="md:pl-2 mx-auto md:mx-0">
          <ul className="flex flex-col space-y-5">
            {programs.map((program, index) => (
              <Link key={index} href="http://erms.bugemauniv.ac.ug/application">
                <li className="relative group hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer p-2">
                  {program}
                  <span className="absolute left-0 top-full mt-2 hidden group-hover:block bg-blue-600 text-white text-sm px-3 py-1 rounded">
                    Apply Now
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Image
          src={image || "/placeholder.svg"}
          alt="Social Sciences facilities"
          width={1920}
          height={500}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

