import 'server-only'

type Locale = 'en' | 'pl'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  const dictionaryLoader = dictionaries[locale]
  if (!dictionaryLoader) {
    throw new Error(`Dictionary for locale "${locale}" not found`)
  }
  return dictionaryLoader()
}

export const locales = ['en', 'pl'] as const
export const defaultLocale = 'en' as const

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>