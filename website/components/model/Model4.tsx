"use client"

import type React from "react"
import { useState } from "react"
import { sendEmail } from "@/lib/actions/send-email"
import Link from "next/link"
import { BiX, BiPhoneCall } from "react-icons/bi"
import { FaArrowRight, FaFacebook, FaTwitter, FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

type FormState = {
  success?: boolean
  message?: string
  errors?: {
    email?: string[]
    contact?: string[]
    message?: string[]
  }
} | null

export default function ContactForm({
  is4visible,
  onClose,
  palmGirlsImage,
  children,
}: {
  is4visible: boolean
  onClose: () => void
  palmGirlsImage?: string
  children: React.ReactNode
}) {
  const [formState, setFormState] = useState<FormState>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!is4visible) return null

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await sendEmail(formData)
      setFormState(result)
    } catch (error) {
      setFormState({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed fade-in inset-0 z-40 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 overflow-auto">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl" />
      <div className="mx-auto px-20 mt-[7%] py-4 max-w-full   ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-18 right-20 z-50 w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 group"
          aria-label="Close contact form"
        >
          <BiX className="text-3xl group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section - Directions & Map */}
          <div className="lg:col-span-1 space-y-2 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Directions</h2>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6206770744043!2d32.64117747432078!3d0.5703006635869016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c4be209db538d%3A0xe4ac675b7d218fc9!2sBugema%20University!5e0!3m2!1sen!2sug!4v1718632251835!5m2!1sen!2sug"
                className="w-full h-64 rounded-xl border-2 border-slate-200"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-sm">Bugema University, Luwero District, Uganda</p>
                </div>
                <div className="flex items-start gap-3 text-slate-600">
                  <Clock className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-sm">Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.facebook.com/share/199ddE9pPn/"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <FaFacebook className="text-white text-lg" />
                </Link>
                <Link
                  href="https://x.com/UnivBugema?t=speHfbZCjfGmRGbZDkczQA&s=09"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-blue-400 flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <FaTwitter className="text-white text-lg" />
                </Link>
                <Link
                  href="https://www.linkedin.com/school/bugema-university/"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <FaLinkedin className="text-white text-lg" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@bugemauniv?is_from_webapp=1&sender_device=pc"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-pink-600 flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <FaTiktok className="text-white text-lg" />
                </Link>
                <Link
                  href="https://www.instagram.com/bugemauniv?igsh=MWYwdzE0d3VrZ2YzNw=="
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-pink-500 flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <FaInstagram className="text-white text-lg" />
                </Link>
                <a
                  href="tel:+256769593407"
                  aria-label="Phone"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <Phone className="text-white text-base" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section - Contact Form */}
          <div className="lg:col-span-1 animate-fade-in animation-delay-200">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
              </div>

              <form className="space-y-5" action={handleSubmit}>
                {formState?.message && (
                  <div
                    className={`p-4 rounded-xl ${
                      formState.success
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    } animate-fade-in`}
                  >
                    <p className="text-sm font-medium">{formState.message}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                  {formState?.errors?.email && <p className="text-red-500 text-sm mt-2">{formState.errors.email[0]}</p>}
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="contact"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    type="tel"
                    name="contact"
                    placeholder="+256 XXX XXX XXX"
                  />
                  {formState?.errors?.contact && (
                    <p className="text-red-500 text-sm mt-2">{formState.errors.contact[0]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 h-32 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    name="message"
                    required
                    placeholder="How can we help you?"
                  />
                  {formState?.errors?.message && (
                    <p className="text-red-500 text-sm mt-2">{formState.errors.message[0]}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - University Info & Quick Links */}
          <div className="lg:col-span-1 space-y-2 animate-fade-in animation-delay-400">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="flex justify-center ">
                <Image
                  src="/images/logo/bugema.png"
                  alt="Bugema University Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>

                <Link
                  href="https://apply.bugemauniv.ac.ug"
                  className="flex items-center justify-between px-5 py-3 border-2 border-slate-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all group"
                >
                  <span>Apply Here</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:+256769593407"
                  className="flex items-center justify-between px-5 py-3 border-2 border-slate-900 rounded-full text-slate-900 font-medium hover:bg-gray-900 hover:text-white transition-all group"
                >
                  <span>Talk to Us</span>
                  <BiPhoneCall className="text-xl group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Student Portals</h3>
                <div className="space-y-3">
                  <Link
                    href="https://erms.bugemauniv.ac.ug/student/"
                    className="flex items-center justify-between px-5 py-3 border-2 border-slate-900 rounded-full text-slate-900 font-medium hover:bg-gray-900 hover:text-white transition-all group"
                  >
                    <span>ERMS - Students</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="https://erms.bugemauniv.ac.ug/buerms/"
                    className="flex items-center justify-between px-5 py-3 border-2 border-slate-900 rounded-full text-slate-900 font-medium hover:bg-gray-900 hover:text-white transition-all group"
                  >
                    <span>ERMS - Staff</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="https://e-library.bugemauniv.ac.ug/"
                    className="flex items-center justify-between px-5 py-3 border-2 border-slate-900 rounded-full text-slate-900 font-medium hover:bg-gray-900 hover:text-white transition-all group"
                  >
                    <span>E-Library</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </CHANGE> */}
    </div>
  )
}
