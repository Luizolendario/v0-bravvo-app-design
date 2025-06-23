"use client"

import { useRouter } from "next/navigation"
import { Dog } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PetSitterModalProps {
  isOpen: boolean
  onClose: () => void
}

const petSitterServices = [
  {
    id: "walk",
    name: "Passeio",
    description: "Passeios diários com seu pet, exercícios e brincadeiras ao ar livre",
    icon: "🦮",
  },
  {
    id: "sitting",
    name: "Hospedagem",
    description: "Cuidados com seu pet em sua casa ou na casa do cuidador",
    icon: "🏠",
  },
  {
    id: "grooming",
    name: "Banho e Tosa",
    description: "Banho, tosa, corte de unhas e limpeza de ouvidos",
    icon: "🛁",
  },
  {
    id: "training",
    name: "Adestramento",
    description: "Treinamento comportamental e de obediência para cães",
    icon: "🦴",
  },
  {
    id: "vet",
    name: "Veterinário",
    description: "Consultas, vacinas e cuidados veterinários em domicílio",
    icon: "💉",
  },
]

export default function PetSitterModal({ isOpen, onClose }: PetSitterModalProps) {
  const router = useRouter()

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = petSitterServices.find((s) => s.id === serviceId)
    if (selectedService) {
      onClose()
      router.push(`/profissionais?tipo=Pet Sitter&subtipo=${selectedService.name}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Dog className="h-5 w-5 text-purple-600" />
            Serviços de Pet Sitter
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {petSitterServices.map((service) => (
            <button
              key={service.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-left"
              onClick={() => handleServiceSelect(service.id)}
            >
              <div className="flex-shrink-0 text-xl">{service.icon}</div>
              <div>
                <h3 className="font-medium text-sm">{service.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Voltar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
