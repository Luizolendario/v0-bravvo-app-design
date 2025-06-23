"use client"

import { Droplet } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PlumberServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

const plumberServices = [
  {
    id: "leak",
    name: "Vazamento",
    description: "Reparo de vazamentos em torneiras, pias, chuveiros e tubulações",
    icon: "💧",
  },
  {
    id: "repair",
    name: "Conserto e Manutenção",
    description: "Manutenção preventiva e corretiva em sistemas hidráulicos",
    icon: "🔧",
  },
  {
    id: "unclog",
    name: "Desentupimento",
    description: "Desentupimento de pias, ralos, vasos sanitários e tubulações",
    icon: "🚿",
  },
  {
    id: "installation",
    name: "Instalação",
    description: "Instalação de pias, torneiras, chuveiros e outros equipamentos",
    icon: "🔨",
  },
  {
    id: "other",
    name: "Outros",
    description: "Outros serviços de encanamento e hidráulica",
    icon: "📋",
  },
]

export default function PlumberServiceModal({ isOpen, onClose }: PlumberServiceModalProps) {
  const handleServiceSelect = (serviceId: string) => {
    alert(`Você selecionou o serviço de encanador: ${plumberServices.find((s) => s.id === serviceId)?.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Droplet className="h-5 w-5 text-purple-600" />
            Serviços de Encanador
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {plumberServices.map((service) => (
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
