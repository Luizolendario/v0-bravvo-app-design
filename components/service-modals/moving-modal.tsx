"use client"

import { Truck } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface MovingModalProps {
  isOpen: boolean
  onClose: () => void
}

const movingServices = [
  {
    id: "residential",
    name: "Mudança Residencial",
    description: "Transporte de móveis e pertences para nova residência",
    icon: "🏠",
  },
  {
    id: "commercial",
    name: "Mudança Comercial",
    description: "Transporte de equipamentos e móveis de escritório",
    icon: "🏢",
  },
  {
    id: "delivery",
    name: "Entrega de Móveis",
    description: "Transporte e montagem de móveis novos",
    icon: "🛋️",
  },
  {
    id: "small-items",
    name: "Pequenos Volumes",
    description: "Transporte de itens pequenos e encomendas",
    icon: "📦",
  },
  {
    id: "long-distance",
    name: "Longa Distância",
    description: "Transporte para outras cidades ou estados",
    icon: "🚚",
  },
]

export default function MovingModal({ isOpen, onClose }: MovingModalProps) {
  const handleServiceSelect = (serviceId: string) => {
    alert(`Você selecionou o serviço de fretes: ${movingServices.find((s) => s.id === serviceId)?.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-purple-600" />
            Serviços de Fretes e Mudanças
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {movingServices.map((service) => (
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
