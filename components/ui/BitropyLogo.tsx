import Image from "next/image"

interface BitropyLogoProps {
  className?: string
}

export default function BitropyLogo({ className = "h-12 w-auto" }: BitropyLogoProps) {
  return (
    <div className={className}>
      <Image
        src="/images/Bitropy-w.svg"
        alt="Bitropy"
        width={120}
        height={49}
        className="w-full h-full"
      />
    </div>
  )
} 