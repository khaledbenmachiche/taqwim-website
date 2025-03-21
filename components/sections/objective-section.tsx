export function ObjectiveSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#21845a]/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Objective</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Develop an intelligent SMS gateway to send reminders through SMS, Telegram, WhatsApp
            </p>
            <ul className="space-y-4 mt-8 text-left">
              <li className="flex items-center">
                <div className="mr-3 h-6 w-6 rounded-full bg-[#21845a] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-lg">Reliable delivery regardless of internet connectivity</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 h-6 w-6 rounded-full bg-[#21845a] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-lg">Multi-channel approach for maximum reachability</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 h-6 w-6 rounded-full bg-[#21845a] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-lg">Edge computing for reduced latency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

