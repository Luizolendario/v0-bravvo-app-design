"use client"

import { useState } from "react"
import { MapPin, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function AddressBar() {
  const { t } = useLanguage()
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
          <button className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-1" />
            <span className="truncate max-w-[200px]">{address}</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </DialogTrigger>
        <DialogContent className="dark:bg-gray-800 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="dark:text-white">{t.changeAddress}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder={t.enterAddress}
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleAddressChange}>
              {t.confirm}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
