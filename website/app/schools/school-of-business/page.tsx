"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/Common/SectionTitle"
import School from "@/components/school/School"

const lecturers = [
  {
    name: "Dr. LUBOWA MARTIN",
    image: "/images/lecturers/lubowa-martin.JPG",
    qualification: "Ph.D. in Entrepreneurship",
  },
  {
    name: "Mrs. Birungi Grace",
    image: "/blank/blank_girl.jpg",
    qualification: "MMs in Financial Management, CPA",
  },
  {
    name: "Dr. Jeremiah Nyende",
    image: "/blank/blank.jpg",
    qualification: "Ph.D. ",
  },
]

export default function SchoolOfBusiness() {
  return (
    <div className="container mx-auto px-4 py-8">
      <School
        title="School of Business"
        subtitle="A leading business school dedicated to excellence and integrity"
        topImg={["/images/features/business.jpeg"]}
        dean="DR. LUBOWA MARTIN"
        deanImage="/images/lecturers/lubowa-martin.JPG"
        message="As business times evolve, so are the skills needed to run such environments. The school of business Bugema University is always evolving to meet the current business trends. We shall equip you with the necessary skills in the areas of accounting, procurement, and management. Your decision to join us is a perfect one. Looking forward to serving and preparing you for a better future."
        preamble="The School of Business believes in integrity and excellence in business dealings. It is dedicated to the education and development of individuals in the region and beyond. These will become business leaders of both private and public organizations through outstanding business-oriented research, instruction, and service. The school endeavors to train and produce human resources that are not only professionals but also morally upright."
        goal="To train efficient and effective future professionals who integrate integrity and sound business and organizational functions, combining knowledge with analytical and practical skills to accurately define problems, find viable solutions, and implement desirable decisions."
        lecturers={lecturers}
      />

      <SectionTitle 
        title="Departments In The Faculty" 
        paragraph="Explore our diverse range of departments and programs"
      />

      <Tabs defaultValue="accounting" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="accounting">Accounting and Finance</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
        </TabsList>
        <TabsContent value="accounting">
          <DepartmentContent
            description="The Department of Accounting and Finance prepares students for careers in financial management, accounting, and related fields. Our programs emphasize both theoretical knowledge and practical skills necessary for success in the modern business world."
            programs={[
              "Bachelor of Business Administration (Accounting)",
              "Bachelor of Science in Finance and Banking",
              "Bachelor of Science in Accounting",
              "Bachelor of Business Administration in Insurance",
              "Diploma in Accounting",
            ]}
            image="/images/nav/labs.jpg"
          />
        </TabsContent>
        <TabsContent value="management">
          <DepartmentContent
            description="The Department of Management offers a wide range of programs designed to develop future business leaders. Our curriculum focuses on developing critical thinking, problem-solving, and leadership skills essential for success in various management roles."
            programs={[
              "Bachelor of Secretarial Science and Office Administration",
              "Bachelor of Business Administration in Marketing",
              "Bachelor of Business Administration in Management",
              "Bachelor of Arts in Economics",
              "Bachelor of Entrepreneurship",
              "Bachelor of Procurement and Supply Chain Management",
              "Bachelor of Business Administration in Project Planning and Grant Management",
              "Bachelor of Human Resource Management",
              "Diploma in Management",
              "Diploma in Office Administration",
              "Diploma in Human Resource Management",
              "Diploma in Procurement and Supply Chain Management",
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
