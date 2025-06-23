"use client"

import { useState } from "react"
import { MapPin, ChevronDown, Search, Navigation, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"

export default function AddressSelector() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [address, setAddress] = useState("Selecionar endereço")
  const [searchAddress, setSearchAddress] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)

  const handleManualAddress = () => {
    if (searchAddress.trim()) {
      setAddress(searchAddress)
      setIsModalOpen(false)
      setSearchAddress("")
      toast({
        title: "Endereço atualizado",
        description: `Novo endereço: ${searchAddress}`,
      })
    }
  }

  const handleLocationPermission = () => {
    setIsLoadingLocation(true)

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords

          // Simular busca de endereço por coordenadas
          setTimeout(() => {
            const mockAddress = `Rua Exemplo, ${Math.floor(Math.random() * 1000)} - São Paulo, SP`
            setAddress(mockAddress)
            setIsLoadingLocation(false)
            setIsModalOpen(false)

            toast({
              title: "Localização encontrada",
              description: `Endereço: ${mockAddress}`,
            })
          }, 2000)
        },
        (error) => {
          setIsLoadingLocation(false)
          toast({
            title: "Erro de localização",
            description: "Não foi possível obter sua localização. Verifique as permissões.",
            variant: "destructive",
          })
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        },
      )
    } else {
      setIsLoadingLocation(false)
      toast({
        title: "Geolocalização não suportada",
        description: "Seu dispositivo não suporta geolocalização.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex items-center py-2">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-1" />
            <span className="truncate max-w-[200px]">{address}</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="dark:text-white flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              Selecionar Endereço
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Manual Address Input */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium dark:text-white">Digitar endereço</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <Input
                  placeholder="Digite seu endereço completo..."
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  onKeyPress={(e) => e.key === "Enter" && handleManualAddress()}
                />
                {searchAddress && (
                  <button
                    onClick={() => setSearchAddress("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button
                onClick={handleManualAddress}
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={!searchAddress.trim()}
              >
                Confirmar Endereço
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">ou</span>
              </div>
            </div>

            {/* GPS Location */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium dark:text-white">Usar localização atual</h3>
              <Button
                onClick={handleLocationPermission}
                variant="outline"
                className="w-full dark:border-gray-600 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
                disabled={isLoadingLocation}
              >
                <Navigation className={`h-4 w-4 mr-2 ${isLoadingLocation ? "animate-spin" : ""}`} />
                {isLoadingLocation ? "Obtendo localização..." : "Usar minha localização"}
              </Button>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Permitir acesso à localização para encontrar serviços próximos
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
