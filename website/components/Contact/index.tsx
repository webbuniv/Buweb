"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import Image from "next/image"
import { CreateNewsLetter } from "@/lib/actions/newletter.actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/images/graduation/ca.jpeg"
              width={600}
              height={400}
              alt="Subscribe to our Newsletter"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Subscribe to our Newsletter</CardTitle>
                <CardDescription>Stay updated with our latest news and updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
                {status && <p className="mt-4 text-center text-sm font-medium text-primary">{status}</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
