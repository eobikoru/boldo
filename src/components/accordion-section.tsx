import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function AccordionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Office Image */}
          <div className="mb-16">
            <Image
               src="/assests/images/table.png"
              alt="Modern office with people working"
              width={1200}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left side - Heading */}
            <div>
              <h2 className="text-4xl font-light leading-tight text-black">
                We connect our customers with the best, and help them keep up-and stay open.
              </h2>
            </div>

            {/* Right side - Accordion */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-light text-black">We connect our customers with the best?</h3>
                  <button className="w-10 h-10 rounded-full bg-[#0A1930] flex items-center justify-center">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-light text-black">Android research & development rockstar?</h3>
                  <button className="w-10 h-10 rounded-full bg-[#0A1930] flex items-center justify-center">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
