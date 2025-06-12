"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SectionTitle from "@/components/Common/SectionTitle"
import School from "@/components/school/School"
import { Calendar, GraduationCap, HeartPulse, Stethoscope, Users, Award, BookOpen } from "lucide-react"

const lecturers = [
  
  {
    name: "Mrs.Jackline Nakimuli",
    image: "/images/lecturers/robert-mukasa.jpg",
    qualification: "Head of Department Nursing and Midwifery",
  },
  {
    name: "Mrs.Agnes Katusabe",
    image: "/images/lecturers/jane-nambi.jpg",
    qualification: "Principal (Certificate and Diploma)",
  },
  {
    name: "Mr.Awio Alex",
    image: "/images/lecturers/michael-ssekandi.jpg",
    qualification: "Lecturer (Diploma in Nursing)",
  },
]

const testimonials = [
  {
    name: "Grace Auma",
    role: "BSc Nursing Graduate, 2022",
    content:
      "The School of Health at Bugema University provided me with both theoretical knowledge and practical skills that prepared me for my career in nursing. The hands-on clinical experiences were invaluable.",
    avatar: "/images/testimonials/grace-auma.jpg",
  },
  {
    name: "David Okello",
    role: "MPH Graduate, 2021",
    content:
      "The Master of Public Health program equipped me with the skills to address complex health challenges in our communities. The faculty's expertise and mentorship were exceptional.",
    avatar: "/images/testimonials/david-okello.jpg",
  },
  {
    name: "Sarah Namukasa",
    role: "BSc Public Health Graduate, 2023",
    content:
      "Studying at the School of Health opened doors to numerous opportunities in the health sector. The community outreach programs gave me practical experience in addressing real-world health issues.",
    avatar: "/images/testimonials/sarah-namukasa.jpg",
  },
]

const facilities = [
  {
    title: "Simulation Labs",
    description: "State-of-the-art simulation labs that mimic real healthcare settings for practical training",
    image: "/images/facilities/simulation-lab.jpg",
  },
  {
    title: "Research Center",
    description: "Advanced research facilities for health sciences research and innovation",
    image: "/images/facilities/research-center.jpg",
  },
  {
    title: "Community Health Center",
    description: "On-campus health center providing services to the community while training students",
    image: "/images/facilities/community-health-center.jpg",
  },
  {
    title: "Digital Library",
    description: "Comprehensive digital library with access to international health journals and resources",
    image: "/images/facilities/digital-library.jpg",
  },
]

const stats = [
  { value: "95%", label: "Graduate Employment Rate", icon: <GraduationCap className="h-4 w-4" /> },
  { value: "25+", label: "Partner Hospitals", icon: <HeartPulse className="h-4 w-4" /> },
  { value: "50+", label: "Research Publications Annually", icon: <BookOpen className="h-4 w-4" /> },
  { value: "2000+", label: "Alumni in Healthcare", icon: <Users className="h-4 w-4" /> },
]

const faqs = [
  {
    question: "What accreditations does the School of Health have?",
    answer:
      "The School of Health at Bugema University is fully accredited by the National Council for Higher Education (NCHE) and various professional bodies including the Uganda Nurses and Midwives Council, the Allied Health Professionals Council, and other relevant international accreditation bodies.",
  },
  {
    question: "Are there opportunities for clinical practice?",
    answer:
      "Yes, all our health programs include extensive clinical practice components. We have partnerships with over 25 hospitals, health centers, and community health organizations where students gain hands-on experience under supervision.",
  },
  {
    question: "What research opportunities are available for students?",
    answer:
      "Students can participate in faculty-led research projects, apply for research assistantships, and conduct their own research with faculty mentorship. We have dedicated research funding for student projects and opportunities to present at national and international conferences.",
  },
  {
    question: "Are there scholarships available for health science students?",
    answer:
      "Yes, we offer various scholarships specifically for health science students, including merit-based scholarships, need-based financial aid, and special scholarships for students committed to serving in underserved communities after graduation.",
  },
  {
    question: "What career support services are available?",
    answer:
      "Our Career Development Center provides specialized support for health science students, including resume building, interview preparation, clinical placement assistance, and connections with potential employers. We also host healthcare career fairs twice a year.",
  },
]

