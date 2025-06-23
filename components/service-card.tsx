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

interface ServiceCardProps {
  service: ServiceType
}

export default function ServiceCard({ service }: ServiceCardProps) {
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
      <button
        className="flex flex-col items-center justify-center w-20 transition-transform"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all ${isHovered ? "bg-purple-600" : "bg-purple-100"}`}
        >
          <service.icon className={`h-8 w-8 ${isHovered ? "text-white" : "text-purple-600"}`} />
        </div>
        <span className="text-[10px] font-medium text-center leading-tight">{service.name}</span>
      </button>

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
