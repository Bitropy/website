"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const languages = [
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'pl', name: 'PL', flag: '🇵🇱' },
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLang = pathname.split('/')[1] || 'en'

  const switchLanguage = (newLang: string) => {
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/'
    const newPath = newLang === 'en' ? pathWithoutLang : `/${newLang}${pathWithoutLang}`
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1">
      {languages.map((language) => (
        <Button
          key={language.code}
          variant="ghost"
          size="sm"
          onClick={() => switchLanguage(language.code)}
          className={`px-2 py-1 text-xs font-medium transition-colors ${
            currentLang === language.code
              ? 'text-white bg-gray-700'
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <span className="mr-1">{language.flag}</span>
          {language.name}
        </Button>
      ))}
    </div>
  )
}