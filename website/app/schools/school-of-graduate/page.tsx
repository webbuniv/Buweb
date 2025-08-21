"use client"

import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/Common/SectionTitle"
import School from "@/components/school/School"



export default function SchoolOfGraduateStudies() {
  return (
    <div className="container-fluid">
      <School
        title="School of Graduate Studies"
        subtitle="The School of Graduate Studies (SGS) is the administrative body of the graduate programs"
        topImg={["/images/features/grad.jpg"]}
        dean="PROF. ISRAEL KIBIRIGE"
        deanImage="/blank/blank.jpg"
        message="School of Graduate Studies at Bugema University offers advanced education and research in a novel process that creates knowledge looking at the bigger picture and probing the importance of discovering something new or facts chosen in the field of study. We are a self-sustaining graduate school producing skilled manpower for diverse development. Graduate students are the keystones of a vibrant, research-active university, threading together all aspects of campus life."
        preamble="Bugema University prides itself in offering relevant accredited and chartered graduate programs. The graduate courses offered at the university are well selected to meet the demands of students, and the satisfaction of stakeholders and society. Many of the activities of the graduate school are research based. Students are motivated to be creative enough to initiate research-based activities which are geared towards finding solutions to challenges of the community."
        goal="Provide access to post graduate studies to the community."
      />

      <SectionTitle title="Our Programs" paragraph="Explore our diverse range of graduate programs" />

      <Tabs defaultValue="phd" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="phd">PhD Programs</TabsTrigger>
          <TabsTrigger value="masters">Masters and Postgraduate Programs</TabsTrigger>
        </TabsList>
        <TabsContent value="phd">
          <DepartmentContent
            description="Our PhD programs offer advanced research opportunities in various fields, preparing scholars for leadership in academia and industry."
            programs={["PhD in Educational Management", "PhD in Environmental Management", "PhD in Rural Development"]}
            image="/images/nav/labs.jpg"
          />
        </TabsContent>
        <TabsContent value="masters">
          <DepartmentContent
            description="Our Masters and Postgraduate programs provide advanced knowledge and skills in various disciplines, preparing professionals for leadership roles in their fields."
            programs={[
              "Master of Public Administration and Management",
              "Master of Procurement and Logistics",
              "Master of Project Planning and Management",
              "Masters in Business Administration",
              "Masters in Education Management",
              "Masters of Science in Information Technology",
              "Master of Social Work",
              "Master of Science in Counseling Psychology",
              "Master of Arts in Development Studies",
              "Master of Public Health",
              "Postgraduate Diploma in Business Management",
              "Postgraduate Diploma in Information Technology",
              "Postgraduate Diploma in Public Administration and Management",
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
          <h3 className="text-lg font-semibold mb-2 text-primary">Programs</h3>
          <ul className="space-y-2">
            {programs.map((program, index) => (
              <li key={index}>
                <Link href="http://erms.bugemauniv.ac.ug/application" passHref>
                  <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                    {program}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-0">
          <Image
            src={image || "/placeholder.svg"}
            alt="Graduate Studies facilities"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  )
}

