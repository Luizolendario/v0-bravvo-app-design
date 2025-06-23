"use client"

import { useRouter } from "next/navigation"
import { Paintbrush } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PainterModalProps {
  isOpen: boolean
  onClose: () => void
}

const painterServices = [
  {
    id: "interior",
    name: "Pintura Interna",
    description: "Pintura de paredes, tetos e detalhes internos residenciais e comerciais",
    icon: "🏠",
  },
  {
    id: "exterior",
    name: "Pintura Externa",
    description: "Pintura de fachadas, muros e áreas externas",
    icon: "🏢",
  },
  {
    id: "texture",
    name: "Texturas e Efeitos",
    description: "Aplicação de texturas, grafiato, marmorização e outros efeitos decorativos",
    icon: "🎨",
  },
  {
    id: "furniture",
    name: "Móveis e Madeiras",
    description: "Pintura e restauração de móveis, portas e estruturas de madeira",
    icon: "🪑",
  },
  {
    id: "prep",
    name: "Preparação de Superfícies",
    description: "Lixamento, emassamento e preparação de superfícies para pintura",
    icon: "🧰",
  },
]

export default function PainterModal({ isOpen, onClose }: PainterModalProps) {
  const router = useRouter()

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = painterServices.find((s) => s.id === serviceId)
    if (selectedService) {
      onClose()
      router.push(`/profissionais?tipo=Pintor&subtipo=${selectedService.name}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Paintbrush className="h-5 w-5 text-purple-600" />
            Serviços de Pintor
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {painterServices.map((service) => (
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
