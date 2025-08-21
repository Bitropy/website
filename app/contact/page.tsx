import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ContactPageClient from "./ContactPageClient"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentPage="contact" />
      <ContactPageClient />
      <Footer />
    </div>
  )
}