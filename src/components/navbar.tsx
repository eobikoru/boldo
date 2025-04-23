"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { BoldoLogo } from "./boldo-logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <img  className="h-10 w-auto" alt="boldo logo" src="assests/images/Logo.png"/>
          {/* <BoldoLogo className="h-10 w-auto" /> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            Product
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link
            href="#"
            className="bg-white text-[#0a1930] px-12 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Log In
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-white p-2" onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#0a1930] text-white w-[280px] border-r border-gray-700">
              <div className="mt-8 mb-6">
                <BoldoLogo className="h-8 w-auto" />
              </div>
              <div className="flex flex-col space-y-6 pt-4">
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Product
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="bg-white text-[#0a1930] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors w-fit mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
