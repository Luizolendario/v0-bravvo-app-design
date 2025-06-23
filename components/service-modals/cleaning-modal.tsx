"use client"

import { useRouter } from "next/navigation"
import { Brush, X, ArrowRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface CleaningModalProps {
  isOpen: boolean
  onClose: () => void
}

const cleaningServices = [
  {
    id: "regular",
    name: "Limpeza Regular",
    description: "Limpeza completa de residências e escritórios",
    icon: "🧹",
    price: "A partir de R$ 120",
  },
  {
    id: "deep",
    name: "Limpeza Pesada",
    description: "Limpeza profunda para ambientes especiais",
    icon: "🧽",
    price: "A partir de R$ 180",
  },
  {
    id: "post-construction",
    name: "Pós-Obra",
    description: "Limpeza especializada após reformas",
    icon: "🏗️",
    price: "A partir de R$ 200",
  },
  {
    id: "windows",
    name: "Vidros e Janelas",
    description: "Limpeza de vidros e superfícies espelhadas",
    icon: "🪟",
    price: "A partir de R$ 80",
  },
  {
    id: "carpet",
    name: "Tapetes e Estofados",
    description: "Higienização de tapetes e móveis estofados",
    icon: "🛋️",
    price: "A partir de R$ 150",
  },
]

export default function CleaningModal({ isOpen, onClose }: CleaningModalProps) {
  const router = useRouter()

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = cleaningServices.find((s) => s.id === serviceId)
    if (selectedService) {
      onClose()
      router.push(`/profissionais?tipo=Diarista&subtipo=${selectedService.name}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-hidden p-0 dark:bg-gray-900 dark:border-gray-700 border-0 shadow-2xl">
        {/* Header */}
        <div className="relative bg-white dark:bg-gray-900 p-6 border-b border-gray-100 dark:border-gray-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
              <Brush className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Serviços de Diarista</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Deixe seu ambiente limpo e organizado</p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {cleaningServices.map((service, index) => (
            <button key={service.id} className="w-full group" onClick={() => handleServiceSelect(service.id)}>
              <div className="flex items-center p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-700 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all duration-200 hover:shadow-sm">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-2xl">{service.icon}</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{service.description}</p>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">{service.price}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 dark:border-gray-800 p-6 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Agende limpezas regulares e economize</p>
            <Button
              variant="outline"
              onClick={onClose}
              className="text-sm dark:border-gray-600 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
