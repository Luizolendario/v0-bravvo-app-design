"use client"

import { useRouter } from "next/navigation"
import { Hammer } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface BuilderModalProps {
  isOpen: boolean
  onClose: () => void
}

const builderServices = [
  {
    id: "construction",
    name: "Construção",
    description: "Construção de casas, muros, edículas e outras estruturas",
    icon: "🏗️",
  },
  {
    id: "renovation",
    name: "Reforma",
    description: "Reformas residenciais e comerciais, pequenas e grandes",
    icon: "🔨",
  },
  {
    id: "masonry",
    name: "Alvenaria",
    description: "Serviços de alvenaria, assentamento de tijolos e blocos",
    icon: "🧱",
  },
  {
    id: "flooring",
    name: "Pisos e Revestimentos",
    description: "Instalação de pisos, azulejos, porcelanatos e outros revestimentos",
    icon: "🧩",
  },
  {
    id: "painting",
    name: "Pintura",
    description: "Pintura de paredes, tetos, fachadas e outras superfícies",
    icon: "🖌️",
  },
]

export default function BuilderModal({ isOpen, onClose }: BuilderModalProps) {
  const router = useRouter()

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = builderServices.find((s) => s.id === serviceId)
    if (selectedService) {
      onClose()
      router.push(`/profissionais?tipo=Pedreiro&subtipo=${selectedService.name}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-purple-600" />
            Serviços de Pedreiro
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {builderServices.map((service) => (
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
