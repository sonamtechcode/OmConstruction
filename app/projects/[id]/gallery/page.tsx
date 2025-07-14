"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ArrowLeft, Phone, Mail } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { projectsData } from "@/lib/projectsData"

export default function ProjectGalleryPage() {
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
              href={`/projects/${project.id}`}
              className="inline-flex items-center text-blue-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {project.title} Details
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title} Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore a collection of images from our {project.title} project.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.galleryImages && project.galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 py-10">
              <p>No gallery images available for this project yet.</p>
            </div>
          )}
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
