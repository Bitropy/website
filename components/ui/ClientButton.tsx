"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ClientButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export default function ClientButton({ children, href, className, size }: ClientButtonProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank")
    }
  }

  return (
    <Button
      size={size}
      className={className}
      onClick={handleClick}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  )
}