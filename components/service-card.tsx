"use client"

import { useState } from "react"
import type { ServiceType } from "@/lib/types"
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

interface ServiceCardProps {
  service: ServiceType
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)
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
        alert(`${t.youSelected || "Você selecionou o serviço"}: ${service.name}`)
    }
  }

  return (
    <>
      <button
        className="flex flex-col items-center justify-center w-20 transition-transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all ${
            isHovered ? "bg-purple-600 dark:bg-purple-500" : "bg-purple-100 dark:bg-purple-900"
          }`}
        >
          <service.icon className={`h-8 w-8 ${isHovered ? "text-white" : "text-purple-600 dark:text-purple-400"}`} />
        </div>
        <span className="text-[10px] font-medium text-center leading-tight dark:text-white">{service.name}</span>
      </button>

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
