import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MarketProblemsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white" id="problems">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What's on the market</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Current solutions have significant limitations that Taqwim addresses
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Internet dependency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Most reminder systems fail when internet connectivity is lost</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Limited notification methods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Restricted to a single channel like email or app notifications</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Latency issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Cloud-based alerts often experience delays in delivery</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">No offline support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Reminders fail completely when devices are offline</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

