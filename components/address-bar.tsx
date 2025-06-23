"use client"

import { useState } from "react"
import { MapPin, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddressBar() {
  const [address, setAddress] = useState("Av. Paulista, 1000")
  const [newAddress, setNewAddress] = useState("")

  const handleAddressChange = () => {
    if (newAddress.trim()) {
      setAddress(newAddress)
    }
  }

  return (
    <div className="flex items-center py-2">
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center text-sm text-gray-700">
            <MapPin className="h-4 w-4 text-purple-600 mr-1" />
            <span className="truncate max-w-[200px]">{address}</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Alterar endereço</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder="Digite seu endereço"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleAddressChange}>
              Confirmar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
