"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, Filter, Star, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { getProfessionals } from "@/lib/professionals"
import type { ProfessionalType } from "@/lib/types"
import { useLanguage } from "@/contexts/language-context"

export default function ProfessionalsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const serviceType = searchParams.get("tipo") || ""
  const serviceSubtype = searchParams.get("subtipo") || ""
  const { t } = useLanguage()

  const [professionals, setProfessionals] = useState<ProfessionalType[]>([])
  const [sortOption, setSortOption] = useState("rating")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar tema escuro salvo
    const savedDarkMode = localStorage.getItem("bravvoDarkMode")
    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark")
    }

    if (serviceType && serviceSubtype) {
      setIsLoading(true)
      // Simular carregamento de dados
      setTimeout(() => {
        const data = getProfessionals(serviceType, serviceSubtype)
        setProfessionals(sortProfessionals(data, sortOption))
        setIsLoading(false)
      }, 800)
    } else {
      router.push("/")
    }
  }, [serviceType, serviceSubtype, router, sortOption])

  const sortProfessionals = (data: ProfessionalType[], option: string) => {
    const sortedData = [...data]

    switch (option) {
      case "price-asc":
        return sortedData.sort((a, b) => a.price - b.price)
      case "price-desc":
        return sortedData.sort((a, b) => b.price - a.price)
      case "rating":
        return sortedData.sort((a, b) => b.rating - a.rating)
      case "distance":
        return sortedData.sort((a, b) => a.distance - b.distance)
      default:
        return sortedData
    }
  }

  const handleSortChange = (value: string) => {
    setSortOption(value)
    setProfessionals(sortProfessionals(professionals, value))
  }

  const handleBack = () => {
    router.back()
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
            <h1 className="text-lg font-medium dark:text-white">
              {serviceType}: {serviceSubtype}
            </h1>
            <div className="w-10"></div> {/* Espaçador para centralizar o título */}
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-[57px] z-10 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isLoading ? t.searchingProfessionals : `${professionals.length} ${t.professionalsFound}`}
            </p>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 dark:border-gray-600 dark:text-white dark:bg-gray-700"
                >
                  <Filter className="h-4 w-4" />
                  <span>{t.filter}</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="dark:bg-gray-800 dark:border-gray-700">
                <SheetHeader>
                  <SheetTitle className="dark:text-white">{t.filter}</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <h3 className="text-sm font-medium mb-3 dark:text-white">{t.sortBy}</h3>
                  <RadioGroup value={sortOption} onValueChange={handleSortChange} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rating" id="rating" className="dark:border-gray-600" />
                      <Label htmlFor="rating" className="dark:text-gray-300">
                        {t.bestRating}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="price-asc" id="price-asc" className="dark:border-gray-600" />
                      <Label htmlFor="price-asc" className="dark:text-gray-300">
                        {t.lowestPrice}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="price-desc" id="price-desc" className="dark:border-gray-600" />
                      <Label htmlFor="price-desc" className="dark:text-gray-300">
                        {t.highestPrice}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="distance" id="distance" className="dark:border-gray-600" />
                      <Label htmlFor="distance" className="dark:text-gray-300">
                        {t.closest}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator className="dark:bg-gray-700" />
                <div className="py-4">
                  <h3 className="text-sm font-medium mb-3 dark:text-white">{t.availability}</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start dark:border-gray-600 dark:text-white dark:bg-gray-700"
                    >
                      {t.today}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start dark:border-gray-600 dark:text-white dark:bg-gray-700"
                    >
                      {t.tomorrow}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start dark:border-gray-600 dark:text-white dark:bg-gray-700"
                    >
                      {t.thisWeek}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Professionals List */}
      <div className="container mx-auto px-4 py-4">
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 animate-pulse">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ProfessionalCard({ professional }: { professional: ProfessionalType }) {
  const [expanded, setExpanded] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <img
            src={professional.avatar || "/placeholder.svg"}
            alt={professional.name}
            className="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600"
          />

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium dark:text-white">{professional.name}</h3>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm ml-1 dark:text-white">{professional.rating}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({professional.reviewCount})</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-purple-600 dark:text-purple-400">R$ {professional.price}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.averagePrice}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{professional.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3 mr-1" />
                <span>
                  {professional.location} • {professional.distance} km
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>
                  {professional.availability[0]}
                  {professional.availability.length > 1 ? "..." : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <button
            className="text-xs text-purple-600 dark:text-purple-400 flex items-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <span>{t.seeLess}</span>
                <ChevronUp className="h-3 w-3 ml-1" />
              </>
            ) : (
              <>
                <span>{t.seeMore}</span>
                <ChevronDown className="h-3 w-3 ml-1" />
              </>
            )}
          </button>

          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            {t.hire}
          </Button>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t dark:border-gray-700">
            <h4 className="text-sm font-medium mb-2 dark:text-white">{t.availability}</h4>
            <div className="flex flex-wrap gap-1 mb-3">
              {professional.availability.map((day, index) => (
                <span
                  key={index}
                  className="text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded"
                >
                  {day}
                </span>
              ))}
            </div>

            <h4 className="text-sm font-medium mb-2 dark:text-white">{t.about}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{professional.description}</p>

            <div className="mt-3 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 dark:border-gray-600 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                {t.viewProfile}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 dark:border-gray-600 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                {t.message}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
