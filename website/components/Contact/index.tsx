"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import Image from "next/image"
import { CreateNewsLetter } from "@/lib/actions/newletter.actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail } from "lucide-react"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("")

    if (!formData.email || !formData.firstName || !formData.lastName) {
      setStatus("All fields are required")
      return
    }

    try {
      await CreateNewsLetter({ email: formData.email, fname: formData.firstName, lname: formData.lastName })
      toast.success("Subscribed to newsletter! Check your email to confirm your subscription.")
      setStatus("Subscribed! Check your email to confirm.")
      setFormData({ firstName: "", lastName: "", email: "" })
    } catch (error) {
      setStatus("Failed to subscribe. Please try again.")
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-6"></div>
            <Image
              src="/images/graduation/ca.jpeg"
              width={600}
              height={400}
              alt="Subscribe to our Newsletter"
              className="rounded-3xl shadow-2xl relative z-10 transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2">
            <Card className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border-none shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary mb-2">Stay Connected</CardTitle>
                <CardDescription className="text-lg">Join our newsletter and never miss an update!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-white/50 dark:bg-gray-700/50 border-primary/20 focus:border-primary"
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-white/50 dark:bg-gray-700/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/50 dark:bg-gray-700/50 border-primary/20 focus:border-primary"
                  />
                  <Button
                    type="submit"
                    className="w-full text-lg font-semibold py-6 bg-primary hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" /> Subscribe Now
                  </Button>
                </form>
                {status && (
                  <p className="mt-6 text-center text-sm font-medium text-primary bg-primary/10 py-2 px-4 rounded-full">
                    {status}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

