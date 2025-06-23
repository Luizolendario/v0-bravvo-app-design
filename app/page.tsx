"use client"

import { Settings } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ServiceCard from "@/components/service-card"
import AddressSelector from "@/components/address-selector"
import SearchBar from "@/components/search-bar"
import { getTranslatedServices } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const router = useRouter()
  const { t } = useLanguage()

  // Obter serviços traduzidos
  const translatedServices = getTranslatedServices(t)

  useEffect(() => {
    // Aplicar tema escuro se estiver salvo
    const savedDarkMode = localStorage.getItem("bravvoDarkMode")
    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleSettingsClick = () => {
    router.push("/configuracoes")
  }

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                {t.appName}
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <button
                className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                onClick={handleSettingsClick}
              >
                <Settings className="h-5 w-5 text-purple-700 dark:text-purple-400" />
              </button>
            </div>
          </div>

          {/* Address Selector */}
          <AddressSelector />

          {/* Search Bar */}
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-4 dark:text-white">{t.availableServices}</h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max">
            {translatedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-4 dark:text-white">{t.popularServices}</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {translatedServices.slice(0, 4).map((service) => (
            <PopularServiceCard key={`popular-${service.id}`} service={service} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-4 dark:text-white">{t.howItWorks}</h2>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 dark:bg-gray-800">
            <TabsTrigger value="process" className="text-xs dark:text-white dark:data-[state=active]:bg-gray-700">
              {t.howItWorks}
            </TabsTrigger>
            <TabsTrigger value="clients" className="text-xs dark:text-white dark:data-[state=active]:bg-gray-700">
              {t.forClients}
            </TabsTrigger>
            <TabsTrigger value="professionals" className="text-xs dark:text-white dark:data-[state=active]:bg-gray-700">
              {t.forProfessionals}
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="process"
            className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-4 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 dark:text-purple-300 font-medium text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.chooseService}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.chooseServiceDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 dark:text-purple-300 font-medium text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.selectProfessional}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.selectProfessionalDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 dark:text-purple-300 font-medium text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.scheduleAndPay}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.scheduleAndPayDesc}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="clients"
            className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-4 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700 dark:text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.verifiedProfessionals}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.verifiedProfessionalsDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700 dark:text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.satisfactionGuarantee}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.satisfactionGuaranteeDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700 dark:text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.securePayment}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.securePaymentDesc}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="professionals"
            className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-4 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700 dark:text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.registerFree}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.registerFreeDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700 dark:text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.manageSchedule}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.manageScheduleDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700 dark:text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium dark:text-white">{t.receivePayments}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.receivePaymentsDesc}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* New Promotion */}
      <section className="container mx-auto px-4 py-6 mb-6">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">Novo no Bravvo?</h2>
              <p className="text-sm opacity-90">Oferta especial para novos usuários</p>
            </div>
          </div>
          <p className="text-sm mb-4">
            Ganhe <span className="font-bold text-yellow-300">10% OFF</span> no seu primeiro serviço! Válido apenas uma
            vez por usuário.
          </p>
          <button className="bg-white text-purple-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Resgatar Desconto
          </button>
        </div>
      </section>
    </main>
  )
}

// Componente para os cards de serviços populares
function PopularServiceCard({ service }: { service: any }) {
  const { t } = useLanguage()
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

  const handleClick = () => {
    // Usar o nome traduzido para comparação
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
        alert(`${t.youSelected}: ${service.name}`)
    }
  }

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleClick}
      >
        <div className="h-32 relative overflow-hidden">
          <img
            src={`/placeholder.svg?height=200&width=300&text=${service.name}`}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-3">
            <service.icon className="h-6 w-6 text-white" />
            <h3 className="font-medium text-sm text-white ml-2">{service.name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {t.startingFrom} {service.startingPrice}
          </p>
          <button className="mt-2 text-xs text-purple-600 dark:text-purple-400 font-medium">{t.seeDetails}</button>
        </div>
      </div>

      {/* Service Modals */}
      {service.name === t.electrician && (
        <ElectricianModal isOpen={isElectricianModalOpen} onClose={() => setIsElectricianModalOpen(false)} />
      )}
      {service.name === t.plumber && (
        <PlumberServiceModal isOpen={isPlumberModalOpen} onClose={() => setIsPlumberModalOpen(false)} />
      )}
      {service.name === t.cleaner && (
        <CleaningModal isOpen={isCleaningModalOpen} onClose={() => setIsCleaningModalOpen(false)} />
      )}
      {service.name === t.moving && (
        <MovingModal isOpen={isMovingModalOpen} onClose={() => setIsMovingModalOpen(false)} />
      )}
      {service.name === t.hairdresser && (
        <HairdresserModal isOpen={isHairdresserModalOpen} onClose={() => setIsHairdresserModalOpen(false)} />
      )}
      {service.name === t.builder && (
        <BuilderModal isOpen={isBuilderModalOpen} onClose={() => setIsBuilderModalOpen(false)} />
      )}
      {service.name === t.itSupport && (
        <ITSupportModal isOpen={isITSupportModalOpen} onClose={() => setIsITSupportModalOpen(false)} />
      )}
      {service.name === t.petSitter && (
        <PetSitterModal isOpen={isPetSitterModalOpen} onClose={() => setIsPetSitterModalOpen(false)} />
      )}
      {service.name === t.gardening && (
        <GardeningModal isOpen={isGardeningModalOpen} onClose={() => setIsGardeningModalOpen(false)} />
      )}
      {service.name === t.security && (
        <SecurityModal isOpen={isSecurityModalOpen} onClose={() => setIsSecurityModalOpen(false)} />
      )}
      {service.name === t.photographer && (
        <PhotographerModal isOpen={isPhotographerModalOpen} onClose={() => setIsPhotographerModalOpen(false)} />
      )}
      {service.name === t.painter && (
        <PainterModal isOpen={isPainterModalOpen} onClose={() => setIsPainterModalOpen(false)} />
      )}
    </>
  )
}
