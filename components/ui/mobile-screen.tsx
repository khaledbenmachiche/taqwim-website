import Image from "next/image"

interface MobileScreenProps {
  src: string
  alt: string
}

export function MobileScreen({ src, alt }: MobileScreenProps) {
  return (
    <div className="relative aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-xl border-8 border-gray-800 shadow-xl">
      <Image src={src || "/placeholder.svg"} alt={alt} width={390} height={844} className="object-cover" />
    </div>
  )
}

