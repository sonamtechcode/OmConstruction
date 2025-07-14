"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, ArrowLeft, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleGetQuote = () => {
    window.location.href = "/contact"
  }

  const handleCallNow = () => {
    window.location.href = "tel:+919927903736"
  }

  const handleEmailUs = () => {
    window.location.href = "mailto:omconstructions1976@gmail.com"
  }

  const handleEmergencyCall = () => {
    window.location.href = "tel:+1555911HELP"
  }

  const handleGetDirections = () => {
    window.open("https://maps.google.com/?q=123+Construction+Avenue,+Builder+City,+BC+12345", "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">OmConstructions</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/equipment"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Equipment
                </Link>
                <Link href="/contact" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={handleGetQuote} className="bg-blue-600 hover:bg-blue-700 hidden md:inline-flex">
                Get Quote
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact OmConstructions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your construction project? Get in touch with our team for a free consultation and detailed
              quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Needed
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select a service</option>
                            <option value="residential">Residential Construction</option>
                            <option value="commercial">Commercial Construction</option>
                            <option value="renovation">Renovation & Remodeling</option>
                            <option value="infrastructure">Infrastructure Development</option>
                            <option value="consultation">Project Consultation</option>
                            <option value="maintenance">Maintenance Services</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          rows={6}
                          className="w-full"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 text-lg py-3 transition-all duration-300"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <img
                      src="/images/contact-hariom.png"
                      alt="Mr. Hariom"
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">Mr. Hariom</h3>
                    <p className="text-sm text-gray-600">Owner - Civil Engineer</p>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <div className="text-gray-600">(+91) 9927903736</div>
                        <div className="text-gray-600">(555) 123-4568</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-gray-600">omconstructions1976@gmail.com</div>
                        <div className="text-gray-600">quotes@omconstructions.com</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Address</div>
                        <div className="text-gray-600">123 Construction Avenue</div>
                        <div className="text-gray-600">Builder City, BC 12345</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Business Hours</div>
                        <div className="text-gray-600">Mon - Fri: 7:00 AM - 6:00 PM</div>
                        <div className="text-gray-600">Sat: 8:00 AM - 4:00 PM</div>
                        <div className="text-gray-600">Sun: Emergency Only</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Services</h3>
                  <p className="text-gray-600 mb-4">
                    Need emergency construction services? We're available 24/7 for urgent repairs and safety issues.
                  </p>
                  <Button onClick={handleEmergencyCall} className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency: (555) 911-HELP
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Quote</h3>
                  <p className="text-gray-600 mb-4">
                    Need a quick estimate? Call us directly for immediate assistance with your project.
                  </p>
                  <Button
                    onClick={handleCallNow}
                    className="w-full bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-gray-600">Stop by our office to discuss your project in person</p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
              alt="Office location map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">OmConstructions Office</h3>
                <p className="mb-4">123 Construction Avenue, Builder City, BC 12345</p>
                <Button
                  onClick={handleGetDirections}
                  className="bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 transition-all duration-300"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">OmConstructions</span>
            </div>
            <p className="text-gray-400 mb-8">
              Professional construction services with a commitment to quality, safety, and customer satisfaction.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">&copy; 2024 OmConstructions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
