"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Hammer, HardHat, Wrench, Award, Users, CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function ServicesPage() {
  const handleGetQuote = () => {
    window.location.href = "/contact"
  }

  const handleLearnMore = (service: string) => {
    alert(`Learning more about ${service}. This would navigate to a detailed service page.`)
  }

  const handleCallNow = () => {
    window.location.href = "tel:+919927903736"
  }

  const handleEmailUs = () => {
    window.location.href = "mailto:omconstructions1976@gmail.com"
  }

  const services = [
    {
      icon: Building2,
      title: "Residential Construction",
      description: "Custom homes and residential projects built with precision and care.",
      features: [
        "Custom Home Design & Build",
        "Single & Multi-Family Homes",
        "Luxury Home Construction",
        "Energy-Efficient Building",
        "Smart Home Integration",
        "Sustainable Materials",
      ],
      price: "Starting from $150/sq ft",
      timeline: "6-12 months",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    },
    {
      icon: HardHat,
      title: "Commercial Construction",
      description: "Professional commercial buildings and office spaces.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses & Industrial",
        "Healthcare Facilities",
        "Educational Buildings",
        "Mixed-Use Developments",
      ],
      price: "Starting from $120/sq ft",
      timeline: "8-18 months",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our renovation expertise.",
      features: [
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Room Additions",
        "Exterior Renovations",
        "Historic Restorations",
      ],
      price: "Starting from $50/sq ft",
      timeline: "2-6 months",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    },
    {
      icon: Wrench,
      title: "Infrastructure Development",
      description: "Large-scale infrastructure and civil engineering projects.",
      features: [
        "Road Construction",
        "Bridge Building",
        "Utility Installation",
        "Site Preparation",
        "Drainage Systems",
        "Parking Structures",
      ],
      price: "Custom Pricing",
      timeline: "6-24 months",
      image: "/images/project-survey.jpeg", // Using provided image
    },
    {
      icon: Award,
      title: "Project Consultation",
      description: "Expert advice and planning for your construction projects.",
      features: [
        "Feasibility Studies",
        "Cost Estimation",
        "Timeline Planning",
        "Permit Assistance",
        "Design Review",
        "Risk Assessment",
      ],
      price: "$150-300/hour",
      timeline: "1-4 weeks",
      image: "/images/planting.jpeg", // Using provided image
    },
    {
      icon: Users,
      title: "Maintenance Services",
      description: "Ongoing maintenance and support for completed projects.",
      features: [
        "Regular Inspections",
        "Preventive Maintenance",
        "Emergency Repairs",
        "HVAC Maintenance",
        "Structural Assessments",
        "Warranty Support",
      ],
      price: "Custom Service Plans",
      timeline: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    },
    {
      icon: HardHat,
      title: "Industry Civil Construction Work",
      description: "Specialized civil construction services for various industrial sectors.",
      features: [
        "Factory Buildings",
        "Industrial Sheds",
        "Foundation Work",
        "Structural Steel Erection",
        "Utility Infrastructure",
        "Heavy Equipment Foundations",
      ],
      price: "Custom Pricing",
      timeline: "Varies by project",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Building2,
      title: "Distillery Plant & Related Civil Work",
      description: "Comprehensive civil construction for molasses-based and grain-based distillery plants.",
      features: [
        "Fermentation Tanks",
        "Distillation Columns",
        "Storage Facilities",
        "Process Buildings",
        "Effluent Treatment Plants",
        "Utility Piping Support",
      ],
      price: "Custom Pricing",
      timeline: "Varies by project",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Hammer,
      title: "Building Work",
      description: "General building construction services for residential, commercial, and institutional projects.",
      features: [
        "New Building Construction",
        "Structural Additions",
        "Interior Finishing",
        "Exterior Facades",
        "Roofing Solutions",
        "MEP Integration",
      ],
      price: "Starting from $100/sq ft",
      timeline: "Varies by project",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Wrench,
      title: "Sugar Mill Plant & Related Civil Work",
      description: "Civil construction and infrastructure development for sugar mill plants.",
      features: [
        "Mill Foundations",
        "Boiler Houses",
        "Crystallizer Structures",
        "Bagasse Storage",
        "Water Treatment Facilities",
        "Roads & Pavements",
      ],
      price: "Custom Pricing",
      timeline: "Varies by project",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: HardHat,
      title: "Pile Work",
      description: "Expert pile foundation services for stable and durable structures.",
      features: [
        "Bored Piles",
        "Driven Piles",
        "Sheet Piling",
        "Micro Piling",
        "Pile Load Testing",
        "Foundation Reinforcement",
      ],
      price: "Custom Pricing",
      timeline: "Varies by project",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Building2,
      title: "All Types Civil Construction Work",
      description: "Comprehensive civil construction services covering a wide range of project types and scales.",
      features: [
        "Residential & Commercial",
        "Industrial & Infrastructure",
        "Renovation & Remodeling",
        "Specialized Foundations",
        "Project Management",
        "Quality Assurance",
      ],
      price: "Custom Pricing",
      timeline: "Varies by project",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

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
                <Link href="/services" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/equipment"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Equipment
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Construction Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs. From residential homes to
              commercial buildings, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600 mt-1">{service.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 border-t border-gray-200">
                    <div className="space-y-1 mb-4 sm:mb-0">
                      <div className="text-sm text-gray-500">Starting Price</div>
                      <div className="font-semibold text-blue-600">{service.price}</div>
                    </div>
                    <div className="space-y-1 mb-4 sm:mb-0">
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold text-gray-900">{service.timeline}</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleGetQuote}
                      className="flex-1 bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 transition-all duration-300"
                    >
                      Get Quote
                    </Button>
                    <Button
                      onClick={() => handleLearnMore(service.title)}
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your project is completed on time, within budget, and to your exact
              specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to discuss your vision, requirements, and budget.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "Detailed planning, architectural design, and permit acquisition.",
                image:
                  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
              },
              {
                step: "03",
                title: "Construction",
                description: "Professional construction with regular updates and quality checks.",
                image: "/images/concrete-pouring-1.jpeg",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspection, handover, and ongoing support.",
                image:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={process.image || "/placeholder.svg"}
                    alt={process.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and detailed quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCallNow}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (+91) 9927903736
            </Button>
            <Button
              onClick={handleEmailUs}
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
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
