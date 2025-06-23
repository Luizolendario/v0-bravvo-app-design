"use client"

import { Wrench } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ElectricianModalProps {
  isOpen: boolean
  onClose: () => void
}

const electricianServices = [
  {
    id: "installation",
    name: "Instalação",
    description: "Instalação de tomadas, interruptores, luminárias e equipamentos elétricos",
    icon: "🔌",
  },
  {
    id: "repair",
    name: "Reparos",
    description: "Conserto de curto-circuito, fiação danificada e problemas elétricos",
    icon: "⚡",
  },
  {
    id: "maintenance",
    name: "Manutenção",
    description: "Revisão preventiva da rede elétrica e quadro de luz",
    icon: "🔧",
  },
  {
    id: "upgrade",
    name: "Modernização",
    description: "Atualização da rede elétrica e instalação de sistemas inteligentes",
    icon: "📱",
  },
  {
    id: "emergency",
    name: "Emergência",
    description: "Atendimento urgente para problemas elétricos críticos",
    icon: "🚨",
  },
]

export default function ElectricianModal({ isOpen, onClose }: ElectricianModalProps) {
  const handleServiceSelect = (serviceId: string) => {
    alert(`Você selecionou o serviço de eletricista: ${electricianServices.find((s) => s.id === serviceId)?.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-purple-600" />
            Serviços de Eletricista
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {electricianServices.map((service) => (
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
