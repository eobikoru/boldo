import Image from "next/image"

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-4">Our Blog</p>
          <h2 className="hidden md:flex md:flex-col text-2xl md:text-5xl font-light text-black max-w-4xl mx-auto">
            Value proposition accelerator product <div className="my-4">management venture</div> 
          </h2>
          <h2 className=" md:hidden text-2xl md:text-5xl font-light text-black max-w-4xl mx-auto">
            Value proposition accelerator product management venture
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Blog Post 1 */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image
                 src="/assests/images/blog3.png"
                alt="Blog post illustration"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-bold text-black">Category</span>
                <span className="text-gray-500">November 22, 2021</span>
              </div>
              <h3 className="text-xl font-light mb-6 text-black">Pitch termsheet backing validation focus release.</h3>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                  <Image
                   src="/assests/images/person.png"
                    alt="Chandler Bing"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-black">Chandler Bing</span>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image
               src="/assests/images/blog1.png"
                alt="Woman with laptop"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-bold text-black">Category</span>
                <span className="text-gray-500">November 22, 2021</span>
              </div>
              <h3 className="text-xl font-light mb-6 text-black">
                Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
              </h3>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                  <Image
                  src="/assests/images/person1.png"
                    alt="Rachel Green"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-black">Rachel Green</span>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image
                 src="/assests/images/blog.png"
                alt="Blog post illustration"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-bold text-black">Category</span>
                <span className="text-gray-500">November 22, 2021</span>
              </div>
              <h3 className="text-xl font-light mb-6 text-black">
                Beta prototype sales iPad gen-z marketing network effects value proposition
              </h3>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                  <Image
                 src="/assests/images/person2.png"
                    alt="Monica Geller"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-black">Monica Geller</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="border-2 border-gray-900 text-black px-16 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Load more
          </button>
        </div>
      </div>
    </section>
  )
}
