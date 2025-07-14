"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, Building2 } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] p-4 bg-white overflow-y-auto">
        <SheetHeader className="flex flex-row items-center justify-between mb-6">
          <SheetTitle className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">OmConstructions</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="grid gap-4 text-lg font-medium">
          <Link
            href="/"
            className="block px-2 py-1 text-gray-900 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="block px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/equipment"
            className="block px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Equipment
          </Link>
          <Link
            href="/about"
            className="block px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button
            onClick={() => {
              window.location.href = "/contact"
              setIsOpen(false)
            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700"
          >
            Get Quote
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
