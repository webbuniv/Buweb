"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/Common/SectionTitle"
import School from "@/components/school/School"

const lecturers = [
  {
    name: "Mr. Muwanga Kosea Erasto",
    image: "/images/lecturers/kasibe.JPG",
    qualification: "HOD. Computing and Informatics ",
  },
  {
    name: "Mr. Kasibe Isima Isaiah",
    image: "/images/lecturers/kosea.JPG",
    qualification: "HOD. Life and Physical Sciences",
  },
  {
    name: "Dr. Opio Peter",
    image: "/blank/blank.jpg",
    qualification: "Lecturer (Life and Physical)",
  },
  {
    name: "Mrs. Nantege Hellen",
    image: "/blank/blank_girl.jpg",
    qualification: "Lecturer (Computing and Informatics)",
  },
  // Add more lecturers as needed
]

export default function SchoolOfScience() {
  return (
    <div className="container mx-auto px-4 py-8 mt-14">
      <School
        title="School of Science and Technology"
        subtitle="Empowering Innovative Minds for Tomorrow's Challenges"
        topImg={[
          "/images/schools/lab1.jpg",
          "/images/nav/labs.jpg",
          "/images/schools/computer-lab.jpg",
          "/images/schools/science-experiment.jpg",
        ]}
        dean="DR. NAGWOVUMA MARGARET"
        deanImage="/blank/blank_girl.jpg"
        message="As technology evolves, so are our teaching approaches. We prepare you for current and future industrial revolutions, making you ready to solve tomorrow's challenges."
        preamble="The School of Science and Technology prepares professionals to harness the potential of computer and information sciences to provide relevant solutions. Our faculty and students are engaged in ongoing research projects and development of computer solutions in areas of education, health, public administration, information management, e-commerce, and agriculture."
        goal="Empowering Innovative Minds"
        lecturers={lecturers}
      />

      <SectionTitle
        title="Our Departments"
        paragraph="Explore our diverse range of departments and cutting-edge programs"
        
      />

      <Tabs defaultValue="computing" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="computing">Computing and Informatics</TabsTrigger>
          <TabsTrigger value="physical">Life and Physical Sciences</TabsTrigger>
        </TabsList>
        <TabsContent value="computing">
          <DepartmentContent
            description="We prepare you for current and future industrial revolutions, making you ready to solve tomorrow's challenges in the world of computing and informatics."
            programs={[
              "Bachelor of Business Computing",
              "Bachelor of Information Technology",
              "Bachelor of Library and Information Science",
              "Bachelor of Science in Software Engineering",
              "Bachelor of Science in Network Systems Administration",
              "Diploma in Information Technology",
              "Diploma in Computer Forensics",
              "Certificate in Information Technology (UBTEB)",
            ]}
            image="/images/nav/labs.jpg"
          />
        </TabsContent>
        <TabsContent value="physical">
          <DepartmentContent
            description="Our Life and Physical Sciences department focuses on cutting-edge research and practical applications in biochemistry, statistics, and laboratory technology."
            programs={[
              "Bachelor of Science in Biochemistry",
              "Bachelor of Science in Statistics",
              "Diploma in Science Laboratory Technology",
              "Diploma in Biomedical Engineering and Technology",
            ]}
            image="/images/nav/labs.jpg"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DepartmentContent({ description, programs, image }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <p className="mb-4 text-muted-foreground">{description}</p>
          <h3 className="text-lg font-semibold mb-2">Programs</h3>
          <ul className="space-y-2">
            {programs.map((program, index) => (
              <li key={index}>
                <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                  {program}
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0">
          <Image
            src={image || "/placeholder.svg"}
            alt="Department facilities"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  )
}

