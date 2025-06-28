"use client"
import { useState } from "react"
import type React from "react"

interface RegistrationResponse {
  success: boolean
  message: string
  data?: {
    alumniId: string
    registrationDate: string
    _id: string
  }
  error?: string
}

const AlumniRegistrationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",

    // Academic Information
    graduationYear: "",
    degree: "",
    school: "",
    studentId: "",
    gpa: "",
    honors: "",

    // Professional Information
    currentPosition: "",
    company: "",
    industry: "",
    workExperience: "",
    salary: "",
    location: "",
    linkedIn: "",

    // Contact Information
    currentAddress: {
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
    emergencyContact: {
      name: "",
      relationship: "",
      phone: "",
      email: "",
    },

    // Preferences
    interests: [] as string[],
    willingToMentor: false,
    newsletter: true,
    publicProfile: false,
    allowContact: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<RegistrationResponse | null>(null)

  const schools = [
    "School of Business",
    "School of Science and Technology",
    "School of Education",
    "School of Social Sciences",
    "School of Natural Sciences",
    "School of Graduate Studies",
    "School of Agriculture",
    "School of Health Sciences",
    "School of Theology",
  ]

  const industries = [
    "Healthcare",
    "Technology",
    "Education",
    "Agriculture",
    "Business & Finance",
    "Government",
    "Non-profit",
    "Engineering",
    "Manufacturing",
    "Consulting",
    "Other",
  ]

  const interestOptions = [
    "Networking",
    "Mentoring",
    "Career Development",
    "Alumni Events",
    "University Updates",
    "Volunteering",
    "Donations",
    "Research Collaboration",
  ]

  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"]
  const salaryRanges = [
    "Below $30,000",
    "$30,000 - $50,000",
    "$50,000 - $75,000",
    "$75,000 - $100,000",
    "$100,000 - $150,000",
    "Above $150,000",
    "Prefer not to say",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    } else if (name.includes(".")) {
      // Handle nested objects
      const [parent, child] = name.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as object),
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // Prepare data for submission
      const submissionData = {
        ...formData,
        graduationYear: Number.parseInt(formData.graduationYear),
        gpa: formData.gpa ? Number.parseFloat(formData.gpa) : undefined,
        workExperience: formData.workExperience ? Number.parseInt(formData.workExperience) : undefined,
      }

      const response = await fetch("/api/alumni/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      const result: RegistrationResponse = await response.json()
      setSubmitResult(result)

      if (result.success) {
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          gender: "",
          nationality: "",
          graduationYear: "",
          degree: "",
          school: "",
          studentId: "",
          gpa: "",
          honors: "",
          currentPosition: "",
          company: "",
          industry: "",
          workExperience: "",
          salary: "",
          location: "",
          linkedIn: "",
          currentAddress: {
            street: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
          },
          emergencyContact: {
            name: "",
            relationship: "",
            phone: "",
            email: "",
          },
          interests: [],
          willingToMentor: false,
          newsletter: true,
          publicProfile: false,
          allowContact: true,
        })
      }
    } catch (error) {
      console.error("Registration error:", error)
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please try again.",
        error: "Network error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] sm:p-11 lg:p-8 xl:p-11">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">Join the Alumni Network</h2>

            {/* Success/Error Messages */}
            {submitResult && (
              <div
                className={`mb-6 rounded-md p-4 ${
                  submitResult.success
                    ? "bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200"
                    : "bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200"
                }`}
              >
                <h3 className="font-semibold mb-2">
                  {submitResult.success ? "Registration Submitted!" : "Registration Failed"}
                </h3>
                <p>{submitResult.message}</p>
                {submitResult.success && submitResult.data && (
                  <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border">
                    <p>
                      <strong>Your Alumni ID:</strong>{" "}
                      <span className="font-mono text-lg text-primary">{submitResult.data.alumniId}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Please save this ID for future reference. Your application is pending approval by our alumni
                      office.
                    </p>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">Personal Information</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    >
                      <option value="">Select Gender</option>
                      {genderOptions.map((gender) => (
                        <option key={gender} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">Academic Information</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Graduation Year *
                    </label>
                    <input
                      type="number"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      required
                      min="1950"
                      max="2024"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">School/Faculty *</label>
                    <select
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    >
                      <option value="">Select School</option>
                      {schools.map((school) => (
                        <option key={school} value={school}>
                          {school}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Degree/Program *</label>
                    <input
                      type="text"
                      name="degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Bachelor of Business Administration"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Student ID</label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      placeholder="Your former student ID"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">GPA</label>
                    <input
                      type="number"
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      max="4"
                      placeholder="e.g., 3.75"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">Professional Information</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Current Position</label>
                    <input
                      type="text"
                      name="currentPosition"
                      value={formData.currentPosition}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    >
                      <option value="">Select Industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Current Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">Areas of Interest</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="mr-2"
                      />
                      <span className="text-sm text-body-color">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">Preferences</h3>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="willingToMentor"
                      checked={formData.willingToMentor}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-base text-body-color">
                      I am willing to mentor current students or recent graduates
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-base text-body-color">Subscribe to alumni newsletter and updates</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="publicProfile"
                      checked={formData.publicProfile}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-base text-body-color">Make my profile visible in the alumni directory</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="allowContact"
                      checked={formData.allowContact}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-base text-body-color">Allow other alumni to contact me</span>
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting Registration..." : "Register as Alumni"}
                </button>
                <p className="mt-4 text-center text-sm text-body-color">
                  Your registration will be reviewed by our alumni office. You will receive a confirmation email once
                  approved.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlumniRegistrationForm
