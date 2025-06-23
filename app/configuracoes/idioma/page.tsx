"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"
import type { Language } from "@/lib/i18n"

export default function IdiomaPage() {
  const router = useRouter()
  const { language, setLanguage, t } = useLanguage()
  const { toast } = useToast()

  useEffect(() => {
    // Verificar tema escuro salvo
    const savedDarkMode = localStorage.getItem("bravvoDarkMode")
    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const languages = [
    { code: "pt" as Language, name: t.portuguese, flag: "🇧🇷" },
    { code: "en" as Language, name: t.english, flag: "🇺🇸" },
    { code: "es" as Language, name: t.spanish, flag: "🇪🇸" },
  ]

  const handleBack = () => {
    router.back()
  }

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage)

      toast({
        title: t.languageChanged,
        description: `${t.language}: ${languages.find((l) => l.code === newLanguage)?.name}`,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={handleBack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <ArrowLeft className="h-5 w-5 dark:text-white" />
            </button>
            <h1 className="text-lg font-medium dark:text-white">{t.language}</h1>
            <div className="w-10"></div> {/* Espaçador para centralizar o título */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {languages.map((lang, index) => (
            <div key={lang.code}>
              <button
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => handleLanguageChange(lang.code)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium dark:text-white">{lang.name}</span>
                </div>
                {language === lang.code && <Check className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
              </button>
              {index < languages.length - 1 && <div className="border-b border-gray-100 dark:border-gray-700" />}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <h3 className="font-medium mb-2 dark:text-white">{t.aboutBravvo}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {language === "pt" && "O idioma selecionado será aplicado em todo o aplicativo imediatamente."}
            {language === "en" && "The selected language will be applied throughout the app immediately."}
            {language === "es" && "El idioma seleccionado se aplicará en toda la aplicación inmediatamente."}
          </p>
        </div>
      </div>
    </div>
  )
}
