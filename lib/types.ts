import type { LucideIcon } from "lucide-react"

export interface ServiceType {
  id: number
  name: string
  icon: LucideIcon
  description: string
  startingPrice: number
  keywords: string[]
}
