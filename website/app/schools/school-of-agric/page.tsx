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
    name: "Dr. Ben Belden Mugula",
    image: "/blank/blank.jpg",
    qualification: "Head of Department Agricultural and Environmental Sciences",
  },
  {
    name: "Mr. Amos Asiimwe",
    image: "/blank/blank.jpg",
    qualification: "Master of Science in Applied Human Nutrition",
  },
  {
    name: "Ms. Namwanje Mary",
    image: "/blank/blank_girl.jpg",
    qualification: "Master of Science in Applied Human Nutrition",
  },
  {
    name: "Ms. Christinah Nuwahereza",
    image: "/blank/blank_girl.jpg",
    qualification: "Masters in Public Health Nutrition",
  },
]

export default function SchoolOfAgric() {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <School
        title="School of Agriculture and Applied Sciences"
        subtitle="Training scientists and technicians for varying global environments"
        topImg={["/images/schools/agric.jpg"]}
        dean="ASSOC. PROF. PAUL NAMPALA"
        deanImage="/images/lecturers/nampala.JPG"
        message="Welcome to the School of Agricultural and Applied Sciences, the niche of Bugema University. We continue to make astronomical steps in working with local rural communities to positively change their livelihoods with minimal impact on the environment. We welcome both students and faculty who wish to learn, exchange knowledge, and collaborate with other faculties around the world to meet global sustainable development goals and ensure the future of humanity."
        preamble="Agriculture contributes over 25% directly and 29% indirectly to Uganda's GDP and provides income to over 75% of Ugandans. Modern agriculture is complex, requiring specialized professionals who can be producers and provide skills for research, innovation, and management of crises in agriculture. Our programs are designed to address specific setbacks to sustainable agricultural productivity and national development through training and producing graduates with specialized skills in various agricultural fields."
        goal="The Land a Resource"
        lecturers={lecturers}
      />

      <SectionTitle
        title="Departments In The Faculty"
        paragraph="Explore our diverse range of departments and programs"
      />

      <Tabs defaultValue="agricultural" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="agricultural">Agricultural Sciences</TabsTrigger>
          <TabsTrigger value="environmental">Environmental and Applied Sciences</TabsTrigger>
        </TabsList>
        <TabsContent value="agricultural">
          <DepartmentContent
            description="Our Department of Agricultural Sciences prepares students for the current and future challenges in agriculture. We focus on sustainable practices and innovative technologies to improve agricultural productivity and food security."
            programs={[
              "Bachelor of Science in Agriculture with options",
              "Bachelor of Science in Agribusiness Innovation and Management",
              "Diploma in Crop Science and Management",
              "Diploma in Animal Production and Management",
              "Certificate in Agriculture",
            ]}
            image="/images/nav/labs.jpg"
          />
        </TabsContent>
        <TabsContent value="environmental">
          <DepartmentContent
            description="The Department of Environmental and Applied Sciences focuses on the intersection of environmental science, food technology, and human nutrition. We prepare students to address global challenges related to environmental sustainability and food security."
            programs={[
              "Bachelor of Science in Environmental Science",
              "Bachelor of Science in Food Technology and Human Nutrition",
              "Diploma in Food Science and Processing Technology",
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
