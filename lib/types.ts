import type { LucideIcon } from "lucide-react"

export interface ServiceType {
  id: number
  name: string
  icon: LucideIcon
  description: string
  startingPrice: number
  keywords: string[]
}

export interface ProfessionalType {
  id: string
  name: string
  avatar: string
  rating: number
  reviewCount: number
  price: number
  serviceType: string
  serviceSubtype: string
  description: string
  availability: string[]
  location: string
  distance: number
}
