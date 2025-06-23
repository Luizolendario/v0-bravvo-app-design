"use client"

import { Laptop } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ITSupportModalProps {
  isOpen: boolean
  onClose: () => void
}

const itSupportServices = [
  {
    id: "repair",
    name: "Reparo de Computadores",
    description: "Conserto de computadores, notebooks e outros dispositivos",
    icon: "🖥️",
  },
  {
    id: "virus",
    name: "Remoção de Vírus",
    description: "Limpeza de vírus, malware e outros softwares maliciosos",
    icon: "🦠",
  },
  {
    id: "installation",
    name: "Instalação de Software",
    description: "Instalação e configuração de sistemas operacionais e programas",
    icon: "💿",
  },
  {
    id: "network",
    name: "Redes e Internet",
    description: "Configuração de redes, Wi-Fi e solução de problemas de conexão",
    icon: "📶",
  },
  {
    id: "data",
    name: "Recuperação de Dados",
    description: "Recuperação de arquivos perdidos ou danificados",
    icon: "💾",
  },
]

export default function ITSupportModal({ isOpen, onClose }: ITSupportModalProps) {
  const handleServiceSelect = (serviceId: string) => {
    alert(`Você selecionou o serviço de informática: ${itSupportServices.find((s) => s.id === serviceId)?.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Laptop className="h-5 w-5 text-purple-600" />
            Serviços de Informática
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {itSupportServices.map((service) => (
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
