import GoogleAnalytics from "@/components/GoogleAnalytics"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  )
}
