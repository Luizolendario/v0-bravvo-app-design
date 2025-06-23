"use client"

import { useRouter } from "next/navigation"
import { Leaf } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface GardeningModalProps {
  isOpen: boolean
  onClose: () => void
}

const gardeningServices = [
  {
    id: "maintenance",
    name: "Manutenção de Jardim",
    description: "Corte de grama, poda de plantas e limpeza de jardins",
    icon: "🌱",
  },
  {
    id: "landscaping",
    name: "Paisagismo",
    description: "Projeto e execução de jardins, canteiros e áreas verdes",
    icon: "🌳",
  },
  {
    id: "irrigation",
    name: "Sistemas de Irrigação",
    description: "Instalação e manutenção de sistemas de irrigação automática",
    icon: "💧",
  },
  {
    id: "tree",
    name: "Poda de Árvores",
    description: "Poda, remoção e tratamento de árvores de pequeno e grande porte",
    icon: "🪓",
  },
  {
    id: "pest",
    name: "Controle de Pragas",
    description: "Identificação e tratamento de pragas e doenças em plantas",
    icon: "🐛",
  },
]

export default function GardeningModal({ isOpen, onClose }: GardeningModalProps) {
  const router = useRouter()

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = gardeningServices.find((s) => s.id === serviceId)
    if (selectedService) {
      onClose()
      router.push(`/profissionais?tipo=Jardinagem&subtipo=${selectedService.name}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-purple-600" />
            Serviços de Jardinagem
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {gardeningServices.map((service) => (
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
