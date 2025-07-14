"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Hammer,
  HardHat,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  const handleGetQuote = () => {
    window.location.href = "/contact"
  }

  const handleStartProject = () => {
    window.location.href = "/contact"
  }

  const handleViewWork = () => {
    window.location.href = "/projects"
  }

  const handleLearnMore = (service: string) => {
    window.location.href = "/services"
  }

  const handleViewDetails = (projectId: number) => {
    alert(`Viewing details for project ${projectId}. This would navigate to a detailed project page.`)
  }

  const handleCallNow = () => {
    window.location.href = "tel:+919927903736"
  }

  const handleEmailUs = () => {
    window.location.href = "mailto:omconstructions1976@gmail.com"
  }

  return (
    <div className="min-h-screen">
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
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-background.jpeg')`,
          }}
        >
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 text-shadow-md">
              Building Your Dreams Into Reality
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 text-shadow-sm">
              Professional construction services with 25+ years of experience. Quality, reliability, and excellence in
              every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleStartProject}
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 text-lg px-8 py-3 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleViewWork}
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent transition-transform duration-300 hover:scale-105"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Workers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Construction Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial buildings, we provide comprehensive construction solutions tailored
              to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Residential Construction",
                description: "Custom homes, renovations, and residential projects built to perfection.",
                features: ["Custom Design", "Quality Materials", "Timely Delivery"],
                image:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
              },
              {
                icon: HardHat,
                title: "Commercial Construction",
                description: "Office buildings, retail spaces, and commercial developments.",
                features: ["Project Management", "Safety Compliance", "Budget Control"],
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
              },
              {
                icon: Hammer,
                title: "Renovation & Remodeling",
                description: "Transform your existing space with our renovation expertise.",
                features: ["Modern Upgrades", "Space Optimization", "Value Addition"],
                image:
                  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
              },
              {
                icon: Wrench,
                title: "Infrastructure Development",
                description: "Roads, bridges, and infrastructure projects for communities.",
                features: ["Heavy Equipment", "Engineering Excellence", "Durability Focus"],
                image: "/images/project-survey.jpeg", // Using provided image
              },
              {
                icon: Award,
                title: "Project Consultation",
                description: "Expert advice and planning for your construction projects.",
                features: ["Cost Estimation", "Timeline Planning", "Risk Assessment"],
                image: "/images/planting.jpeg", // Using provided image
              },
              {
                icon: Users,
                title: "Maintenance Services",
                description: "Ongoing maintenance and support for completed projects.",
                features: ["Regular Inspections", "Preventive Care", "Emergency Repairs"],
                image:
                  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handleLearnMore(service.title)}
                    className="w-full mt-4 bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our latest construction achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Modern Office Complex",
                category: "Commercial",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                description: "A state-of-the-art office building with sustainable design features.",
              },
              {
                id: 2,
                title: "Luxury Residential Villa",
                category: "Residential",
                image:
                  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                description: "Custom-built luxury home with premium finishes and smart technology.",
              },
              {
                id: 3,
                title: "Shopping Center Renovation",
                category: "Renovation",
                image: "/images/project-temple.jpeg", // Using provided image
                description: "Complete transformation of a dated shopping center into a modern retail space.",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleViewDetails(project.id)}
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => alert(`Opening gallery for ${project.title}`)}
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                content:
                  "OmConstructions transformed our vision into reality. The attention to detail and professionalism was outstanding.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                content:
                  "Our new office building was completed on time and within budget. Excellent project management throughout.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
              },
              {
                name: "Emily Rodriguez",
                role: "Property Developer",
                content:
                  "I've worked with many contractors, but OmConstructions stands out for their quality and reliability.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get in touch with our team today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCallNow}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (+91) 9927903736
            </Button>
            <Button
              onClick={handleEmailUs}
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">OmConstructions</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional construction services with a commitment to quality, safety, and customer satisfaction.
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => window.open("https://facebook.com", "_blank")}
                  size="sm"
                  variant="outline"
                  className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                  size="sm"
                  variant="outline"
                  className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Renovation & Remodeling
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Project Consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Button
                    onClick={() => alert("Careers page coming soon!")}
                    variant="ghost"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Careers
                  </Button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  <span>123 Construction Ave, Builder City, BC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  <span>(+91) 9927903736</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  <span>omconstructions1976@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OmConstructions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
