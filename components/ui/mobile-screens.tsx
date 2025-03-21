"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function MobileScreens() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const screens = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.%20Spash%20Screen-sJ9bQYz0IWhQ1aHARh35CbGREoJ6Zc.png",
      alt: "Splash Screen",
      title: "Splash Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.1%20Onboarding%203-0jIBtipLg2zxFNLjBknlv8PoDGHxKM.png",
      alt: "Onboarding Screen",
      title: "Welcome Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.%20Sign%20In%20-%20Empty%20State-kovUpg5Yz4mMVoBdBmc9AkoZF4RuJi.png",
      alt: "Sign In Screen",
      title: "Sign In Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.3%20Sign%20Up%20-%20Active%20State-k1p1bBBsdP1H8MiPDmEinhgZB6tflF.png",
      alt: "Sign Up Screen",
      title: "Sign Up Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.4%20Sign%20Up%20-%20Success%20Verification-xtXi0ZmDRzL4s8flixDDqmUIDGXXRw.png",
      alt: "Success Screen",
      title: "Account Created",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1%20Profile-yzd5g9YzjuvjdZuGFt8gNplRO5Iy8b.png",
      alt: "Profile Screen",
      title: "Profile Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.7%20Settings-7dnYAhCmeikag2A96RJRZj9u8CvSEJ.png",
      alt: "Settings Screen",
      title: "Settings Screen",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.%20Profile-kxzqOZK06td8YJy4rIaXODNPGK5TBM.png",
      alt: "Notifications Screen",
      title: "Notifications Screen",
    },
  ]

  const nextScreen = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length)
  }

  const prevScreen = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screens.length) % screens.length)
  }

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-xl border-8 border-gray-800 shadow-xl">
        <Image
          src={screens[currentIndex].src || "/placeholder.svg"}
          alt={screens[currentIndex].alt}
          width={390}
          height={844}
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={prevScreen} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground">{screens[currentIndex].title}</span>
        <Button variant="outline" size="icon" onClick={nextScreen} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

