"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Campus Location",
    details: ["Bugema University", "P.O. Box 6529", "Kampala, Uganda"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+256 414 540 163", "+256 772 540 163", "+256 701 540 163"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@bugemauniv.ac.ug", "admissions@bugemauniv.ac.ug", "registrar@bugemauniv.ac.ug"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 1:00 PM", "Sunday: Closed"],
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section className="section-padding bg-gradient-to-br from-bugema-blue/5 via-white to-bugema-gold/5 dark:from-bugema-blue/10 dark:via-slate-900 dark:to-bugema-gold/10">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-bugema-blue/10 rounded-full text-bugema-blue font-medium mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h2 className="heading-lg text-foreground mb-6">
            Ready to Start Your <span className="gradient-text">Journey with Us?</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Have questions about our programs, admissions, or campus life? We're here to help you take the next step
            towards your educational goals at Bugema University.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="Enter your first name" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Enter your last name" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input type="email" placeholder="Enter your email" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="What is this about?" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[120px] resize-none" />
                  </div>

                  <Button size="lg" className="w-full bg-bugema-blue hover:bg-bugema-blue/90 group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-body mb-8">
                We're always here to help. Reach out to us through any of the following channels, and we'll get back to
                you as soon as possible.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-bugema-blue/10 to-bugema-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-6 w-6 text-bugema-blue" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                          <div className="space-y-1">
                            {item.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-bugema-blue/20 to-bugema-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-bugema-blue mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">Interactive Campus Map</h4>
                    <p className="text-muted-foreground text-sm">Click to view our campus location and facilities</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
