"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SectionTitle from "@/components/Common/SectionTitle"
import School from "@/components/school/School"


export default function SchoolOfTheology() {
  const [activeTab, setActiveTab] = useState("theology")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    document.getElementById(tab)?.classList.remove("hidden")
    document.getElementById(`${tab}handler`)?.classList.add("active2")
    const otherTab = tab === "theology" ? "religious" : "theology"
    document.getElementById(otherTab)?.classList.add("hidden")
    document.getElementById(`${otherTab}handler`)?.classList.remove("active2")
  }

  return (
    <div className="container-fluid">
      <School
        title="School of Theology"
        subtitle="The School of Theology is a place where students can learn about the Bible and theology"
        topImg={["/images/schools/theology.jpg"]}
        dean="DR ANTHONY ACHIGA"
        deanImage="/images/schools/Achiga.jpg"
        message="The School of Theology and Religious Studies believes that God is the Creator and Sustainer of the universe. In love He sent His Son Jesus Christ to atone for the sins of humanity. The same God has commissioned us to advance His work by pointing fallen human beings to the great sacrifice at Calvary in preparation for the return of our Lord and Savior Jesus Christ."
        preamble="The school of Theology and Religious Studies exists to provide spiritual, academic, physical and social development in preparing pastors, evangelists, teachers, counselors, chaplains, leaders, community development promoters and others, for excellence in service of the Seventh-day Adventist Church and the world community. Areas of emphasis include the following: proclamation of the three angels message (Revelation 14:6-12), biblical based education, research and publication, and field practical skills."
        goal="I Will Go."
      />

      <div className="flex flex-col gap-2 justify-center mx-4">
        <div className="md:pl-2">
          <SectionTitle title="Departments In The Faculty" paragraph="" />
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-[35%]">
          <div>
            <h1
              className="active2 text-xs font-bold text-body-color md:text-xl"
              id="theologyhandler"
              style={{ cursor: "pointer" }}
              onClick={() => handleTabChange("theology")}
            >
              Department Of Theology
            </h1>
          </div>
          <div>
            <h1
              className="text-body-color text-xs font-bold md:text-xl"
              id="religioushandler"
              style={{ cursor: "pointer" }}
              onClick={() => handleTabChange("religious")}
            >
              Department Of Religious Studies
            </h1>
          </div>
        </div>

        <DepartmentContent
          id="theology"
          description="As technology evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems."
          programs={["Bachelor of Theology", "Diploma of Theology", "Certificate of Theology"]}
          image="/images/nav/labs.jpg"
        />

        <DepartmentContent
          id="religious"
          description="As Physical evolves, so are the teaching approaches. I take the opportunity to welcome you to the school of Science and Technology Bugema University. We shall make you ready for the current and next industrial revolutions to make the planet a better place to live in. Be ready to take on the current challenges to solve the future problems."
          programs={[
            "Bachelor of Arts in Religious with Options",
            "Development ministry",
            "Chaplaincy",
            "Evangelism And Church Growth",
            "Urban Ministry",
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
          alt="Theology facilities"
          width={1920}
          height={500}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

