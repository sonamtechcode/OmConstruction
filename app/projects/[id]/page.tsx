"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  ArrowLeft,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  CheckCircle,
  Lightbulb,
  Hammer,
  Phone,
  Mail,
  ImageIcon,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { projectsData } from "@/lib/projectsData"

export default function ProjectDetailsPage() {
  const params = useParams()
  const projectId = Number.parseInt(params.id as string)
  const project = projectsData.find((p) => p.id === projectId)

  const handleGetQuote = () => {
    window.location.href = "/contact"
  }

  const handleCallNow = () => {
    window.location.href = "tel:+919927903736"
  }

  const handleEmailUs = () => {
    window.location.href = "mailto:omconstructions1976@gmail.com"
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">The project you are looking for does not exist.</p>
        <Link href="/projects">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>
    )
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
                <Link href="/projects" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenges & Solutions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                        <Hammer className="h-5 w-5 text-red-500 mr-2" />
                        Challenges Faced:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 pl-4">
                        {project.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                        Our Solutions:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 pl-4">
                        {project.solutions.map((solution, index) => (
                          <li key={index}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <Link href={`/projects/${project.id}/gallery`} className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    <ImageIcon className="mr-2 h-5 w-5" />
                    View Project Gallery
                  </Button>
                </Link>
                <Button onClick={handleGetQuote} variant="outline" className="flex-1 text-lg py-3 bg-transparent">
                  Get a Quote for Your Project
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Project At a Glance</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div>{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-medium">Budget</div>
                        <div>{project.budget}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div>{project.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-medium">Team Size</div>
                        <div>{project.team}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className={`text-sm ${project.status === "Completed" ? "bg-green-600" : "bg-yellow-600"}`}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="ml-2 bg-gray-100 text-gray-800">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us About This Project</h3>
                  <p className="text-gray-600 mb-4">Interested in a similar project? Get in touch with our experts.</p>
                  <Button
                    onClick={handleCallNow}
                    className="w-full bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 transition-all duration-300 mb-3"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    onClick={handleEmailUs}
                    variant="outline"
                    className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 transition-all duration-300 bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </CardContent>
              </Card>
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