export default function SchoolOfHealth() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      <School
        title="School of Health"
        subtitle="Developing compassionate healthcare professionals through excellence in education, research, and service"
        topImg={["https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67d1473b0039984aef2f/view?project=674dcf7b003d57db960a&mode=admin"]}
        dean="MR.MICHEAL W. KHAYEMBA"
        deanImage="/images/deans/sarah-nakimera.jpg"
        message="The School of Health at Bugema University is dedicated to preparing healthcare professionals who combine clinical excellence with compassionate care. Our innovative curriculum integrates theoretical knowledge with practical skills, ensuring our graduates are ready to address the complex health challenges of our communities and beyond. We are committed to advancing health equity through education, research, and service."
        preamble=""
        goal=""
        lecturers={lecturers}
      />

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-primary/10 p-2 rounded-full">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-black">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <SectionTitle
        title="Our Programs"
        paragraph="Comprehensive health education programs designed to meet the evolving needs of healthcare"
      />

      <Tabs defaultValue="undergraduate" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="undergraduate">Undergraduate Programs</TabsTrigger>
          <TabsTrigger value="graduate">Graduate Programs</TabsTrigger>
        </TabsList>
        <TabsContent value="undergraduate">
          <DepartmentContent
            description="Our undergraduate programs provide a strong foundation in health sciences, combining theoretical knowledge with practical skills development through clinical placements and community engagement."
            programs={[
              "Bachelor of Nursing Science",
              "Certificate in Nursing",
              "Bachelor of Science in in Nursing Course Descriptions",
              "Diploma in Nursing Extension",
              "Diploma in Nursing",
              "Diploma in Nursing Course Descriptions",
              "Certificate in Nursing Course Descriptions",
            ]}
            image="https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67d1473b0039984aef2f/view?project=674dcf7b003d57db960a&mode=admin"
          />
        </TabsContent>
        <TabsContent value="graduate">
          <DepartmentContent
            description="Our graduate programs offer advanced specialization in various health disciplines, preparing professionals for leadership roles in healthcare practice, administration, education, and research."
            programs={[
              "",
            ]}
            image="https://cloud.appwrite.io/v1/storage/buckets/676995bd003a7bc1e278/files/67d1473b0039984aef2f/view?project=674dcf7b003d57db960a&mode=admin"
          />
        </TabsContent>
      </Tabs>

      {/* Facilities Carousel */}
      <div className="my-16">
        <SectionTitle
          title="Our Facilities"
          paragraph="State-of-the-art facilities designed to provide optimal learning experiences"
        />

        <Carousel className="mt-8">
          <CarouselContent>
            {facilities.map((facility, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-0">
                    <Image
                      src={facility.image || "/placeholder.svg?height=200&width=300"}
                      alt={facility.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded-t-md"
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{facility.title}</CardTitle>
                    <CardDescription>{facility.description}</CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Departments Section */}
      <div className="my-16">
        <SectionTitle
          title="Our Departments"
          paragraph="Specialized departments focused on different aspects of healthcare education and research"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <DepartmentCard
            title="Department of Nursing"
            description="Focuses on developing skilled nurses through comprehensive theoretical and practical training."
            icon={<Stethoscope className="h-6 w-6" />}
            programs={["BSc Nursing", "Diploma in Nursing", "MSc Nursing"]}
          />

          <DepartmentCard
            title="Department of Public Health"
            description="Dedicated to training professionals who can address population health challenges through prevention and health promotion."
            icon={<Users className="h-6 w-6" />}
            programs={["BSc Public Health", "MPH", "MSc Epidemiology"]}
          />

          <DepartmentCard
            title="Department of Allied Health Sciences"
            description="Covers various health disciplines including laboratory sciences, nutrition, and rehabilitation."
            icon={<HeartPulse className="h-6 w-6" />}
            programs={["BSc Medical Laboratory Technology", "BSc Nutrition and Dietetics"]}
          />

          <DepartmentCard
            title="Department of Health Informatics"
            description="Focuses on the intersection of healthcare and information technology."
            icon={<Calendar className="h-6 w-6" />}
            programs={["BSc Health Informatics", "Master of Health Informatics"]}
          />

          <DepartmentCard
            title="Department of Environmental Health"
            description="Addresses the environmental factors that affect human health and well-being."
            icon={<Award className="h-6 w-6" />}
            programs={["BSc Environmental Health Science", "MSc Global Health"]}
          />

          <DepartmentCard
            title="Department of Continuing Health Education"
            description="Provides ongoing professional development for healthcare practitioners."
            icon={<BookOpen className="h-6 w-6" />}
            programs={["Short Courses", "Professional Development Programs"]}
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="my-16 bg-muted/50 py-12 px-6 rounded-lg">
        <SectionTitle
          title="Student Testimonials"
          paragraph="Hear from our graduates about their experiences at the School of Health"
        />

        <div className="mt-8 relative">
          <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${activeTestimonial === index ? "opacity-100" : "opacity-0 absolute top-0 left-0 right-0"}`}
              >
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage
                          src={testimonial.avatar || "/placeholder.svg?height=80&width=80"}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-lg italic mb-4">"{testimonial.content}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`rounded-full p-1 h-3 w-3 ${activeTestimonial === index ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => setActiveTestimonial(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="my-16">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph="Find answers to common questions about the School of Health"
        />

        <Accordion type="single" collapsible className="mt-8 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="my-16 bg-primary text-black-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey in Healthcare?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our community of healthcare professionals and make a difference in the lives of individuals and
          communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link href="http://erms.bugemauniv.ac.ug/application">Apply Now</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-primary-foreground text-black hover:bg-primary-foreground hover:text-black"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function DepartmentContent({ description, programs, image }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <p className="mb-4 text-muted-foreground">{description}</p>
          <h3 className="text-lg font-semibold mb-2 text-black">Programs</h3>
          <ul className="space-y-2">
            {programs.map((program, index) => (
              <li key={index} className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-black" />
                <Link href="http://erms.bugemauniv.ac.ug/application" passHref>
                  <Button variant="link" className="p-0 h-auto text-black hover:underline">
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
            src={image || "/placeholder.svg?height=400&width=600"}
            alt="Health program facilities"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  )
}

function DepartmentCard({ title, description, icon, programs }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full text-black">{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-medium mb-2">Featured Programs:</h4>
        <div className="flex flex-wrap gap-2">
          {programs.map((program, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {program}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="http://erms.bugemauniv.ac.ug/application">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

