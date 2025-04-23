export function CTASection() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#0A1930] rounded-2xl py-16 px-4 md:px-8 relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1C3654] rounded-l-full opacity-50"></div>
  
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
                An enterprise template to ramp up your company website
              </h2>
  
              <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-6 py-4 rounded-full text-gray-800 w-full md:flex-1"
                />
                <button className="bg-[#65E4A3] text-[#0a1930] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                  Start now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  