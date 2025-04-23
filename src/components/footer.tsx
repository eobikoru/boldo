import Link from "next/link"
import { BoldoLogo } from "./boldo-logo"

export function Footer() {
  return (
    <footer className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <BoldoLogo className="h-10 w-auto mb-6" dark />
            <p className="text-gray-600 mb-8">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad
              twitter.
            </p>
            <p className="text-gray-500">All rights reserved.</p>
          </div>

          {/* Landings */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-black">Landings</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-black">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                  <span className="bg-[#65E4A3] text-xs px-2 py-1 rounded-full">Hiring!</span>
                </div>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-black">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
