import { MobileScreen } from "@/components/ui/mobile-screen"

export function NotificationSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#21845a]/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <MobileScreen
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.%20Profile-kxzqOZK06td8YJy4rIaXODNPGK5TBM.png"
              alt="Notifications Screen"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Smart Notifications</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Get timely reminders for all your important events
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-[25px_1fr] items-start">
                <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-[#21845a]"></div>
                <div className="space-y-1">
                  <p className="text-base font-medium">Customizable delivery channels</p>
                  <p className="text-sm text-gray-500">Choose which apps deliver your notifications</p>
                </div>
              </div>
              <div className="grid grid-cols-[25px_1fr] items-start">
                <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-[#21845a]"></div>
                <div className="space-y-1">
                  <p className="text-base font-medium">Offline-capable reminders</p>
                  <p className="text-sm text-gray-500">SMS notifications work even without internet connectivity</p>
                </div>
              </div>
              <div className="grid grid-cols-[25px_1fr] items-start">
                <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-[#21845a]"></div>
                <div className="space-y-1">
                  <p className="text-base font-medium">Detailed event information</p>
                  <p className="text-sm text-gray-500">Complete details about your upcoming events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

