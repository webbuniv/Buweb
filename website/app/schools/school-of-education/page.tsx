"use client"

import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/Common/SectionTitle"
import School from "@/components/school/School"

const lecturers = [
  {
    name: "Mr.Samuel Hafashimana",
    image: "/blank/blank.jpg",
    qualification: "Head of Department Arts Education",
  },
  {
    name: "Mr.Abel Magoola",
    image: "/blank/blank.jpg",
    qualification: "Head of Department Science Education",
  },
  {
    name: "Mr.Busiku Joseph",
    image: "/blank/blank.jpg",
    qualification: "Lecturer (Science Education)",
  },
  {
    name: "Mrs.Womeli Annet Mutaawe",
    image: "/blank/blank_girl.jpg",
    qualification: "Lecturer (Arts Education)",
  },
]

export default function SchoolOfEducation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <School
        title="School of Education"
        subtitle="Because We Are, The World Is..."
        topImg={["/images/schools/lab1.jpg"]}
        dean="DR. SSERUNJOGI CHARLES DICKENS"
        deanImage="/blank/blank.jpg"
        message="Having made a choice to join the school of education Bugema University, I take this opportunity to welcome you and assure you that you have made the best decision. As school of education, we look forward to serving you with a complete package."
        preamble="The School of Education believes that a true teacher is one that is mentally, physically and spiritually sound to impart the same virtues in his/her learners making them best suited for service to God and mankind in this world and in the world to come."
        goal="Train educators in the light of the Seventh day Adventist philosophy of education, which places emphasis on restoring the image of God in mankind through a harmonious development of the physical, mental, spiritual and social powers."
        lecturers={lecturers}
      />

      <SectionTitle
        title="Departments In The Faculty"
        paragraph="Explore our diverse range of departments and programs"
      />

      <Tabs defaultValue="social" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="social">Department Of Social Sciences</TabsTrigger>
          <TabsTrigger value="education">Department Of Education And Humanities</TabsTrigger>
        </TabsList>
        <TabsContent value="social">
          <DepartmentContent
            description="Our Department of Social Sciences prepares students for careers in various social science disciplines, focusing on understanding human behavior and society."
            programs={[
              "Bachelor of Humanitarian Emergency and Disaster Management",
              "Bachelor of Arts in Development Studies",
              "Bachelor of Arts in Community Development",
              "Bachelor of Arts in Peace and Conflict Management",
              "Bachelor of Journalism and Mass Communication",
              "Bachelor of Public Administration and Management",
              "Bachelor of Social Work and Social Administration",
              "Bachelor of Science in Psychology and Counselling",
              "Diploma in Journalism and Mass Communication",
              "Diploma in Development Studies",
              "Diploma in Social Work and Social Administration",
              "Diploma in Public Administration and Management",
              "Diploma in Counselling",
              "Certificate in Counselling",
            ]}
            image="/images/nav/labs.jpg"
          />
        </TabsContent>
        <TabsContent value="education">
          <DepartmentContent
            description="The Department of Education And Humanities focuses on preparing future educators and exploring the human experience through various humanities disciplines."
            programs={[
              "Bachelor of Arts or Science with Education-Secondary",
              "Bachelor of Arts or Science with Education-Primary",
              "Bachelor in Early Childhood Development",
              "Diploma in Education-Primary",
              "Diploma in Early Child Development (ECD)",
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

