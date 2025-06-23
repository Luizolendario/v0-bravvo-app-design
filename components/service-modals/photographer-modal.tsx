"use client"

import { useRouter } from "next/navigation"
import { Camera } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PhotographerModalProps {
  isOpen: boolean
  onClose: () => void
}

const photographerServices = [
  {
    id: "events",
    name: "Eventos",
    description: "Cobertura fotográfica de casamentos, aniversários e eventos corporativos",
    icon: "🎉",
  },
  {
    id: "portrait",
    name: "Ensaios",
    description: "Ensaios fotográficos para famílias, gestantes, newborn e books",
    icon: "👨‍👩‍👧",
  },
  {
    id: "product",
    name: "Produtos",
    description: "Fotografia de produtos para e-commerce, catálogos e publicidade",
    icon: "📦",
  },
  {
    id: "real-estate",
    name: "Imóveis",
    description: "Fotografia de imóveis para venda, aluguel ou publicidade",
    icon: "🏠",
  },
  {
    id: "aerial",
    name: "Fotografia Aérea",
    description: "Capturas aéreas com drone para eventos, imóveis e paisagens",
    icon: "🚁",
  },
]

export default function PhotographerModal({ isOpen, onClose }: PhotographerModalProps) {
  const router = useRouter()

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = photographerServices.find((s) => s.id === serviceId)
    if (selectedService) {
      onClose()
      router.push(`/profissionais?tipo=Fotógrafo&subtipo=${selectedService.name}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-purple-600" />
            Serviços de Fotógrafo
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {photographerServices.map((service) => (
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
