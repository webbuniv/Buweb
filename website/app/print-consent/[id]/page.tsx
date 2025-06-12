"use client"

import Image from "next/image"
import image from "@/public/images/logo/bugema.png"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Printer, Download, ArrowLeft, MapPin, Phone, Mail } from "lucide-react"

const printStyles = `
  @media print {
    * {
      visibility: hidden;
    }
    
    .printable-content, .printable-content * {
      visibility: visible;
    }
    
    .printable-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    
    body {
      margin: 0;
      padding: 0;
      background: white !important;
    }
    
    .no-print {
      display: none !important;
    }
    
    @page {
      margin: 0.5in;
      size: A4;
    }
  }
`

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
    <div className="min-h-screen bg-gray-50 print:bg-white print:min-h-0">
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />

      {/* Printable Content */}
      <div className="printable-content max-w-4xl mx-auto p-4 print:p-0 print:max-w-none print:mx-0">
        <div className="bg-white shadow-lg print:shadow-none print:border-0 border rounded-lg overflow-hidden">
          {/* Official Header with University Details */}
          <div className="bg-white border-b-2 border-blue-600 p-4 print:p-2">
            <div className="flex items-center justify-between mb-2">
              {/* University Logo/Emblem Area */}
              <div className="flex items-center space-x-2">
                <div className="w-30 h-30 flex items-left justify-left">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="logo"
                    className="flex rounded-full"
                    width={120}
                    height={80}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">BUGEMA UNIVERSITY</h1>
                  <p className="text-sm text-blue-600 font-semibold">MEDIA CONSENT FORM</p>
                </div>
              </div>

              {/* University Contact Information */}
              <div className="text-right text-xs text-gray-700 space-y-0.5">
                <div className="flex items-center justify-end space-x-1">
                  <MapPin className="w-3 h-3 text-blue-600" />
                  <span>P.O. Box 6529, Kampala, Uganda</span>
                </div>
                <div className="flex items-center justify-end space-x-1">
                  <Phone className="w-3 h-3 text-blue-600" />
                  <span>+256 312 351 400</span>
                </div>
                <div className="flex items-center justify-end space-x-1">
                  <Mail className="w-3 h-3 text-blue-600" />
                  <span>bugemauniversitymediateam@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Form ID and Date */}
            <div className="bg-gray-50 p-2 rounded-lg border text-xs">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-600">Form ID:</span>
                  <span className="ml-1 font-bold text-blue-600">{formData.id}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Date:</span>
                  <span className="ml-1 font-bold text-gray-900">{formData.submitted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 print:p-2">
            <div className="text-center mb-3">
              <h2 className="text-lg font-bold text-gray-900">OFFICIAL MEDIA CONSENT DOCUMENT</h2>
            </div>

            {/* Personal Information */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 pb-1 border-b border-blue-600 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                  1
                </span>
                PERSONAL INFORMATION
              </h3>
              <div className="bg-gray-50 p-2 rounded-lg border">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="block font-medium text-gray-600">Full Legal Name:</label>
                    <div className="border-b border-gray-300">
                      <span className="font-semibold text-gray-900">{formData.name}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-600">Email Address:</label>
                    <div className="border-b border-gray-300">
                      <span className="text-gray-900">{formData.email}</span>
                    </div>
                  </div>
                  {formData.regNo && (
                    <div>
                      <label className="block font-medium text-gray-600">Registration Number:</label>
                      <div className="border-b border-gray-300">
                        <span className="font-semibold text-gray-900">{formData.regNo}</span>
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="block font-medium text-gray-600">Date of Consent:</label>
                    <div className="border-b border-gray-300">
                      <span className="font-semibold text-gray-900">{formData.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consent Details */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 pb-1 border-b border-yellow-500 flex items-center">
                <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                  2
                </span>
                CONSENT DETAILS & AUTHORIZATION
              </h3>
              <div className="bg-yellow-50 p-2 rounded-lg border-l-2 border-yellow-500">
                <p className="text-xs font-medium text-gray-700 mb-1">
                  I hereby grant permission for the following media usage:
                </p>
                <div className="bg-white p-2 rounded border">
                  <p className="text-xs text-gray-800 leading-tight">{formData.consent}</p>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 pb-1 border-b border-green-500 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                  3
                </span>
                TERMS & CONDITIONS AGREEMENT
              </h3>
              <div className="bg-green-50 p-2 rounded-lg border-l-2 border-green-500">
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-xs">
                    <p className="text-gray-800 font-medium mb-1">
                      I agree to the terms and conditions for media usage by Bugema University
                    </p>
                    <div className="text-xs text-gray-700 grid grid-cols-2 gap-x-2">
                      <p>• Covers promotional materials</p>
                      <p>• Usage across various platforms</p>
                      <p>• Given voluntarily</p>
                      <p>• Can revoke in writing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 pb-1 border-b border-gray-500 flex items-center">
                <span className="bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                  4
                </span>
                DIGITAL SIGNATURE & VERIFICATION
              </h3>
              <div className="bg-gray-50 p-2 rounded-lg border border-dashed border-gray-400">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-gray-600 mb-1">Participant Signature:</label>
                    <div className="border-b border-gray-800 pb-1 mb-1">
                      <p className="font-bold text-gray-900">{formData.name}</p>
                    </div>
                    <p className="text-xs text-gray-600">Digital Signature (Electronically Verified)</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-600 mb-1">Date & Time Signed:</label>
                    <div className="border-b border-gray-800 pb-1 mb-1">
                      <p className="font-bold text-gray-900">{formData.submitted}</p>
                    </div>
                    <p className="text-xs text-gray-600">Timestamp (System Generated)</p>
                  </div>
                </div>

                {/* Verification Stamp */}
                <div className="mt-2 text-center">
                  <div className="inline-block border border-blue-600 rounded-lg p-1 bg-blue-50">
                    <p className="text-blue-800 font-bold text-xs">DIGITALLY VERIFIED</p>
                    <p className="text-blue-600 text-xs">Form ID: {formData.id}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Footer */}
            <div className="border-t border-gray-300 pt-2">
              <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                <div className="text-center mb-1">
                  <h4 className="font-bold text-blue-900 text-xs">BUGEMA UNIVERSITY MEDIA DEPARTMENT</h4>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs text-blue-800">
                  <div>
                    <p className="font-semibold">Contact:</p>
                    <p>www.bugemauniv.ac.ug</p>
                  </div>
                  <div>
                    <p className="font-semibold">Office Hours:</p>
                    <p>Mon-Fri: 8AM-4PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Status:</p>
                    <p>APPROVED & VERIFIED</p>
                  </div>
                </div>

                <div className="mt-1 pt-1 border-t border-blue-300 text-center text-xs text-blue-600">
                  <p>© 2025 Bugema University. All rights reserved. | Form ID: {formData.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Controls - Hidden when printing */}
      <div className="no-print print:hidden bg-white shadow-sm border-t mt-4">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={handleGoBack} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
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

      {/* Print Instructions - Hidden when printing */}
      <div className="no-print print:hidden max-w-4xl mx-auto px-4 py-3 mb-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <h4 className="font-semibold text-blue-900 mb-1 text-sm">📄 Printing Instructions:</h4>
          <ul className="text-xs text-blue-800 space-y-0.5">
            <li>• Click "Print Form" to open the print dialog</li>
            <li>• To save as PDF, select "Save as PDF" in the print destination</li>
            <li>• For best results, use A4 paper size and portrait orientation</li>
            <li>• Ensure "Print backgrounds" is enabled for proper formatting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
