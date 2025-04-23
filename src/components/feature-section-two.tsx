import Image from "next/image"
import { Eye, Lightbulb, Zap } from "lucide-react"

export function FeatureSectionTwo() {
  return (
    <section className="py-28  bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text and features */}
          <div>
            <h2 className="text-4xl font-light mb-8 leading-tight text-black">
              We connect our customers with the best, and help them keep up-and stay open.
            </h2>

            <div className="space-y-4">
              <div className="bg-[#0A1930] text-white p-4 rounded-lg flex items-center gap-4">
                <Zap className="h-5 w-5 text-white" />
                <p className="text-white">We connect our customers with the best.</p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center gap-4 shadow-sm">
                <Eye className="h-5 w-5 text-black" />
                <p className="text-black">Advisor success customer launch party.</p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center gap-4 shadow-sm">
                <Lightbulb className="h-5 w-5 text-black" />
                <p className="text-black">Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>

          {/* Right side - Image with chart */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
              src="/assests/images/woman.png"
                alt="Woman on phone"
                width={200}
                height={200}
                className="w-full  rounded-2xl"
              />
            </div>

            {/* Chart overlay */}
            <div className="absolute h-[23rem]  bottom-0 right-40 translate-y-1/4 bg-white p-6 rounded-lg shadow-lg w-72">
              <div className="flex justify-center mb-6">
                {/* Donut chart */}
                <div className="relative mt-7 w-32 h-40">
                 
                    
               <img src="/assests/images/pie.png"/>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3DBEFF]"></div>
                  <p className="text-sm text-black">35% - Agile Development</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#65E4A3]"></div>
                  <p className="text-sm text-black">30% - Investor bandwidth</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0A1930]"></div>
                  <p className="text-sm text-black">35% - A/B testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
