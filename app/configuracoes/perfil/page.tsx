"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Camera, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function PerfilPage() {
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
            <h1 className="text-lg font-medium dark:text-white">Perfil</h1>
            <div className="w-10"></div> {/* Espaçador para centralizar o título */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {/* Foto de Perfil */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <User className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              </div>
              <button className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2">
                <Camera className="h-4 w-4 text-white" />
              </button>
            </div>
            <h2 className="font-medium mt-3 dark:text-white">Usuário Bravvo</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Membro desde 2023</p>
          </div>

          <Separator className="my-6 dark:bg-gray-700" />

          {/* Formulário de Perfil */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="dark:text-white">
                Nome completo
              </Label>
              <Input
                id="name"
                defaultValue="Usuário Bravvo"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="dark:text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="usuario@email.com"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="dark:text-white">
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                defaultValue="(11) 99999-9999"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birth" className="dark:text-white">
                Data de nascimento
              </Label>
              <Input
                id="birth"
                type="date"
                defaultValue="1990-01-01"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf" className="dark:text-white">
                CPF
              </Label>
              <Input
                id="cpf"
                defaultValue="123.456.789-00"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Salvar alterações</Button>
        </div>
      </div>
    </div>
  )
}
