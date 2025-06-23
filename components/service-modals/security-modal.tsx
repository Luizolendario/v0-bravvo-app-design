"use client"

import { useRouter } from "next/navigation"
import { ShieldCheck } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface SecurityModalProps {
  isOpen: boolean
  onClose: () => void
}

const securityServices = [
  {
    id: "cameras",
    name: "Câmeras de Segurança",
    description: "Instalação e manutenção de sistemas de câmeras de vigilância",
    icon: "📹",
  },
  {
    id: "alarm",
    name: "Sistemas de Alarme",
    description: "Instalação e manutenção de alarmes residenciais e comerciais",
    icon: "🚨",
  },
  {
    id: "access",
    name: "Controle de Acesso",
    description: "Sistemas de controle de acesso, fechaduras eletrônicas e biometria",
    icon: "🔐",
  },
  {
    id: "monitoring",
    name: "Monitoramento 24h",
    description: "Serviço de monitoramento remoto 24 horas por dia",
    icon: "👁️",
  },
  {
    id: "guard",
    name: "Segurança Privada",
    description: "Serviços de segurança privada para eventos e estabelecimentos",
    icon: "💂",
  },
]

export default function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
  const router = useRouter()

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = securityServices.find((s) => s.id === serviceId)
    if (selectedService) {
      onClose()
      router.push(`/profissionais?tipo=Segurança&subtipo=${selectedService.name}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-purple-600" />
            Serviços de Segurança
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {securityServices.map((service) => (
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
