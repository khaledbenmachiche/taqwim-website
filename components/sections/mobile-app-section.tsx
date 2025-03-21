import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MobileScreens } from "@/components/ui/mobile-screens"

export function MobileAppSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mobile App</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              User-friendly interface to manage your events and notifications
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Multi-Channel Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Choose how you want to be notified: SMS, Telegram, WhatsApp, or all three
                    </p>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.7%20Settings-7dnYAhCmeikag2A96RJRZj9u8CvSEJ.png"
                        alt="Notification Settings"
                        width={390}
                        height={844}
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>User Account Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Easily manage your profile, preferences, and notification settings
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <MobileScreens />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

