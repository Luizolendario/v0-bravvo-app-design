"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PagamentosPage() {
  const router = useRouter()

  useEffect(() => {
    // Verificar tema escuro salvo
    const savedDarkMode = localStorage.getItem("bravvoDarkMode")
    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={handleBack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <ArrowLeft className="h-5 w-5 dark:text-white" />
            </button>
            <h1 className="text-lg font-medium dark:text-white">Pagamentos</h1>
            <div className="w-10"></div> {/* Espaçador para centralizar o título */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-medium mb-4 dark:text-white">Métodos de Pagamento</h2>

          {/* Cartões */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                  <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-white">Mastercard •••• 4567</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Expira em 12/25</p>
                </div>
              </div>
              <button className="text-red-500 dark:text-red-400">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                  <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-white">Visa •••• 8901</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Expira em 08/24</p>
                </div>
              </div>
              <button className="text-red-500 dark:text-red-400">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Button className="w-full mt-4 flex items-center justify-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Adicionar Novo Cartão</span>
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4 dark:text-white">Histórico de Pagamentos</h2>

          <div className="space-y-4">
            <div className="border-b dark:border-gray-700 pb-3">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium dark:text-white">Serviço de Eletricista</h3>
                <span className="font-medium text-purple-600 dark:text-purple-400">R$ 120,00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>João Silva</span>
                <span>15/05/2023</span>
              </div>
            </div>

            <div className="border-b dark:border-gray-700 pb-3">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium dark:text-white">Serviço de Diarista</h3>
                <span className="font-medium text-purple-600 dark:text-purple-400">R$ 180,00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Maria Oliveira</span>
                <span>02/05/2023</span>
              </div>
            </div>

            <div className="border-b dark:border-gray-700 pb-3">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium dark:text-white">Serviço de Encanador</h3>
                <span className="font-medium text-purple-600 dark:text-purple-400">R$ 95,00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Carlos Santos</span>
                <span>18/04/2023</span>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full mt-4 dark:border-gray-600 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Ver Histórico Completo
          </Button>
        </div>
      </div>
    </div>
  )
}
