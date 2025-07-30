"use client"

import { useState, useEffect } from "react"
import { startCrawl, getPageCount, getUniversityPrograms } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, GraduationCap, BookOpen, Users, Mail, Building } from "lucide-react"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [pageCount, setPageCount] = useState(0)
  const [programCount, setProgramCount] = useState(0)

  useEffect(() => {
    // Get initial page count
    getPageCount().then(setPageCount)

    // Get program count
    getUniversityPrograms().then((programs) => {
      setProgramCount(programs.length)
    })
  }, [])

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setMessage(null)

    try {
      const result = await startCrawl(formData)

      if (result.success) {
        setMessage({ type: "success", text: result.message })
      } else {
        setMessage({ type: "error", text: result.message })
      }

      // Update page count
      const count = await getPageCount()
      setPageCount(count)

      // Update program count
      const programs = await getUniversityPrograms()
      setProgramCount(programs.length)
    } catch (error) {
      setMessage({
        type: "error",
        text: `An unexpected error occurred: ${(error as Error).message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#00205B] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap size={32} />
              <h1 className="text-2xl font-bold">Bugema University</h1>
            </div>
            <p className="text-sm">Chatbot Administration</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6">Website Crawler Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Crawl Bugema University Website</CardTitle>
              <CardDescription>
                Enter the starting URL and we&apos;ll crawl the website to build a knowledge base for the chatbot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="startUrl" className="block text-sm font-medium mb-1">
                    Start URL
                  </label>
                  <Input
                    id="startUrl"
                    name="startUrl"
                    type="url"
                    placeholder="https://bugemauniv.ac.ug"
                    defaultValue="https://bugemauniv.ac.ug"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="maxPages" className="block text-sm font-medium mb-1">
                    Maximum Pages
                  </label>
                  <Input id="maxPages" name="maxPages" type="number" defaultValue="50" min="1" max="500" />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full bg-[#00205B] hover:bg-blue-900">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Crawling...
                    </>
                  ) : (
                    "Start Crawling"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Crawl Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold">{pageCount}</div>
                    <div className="text-sm text-gray-500">Pages indexed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{programCount}</div>
                    <div className="text-sm text-gray-500">Programs found</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  <strong>Email:</strong> info@bugemauniv.ac.ug
                </p>
                <p className="text-sm">
                  <strong>Phone:</strong> +256-312-351400
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {message && (
          <Alert className="mb-8" variant={message.type === "error" ? "destructive" : "default"}>
            <AlertTitle>{message.type === "success" ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{message.text}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Chatbot Configuration
            </CardTitle>
            <CardDescription>Customize how the chatbot responds to user queries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Welcome Message</label>
                <Input defaultValue="Hello! Welcome to Bugema University. How can I help you today?" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Chatbot Name</label>
                <Input defaultValue="Bugema University Assistant" />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="showSources" defaultChecked />
                <label htmlFor="showSources" className="text-sm">
                  Show information sources in responses
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="quickButtons" defaultChecked />
                <label htmlFor="quickButtons" className="text-sm">
                  Show quick access buttons
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-[#00205B] hover:bg-blue-900">Save Configuration</Button>
          </CardFooter>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Academic Programs Overview
            </CardTitle>
            <CardDescription>Summary of programs offered at Bugema University</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-700">15+</div>
                <div className="text-sm font-medium">Undergraduate Programs</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-700">10+</div>
                <div className="text-sm font-medium">Graduate Programs</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-700">3+</div>
                <div className="text-sm font-medium">PhD Programs</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-700">5+</div>
                <div className="text-sm font-medium">Diploma Programs</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-700">3+</div>
                <div className="text-sm font-medium">Certificate Programs</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Schools and Departments</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>School of Business: Accounting, Finance, Management, Marketing</li>
                <li>School of Science and Technology: Computing, Informatics, Life Sciences</li>
                <li>School of Education: Arts, Science, Languages</li>
                <li>School of Social Sciences: Development Studies, Social Work, Theology</li>
                <li>School of Natural Sciences: Agriculture, Food Science, Nutrition</li>
                <li>School of Graduate Studies: Coordinating all postgraduate programs</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="mr-2 h-5 w-5" />
              Campus Facilities
            </CardTitle>
            <CardDescription>Overview of facilities available at Bugema University</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-2">Academic Facilities</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Modern Library with extensive resources</li>
                  <li>Computer Labs with internet access</li>
                  <li>Science Laboratories</li>
                  <li>Conference Center</li>
                  <li>Agricultural Farm for practical training</li>
                </ul>
              </div>

              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-2">Residential Facilities</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Male Dormitories</li>
                  <li>Female Dormitories</li>
                  <li>University Cafeteria</li>
                  <li>Student Center</li>
                  <li>Health Center</li>
                </ul>
              </div>

              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-2">Recreational Facilities</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Sports Complex</li>
                  <li>Football Field</li>
                  <li>Basketball Court</li>
                  <li>Volleyball Court</li>
                  <li>Indoor Sports Facilities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

