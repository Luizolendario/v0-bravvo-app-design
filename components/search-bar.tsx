"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { services } from "@/lib/data"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof services>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    if (query.trim() === "") {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)

    // Simular busca
    const results = services.filter(
      (service) =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.keywords.some((keyword) => keyword.toLowerCase().includes(query.toLowerCase())),
    )

    setSearchResults(results)
  }

  return (
    <div className="relative mt-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          className="pl-10 bg-gray-100 border-none"
          placeholder="Buscar serviços..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {isSearching && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg z-10 mt-1 max-h-60 overflow-y-auto">
          {searchResults.map((service) => (
            <button
              key={service.id}
              className="flex items-center p-3 w-full hover:bg-gray-50 text-left"
              onClick={() => {
                alert(`Você selecionou o serviço: ${service.name}`)
                setSearchQuery("")
                setIsSearching(false)
              }}
            >
              <service.icon className="h-5 w-5 text-purple-600 mr-3" />
              <span className="text-sm">{service.name}</span>
            </button>
          ))}
        </div>
      )}

      {isSearching && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg z-10 mt-1 p-4 text-center">
          <p className="text-sm text-gray-500">Nenhum serviço encontrado</p>
        </div>
      )}
    </div>
  )
}
