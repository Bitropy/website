import Image from "next/image"

interface BitropyLogoProps {
  className?: string
  variant?: "light" | "dark"
}

export default function BitropyLogo({ className = "h-12 w-auto", variant = "dark" }: BitropyLogoProps) {
  return (
    <div className={className}>
      <Image
        src={variant === "dark" ? "/images/Bitropy.svg" : "/images/Bitropy-w.svg"}
        alt="Bitropy"
        width={120}
        height={49}
        className="w-full h-full"
      />
    </div>
  )
} 