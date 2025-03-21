import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MobileScreen } from "@/components/ui/mobile-screen"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#21845a]/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Intelligent Event Reminder System
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Never miss an important event again. Taqwim delivers reminders through SMS, Telegram, and WhatsApp, even
                without internet access.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.taqwim.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#21845a] hover:bg-[#21845a]/90">
                  Explore Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <MobileScreen
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.1%20Onboarding%203-0jIBtipLg2zxFNLjBknlv8PoDGHxKM.png"
              alt="Taqwim App Welcome Screen"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

