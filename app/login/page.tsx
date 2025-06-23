"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpar erro do campo quando o usuário digita
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simular requisição de login
    setTimeout(() => {
      // Dados de usuário de exemplo para demonstração
      const userData = {
        id: "user-123",
        name: "Usuário Demonstração",
        email: formData.email,
        type: formData.email.includes("prof") ? "professional" : "client",
        createdAt: new Date().toISOString(),
      }

      localStorage.setItem("bravvoUser", JSON.stringify(userData))

      setIsLoading(false)

      toast({
        title: t.loginSuccess,
        description: t.loginSuccessDesc,
      })

      // Redirecionar para a página inicial
      router.push("/")
    }, 1500)
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
            <h1 className="text-lg font-medium dark:text-white">{t.login}</h1>
            <div className="w-10"></div> {/* Espaçador para centralizar o título */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="dark:text-white">
                {t.email}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={`${t.email}...`}
                className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.email ? "border-red-500 dark:border-red-500" : ""}`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="dark:text-white">
                  {t.password}
                </Label>
                <button
                  type="button"
                  className="text-xs text-purple-600 dark:text-purple-400"
                  onClick={() => router.push("/recuperar-senha")}
                >
                  {t.forgotPassword}
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={`${t.password}...`}
                  className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.password ? "border-red-500 dark:border-red-500" : ""}`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 mt-6" disabled={isLoading}>
              {isLoading ? t.entering : t.login}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t.dontHaveAccount}{" "}
              <button
                type="button"
                className="text-purple-600 dark:text-purple-400 font-medium"
                onClick={() => router.push("/configuracoes")}
              >
                {t.register}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
