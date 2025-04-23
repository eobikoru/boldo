import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-lg mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl leading-tight font-light text-gray-900 max-w-4xl mx-auto">
            Handshake infographic mass market
            <br />
            crowdfunding iteration.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div>
            {/* <div className="bg-[#65E4A3] rounded-2xl p-8 h-72 flex items-center justify-center mb-6"> */}
              <Image
                src="/assests/images/iil1.png"
                alt="Person with documents"
                width={300}
                height={200}
                className="object-contain"
              />
            {/* </div> */}
            <h3 className="text-2xl font-light my-5 text-black">Cool feature title</h3>
            <p className="text-gray-500 mb-6">Learning curve network effects return on investment.</p>
            <Link
              href="#"
              className="inline-flex items-center font-bold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors text-black"
            >
              Explore page <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Feature Card 2 */}
          <div>
            {/* <div className="bg-gray-100 rounded-2xl p-8 h-72 flex items-center justify-center mb-6"> */}
              <Image
                src="/assests/images/ill2.png"
                alt="People shaking hands"
                width={300}
                height={200}
                className="object-contain"
              />
            {/* </div> */}
            <h3 className="text-2xl font-light my-5 text-black">Even cooler feature</h3>
            <p className="text-gray-500 mb-6">Learning curve network effects return on investment.</p>
            <Link
              href="#"
              className="inline-flex items-center font-bold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors text-black"
            >
              Explore page <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Feature Card 3 */}
          <div>
            {/* <div className="bg-[#65E4A3] rounded-2xl  h-72 flex items-center justify-center mb-6"> */}
              <Image
                src="/assests/images/ill3.png"
                alt="Person sitting by buildings"
                width={300}
                height={200}
                className="object-contain"
              />
            {/* </div> */}
            <h3 className="text-2xl font-light my-5 text-black">Cool feature title</h3>
            <p className="text-gray-500 mb-6">Learning curve network effects return on investment.</p>
            <Link
              href="#"
              className="inline-flex items-center font-bold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors text-black"
            >
              Explore page <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
