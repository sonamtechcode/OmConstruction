"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ArrowLeft, Phone, Mail } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function EquipmentPage() {
  const handleGetQuote = () => {
    window.location.href = "/contact"
  }

  const handleCallNow = () => {
    window.location.href = "tel:+919927903736"
  }

  const handleEmailUs = () => {
    window.location.href = "mailto:info@omconstructions.com"
  }

  const equipmentList = [
    {
      name: "Ajax Fiori Concrete Mixer",
      description: "High-capacity self-loading concrete mixer for efficient on-site concrete production.",
      image: "/images/equipment/ajax-fiori-concrete-mixer.png",
    },
    {
      name: "Concrete Mixer Machine",
      description: "Standard concrete mixer for various construction needs.",
      image: "/images/equipment/concrete-mixer-machine.png",
    },
    {
      name: "Concrete Vibrator",
      description: "Ensures proper compaction and strength of concrete by removing air bubbles.",
      image: "/images/equipment/concrete-vibrator.png",
    },
    {
      name: "RCC Dismantling Machine",
      description: "Specialized equipment for safe and efficient dismantling of reinforced concrete structures.",
      image: "/images/equipment/rcc-dismantling-machine.png",
    },
    {
      name: "Tractor Trolley",
      description: "Versatile transport solution for materials and debris on construction sites.",
      image: "/images/equipment/tractor-trolley.png",
    },
    {
      name: "Concrete Cube Testing Machine",
      description: "Used for precise testing of concrete compressive strength to ensure quality.",
      image: "/images/equipment/concrete-cube-testing-machine.png",
    },
    {
      name: "Sand Testing Equipment",
      description: "Tools for analyzing sand quality, including sieve analysis and moisture content.",
      image: "/images/equipment/sand-testing-equipment.png",
    },
    {
      name: "Concrete Cube Mould",
      description: "Moulds for preparing concrete samples for strength testing.",
      image: "/images/equipment/concrete-cube-mould.png",
    },
    {
      name: "New Shuttering Material",
      description: "Modern and durable materials for formwork, ensuring smooth and precise concrete casting.",
      image: "/images/equipment/new-shuttering-material.png",
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
                <Link href="/equipment" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Advanced Equipment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We utilize state-of-the-art machinery and tools to ensure precision, efficiency, and safety on every
              construction site.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((equipment, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <img
                    src={equipment.image || "/placeholder.svg"}
                    alt={equipment.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{equipment.description}</p>
                </CardContent>
              </Card>
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
