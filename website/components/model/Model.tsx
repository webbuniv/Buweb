"use client"

import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BiX } from "react-icons/bi"

interface UniversityModalProps {
  isvisible: boolean
  onClose: () => void
  children?: React.ReactNode
}

type TabType = "schools" | "fees" | "why-bugema" | "staff"

export default function UniversityModal({ isvisible, onClose }: UniversityModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("schools")

  if (!isvisible) return null

  const handleClose = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 z-30 flex px-10 items-start justify-center pt-20  bg-gradient-to-br from-green-100 via-red-100 to-purple-200   fade-in duration-300">
      {/* Backdrop */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} /> */}

      {/* Modal Content */}
      <div
        className="relative w-[95%] mt-[2%]  h-[85vh]  bg-white rounded-2xl shadow-2xl overflow-hidden  slide-in-from-top-4 duration-500"
        // onMouseLeave={handleClose}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl" />
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute group right-1 top-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-gray-800 hover:scale-110"
        >
           <BiX className="text-3xl group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="flex h-full">
          {/* Left Sidebar - Navigation Tabs */}
          <div className="w-80 border-r border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8">
            <div className="space-y-4">
              {/* Schools Tab */}
              <button
                onClick={() => setActiveTab("schools")}
                className={`w-full text-left transition-all duration-300 ${
                  activeTab === "schools"
                    ? "text-4xl font-bold text-gray-900"
                    : "text-2xl font-semibold text-gray-400 hover:text-gray-600"
                }`}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    activeTab === "schools" ? "translate-x-2" : ""
                  }`}
                >
                  Schools
                </span>
              </button>

              {/* Fees Tab */}
              <button
                onClick={() => setActiveTab("fees")}
                className={`w-full text-left transition-all duration-300 ${
                  activeTab === "fees"
                    ? "text-3xl font-bold text-gray-900"
                    : "text-xl font-semibold text-gray-400 hover:text-gray-600"
                }`}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    activeTab === "fees" ? "translate-x-2" : ""
                  }`}
                >
                  Fees and Payments
                </span>
              </button>

              {/* Why Bugema Tab */}
              <button
                onClick={() => setActiveTab("why-bugema")}
                className={`w-full text-left transition-all duration-300 ${
                  activeTab === "why-bugema"
                    ? "text-3xl font-bold text-gray-900"
                    : "text-xl font-semibold text-gray-400 hover:text-gray-600"
                }`}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    activeTab === "why-bugema" ? "translate-x-2" : ""
                  }`}
                >
                  Why Bugema University
                </span>
              </button>

              {/* Staff Tab */}
              <button
                onClick={() => setActiveTab("staff")}
                className={`w-full text-left transition-all duration-300 ${
                  activeTab === "staff"
                    ? "text-3xl font-bold text-gray-900"
                    : "text-xl font-semibold text-gray-400 hover:text-gray-600"
                }`}
              >
                <span
                  className={`inline-block transition-transform duration-300 ${
                    activeTab === "staff" ? "translate-x-2" : ""
                  }`}
                >
                  Staff and Faculty
                </span>
              </button>
            </div>
          </div>

          {/* Center Content Area */}
          <div className="flex-1 overflow-y-auto p-12">
            {/* Schools Content */}
            {activeTab === "schools" && (
              <div className=" fade-in slide-in-from-bottom-4 duration-500">
                <ul className="space-y-4">
                  {[
                    {
                      title: "School of Graduate studies, Research & Publications",
                      href: "/schools/school-of-graduate",
                    },
                    { title: "School of Business", href: "/schools/school-of-business" },
                    { title: "School of Agriculture and Applied Sciences", href: "/schools/school-of-agric" },
                    { title: "School of Education", href: "/schools/school-of-education" },
                    { title: "School of Social sciences", href: "/schools/school-of-social" },
                    { title: "School of Theology and Religious Studies", href: "/schools/school-of-theology" },
                    { title: "School of Health and Allied Sciences", href: "/schools/school-of-health" },
                    { title: "School of Science and Technology", href: "/schools/school-of-science" },
                  ].map((school, index) => (
                    <li key={index} className="group">
                      <Link
                        href={school.href}
                        onClick={handleClose}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-900 hover:bg-gray-50 hover:shadow-md"
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600">{school.title}</span>
                        <FaArrowRight className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fees Content */}
            {activeTab === "fees" && (
              <div className=" fade-in slide-in-from-bottom-4 duration-500">
                <ul className="space-y-4">
                  {[
                    {
                      title: "Tuition Fees",
                      href: "https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx",
                    },
                    { title: "Funding Your Studies", href: "/work_program" },
                    { title: "NHCE Fees", href: "https://imis.unche.or.ug:81/frmTrnStudentPayment.aspx" },
                  ].map((item, index) => (
                    <li key={index} className="group">
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-900 hover:bg-gray-50 hover:shadow-md"
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600">{item.title}</span>
                        <FaArrowRight className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Bugema Content */}
            {activeTab === "why-bugema" && (
              <div className=" fade-in slide-in-from-bottom-4 duration-500">
                <ul className="space-y-4">
                  {[
                    { title: "Sports", href: "/sports/sports" },
                    { title: "Religion", href: "/religious/religious" },
                    { title: "Hospital", href: "/hospital" },
                  ].map((item, index) => (
                    <li key={index} className="group">
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-900 hover:bg-gray-50 hover:shadow-md"
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600">{item.title}</span>
                        <FaArrowRight className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Staff and Faculty Content */}
            {activeTab === "staff" && (
              <div className=" fade-in slide-in-from-bottom-4 duration-500">
                <ul className="space-y-4">
                  {[
                    { title: "School of Science and Technology", href: "/schools/school-of-science" },
                    { title: "School of Health and Allied Sciences", href: "/schools/school-of-health" },
                    { title: "School of Theology and Religious Studies", href: "/schools/school-of-theology" },
                    { title: "School of Agriculture and Applied Sciences", href: "/schools/school-of-agric" },
                    { title: "School of Business", href: "/schools/school-of-business" },
                    { title: "School of Education", href: "/schools/school-of-education" },
                    { title: "School of Social Sciences", href: "/schools/school-of-social" },
                    { title: "School of Graduate Studies", href: "/schools/school-of-graduate" },
                  ].map((school, index) => (
                    <li key={index} className="group">
                      <Link
                        href={school.href}
                        onClick={handleClose}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-900 hover:bg-gray-50 hover:shadow-md"
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600">{school.title}</span>
                        <FaArrowRight className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Sidebar - Image and Quick Actions */}
          <div className="w-96 border-l border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
            <div className="space-y-6">
              {/* Schools Image */}
              {activeTab === "schools" && (
                <div className=" fade-in slide-in-from-right-4 duration-500">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/nav/labs.jpg"
                      alt="Campus Labs"
                      width={350}
                      height={450}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      href="https://apply.bugemauniv.ac.ug"
                      className="group flex items-center justify-between rounded-full border-2 border-gray-900 bg-white px-4 py-3 transition-all hover:bg-gray-900 hover:text-white"
                    >
                      <span className="text-sm font-semibold">Apply now</span>
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="https://erms.bugemauniv.ac.ug/student/login/"
                      className="group flex items-center justify-between rounded-full border-2 border-gray-900 bg-white px-4 py-3 transition-all hover:bg-gray-900 hover:text-white"
                    >
                      <span className="text-sm font-semibold">Portal</span>
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="https://elearning.bugemauniv.ac.ug/"
                      className="group col-span-2 flex items-center justify-between rounded-full border-2 border-gray-900 bg-white px-4 py-3 transition-all hover:bg-gray-900 hover:text-white"
                    >
                      <span className="text-sm font-semibold">E-Learning</span>
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Fees Image */}
              {activeTab === "fees" && (
                <div className=" fade-in slide-in-from-right-4 duration-500">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/nav/IMG_9313.jpg"
                      alt="Campus View"
                      width={350}
                      height={450}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      href="https://res.cloudinary.com/duaqiajka/raw/upload/FEE_STRUCT_2022-2023_bnyls8.xlsx"
                      className="group flex items-center justify-between rounded-full border-2 border-gray-900 bg-white px-4 py-3 transition-all hover:bg-gray-900 hover:text-white"
                    >
                      <span className="text-sm font-semibold">Fees Structure</span>
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/watch?embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MTY0NTA2LDE2NDUwMw&v=GeIp_hgwlZc&feature=youtu.be"
                      target="_blank"
                      className="group flex items-center justify-between rounded-full border-2 border-gray-900 bg-white px-4 py-3 transition-all hover:bg-gray-900 hover:text-white"
                    >
                      <span className="text-sm font-semibold">How to apply</span>
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Why Bugema Image */}
              {activeTab === "why-bugema" && (
                <div className=" fade-in slide-in-from-right-4 duration-500">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/nav/bucosa.jpg"
                      alt="Student Life"
                      width={350}
                      height={450}
                      className="h-80 w-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Staff Image */}
              {activeTab === "staff" && (
                <div className=" fade-in slide-in-from-right-4 duration-500">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/nav/palm-girls.jpg"
                      alt="Campus Faculty"
                      width={350}
                      height={450}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/administrator"
                      onClick={handleClose}
                      className="group flex items-center justify-between rounded-lg bg-gray-900 px-4 py-4 text-white transition-all hover:bg-gray-800"
                    >
                      <span className="font-semibold">Administrators</span>
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
