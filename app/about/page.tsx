"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ArrowLeft, Award, Target, Shield, Heart, Lightbulb, CheckCircle } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function AboutPage() {
  const handleGetQuote = () => {
    window.location.href = "/contact"
  }

  const handleStartProject = () => {
    window.location.href = "/contact"
  }

  const handleContactTeam = () => {
    window.location.href = "/contact"
  }

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize the safety of our workers and clients above all else, maintaining the highest safety standards on every project.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Our commitment to quality is unwavering. We use premium materials and employ skilled craftsmen to deliver exceptional results.",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description:
        "Your satisfaction is our success. We work closely with clients to ensure their vision becomes reality.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace new technologies and construction methods to deliver more efficient and sustainable solutions.",
    },
  ]

  const team = [
    {
      name: "Hariom",
      role: "Owner - Civil Engineer",
      experience: "25+ years",
      image: "/images/team-hariom.png", // Using provided image for Hariom
      description: "Experienced civil engineer and founder, leading the company with a vision for excellence.",
    },
    {
      name: "Sonam",
      role: "MD of Company",
      experience: "10+ years",
      image: "/images/team-sonam.png", // Using provided image for Sonam
      description: "Dynamic Managing Director overseeing operations and strategic growth.",
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Engineer",
      experience: "18+ years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Structural engineer specializing in complex commercial and industrial projects.",
    },
    {
      name: "Emily Chen",
      role: "Design Director",
      experience: "12+ years",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Architectural designer focused on sustainable and innovative building solutions.",
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
                <Link href="/about" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About OmConstructions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building excellence since 1999. We are a trusted construction company committed to delivering quality
              projects that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1999 by Sonam, OmConstructions began as a small residential construction company with a
                  simple mission: to build homes that families could be proud of for generations.
                </p>
                <p>
                  Over the past 25 years, we've grown from a team of 5 to over 50 skilled professionals, expanding our
                  services to include commercial construction, renovations, and infrastructure development. Despite our
                  growth, we've never lost sight of our core values: quality, integrity, and customer satisfaction.
                </p>
                <p>
                  Today, OmConstructions is recognized as one of the leading construction companies in the region, with
                  over 500 completed projects and a reputation for excellence that speaks for itself.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/meeting.png" // Using provided image
                alt="OmConstructions team at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Since 1999</div>
                <div className="text-blue-100">Building Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <div className="text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional construction services that exceed our clients' expectations while maintaining
                  the highest standards of safety, quality, and professionalism. We are committed to building lasting
                  relationships and creating structures that enhance communities.
                </p>
              </div>
            </Card>
            <Card className="p-8 border-0 shadow-lg">
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and respected construction company in the region, known for our innovation,
                  sustainability, and unwavering commitment to excellence. We envision a future where every project we
                  complete contributes positively to the built environment.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team brings decades of construction expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-3">{member.experience}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence is recognized by industry leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Licensed General Contractor",
                description: "Fully licensed and bonded in all service areas",
                icon: Shield,
              },
              {
                title: "OSHA Safety Certified",
                description: "Comprehensive safety training and compliance",
                icon: Award,
              },
              {
                title: "Better Business Bureau A+",
                description: "Highest rating for customer service excellence",
                icon: CheckCircle,
              },
            ].map((cert, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <cert.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the OmConstructions difference. Let's discuss your next construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleStartProject}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Start Your Project
            </Button>
            <Button
              onClick={handleContactTeam}
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Contact Our Team
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
