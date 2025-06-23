"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Eye, EyeOff, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { getTranslatedServices } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

export default function CadastroProfissionalPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    serviceType: "",
    description: "",
    document: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  // Obter serviços traduzidos
  const translatedServices = getTranslatedServices(t)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))

    // Limpar erro do campo quando o usuário seleciona
    if (errors.serviceType) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.serviceType
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = t.nameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.emailInvalid
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.phoneRequired
    }

    if (!formData.password) {
      newErrors.password = t.passwordRequired
    } else if (formData.password.length < 6) {
      newErrors.password = t.passwordMinLength
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.passwordsDontMatch
    }

    if (!formData.serviceType) {
      newErrors.serviceType = t.serviceTypeRequired
    }

    if (!formData.description.trim()) {
      newErrors.description = t.descriptionRequired
    }

    if (!formData.document.trim()) {
      newErrors.document = t.documentRequired
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

    // Simular requisição de cadastro
    setTimeout(() => {
      // Salvar dados do usuário no localStorage
      const userData = {
        id: `prof-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        type: "professional",
        serviceType: formData.serviceType,
        description: formData.description,
        document: formData.document,
        rating: 0,
        reviewCount: 0,
        createdAt: new Date().toISOString(),
        status: "pending", // pending, approved, rejected
      }

      localStorage.setItem("bravvoUser", JSON.stringify(userData))

      setIsLoading(false)

      toast({
        title: t.registrationSuccess,
        description: "Seu cadastro está em análise. Em breve você poderá oferecer seus serviços no Bravvo.",
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
            <h1 className="text-lg font-medium dark:text-white">{t.professionalRegistration}</h1>
            <div className="w-10"></div> {/* Espaçador para centralizar o título */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="dark:text-white">
                {t.fullName}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={`${t.fullName}...`}
                className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.name ? "border-red-500 dark:border-red-500" : ""}`}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>

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
              <Label htmlFor="phone" className="dark:text-white">
                {t.phone}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.phone ? "border-red-500 dark:border-red-500" : ""}`}
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType" className="dark:text-white">
                {t.serviceType}
              </Label>
              <Select onValueChange={handleSelectChange} value={formData.serviceType}>
                <SelectTrigger
                  className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.serviceType ? "border-red-500 dark:border-red-500" : ""}`}
                >
                  <SelectValue placeholder={`${t.serviceType}...`} />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                  {translatedServices.map((service) => (
                    <SelectItem
                      key={service.id}
                      value={service.name}
                      className="dark:text-white dark:focus:bg-gray-700"
                    >
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceType && <p className="text-xs text-red-500">{errors.serviceType}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="dark:text-white">
                {t.serviceDescription}
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder={t.serviceDescriptionPlaceholder}
                className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.description ? "border-red-500 dark:border-red-500" : ""}`}
                rows={4}
              />
              {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="document" className="dark:text-white">
                {t.document}
              </Label>
              <Input
                id="document"
                name="document"
                value={formData.document}
                onChange={handleChange}
                placeholder={`${t.document}...`}
                className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.document ? "border-red-500 dark:border-red-500" : ""}`}
              />
              {errors.document && <p className="text-xs text-red-500">{errors.document}</p>}
            </div>

            <div className="space-y-2">
              <Label className="dark:text-white">{t.supportingDocuments}</Label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 dark:text-gray-500" />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t.dragDropFiles}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{t.acceptedFormats}</p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-4 dark:border-gray-600 dark:text-white dark:bg-gray-700"
                >
                  {t.selectFiles}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="dark:text-white">
                {t.password}
              </Label>
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="dark:text-white">
                {t.confirmPassword}
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={`${t.confirmPassword}...`}
                className={`dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 ${errors.confirmPassword ? "border-red-500 dark:border-red-500" : ""}`}
              />
              {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 mt-6" disabled={isLoading}>
              {isLoading ? t.registering : t.register}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t.alreadyHaveAccount}{" "}
              <button
                type="button"
                className="text-purple-600 dark:text-purple-400 font-medium"
                onClick={() => router.push("/login")}
              >
                {t.login}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
