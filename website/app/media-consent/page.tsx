"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, CheckCircle, Loader2, FileText, Mail, Home, ArrowLeft } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function MediaConsentForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    registrationNumber: "",
    date: "",
    consentDetails: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email || !formData.date || !formData.consentDetails || !formData.agreeToTerms) {
      toast.error("Please fill in all required fields and agree to terms")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/media-consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success("Consent form submitted successfully!")

        // Auto redirect to home after 5 seconds
        setTimeout(() => {
          router.push("/")
        }, 5000)
      } else {
        throw new Error(result.error || "Failed to submit form")
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoHome = () => {
    router.push("/")
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="fixed top-4 left-4 z-10 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <Card className="w-full max-w-lg text-center shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8">
            <div className="mb-6">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your media consent form has been submitted successfully.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
              <div className="flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-800">Email Confirmation</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                A confirmation email has been sent to: <strong>{formData.email}</strong>
              </p>
              <p className="text-sm text-gray-600">
                The university administration has also been notified with your consent details.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">🏠 You will be redirected to the home page in 5 seconds...</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    fullName: "",
                    email: "",
                    registrationNumber: "",
                    date: "",
                    consentDetails: "",
                    agreeToTerms: false,
                  })
                }}
                variant="outline"
                className="flex-1 h-12 border-2 border-blue-200 hover:bg-blue-50"
              >
                <FileText className="w-4 h-4 mr-2" />
                Submit Another Form
              </Button>
              <Button
                onClick={handleGoHome}
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-10 flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Media Consent Form</h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Allow the Bugema University media team to use your photos or videos for promotional and marketing
              purposes.
            </p>
          </div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Consent Information
            </CardTitle>
            <CardDescription className="text-blue-100">Please fill out all required fields below</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="registrationNumber" className="text-sm font-medium text-gray-700">
                    Registration Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <Input
                    id="registrationNumber"
                    name="registrationNumber"
                    type="text"
                    placeholder="Enter your registration number"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      required
                    />
                    <CalendarIcon className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="consentDetails" className="text-sm font-medium text-gray-700">
                  In what ways do you consent to be featured? <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="consentDetails"
                  name="consentDetails"
                  placeholder="e.g., Photos, Videos, Social media, Website, Brochures, Promotional materials, etc."
                  value={formData.consentDetails}
                  onChange={handleInputChange}
                  className="min-h-[120px] border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex items-start space-x-3 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-2 border-gray-100">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={handleCheckboxChange}
                  className="mt-1"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-700 leading-relaxed">
                  <strong>I agree to the terms and conditions.</strong> I understand that by providing this consent, I
                  allow Bugema University to use my image/video for promotional purposes across various media platforms
                  including but not limited to websites, social media, brochures, and marketing materials.{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting Consent Form...
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-5 w-5" />
                    Submit Consent Form
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
