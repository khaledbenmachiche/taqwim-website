import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCI_PRESENTATION%20%281%29-gkP6jvBN6AYql9RnT4Uui4ke5JVw8y.png"
              alt="Taqwim Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
          <Link href="#features" className="transition-colors hover:text-foreground/80">
            Features
          </Link>
          <Link href="#team" className="transition-colors hover:text-foreground/80">
            Team
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

