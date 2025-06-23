"use client"

import { Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ServiceCard from "@/components/service-card"
import AddressBar from "@/components/address-bar"
import SearchBar from "@/components/search-bar"
import { services } from "@/lib/data"
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                Bravvo
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-purple-100 transition-colors">
                <Settings className="h-5 w-5 text-purple-700" />
              </button>
            </div>
          </div>

          {/* Address Bar */}
          <AddressBar />

          {/* Search Bar */}
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-4">Serviços Disponíveis</h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-4">Serviços Populares</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <PopularServiceCard key={`popular-${service.id}`} service={service} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-4">Como Funciona</h2>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="process" className="text-xs">
              Como Funciona
            </TabsTrigger>
            <TabsTrigger value="clients" className="text-xs">
              Para Clientes
            </TabsTrigger>
            <TabsTrigger value="professionals" className="text-xs">
              Para Profissionais
            </TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="bg-white rounded-lg border p-4 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 font-medium text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Escolha o serviço</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Navegue pelos diversos serviços disponíveis e escolha o que você precisa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 font-medium text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Selecione um profissional</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Compare avaliações, preços e disponibilidade dos profissionais qualificados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 font-medium text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Agende e pague</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Escolha a data e horário, e realize o pagamento de forma segura pelo aplicativo.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clients" className="bg-white rounded-lg border p-4 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Profissionais verificados</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Todos os profissionais passam por verificação de antecedentes e qualificações.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Garantia de satisfação</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Se o serviço não atender às suas expectativas, oferecemos suporte para resolução.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Pagamento seguro</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Realize pagamentos com segurança e só libere após a conclusão do serviço.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="professionals" className="bg-white rounded-lg border p-4 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Cadastre-se gratuitamente</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Crie seu perfil profissional e comece a receber solicitações de serviços.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700"
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
                  <h3 className="text-sm font-medium">Gerencie sua agenda</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Defina sua disponibilidade e organize seus compromissos em um só lugar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-700"
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
                  <h3 className="text-sm font-medium">Receba pagamentos</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Receba seus pagamentos de forma rápida e segura diretamente na sua conta.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Promotions */}
      <section className="container mx-auto px-4 py-6 mb-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold mb-2">Primeira vez no Bravvo?</h2>
          <p className="text-sm mb-4">Ganhe 20% OFF no seu primeiro serviço!</p>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Aproveitar</button>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-6">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center">
            <svg className="w-6 h-6 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs mt-1">Início</span>
          </button>

          <button className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs mt-1">Buscar</span>
          </button>

          <button className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-xs mt-1">Pedidos</span>
          </button>

          <button className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs mt-1">Perfil</span>
          </button>
        </div>
      </nav>
    </main>
  )
}

// Componente para os cards de serviços populares
function PopularServiceCard({ service }: { service: (typeof services)[0] }) {
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
    switch (service.name) {
      case "Eletricista":
        setIsElectricianModalOpen(true)
        break
      case "Encanador":
        setIsPlumberModalOpen(true)
        break
      case "Diarista":
        setIsCleaningModalOpen(true)
        break
      case "Fretes":
        setIsMovingModalOpen(true)
        break
      case "Cabeleireiro":
        setIsHairdresserModalOpen(true)
        break
      case "Pedreiro":
        setIsBuilderModalOpen(true)
        break
      case "Informática":
        setIsITSupportModalOpen(true)
        break
      case "Pet Sitter":
        setIsPetSitterModalOpen(true)
        break
      case "Jardinagem":
        setIsGardeningModalOpen(true)
        break
      case "Segurança":
        setIsSecurityModalOpen(true)
        break
      case "Fotógrafo":
        setIsPhotographerModalOpen(true)
        break
      case "Pintor":
        setIsPainterModalOpen(true)
        break
      default:
        alert(`Você selecionou o serviço: ${service.name}`)
    }
  }

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer"
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
          <p className="text-xs text-gray-500">A partir de R$ {service.startingPrice}</p>
          <button className="mt-2 text-xs text-purple-600 font-medium">Ver detalhes</button>
        </div>
      </div>

      {/* Service Modals */}
      {service.name === "Eletricista" && (
        <ElectricianModal isOpen={isElectricianModalOpen} onClose={() => setIsElectricianModalOpen(false)} />
      )}
      {service.name === "Encanador" && (
        <PlumberServiceModal isOpen={isPlumberModalOpen} onClose={() => setIsPlumberModalOpen(false)} />
      )}
      {service.name === "Diarista" && (
        <CleaningModal isOpen={isCleaningModalOpen} onClose={() => setIsCleaningModalOpen(false)} />
      )}
      {service.name === "Fretes" && (
        <MovingModal isOpen={isMovingModalOpen} onClose={() => setIsMovingModalOpen(false)} />
      )}
      {service.name === "Cabeleireiro" && (
        <HairdresserModal isOpen={isHairdresserModalOpen} onClose={() => setIsHairdresserModalOpen(false)} />
      )}
      {service.name === "Pedreiro" && (
        <BuilderModal isOpen={isBuilderModalOpen} onClose={() => setIsBuilderModalOpen(false)} />
      )}
      {service.name === "Informática" && (
        <ITSupportModal isOpen={isITSupportModalOpen} onClose={() => setIsITSupportModalOpen(false)} />
      )}
      {service.name === "Pet Sitter" && (
        <PetSitterModal isOpen={isPetSitterModalOpen} onClose={() => setIsPetSitterModalOpen(false)} />
      )}
      {service.name === "Jardinagem" && (
        <GardeningModal isOpen={isGardeningModalOpen} onClose={() => setIsGardeningModalOpen(false)} />
      )}
      {service.name === "Segurança" && (
        <SecurityModal isOpen={isSecurityModalOpen} onClose={() => setIsSecurityModalOpen(false)} />
      )}
      {service.name === "Fotógrafo" && (
        <PhotographerModal isOpen={isPhotographerModalOpen} onClose={() => setIsPhotographerModalOpen(false)} />
      )}
      {service.name === "Pintor" && (
        <PainterModal isOpen={isPainterModalOpen} onClose={() => setIsPainterModalOpen(false)} />
      )}
    </>
  )
}
