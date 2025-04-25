import Image from "next/image"
import { Check } from 'lucide-react'

export function FeatureSectionOne() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image with chart */}
          <div className="relative mb-16 md:mb-0 animate-fade-in-left">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/assests/images/bdman.png"
                alt="Man on phone"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Chart overlay - Desktop */}
            <div className="hidden md:flex absolute flex-col items-center bottom-0 left-[22rem] -translate-x-1/2 translate-y-1/4 bg-white p-4 md:p-6 rounded-lg shadow-lg w-56 md:w-64 animate-float">
              <div className="my-3 md:my-5">
                <img src="/assests/images/group.png" alt="Bar chart" className="w-full h-auto" />
              </div>
              <div className="w-[88%] pb-10">
                <div className="text-2xl md:text-3xl text-gray-500 font-normal">30%</div>
                <div className="text-gray-500 text-xs md:text-sm">More income in June</div>
              </div>
            </div>

            {/* Chart overlay - Mobile */}
            <div className="md:hidden flex flex-col items-center bg-white p-4 rounded-lg shadow-lg mx-auto -mt-10 relative z-10 w-56 animate-fade-in-up">
              <div className="my-3 w-full">
                <img src="/assests/images/group.png" alt="Bar chart" className="w-full h-auto" />
              </div>
              <div className="">
                <div className="text-2xl text-gray-500 font-light">30%</div>
                <div className="text-gray-500 text-xs">More income in June</div>
              </div>
            </div>
          </div>

          {/* Right side - Text and features */}
          <div className="animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8 leading-snug text-gray-900">
              We connect our customers <div className="my-4">with the best, and help them</div> keep up-and stay open.
            </h2>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
                <div className="bg-[#0A1930] rounded-full p-1 transform transition-transform duration-300 hover:scale-110">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <p className="text-base md:text-lg font-light text-gray-900">We connect our customers with the best.</p>
              </div>

              <div className="flex items-center gap-3 md:gap-4 animate-fade-in-up animation-delay-400">
                <div className="bg-[#0A1930] rounded-full p-1 transform transition-transform duration-300 hover:scale-110">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <p className="text-base md:text-lg font-light text-gray-900">Advisor success customer launch party.</p>
              </div>

              <div className="flex items-center gap-3 md:gap-4 animate-fade-in-up animation-delay-600">
                <div className="bg-[#0A1930] rounded-full p-1 transform transition-transform duration-300 hover:scale-110">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <p className="text-base md:text-lg font-light text-gray-900">Business-to-consumer long tail.</p>
              </div>
            </div>

            <button className="mt-8 md:mt-10 bg-[#0A1930] text-white px-10 md:px-16 py-2.5 md:py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors hover:scale-105 active:scale-95 transform duration-200 animate-fade-in-up animation-delay-800">
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
