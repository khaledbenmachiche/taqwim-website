import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Calendar, MessageSquare, Cpu, Smartphone, WifiOff } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Bell className="h-6 w-6 text-[#21845a]" />,
      title: "IoT-Based Delivery",
      description: "Uses Raspberry Pi, GSM module, MQTT for message transmission",
      content:
        "Our hardware solution ensures messages are delivered even when traditional internet connectivity fails.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#21845a]" />,
      title: "Google Calendar Synchronization",
      description: "Fetch & process events automatically",
      content:
        "Seamlessly integrates with Google Calendar to ensure all your events are tracked and reminders are sent.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#21845a]" />,
      title: "Multi-Channel Notifications",
      description: "SMS, Telegram, WhatsApp for broader reach",
      content: "Delivers notifications through multiple channels to ensure you receive important reminders.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#21845a]" />,
      title: "Edge Computing Integration",
      description: "Reduce reliance on cloud infrastructure",
      content:
        "Process data locally to minimize latency and ensure reliability even with unstable internet connections.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#21845a]" />,
      title: "User-Friendly Mobile App",
      description: "Manage events & customize notifications",
      content: "Intuitive mobile interface for managing your events and notification preferences.",
    },
    {
      icon: <WifiOff className="h-6 w-6 text-[#21845a]" />,
      title: "Offline Functionality",
      description: "Ensure reminders even without internet access",
      content: "Never miss an important event due to connectivity issues with our offline-capable reminder system.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Functionalities</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Taqwim combines multiple technologies to ensure you never miss an important event
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#21845a]/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-gray-500">{feature.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

