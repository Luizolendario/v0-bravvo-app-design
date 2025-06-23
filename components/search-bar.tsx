"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getTranslatedServices } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import PlumberServiceModal from "@/components/service-modals/plumber-service-modal"
import ElectricianModal from "@/components/service-modals/electrician-modal"
import CleaningModal from "@/components/service-modals/cleaning-modal"
import MovingModal from "@/components/service-modals/moving-modal"
import HairdresserModal from "@/components/service-modals/hairdresser-modal"
import BuilderModal from "@/components/service-modals/builder-modal"
import ITSupportModal from "@/components/service-modals/it-support-modal"
import PetSitterModal from "@/components/service-modals/pet-sitter-modal"
import GardeningModal from "@/components/service-modals/gardening-modal"
import SecurityModal from "@/components/service-modals/security-modal"
import PhotographerModal from "@/components/service-modals/photographer-modal"
import PainterModal from "@/components/service-modals/painter-modal"

export default function SearchBar() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Estados para as modais
  const [isElectricianModalOpen, setIsElectricianModalOpen] = useState(false)
  const [isPlumberModalOpen, setIsPlumberModalOpen] = useState(false)
  const [isCleaningModalOpen, setIsCleaningModalOpen] = useState(false)
  const [isMovingModalOpen, setIsMovingModalOpen] = useState(false)
  const [isHairdresserModalOpen, setIsHairdresserModalOpen] = useState(false)
  const [isBuilderModalOpen, setIsBuilderModalOpen] = useState(false)
  const [isITSupportModalOpen, setIsITSupportModalOpen] = useState(false)
  const [isPetSitterModalOpen, setIsPetSitterModalOpen] = useState(false)
  const [isGardeningModalOpen, setIsGardeningModalOpen] = useState(false)
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false)
  const [isPhotographerModalOpen, setIsPhotographerModalOpen] = useState(false)
  const [isPainterModalOpen, setIsPainterModalOpen] = useState(false)

  // Obter serviços traduzidos
  const translatedServices = getTranslatedServices(t)

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    if (query.trim() === "") {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)

    // Simular busca
    const results = translatedServices.filter(
      (service) =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.keywords.some((keyword) => keyword.toLowerCase().includes(query.toLowerCase())),
    )

    setSearchResults(results)
  }

  const handleServiceSelect = (service: any) => {
    // Fechar busca
    setSearchQuery("")
    setIsSearching(false)
    setSearchResults([])

    // Abrir modal correspondente
    switch (service.name) {
      case t.electrician:
        setIsElectricianModalOpen(true)
        break
      case t.plumber:
        setIsPlumberModalOpen(true)
        break
      case t.cleaner:
        setIsCleaningModalOpen(true)
        break
      case t.moving:
        setIsMovingModalOpen(true)
        break
      case t.hairdresser:
        setIsHairdresserModalOpen(true)
        break
      case t.builder:
        setIsBuilderModalOpen(true)
        break
      case t.itSupport:
        setIsITSupportModalOpen(true)
        break
      case t.petSitter:
        setIsPetSitterModalOpen(true)
        break
      case t.gardening:
        setIsGardeningModalOpen(true)
        break
      case t.security:
        setIsSecurityModalOpen(true)
        break
      case t.photographer:
        setIsPhotographerModalOpen(true)
        break
      case t.painter:
        setIsPainterModalOpen(true)
        break
      default:
        alert(`${t.youSelected || "Você selecionou o serviço"}: ${service.name}`)
    }
  }

  return (
    <>
      <div className="relative mt-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Input
            className="pl-10 bg-gray-100 dark:bg-gray-700 border-none dark:text-white dark:placeholder-gray-400"
            placeholder={t.searchServices}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {isSearching && searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg z-10 mt-1 max-h-60 overflow-y-auto border dark:border-gray-700">
            {searchResults.map((service) => (
              <button
                key={service.id}
                className="flex items-center p-3 w-full hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
                onClick={() => handleServiceSelect(service)}
              >
                <service.icon className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-3" />
                <span className="text-sm dark:text-white">{service.name}</span>
              </button>
            ))}
          </div>
        )}

        {isSearching && searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg z-10 mt-1 p-4 text-center border dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.noServicesFound}</p>
          </div>
        )}
      </div>

      {/* Service Modals */}
      <ElectricianModal isOpen={isElectricianModalOpen} onClose={() => setIsElectricianModalOpen(false)} />
      <PlumberServiceModal isOpen={isPlumberModalOpen} onClose={() => setIsPlumberModalOpen(false)} />
      <CleaningModal isOpen={isCleaningModalOpen} onClose={() => setIsCleaningModalOpen(false)} />
      <MovingModal isOpen={isMovingModalOpen} onClose={() => setIsMovingModalOpen(false)} />
      <HairdresserModal isOpen={isHairdresserModalOpen} onClose={() => setIsHairdresserModalOpen(false)} />
      <BuilderModal isOpen={isBuilderModalOpen} onClose={() => setIsBuilderModalOpen(false)} />
      <ITSupportModal isOpen={isITSupportModalOpen} onClose={() => setIsITSupportModalOpen(false)} />
      <PetSitterModal isOpen={isPetSitterModalOpen} onClose={() => setIsPetSitterModalOpen(false)} />
      <GardeningModal isOpen={isGardeningModalOpen} onClose={() => setIsGardeningModalOpen(false)} />
      <SecurityModal isOpen={isSecurityModalOpen} onClose={() => setIsSecurityModalOpen(false)} />
      <PhotographerModal isOpen={isPhotographerModalOpen} onClose={() => setIsPhotographerModalOpen(false)} />
      <PainterModal isOpen={isPainterModalOpen} onClose={() => setIsPainterModalOpen(false)} />
    </>
  )
}
