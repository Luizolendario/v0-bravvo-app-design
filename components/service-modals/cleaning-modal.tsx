"use client"

import { Brush } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface CleaningModalProps {
  isOpen: boolean
  onClose: () => void
}

const cleaningServices = [
  {
    id: "regular",
    name: "Limpeza Regular",
    description: "Limpeza completa de residências ou escritórios com frequência regular",
    icon: "🧹",
  },
  {
    id: "deep",
    name: "Limpeza Pesada",
    description: "Limpeza profunda para ambientes que precisam de atenção especial",
    icon: "🧽",
  },
  {
    id: "post-construction",
    name: "Pós-Obra",
    description: "Limpeza especializada após reformas ou construções",
    icon: "🏗️",
  },
  {
    id: "windows",
    name: "Vidros e Janelas",
    description: "Limpeza de vidros, janelas e superfícies espelhadas",
    icon: "🪟",
  },
  {
    id: "carpet",
    name: "Tapetes e Estofados",
    description: "Higienização de tapetes, carpetes, sofás e poltronas",
    icon: "🛋️",
  },
]

export default function CleaningModal({ isOpen, onClose }: CleaningModalProps) {
  const handleServiceSelect = (serviceId: string) => {
    alert(`Você selecionou o serviço de diarista: ${cleaningServices.find((s) => s.id === serviceId)?.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brush className="h-5 w-5 text-purple-600" />
            Serviços de Diarista
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {cleaningServices.map((service) => (
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
