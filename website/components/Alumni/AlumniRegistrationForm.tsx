"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2, Info } from "lucide-react"
import type { AlumniRegistrationData } from "@/lib/models/Alumni"

const schools = [
  "School of Agriculture",
  "School of Business",
  "School of Education",
  "School of Health Sciences",
  "School of Science and Technology",
  "School of Social Sciences",
  "School of Theology",
  "School of Graduate Studies",
]

const interests = [
  "Mentoring",
  "Networking",
  "Career Development",
  "Entrepreneurship",
  "Research",
  "Community Service",
  "Technology",
  "Healthcare",
  "Education",
  "Agriculture",
  "Business",
  "Social Work",
]

const AlumniRegistrationForm = () => {
  const [formData, setFormData] = useState<Partial<AlumniRegistrationData>>({
    interests: [],
    willingToMentor: false,
    newsletter: true,
    publicProfile: false,
    allowContact: true,
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [studentId, setStudentId] = useState("")
  const [verificationCode, setVerificationCode] = useState("")

  const handleInputChange = (field: keyof AlumniRegistrationData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...(prev.interests || []), interest] : (prev.interests || []).filter((i) => i !== interest),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/alumni/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setStudentId(data.data.studentId)
        setVerificationCode(data.data.verificationCode)
      } else {
        setError(data.error || "Registration failed")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">Registration Successful!</h3>
            <p className="mb-4 text-body-color">Your alumni registration has been submitted successfully.</p>

            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Student ID: <span className="font-mono text-lg">{studentId}</span>
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Verification Code: <span className="font-mono text-lg">{verificationCode}</span>
                </p>
                <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                  This unique code can be used for verification in university systems, voting, and other official
                  purposes.
                </p>
              </div>
            </div>

            <Alert className="mt-4">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Please save both codes for your records. Your application is pending approval by our alumni office. You
                will receive a confirmation email once approved.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Student ID Information */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Please enter your original Bugema University Student ID in the format: YY/XXX/BU/R/NNNN (e.g.,
          21/BCC/BU/R/0019)
        </AlertDescription>
      </Alert>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="studentId">Student ID *</Label>
            <Input
              id="studentId"
              required
              placeholder="e.g., 21/BCC/BU/R/0019"
              value={formData.studentId || ""}
              onChange={(e) => handleInputChange("studentId", e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Enter your original student ID from when you studied at Bugema University
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName || ""}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName || ""}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone || ""}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth || ""}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender || ""} onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                value={formData.nationality || ""}
                onChange={(e) => handleInputChange("nationality", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="graduationYear">Graduation Year *</Label>
              <Input
                id="graduationYear"
                type="number"
                min="1960"
                max={new Date().getFullYear()}
                required
                value={formData.graduationYear || ""}
                onChange={(e) => handleInputChange("graduationYear", Number.parseInt(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="school">School *</Label>
              <Select value={formData.school || ""} onValueChange={(value) => handleInputChange("school", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select school" />
                </SelectTrigger>
                <SelectContent>
                  {schools.map((school) => (
                    <SelectItem key={school} value={school}>
                      {school}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="degree">Degree *</Label>
              <Input
                id="degree"
                required
                placeholder="e.g., Bachelor of Business Administration"
                value={formData.degree || ""}
                onChange={(e) => handleInputChange("degree", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="gpa">GPA (Optional)</Label>
              <Input
                id="gpa"
                type="number"
                step="0.01"
                min="0"
                max="5"
                placeholder="e.g., 3.75"
                value={formData.gpa || ""}
                onChange={(e) =>
                  handleInputChange("gpa", e.target.value ? Number.parseFloat(e.target.value) : undefined)
                }
              />
            </div>
          </div>

          <div>
            <Label htmlFor="honors">Honors/Awards</Label>
            <Input
              id="honors"
              placeholder="e.g., Magna Cum Laude, Dean's List"
              value={formData.honors || ""}
              onChange={(e) => handleInputChange("honors", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Professional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Professional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="currentPosition">Current Position</Label>
              <Input
                id="currentPosition"
                value={formData.currentPosition || ""}
                onChange={(e) => handleInputChange("currentPosition", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                value={formData.company || ""}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                value={formData.industry || ""}
                onChange={(e) => handleInputChange("industry", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="workExperience">Years of Experience</Label>
              <Input
                id="workExperience"
                type="number"
                min="0"
                max="50"
                value={formData.workExperience || ""}
                onChange={(e) =>
                  handleInputChange("workExperience", e.target.value ? Number.parseInt(e.target.value) : undefined)
                }
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="location">Current Location</Label>
              <Input
                id="location"
                placeholder="City, Country"
                value={formData.location || ""}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="linkedIn">LinkedIn Profile</Label>
              <Input
                id="linkedIn"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedIn || ""}
                onChange={(e) => handleInputChange("linkedIn", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interests and Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Interests & Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-medium">Areas of Interest</Label>
            <div className="mt-2 grid gap-2 md:grid-cols-3">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={(formData.interests || []).includes(interest)}
                    onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                  />
                  <Label htmlFor={interest} className="text-sm font-normal">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="willingToMentor"
                checked={formData.willingToMentor}
                onCheckedChange={(checked) => handleInputChange("willingToMentor", checked)}
              />
              <Label htmlFor="willingToMentor">I am willing to mentor current students and recent graduates</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="publicProfile"
                checked={formData.publicProfile}
                onCheckedChange={(checked) => handleInputChange("publicProfile", checked)}
              />
              <Label htmlFor="publicProfile">Make my profile visible in the public alumni directory</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="allowContact"
                checked={formData.allowContact}
                onCheckedChange={(checked) => handleInputChange("allowContact", checked)}
              />
              <Label htmlFor="allowContact">Allow other alumni to contact me</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", checked)}
              />
              <Label htmlFor="newsletter">Subscribe to alumni newsletter and updates</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button type="submit" size="lg" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Submitting..." : "Submit Registration"}
        </Button>
        <p className="mt-4 text-sm text-body-color">
          Your registration will be reviewed by our alumni office. You will receive a confirmation email once approved.
        </p>
      </div>
    </form>
  )
}

export default AlumniRegistrationForm
