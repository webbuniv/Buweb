"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Printer, Download, ArrowLeft, MapPin, Phone, Mail, Globe } from "lucide-react"

export default function PrintConsentForm({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    id: params.id,
    name: "",
    email: "",
    regNo: "",
    date: "",
    consent: "",
    submitted: "",
  })

  // Set data-route attribute on body for CSS targeting
  useEffect(() => {
    document.body.setAttribute("data-route", "print-consent")
    return () => {
      document.body.removeAttribute("data-route")
    }
  }, [])

  useEffect(() => {
    setFormData({
      id: params.id,
      name: searchParams.get("name") || "",
      email: searchParams.get("email") || "",
      regNo: searchParams.get("regNo") || "",
      date: searchParams.get("date") || "",
      consent: searchParams.get("consent") || "",
      submitted: searchParams.get("submitted") || "",
    })
  }, [params.id, searchParams])

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    // Trigger print dialog which allows saving as PDF
    window.print()
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button onClick={handleGoBack} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-lg font-semibold text-gray-900">Media Consent Form - {formData.id}</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button onClick={handleDownloadPDF} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Save as PDF
              </Button>
              <Button onClick={handlePrint} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Printer className="w-4 h-4 mr-2" />
                Print Form
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Printable Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-0 print:max-w-none">
        <div className="bg-white shadow-lg print:shadow-none print:border-0 border rounded-lg overflow-hidden">
          {/* Official Header with University Details */}
          <div className="bg-white border-b-4 border-blue-600 p-8 print:border-b-2">
            <div className="flex items-center justify-between mb-6">
              {/* University Logo/Emblem Area */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">BU</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">BUGEMA UNIVERSITY</h1>
                  <p className="text-lg text-blue-600 font-semibold">MEDIA CONSENT FORM</p>
                </div>
              </div>

              {/* University Contact Information */}
              <div className="text-right text-sm text-gray-700 space-y-1">
                <div className="flex items-center justify-end space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>P.O. Box 6529, Kampala, Uganda</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Luwero District, Central Uganda</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+256 414 540 278</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>info@bugema.ac.ug</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>www.bugema.ac.ug</span>
                </div>
              </div>
            </div>

            {/* Form ID and Date */}
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-600">Form Reference ID:</span>
                  <span className="ml-2 font-bold text-blue-600">{formData.id}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Date Processed:</span>
                  <span className="ml-2 font-bold text-gray-900">{formData.submitted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">OFFICIAL MEDIA CONSENT DOCUMENT</h2>
              <p className="text-gray-600">
                This document serves as official consent for media usage by Bugema University
              </p>
            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  1
                </span>
                PERSONAL INFORMATION
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Full Legal Name:</label>
                      <div className="border-b-2 border-gray-300 pb-2">
                        <span className="text-lg font-semibold text-gray-900">{formData.name}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Email Address:</label>
                      <div className="border-b-2 border-gray-300 pb-2">
                        <span className="text-gray-900">{formData.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {formData.regNo && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Registration Number:</label>
                        <div className="border-b-2 border-gray-300 pb-2">
                          <span className="text-lg font-semibold text-gray-900">{formData.regNo}</span>
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Date of Consent:</label>
                      <div className="border-b-2 border-gray-300 pb-2">
                        <span className="text-lg font-semibold text-gray-900">{formData.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consent Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500 flex items-center">
                <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  2
                </span>
                CONSENT DETAILS & AUTHORIZATION
              </h3>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  I hereby grant permission for the following media usage:
                </p>
                <div className="bg-white p-4 rounded border">
                  <p className="text-gray-800 leading-relaxed font-medium">{formData.consent}</p>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-green-500 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  3
                </span>
                TERMS & CONDITIONS AGREEMENT
              </h3>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium mb-2">
                      I agree to the terms and conditions for media usage by Bugema University
                    </p>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• I understand this consent covers promotional and marketing materials</p>
                      <p>• I acknowledge usage across various media platforms including digital and print</p>
                      <p>• I confirm this consent is given voluntarily without coercion</p>
                      <p>• I understand I can revoke this consent by contacting the university in writing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-500 flex items-center">
                <span className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  4
                </span>
                DIGITAL SIGNATURE & VERIFICATION
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Participant Signature:</label>
                    <div className="border-b-2 border-gray-800 pb-4 mb-2">
                      <p className="text-xl font-bold text-gray-900">{formData.name}</p>
                    </div>
                    <p className="text-sm text-gray-600">Digital Signature (Electronically Verified)</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Date & Time Signed:</label>
                    <div className="border-b-2 border-gray-800 pb-4 mb-2">
                      <p className="text-lg font-bold text-gray-900">{formData.submitted}</p>
                    </div>
                    <p className="text-sm text-gray-600">Timestamp (System Generated)</p>
                  </div>
                </div>

                {/* Verification Stamp */}
                <div className="mt-6 text-center">
                  <div className="inline-block border-2 border-blue-600 rounded-lg p-4 bg-blue-50">
                    <p className="text-blue-800 font-bold text-sm">DIGITALLY VERIFIED</p>
                    <p className="text-blue-600 text-xs">Bugema University Media Department</p>
                    <p className="text-blue-600 text-xs">Form ID: {formData.id}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Footer */}
            <div className="border-t-2 border-gray-300 pt-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-blue-900 text-lg">BUGEMA UNIVERSITY MEDIA DEPARTMENT</h4>
                  <p className="text-blue-700 text-sm">Official Media Consent Processing Center</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
                  <div>
                    <p className="font-semibold mb-1">Contact Information:</p>
                    <p>Email: media@bugema.ac.ug</p>
                    <p>Phone: +256 414 540 278</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Office Hours:</p>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Document Status:</p>
                    <p>Processed: {formData.submitted}</p>
                    <p>Status: APPROVED & VERIFIED</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-blue-300 text-center text-xs text-blue-600">
                  <p>
                    This document was electronically generated and processed by Bugema University Media Consent System
                  </p>
                  <p>For verification or inquiries, please reference Form ID: {formData.id}</p>
                  <p>© 2024 Bugema University. All rights reserved. | Generated: {new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Instructions */}
      <div className="print:hidden max-w-4xl mx-auto px-8 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">📄 Printing Instructions:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Click "Print Form" to open the print dialog</li>
            <li>• To save as PDF, select "Save as PDF" in the print destination</li>
            <li>• For best results, use A4 paper size and portrait orientation</li>
            <li>• Ensure "Print backgrounds" is enabled for proper formatting</li>
            <li>• This document includes official university letterhead and contact information</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
