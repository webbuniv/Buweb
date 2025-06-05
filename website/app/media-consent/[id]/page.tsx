"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Printer, Download, ArrowLeft } from "lucide-react"

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
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 print:bg-gray-800">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">BUGEMA UNIVERSITY</h1>
              <p className="text-xl opacity-90">MEDIA CONSENT FORM</p>
              <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Form ID: {formData.id}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Media Consent Submission</h2>
              <p className="text-gray-600">Submitted on {formData.submitted}</p>
            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                👤 Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Full Name:</span>
                  <span className="text-gray-900 font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Email Address:</span>
                  <span className="text-gray-900">{formData.email}</span>
                </div>
                {formData.regNo && (
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Registration Number:</span>
                    <span className="text-gray-900 font-semibold">{formData.regNo}</span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Date:</span>
                  <span className="text-gray-900 font-semibold">{formData.date}</span>
                </div>
              </div>
            </div>

            {/* Consent Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                📋 Consent Details
              </h3>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-800 leading-relaxed">{formData.consent}</p>
              </div>
            </div>

            {/* Agreement Confirmation */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">
                ✅ Agreement Confirmation
              </h3>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    I agree to the terms and conditions for media usage by Bugema University
                  </span>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-500">
                ✍️ Digital Signature Confirmation
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-400">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xl font-semibold text-gray-900 mb-2">{formData.name}</p>
                    <p className="text-sm text-gray-600 mb-3">Digital Signature</p>
                    <div className="w-48 h-px bg-gray-400"></div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900 mb-2">{formData.submitted}</p>
                    <p className="text-sm text-gray-600 mb-3">Date Signed</p>
                    <div className="w-32 h-px bg-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-gray-200 pt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                This form was digitally submitted and processed by Bugema University Media Department
              </p>
              <p className="text-xs text-gray-500">
                For inquiries, contact: {process.env.NEXT_PUBLIC_EMAIL || "media@bugema.ac.ug"} | Generated:{" "}
                {formData.submitted}
              </p>
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
          </ul>
        </div>
      </div>
    </div>
  )
}
