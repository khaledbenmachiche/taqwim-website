export function TeamSection() {
  const teamMembers = [
    { initials: "BK", name: "Benmachiche Khaled" },
    { initials: "BH", name: "Bayadh Hadjer" },
    { initials: "RN", name: "Rahal Nour El Houda" },
    { initials: "YL", name: "Yazi Lynda Mellissa" },
    { initials: "NI", name: "Nakib Ibtihel" },
    { initials: "MK", name: "Medfouni Khitem" },
  ]

  return (
    <section className="w-full py-12 md:py-24" id="team">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The talented individuals behind Taqwim
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#21845a]/20 flex items-center justify-center mb-3">
                <span className="text-[#21845a] font-bold text-xl">{member.initials}</span>
              </div>
              <h3 className="font-medium">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

