import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 border-t" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-2">
            <h3 className="font-medium">Product</h3>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Documentation
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-medium">Company</h3>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Team
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Careers
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-medium">Resources</h3>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Blog
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Support
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-medium">Legal</h3>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCI_PRESENTATION%20%281%29-gkP6jvBN6AYql9RnT4Uui4ke5JVw8y.png"
              alt="Taqwim Logo"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © {new Date().getFullYear()} Taqwim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

