import { MobileScreen } from "@/components/ui/mobile-screen"

export function CalendarIntegrationSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#21845a]/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Google Calendar Integration
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Seamless synchronization with your existing calendar
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-[25px_1fr] items-start">
                <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-[#21845a]"></div>
                <div className="space-y-1">
                  <p className="text-base font-medium">Automated offline reminders</p>
                  <p className="text-sm text-gray-500">Events are cached locally for offline operation</p>
                </div>
              </div>
              <div className="grid grid-cols-[25px_1fr] items-start">
                <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-[#21845a]"></div>
                <div className="space-y-1">
                  <p className="text-base font-medium">Multiple calendars & time zones</p>
                  <p className="text-sm text-gray-500">Support for all your calendars across different time zones</p>
                </div>
              </div>
              <div className="grid grid-cols-[25px_1fr] items-start">
                <div className="flex h-2 w-2 translate-y-1.5 rounded-full bg-[#21845a]"></div>
                <div className="space-y-1">
                  <p className="text-base font-medium">Real-time updates using API Webhooks</p>
                  <p className="text-sm text-gray-500">Instant synchronization when calendar events change</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <MobileScreen
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.4%20Sign%20Up%20-%20Success%20Verification-xtXi0ZmDRzL4s8flixDDqmUIDGXXRw.png"
              alt="Google Calendar Integration"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

