import { AccordionSection } from "@/src/components/accordion-section";
import { BlogSection } from "@/src/components/blog-section";
import { BoldoLogo } from "@/src/components/boldo-logo";
import { CTASection } from "@/src/components/cta-section";
import { FeatureSectionOne } from "@/src/components/feature-section-one";
import { FeatureSectionTwo } from "@/src/components/feature-section-two";
import { Footer } from "@/src/components/footer";
import { HeroSection } from "@/src/components/hero-section";
import { Navbar } from "@/src/components/navbar";
import { PrestoLogo } from "@/src/components/presto-logo";
import { ServicesSection } from "@/src/components/services-section";
import { TestimonialsSection } from "@/src/components/testimonials-section";


export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-[#0a1930]">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Logos Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <BoldoLogo className="h-8 w-auto opacity-30" />
            <PrestoLogo className="h-8 w-auto opacity-60" />
            <BoldoLogo className="h-8 w-auto opacity-75" />
            <PrestoLogo className="h-8 w-auto opacity-60" />
            <BoldoLogo className="h-8 w-auto opacity-60" />
            <PrestoLogo className="h-8 w-auto opacity-30" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Feature Section One */}
      <FeatureSectionOne />

      {/* Feature Section Two */}
      <FeatureSectionTwo />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Accordion Section */}
      <AccordionSection />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
