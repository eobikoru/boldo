import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-500 text-lg mb-4 animate-fade-in-down">Our Services</p>
          <h2 className="hidden md:flex md:flex-col text-3xl md:text-4xl lg:text-5xl leading-tight font-light text-gray-900 max-w-4xl mx-auto animate-fade-in-down animation-delay-200">
            Handshake infographic mass market
            <span className="block mt-2 md:mt-4">crowdfunding iteration.</span>
          </h2>
          <h2 className="text-3xl md:hidden md:text-4xl lg:text-5xl leading-tight font-light text-gray-900 max-w-4xl mx-auto animate-fade-in-down animation-delay-200">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="flex flex-col md:w-[85%] items-start animate-fade-in-up">
            <div className="w-full mb-6">
              <Image
                src="/assests/images/iil1.png"
                alt="Person with documents"
                width={300}
                height={200}
                className="object-contain w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-light my-5 text-black">Cool feature title</h3>
            <p className="text-gray-500 mb-6">Learning curve network effects return on investment.</p>
            <Link
              href="#"
              className="inline-flex items-center font-bold border-b pb-4 border-gray-900 pb-1 hover:text-gray-700 transition-colors text-black group"
            >
              Explore page <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col md:w-[85%] items-start animate-fade-in-up animation-delay-200">
            <div className="w-full mb-6">
              <Image
                src="/assests/images/ill2.png"
                alt="People shaking hands"
                width={300}
                height={200}
                className="object-contain w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-light my-5 text-black">Even cooler feature</h3>
            <p className="text-gray-500 mb-6">Learning curve network effects return on investment.</p>
            <Link
              href="#"
              className="inline-flex items-center pb-4 font-bold border-b border-gray-900 pb-1 hover:text-gray-700 transition-colors text-black group"
            >
              Explore page <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Feature Card 3 */}
          <div className="flex md:w-[85%] flex-col items-start sm:col-span-2 md:col-span-1 animate-fade-in-up animation-delay-400">
            <div className="w-full mb-6">
              <Image
                src="/assests/images/ill3.png"
                alt="Person sitting by buildings"
                width={300}
                height={200}
                className="object-contain w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-light my-5 text-black">Cool feature title</h3>
            <p className="text-gray-500 mb-6">Learning curve network effects return on investment.</p>
            <Link
              href="#"
              className="inline-flex items-center pb-4 font-bold border-b border-gray-900 pb-1 hover:text-gray-700 transition-colors text-black group"
            >
              Explore page <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
