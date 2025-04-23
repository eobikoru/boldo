import Link from "next/link"
import { ProgressBars } from "./progress-bars"
import { BarChart } from "./bar-chart"
import { DonutChart } from "./donut-chart"

export function HeroSection() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="grid  mt-14 mb-6 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl   font-normal text-white leading-tight">
            Save time by building 
          </h1>
          <h1 className="text-3xl md:text-5xl mt-6   font-normal text-white leading-tight">
          fast with Boldo Template
          </h1>
          <p className="text-gray-300 font-light mt-6 text-base">
            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
            success deployment non-disclosure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-[#65E4A3] text-[#0a1930] px-16 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Buy template
            </Link>
            <Link
              href="#"
              className="border-2 border-white text-white px-12 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <ProgressBars />
          <div className="grid grid-cols-2 gap-6">
            <BarChart />
            <DonutChart />
          </div>
        </div>
      </div>
    </main>
  )
}
