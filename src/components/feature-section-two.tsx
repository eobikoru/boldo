import Image from "next/image"
import { Eye, Lightbulb, Zap } from "lucide-react"

export function FeatureSectionTwo() {
  return (
    <section className="py-12 md:py-20 lg:py-44 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text and features */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8 leading-tight text-black">
              We connect our customers  <div className="my-4">with the best, and help them</div>  keep up-and stay open.
            </h2>

            <div className="space-y-3 md:space-y-4">
              <div className="bg-[#0A1930] text-white p-3 md:p-4 rounded-lg flex items-center gap-3 md:gap-4">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <p className="text-white text-sm md:text-base">We connect our customers with the best.</p>
              </div>

              <div className="bg-white border border-gray-200 p-3 md:p-4 rounded-lg flex items-center gap-3 md:gap-4 shadow-sm">
                <Eye className="h-4 w-4 md:h-5 md:w-5 text-black" />
                <p className="text-black text-sm md:text-base">Advisor success customer launch party.</p>
              </div>

              <div className="bg-white border border-gray-200 p-3 md:p-4 rounded-lg flex items-center gap-3 md:gap-4 shadow-sm">
                <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-black" />
                <p className="text-black text-sm md:text-base">Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>

          {/* Right side - Image with chart */}
          <div className="relative mb-16 md:mb-0 order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/assests/images/woman.png"
                alt="Woman on phone"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Chart overlay - Desktop */}
            <div className="hidden md:block absolute bottom-0 right-0 md:right-10 lg:right-40 translate-y-1/4 bg-white p-4 md:p-6 rounded-lg shadow-lg w-56 md:w-72">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="relative mt-3 md:mt-7 w-24 md:w-32">
                  <img src="/assests/images/pie.png" alt="Pie chart" className="w-full h-auto" />
                </div>
              </div>
              <div className="space-y-1 md:space-y-2 w-[90%] mb-11 mx-auto">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3DBEFF]"></div>
                  <p className="text-xs md:text-sm text-black">35% - Agile Development</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#65E4A3]"></div>
                  <p className="text-xs md:text-sm text-black">30% - Investor bandwidth</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0A1930]"></div>
                  <p className="text-xs md:text-sm text-black">35% - A/B testing</p>
                </div>
              </div>
            </div>

            {/* Chart overlay - Mobile */}
            <div className="md:hidden flex flex-col items-center bg-white p-4 rounded-lg shadow-lg mx-auto -mt-10 relative z-10">
              <div className="flex justify-center mb-4">
                <div className="relative w-24">
                  <img src="/assests/images/pie.png" alt="Pie chart" className="w-full h-auto" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3DBEFF]"></div>
                  <p className="text-xs text-black">35% - Agile Development</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#65E4A3]"></div>
                  <p className="text-xs text-black">30% - Investor bandwidth</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0A1930]"></div>
                  <p className="text-xs text-black">35% - A/B testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
