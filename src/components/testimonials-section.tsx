import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20  bg-[#0A1930] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between">

    
          <h2 className="text-4xl md:text-5xl font-extralight mb-16 max-w-3xl">
            An enterprise template to ramp up your company website
          </h2>
          <div className="flex justify-end mt-8 gap-4">
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <ArrowLeft className="h-6 w-6 text-black" />
              </button>
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-black" />
              </button>
            </div>
      </div>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white h-[17rem] rounded-lg p-8">
                <p className="text-2xl mb-6 font-extralight text-black">
                  "Buyer buzz partner network disruptive non-disclosure agreement business"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                  src="/assests/images/person2.png"
                      alt="Albus Dumbledore"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Albus Dumbledore</h4>
                    <p className="text-gray-600">Manager @ Howarts</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white h-[21rem] rounded-lg p-8">
                <p className="text-2xl mb-10 font-extralight text-black">
                  "Learning curve infrastructure value proposition advisor strategy user experience hypotheses
                  investor."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/assests/images/person1.png"
                      alt="Severus Snape"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Severus Snape</h4>
                    <p className="text-gray-600">Manager @ Slytherin</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white h-[18rem] rounded-lg p-8">
                <p className="text-2xl mb-10 font-extralight text-black">
                  "Release facebook responsive web design business model canvas seed money monetization."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/assests/images/person.png"
                      alt="Harry Potter"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Harry Potter</h4>
                    <p className="text-gray-600">Team Leader @ Gryffindor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
          
          </div>
        </div>
      </div>
    </section>
  )
}
