import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { MarketProblemsSection } from "@/components/sections/market-problems-section"
import { ObjectiveSection } from "@/components/sections/objective-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CalendarIntegrationSection } from "@/components/sections/calendar-integration-section"
import { MobileAppSection } from "@/components/sections/mobile-app-section"
import { NotificationSection } from "@/components/sections/notification-section"
import { TeamSection } from "@/components/sections/team-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MarketProblemsSection />
        <ObjectiveSection />
        <FeaturesSection />
        <CalendarIntegrationSection />
        <MobileAppSection />
        <NotificationSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

