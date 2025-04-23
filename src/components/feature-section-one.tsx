import Image from "next/image"
import { Check } from "lucide-react"

export function FeatureSectionOne() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image with chart */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/assests/images/bdman.png"
                alt="Man on phone"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Chart overlay */}
            <div className="absolute flex-col flex items-center h-[24rem] bottom-0 left-[23rem] -translate-x-1/2 translate-y-1/4 bg-white p-6 rounded-lg shadow-lg w-64">
            
                {/* Bar chart */}
                <div className="my-5">
             <img src="/assests/images/group.png"/>
                  </div>
          
              <div className="">
                <div className="text-3xl text-gray-500 font-light">30%</div>
                <div className="text-gray-500 text-sm">More income in June</div>
              </div>
            </div>
          </div>

          {/* Right side - Text and features */}
          <div>
            <h2 className="text-4xl font-light mb-8 leading-tight text-gray-900">
              We connect our customers with the best, and help them keep up-and stay open.
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#0A1930] rounded-full p-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg font-light text-gray-900">We connect our customers with the best.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#0A1930] rounded-full p-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg font-light text-gray-900">Advisor success customer launch party.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#0A1930] rounded-full p-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg font-light text-gray-900">Business-to-consumer long tail.</p>
              </div>
            </div>

            <button className="mt-10 bg-[#0A1930] text-white px-16 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
