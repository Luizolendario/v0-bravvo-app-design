"use client"

import { Scissors } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface HairdresserModalProps {
  isOpen: boolean
  onClose: () => void
}

const hairdresserServices = [
  {
    id: "haircut",
    name: "Corte de Cabelo",
    description: "Cortes femininos, masculinos e infantis com profissionais especializados",
    icon: "✂️",
  },
  {
    id: "coloring",
    name: "Coloração",
    description: "Tintura, mechas, luzes, ombré hair e outras técnicas de coloração",
    icon: "🎨",
  },
  {
    id: "treatment",
    name: "Tratamentos",
    description: "Hidratação, reconstrução, cauterização e outros tratamentos capilares",
    icon: "💆",
  },
  {
    id: "styling",
    name: "Penteados",
    description: "Penteados para festas, casamentos e eventos especiais",
    icon: "👰",
  },
  {
    id: "barber",
    name: "Barba e Bigode",
    description: "Corte, modelagem e tratamentos para barba e bigode",
    icon: "🧔",
  },
]

export default function HairdresserModal({ isOpen, onClose }: HairdresserModalProps) {
  const handleServiceSelect = (serviceId: string) => {
    alert(`Você selecionou o serviço de cabeleireiro: ${hairdresserServices.find((s) => s.id === serviceId)?.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-purple-600" />
            Serviços de Cabeleireiro
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {hairdresserServices.map((service) => (
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
