import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#21845a]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to never miss an event?
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
              Get started with Taqwim today and experience the future of event reminders
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-white text-[#21845a] hover:bg-white/90">Get Started</Button>
            <Button variant="outline" className="bg-white text-[#21845a] hover:bg-white/90">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

