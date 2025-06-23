"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  User,
  CreditCard,
  MessageSquare,
  LifeBuoy,
  Shield,
  Bell,
  Moon,
  Languages,
  LogOut,
  ChevronRight,
  Heart,
  Clock,
  MapPin,
  Settings,
  UserPlus,
  Briefcase,
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

export default function ConfiguracoesPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<string | null>(null)
  const [userName, setUserName] = useState<string>("Usuário Bravvo")
  const [userEmail, setUserEmail] = useState<string>("usuario@email.com")

  const { t } = useLanguage()

  useEffect(() => {
    // Verificar se o usuário está logado usando localStorage
    const storedUser = localStorage.getItem("bravvoUser")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setIsLoggedIn(true)
      setUserType(user.type)
      setUserName(user.name)
      setUserEmail(user.email)
    }

    // Verificar tema escuro salvo
    const savedDarkMode = localStorage.getItem("bravvoDarkMode")
    if (savedDarkMode === "true") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleBack = () => {
    router.back()
  }

  const handleLogout = () => {
    // Remover dados do usuário do localStorage
    localStorage.removeItem("bravvoUser")
    setIsLoggedIn(false)
    setUserType(null)

    toast({
      title: t.logoutSuccess,
      description: t.logoutSuccessDesc,
    })

    // Redirecionar para a página inicial
    router.push("/")
  }

  const handleDarkModeChange = (checked: boolean) => {
    setDarkMode(checked)
    if (checked) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("bravvoDarkMode", "true")
      toast({
        title: t.themeChanged,
        description: t.darkThemeActivated,
      })
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("bravvoDarkMode", "false")
      toast({
        title: t.themeChanged,
        description: t.lightThemeActivated,
      })
    }
  }

  const handleNotificationsChange = (checked: boolean) => {
    setNotifications(checked)
    toast({
      title: t.notifications,
      description: checked ? t.notificationsActivated : t.notificationsDeactivated,
    })
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
            <h1 className="text-lg font-medium dark:text-white">{t.settings}</h1>
            <div className="w-10"></div> {/* Espaçador para centralizar o título */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="conta" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 dark:bg-gray-800">
            <TabsTrigger value="conta" className="dark:text-white dark:data-[state=active]:bg-gray-700">
              {t.account}
            </TabsTrigger>
            <TabsTrigger value="app" className="dark:text-white dark:data-[state=active]:bg-gray-700">
              {t.application}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conta" className="space-y-6">
            {isLoggedIn ? (
              <>
                {/* Perfil */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <User className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h2 className="font-medium dark:text-white">{userName}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{userEmail}</p>
                        <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-full mt-1 inline-block">
                          {userType === "client" ? "Cliente" : "Profissional"}
                        </span>
                      </div>
                    </div>
                    <button
                      className="text-purple-600 dark:text-purple-400 text-sm font-medium"
                      onClick={() => router.push("/configuracoes/perfil")}
                    >
                      {t.edit}
                    </button>
                  </div>

                  <button
                    className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium"
                    onClick={() => router.push("/configuracoes/perfil")}
                  >
                    {t.profile}
                  </button>
                </div>

                {/* Menu de Conta */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                  <MenuItem
                    icon={<CreditCard className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    title={t.payments}
                    subtitle="Métodos de pagamento, histórico"
                    onClick={() => router.push("/configuracoes/pagamentos")}
                  />
                  <Separator className="dark:border-gray-700" />
                  <MenuItem
                    icon={<MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    title={t.conversations}
                    subtitle="Histórico de mensagens, notificações"
                    onClick={() => router.push("/configuracoes/conversas")}
                  />
                  <Separator className="dark:border-gray-700" />
                  <MenuItem
                    icon={<Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    title={t.favorites}
                    subtitle="Profissionais e serviços salvos"
                    onClick={() => router.push("/configuracoes/favoritos")}
                  />
                  <Separator className="dark:border-gray-700" />
                  <MenuItem
                    icon={<Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    title={t.history}
                    subtitle="Serviços contratados anteriormente"
                    onClick={() => router.push("/configuracoes/historico")}
                  />
                  <Separator className="dark:border-gray-700" />
                  <MenuItem
                    icon={<MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    title={t.addresses}
                    subtitle="Gerenciar endereços salvos"
                    onClick={() => router.push("/configuracoes/enderecos")}
                  />
                  <Separator className="dark:border-gray-700" />
                  <MenuItem
                    icon={<Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    title={t.security}
                    subtitle="Senha, autenticação, privacidade"
                    onClick={() => router.push("/configuracoes/seguranca")}
                  />
                  <Separator className="dark:border-gray-700" />
                  <MenuItem
                    icon={<LifeBuoy className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                    title={t.support}
                    subtitle="Ajuda, contato, FAQ"
                    onClick={() => router.push("/configuracoes/suporte")}
                  />
                </div>

                {/* Sair */}
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-red-500 dark:text-red-400"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                  <span>{t.logout}</span>
                </button>
              </>
            ) : (
              <>
                {/* Opções de Cadastro */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
                  <h2 className="text-xl font-medium mb-4 dark:text-white">{t.welcomeToBravvo}</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">{t.chooseRegistration}</p>

                  <div className="space-y-4">
                    <button
                      className="w-full flex items-center justify-center gap-3 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium"
                      onClick={() => router.push("/cadastro/cliente")}
                    >
                      <UserPlus className="h-5 w-5" />
                      <span>{t.registerAsClient}</span>
                    </button>

                    <button
                      className="w-full flex items-center justify-center gap-3 py-3 border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20"
                      onClick={() => router.push("/cadastro/profissional")}
                    >
                      <Briefcase className="h-5 w-5" />
                      <span>{t.registerAsProfessional}</span>
                    </button>
                  </div>

                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    {t.alreadyHaveAccount}{" "}
                    <button
                      className="text-purple-600 dark:text-purple-400 font-medium"
                      onClick={() => router.push("/login")}
                    >
                      {t.login}
                    </button>
                  </p>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="app" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="font-medium dark:text-white">{t.darkTheme}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.darkThemeDesc}</p>
                  </div>
                </div>
                <Switch checked={darkMode} onCheckedChange={handleDarkModeChange} />
              </div>
              <Separator className="dark:border-gray-700" />
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="font-medium dark:text-white">{t.notifications}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.notificationsDesc}</p>
                  </div>
                </div>
                <Switch checked={notifications} onCheckedChange={handleNotificationsChange} />
              </div>
              <Separator className="dark:border-gray-700" />
              <MenuItem
                icon={<Languages className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                title={t.language}
                subtitle={t.portuguese}
                onClick={() => router.push("/configuracoes/idioma")}
              />
              <Separator className="dark:border-gray-700" />
              <MenuItem
                icon={<Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
                title={t.advancedSettings}
                subtitle={t.advancedSettingsDesc}
                onClick={() => router.push("/configuracoes/avancado")}
              />
            </div>

            {/* Sobre o App */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <h3 className="font-medium mb-2 dark:text-white">{t.aboutBravvo}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t.version} 1.0.0</p>
              <div className="space-y-2">
                <button className="text-sm text-purple-600 dark:text-purple-400 block">{t.termsOfUse}</button>
                <button className="text-sm text-purple-600 dark:text-purple-400 block">{t.privacyPolicy}</button>
                <button className="text-sm text-purple-600 dark:text-purple-400 block">{t.openSourceLicenses}</button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface MenuItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  onClick: () => void
}

function MenuItem({ icon, title, subtitle, onClick }: MenuItemProps) {
  return (
    <button
      className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div className="text-left">
          <h3 className="font-medium dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
    </button>
  )
}
